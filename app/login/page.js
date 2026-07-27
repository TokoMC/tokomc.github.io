export default function LoginPage() {
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
            className="
            w-full
            px-5
            py-3
            rounded-xl
            bg-black/30
            border
            border-white/10
            text-white
            outline-none
            focus:border-green-400
            "
          />


          <input
            type="password"
            placeholder="رمز عبور"
            className="
            w-full
            px-5
            py-3
            rounded-xl
            bg-black/30
            border
            border-white/10
            text-white
            outline-none
            focus:border-green-400
            "
          />


          <button
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

        </div>


      </div>

    </main>
  );
}
