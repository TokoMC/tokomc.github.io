"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      overflow-hidden
      "
    >
      {/* Background */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-zinc-900
        via-black
        to-zinc-950
        "
      />

      {/* بعداً عکس PNG بک‌گراند اینجا قرار می‌گیرد */}

      <div
        className="
        absolute
        inset-0
        bg-black/40
        backdrop-blur-sm
        "
      />

      {/* Content */}

      <div
        className="
        relative
        z-10
        text-center
        max-w-4xl
        "
      >
        {/* لوگوی PNG بعداً اینجا قرار می‌گیرد */}

        <div
          className="
          w-36
          h-36
          mx-auto
          rounded-full
          bg-green-500/20
          border
          border-green-500/30
          mb-8
          "
        />

        <h1
          className="
          text-6xl
          md:text-8xl
          font-black
          text-white
          "
        >
          TokoMC
        </h1>

        <p
          className="
          mt-8
          text-xl
          text-zinc-300
          leading-8
          "
        >
          بهترین سرور ماینکرفت با امکانات حرفه‌ای،
          جامعه فعال و تجربه‌ای متفاوت.
        </p>

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-5
          mt-12
          "
        >
          <Link
            href="/register"
            className="
            px-8
            py-4
            rounded-2xl
            bg-green-500
            text-black
            font-bold
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-2xl
            "
          >
            شروع بازی
          </Link>

          <Link
            href="/status"
            className="
            px-8
            py-4
            rounded-2xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            text-white
            transition-all
            duration-300
            hover:scale-110
            "
          >
            وضعیت سرور
          </Link>
        </div>
      </div>
    </section>
  );
}
