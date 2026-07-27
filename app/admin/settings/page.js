"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function SettingsPage(){


  const [profile,setProfile] = useState(null);

  const [settings,setSettings] = useState(null);


  useEffect(()=>{

    loadSettings();

  },[]);



  async function loadSettings(){


    const {
      data:{
        user
      }
    } = await supabase.auth.getUser();



    if(!user){
      return;
    }



    const {data:admin}=await supabase

    .from("profiles")

    .select("*")

    .eq("id",user.id)

    .single();



    setProfile(admin);



    const {data}=await supabase

    .from("site_settings")

    .select("*")

    .single();



    setSettings(data);


  }





  async function saveSettings(){


    await supabase

    .from("site_settings")

    .update(settings)

    .eq(
      "id",
      settings.id
    );


    alert("تنظیمات ذخیره شد");


  }





  if(!profile || profile.rank !== "MAIN_OWNER"){


    return (

      <main className="min-h-screen flex items-center justify-center">

        <p className="text-white">
          فقط Main Owner دسترسی دارد
        </p>

      </main>

    );

  }





  if(!settings){

    return (

      <p className="text-white p-10">
        در حال بارگذاری...
      </p>

    );

  }





  return (

    <main className="min-h-screen p-8">


      <h1 className="
      text-4xl
      font-black
      text-white
      mb-10
      ">
        تنظیمات سایت
      </h1>



      <div className="
      max-w-xl
      space-y-5
      ">


        <input

        value={settings.site_name}

        onChange={(e)=>setSettings({
          ...settings,
          site_name:e.target.value
        })}

        placeholder="نام سایت"

        className="
        w-full
        p-4
        rounded-xl
        bg-black/30
        text-white
        "

        />



        <input

        value={settings.primary_color}

        onChange={(e)=>setSettings({
          ...settings,
          primary_color:e.target.value
        })}

        placeholder="رنگ اصلی"

        className="
        w-full
        p-4
        rounded-xl
        bg-black/30
        text-white
        "

        />



        <textarea

        value={settings.hero_title}

        onChange={(e)=>setSettings({
          ...settings,
          hero_title:e.target.value
        })}

        placeholder="متن اصلی صفحه"

        className="
        w-full
        p-4
        rounded-xl
        bg-black/30
        text-white
        "

        />



        <button

        onClick={saveSettings}

        className="
        w-full
        bg-green-500
        text-black
        py-3
        rounded-xl
        font-bold
        "

        >

        ذخیره تغییرات

        </button>


      </div>


    </main>

  );

}
