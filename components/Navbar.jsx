"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/30
      border-b
      border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        h-20
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          {/* بعداً لوگوی PNG اینجا قرار می‌گیرد */}

          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-green-500
            "
          />

          <h1
            className="
            text-2xl
            font-black
            text-white
            "
          >
            TokoMC
          </h1>
        </div>

        {/* Menu */}

        <nav
          className="
          hidden
          md:flex
          gap-8
          text-white
          "
        >
          <Link href="/">خانه</Link>

          <Link href="/rules">قوانین</Link>

          <Link href="/ranks">رنک‌ها</Link>

          <Link href="/profile">پروفایل</Link>
        </nav>

        {/* Buttons */}

        <div
          className="
          flex
          gap-3
          "
        >
          <Link
            href="/login"
            className="
            px-5
            py-2
            rounded-xl
            bg-white/10
            hover:bg-white/20
            transition
            "
          >
            ورود
          </Link>

          <Link
            href="/register"
            className="
            px-5
            py-2
            rounded-xl
            bg-green-500
            text-black
            font-bold
            hover:scale-105
            transition
            "
          >
            ثبت نام
          </Link>
        </div>
      </div>
    </header>
  );
}
