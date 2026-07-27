"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function ProfilePage() {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    getProfile();

  }, []);



  async function getProfile() {


    const {
      data: {
        user
      }

    } = await supabase.auth.getUser();



    if (!user) {

      setLoading(false);

      return;

    }



    const { data, error } = await supabase

      .from("profiles")

      .select("*")

      .eq("id", user.id)

      .single();



    if (!error) {

      setProfile(data);

    }



    setLoading(false);

  }



  if (loading) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <p className="text-white">
          در حال بارگذاری...
        </p>

      </main>

    );

  }



  if (!profile) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <p className="text-white">
          پروفایل پیدا نشد
        </p>

      </main>

    );

  }



  return (

    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      "
    >


      <div

        className="
        max-w-md
        w-full
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-8
        text-center
        "

      >


        <div

          className="
          w-24
          h-24
          mx-auto
          rounded-full
          bg-green-500/20
          flex
          items-center
          justify-center
          text-4xl
          "

        >

          👤

        </div>



        <h1

          className="
          text-3xl
          font-black
          text-white
          mt-5
          "

        >

          {profile.username}

        </h1>



        <p className="text-green-400 mt-3 text-xl font-bold">

          {profile.rank}

        </p>



        <div className="mt-8 space-y-3 text-gray-300">


          <p>

            Admin:
            {" "}
            {profile.admin_bool ? "Yes" : "No"}

          </p>



          <p>

            Owner:
            {" "}
            {profile.owner_bool ? "Yes" : "No"}

          </p>



          <p>

            عضویت:
            {" "}
            {new Date(profile.created_at).toLocaleDateString()}

          </p>


        </div>



      </div>


    </main>

  );

}
