export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <span className="text-green-400 font-bold">
              T
            </span>
          </div>

          <h1 className="text-xl font-bold text-white">
            TokoMC
          </h1>
        </div>


        <div className="hidden md:flex items-center gap-6 text-gray-300">

          <a
            href="#status"
            className="hover:text-green-400 transition"
          >
            وضعیت سرور
          </a>

          <a
            href="#ranks"
            className="hover:text-green-400 transition"
          >
            رنک‌ها
          </a>

          <a
            href="#rules"
            className="hover:text-green-400 transition"
          >
            قوانین
          </a>

          <a
            href="/login"
            className="
            px-5 py-2
            rounded-xl
            bg-green-500
            text-black
            font-bold
            hover:scale-105
            transition
            shadow-lg
            shadow-green-500/30
            "
          >
            ورود
          </a>

        </div>

      </div>
    </nav>
  );
}
