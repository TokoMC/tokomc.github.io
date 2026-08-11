"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function AdminPage() {

  const [userProfile, setUserProfile] = useState(null);


  useEffect(() => {

    checkUser();

  }, []);



  async function checkUser() {


    const {
      data:{
        user
      }
    } = await supabase.auth.getUser();



    if(!user){
      return;
    }



    const {data} = await supabase

    .from("profiles")

    .select("*")

    .eq("id", user.id)

    .single();



    setUserProfile(data);


  }




  if(!userProfile){

    return (

      <main className="min-h-screen flex items-center justify-center">

        <p className="text-white">
          دسترسی ندارید
        </p>

      </main>

    );

  }



  if(
    userProfile.rank !== "MAIN_OWNER" &&
    userProfile.rank !== "OWNER" &&
    userProfile.rank !== "ADMIN"
  ){

    return (

      <main className="min-h-screen flex items-center justify-center">

        <p className="text-white">
          شما اجازه ورود به پنل را ندارید
        </p>

      </main>

    );

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
        پنل مدیریت Tokiba
      </h1>



      <div
        className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        "
      >


        <PanelCard title="مدیریت کاربران"/>

        <PanelCard title="مدیریت رنک‌ها"/>

        <PanelCard title="تنظیمات سایت"/>

        <PanelCard title="مدیریت محتوا"/>

        <PanelCard title="بکاپ تغییرات"/>


      </div>


    </main>

  );

}



function PanelCard({title}){

  return (

    <div
      className="
      bg-white/10
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-8
      text-white
      hover:scale-105
      transition
      "
    >

      <h2 className="text-2xl font-bold">
        {title}
      </h2>


      <p className="text-gray-400 mt-3">
        مدیریت این بخش
      </p>


    </div>

  );

}
