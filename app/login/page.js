"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function LoginPage() {

  const router = useRouter();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");



  async function handleLogin(e) {

    e.preventDefault();


    setMessage("در حال ورود...");


    const { data, error } = await supabase.auth.signInWithPassword({

      email: email,

      password: password,

    });



    if (error) {

      setMessage(error.message);

      return;

    }



    setMessage("ورود موفق بود");


    router.push("/profile");


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

        onSubmit={handleLogin}

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

          ورود به TokoMC

        </h1>



        <div className="space-y-5">



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

            ورود

          </button>



          <p className="text-green-400 text-center">

            {message}

          </p>



        </div>



      </form>



    </main>

  );

}
