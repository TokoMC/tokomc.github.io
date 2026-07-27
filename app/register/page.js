"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { createProfile } from "@/lib/profile";


export default function RegisterPage() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");


  async function handleRegister(e) {

    e.preventDefault();

    setMessage("در حال ساخت حساب...");


    // ساخت حساب در Supabase Auth

    const { data, error } = await supabase.auth.signUp({

      email: email,

      password: password,

    });


    if (error) {

      setMessage(error.message);

      return;

    }


    // ساخت پروفایل کاربر

    await createProfile(

      data.user.id,

      username

    );


    setMessage(
      "حساب ساخته شد. لطفاً ایمیل خود را تایید کنید."
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


      <form
        onSubmit={handleRegister}
        className="
        w-full
        max-w-md
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-8
        "
      >


        <h1
          className="
          text-3xl
          font-black
          text-white
          text-center
          mb-8
          "
        >
          ساخت حساب TokoMC
        </h1>



        <div className="space-y-5">


          <input

            type="text"

            placeholder="نام کاربری"

            value={username}

            onChange={(e)=>setUsername(e.target.value)}

            className="
            w-full
            px-5
            py-3
            rounded-xl
            bg-black/30
            text-white
            border
            border-white/10
            "

          />



          <input

            type="email"

            placeholder="ایمیل"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

            className="
            w-full
            px-5
            py-3
            rounded-xl
            bg-black/30
            text-white
            border
            border-white/10
            "

          />



          <input

            type="password"

            placeholder="رمز عبور"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

            className="
            w-full
            px-5
            py-3
            rounded-xl
            bg-black/30
            text-white
            border
            border-white/10
            "

          />



          <button

            type="submit"

            className="
            w-full
            py-3
            rounded-xl
            bg-green-500
            text-black
            font-bold
            hover:scale-105
            transition
            "

          >

            ثبت نام

          </button>



          <p className="text-green-400 text-center">

            {message}

          </p>



        </div>



      </form>



    </main>

  );

}
