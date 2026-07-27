"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function UsersManagement() {


  const [users, setUsers] = useState([]);



  useEffect(() => {

    getUsers();

  }, []);




  async function getUsers(){


    const { data, error } = await supabase

      .from("profiles")

      .select("*")

      .order("created_at", {
        ascending:false
      });



    if(!error){

      setUsers(data);

    }


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
          users.map((user)=> (

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



                <p
                  className="
                  text-green-400
                  "
                >
                  {user.rank}
                </p>


              </div>



              <button

                className="
                bg-green-500
                text-black
                px-5
                py-2
                rounded-xl
                font-bold
                hover:scale-105
                transition
                "

              >

                تغییر رنک

              </button>


            </div>


          ))
        }


      </div>


    </main>

  );

}
