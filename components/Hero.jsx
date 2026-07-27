import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.png"
          alt="TokoMC Background"
          fill
          priority
          className="object-cover blur-sm scale-105"
        />

        <div className="absolute inset-0 bg-black/60" />
      </div>


      {/* Content */}
      <div className="text-center px-6">

        {/* Logo */}
        <div className="flex justify-center mb-8 animate-pulse">
          <Image
            src="/logo.png"
            alt="TokoMC Logo"
            width={180}
            height={180}
            className="
            hover:scale-110
            transition duration-500
            drop-shadow-[0_0_25px_rgba(34,197,94,0.5)]
            "
          />
        </div>


        {/* Title */}
        <h1
          className="
          text-5xl md:text-7xl
          font-black
          text-white
          mb-5
          tracking-wide
          "
        >
          TokoMC
        </h1>


        {/* Description */}
        <p
          className="
          text-gray-300
          text-lg
          md:text-xl
          max-w-2xl
          mx-auto
          mb-10
          "
        >
          بهترین تجربه ماینکرفت فارسی با امکانات حرفه‌ای و جامعه‌ای بزرگ
        </p>


        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">

          <button
            className="
            px-8 py-4
            rounded-2xl
            bg-green-500
            text-black
            font-bold
            hover:scale-110
            transition
            shadow-xl
            shadow-green-500/30
            "
          >
            ورود به سرور
          </button>


          <button
            className="
            px-8 py-4
            rounded-2xl
            bg-white/10
            backdrop-blur
            border border-white/20
            text-white
            font-bold
            hover:scale-110
            transition
            "
          >
            دیسکورد
          </button>

        </div>

      </div>

    </section>
  );
}
