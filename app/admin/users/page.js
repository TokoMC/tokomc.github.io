"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


const ranks = [
  "PLAYER",
  "VIP",
  "VIP+",
  "LEGEND",
  "MVP",
  "HELPER",
  "MODERATOR",
  "ADMIN",
  "OWNER",
  "MAIN_OWNER"
];


export default function UsersManagement() {


  const [users, setUsers] = useState([]);

  const [adminProfile, setAdminProfile] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);

  const [selectedRank, setSelectedRank] = useState("");



  useEffect(() => {

    loadData();

  }, []);




  async function loadData(){


    const {
      data:{
        user
      }
    } = await supabase.auth.getUser();



    if(user){

      const {data:admin} = await supabase

      .from("profiles")

      .select("*")

      .eq("id",user.id)

      .single();



      setAdminProfile(admin);

    }




    const {data} = await supabase

    .from("profiles")

    .select("*")

    .order("created_at",{
      ascending:false
    });



    setUsers(data || []);


  }




  function canChangeRank(target){


    if(!adminProfile){
      return false;
    }



    if(adminProfile.rank === "MAIN_OWNER"){

      return true;

    }



    if(
      adminProfile.rank === "OWNER" &&
      target.rank !== "MAIN_OWNER"
    ){

      return true;

    }



    return false;

  }





  async function changeRank(){


    if(!selectedUser){
      return;
    }



    const allowed = canChangeRank(selectedUser);



    if(!allowed){

      alert("اجازه تغییر این رنک را ندارید");

      return;

    }



    await supabase

    .from("profiles")

    .update({

      rank:selectedRank

    })

    .eq(
      "id",
      selectedUser.id
    );



    setSelectedUser(null);

    loadData();


  }





  return (

    <main
      className="
      min-h-screen
      p-8
      "
    >


      <h1
        className="
        text-4xl
        font-black
        text-white
        mb-10
        "
      >
        مدیریت کاربران
      </h1>



      <div className="space-y-5">


        {
          users.map((user)=>(

            <div
              key={user.id}
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-2xl
              p-6
              flex
              justify-between
              items-center
              "
            >


              <div>

                <h2
                  className="
                  text-white
                  text-xl
                  font-bold
                  "
                >

                  {user.username}

                </h2>


                <p className="text-green-400">

                  {user.rank}

                </p>


              </div>




              <button

                onClick={()=>{

                  setSelectedUser(user);

                  setSelectedRank(user.rank);

                }}

                className="
                bg-green-500
                text-black
                px-5
                py-2
                rounded-xl
                font-bold
                "

              >

                تغییر رنک

              </button>


            </div>

          ))
        }


      </div>





      {
        selectedUser && (

          <div
            className="
            fixed
            inset-0
            bg-black/60
            flex
            items-center
            justify-center
            "
          >


            <div
              className="
              bg-zinc-900
              rounded-3xl
              p-8
              w-full
              max-w-md
              "
            >


              <h2
                className="
                text-white
                text-2xl
                font-bold
                mb-5
                "
              >

                تغییر رنک {selectedUser.username}

              </h2>



              <select

                value={selectedRank}

                onChange={(e)=>setSelectedRank(e.target.value)}

                className="
                w-full
                p-3
                rounded-xl
                bg-black
                text-white
                mb-5
                "

              >

                {
                  ranks.map(rank=>(

                    <option key={rank}>
                      {rank}
                    </option>

                  ))
                }


              </select>



              <button

                onClick={changeRank}

                className="
                w-full
                bg-green-500
                text-black
                py-3
                rounded-xl
                font-bold
                "

              >

                ذخیره

              </button>


            </div>


          </div>

        )
      }


    </main>

  );

}
