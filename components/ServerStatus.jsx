"use client";

export default function ServerStatus() {
  return (
    <section
      className="
      py-24
      px-6
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        "
      >
        <h2
          className="
          text-4xl
          font-black
          text-center
          text-white
          mb-14
          "
        >
          وضعیت سرور
        </h2>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >

          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            text-center
            transition-all
            duration-300
            hover:scale-105
            "
          >

            <div className="text-5xl mb-5">
              🟢
            </div>

            <h3
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              آنلاین
            </h3>

            <p className="text-zinc-400 mt-3">
              Server is Online
            </p>

          </div>



          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            text-center
            transition-all
            duration-300
            hover:scale-105
            "
          >

            <div className="text-5xl mb-5">
              👥
            </div>

            <h3
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              0
            </h3>

            <p className="text-zinc-400 mt-3">
              بازیکن آنلاین
            </p>

          </div>



          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            text-center
            transition-all
            duration-300
            hover:scale-105
            "
          >

            <div className="text-5xl mb-5">
              🌍
            </div>

            <h3
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              play.tokomc.ir
            </h3>

            <p className="text-zinc-400 mt-3">
              آدرس سرور
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
