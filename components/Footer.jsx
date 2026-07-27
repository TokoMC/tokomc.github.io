export default function Footer() {
  return (
    <footer
      className="
      py-10
      px-6
      border-t
      border-white/10
      bg-black/30
      "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        text-center
        "
      >

        <h2
          className="
          text-2xl
          font-black
          text-white
          mb-3
          "
        >
          TokoMC
        </h2>


        <p className="text-gray-400">
          Minecraft Network
        </p>


        <div
          className="
          flex
          justify-center
          gap-6
          mt-6
          text-gray-300
          "
        >

          <a
            href="#"
            className="hover:text-green-400 transition"
          >
            Discord
          </a>


          <a
            href="#"
            className="hover:text-green-400 transition"
          >
            قوانین
          </a>


          <a
            href="/login"
            className="hover:text-green-400 transition"
          >
            ورود
          </a>

        </div>


        <p
          className="
          text-gray-500
          text-sm
          mt-8
          "
        >
          © TokoMC All Rights Reserved
        </p>


      </div>

    </footer>
  );
}
