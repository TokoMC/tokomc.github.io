export default function ServerStatus() {
  return (
    <section
      id="status"
      className="
      py-24
      px-6
      bg-black/20
      backdrop-blur
      "
    >

      <div className="max-w-5xl mx-auto">

        <h2
          className="
          text-4xl
          font-black
          text-center
          text-white
          mb-12
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
            rounded-2xl
            p-6
            text-center
            hover:scale-105
            transition
            "
          >
            <h3 className="text-gray-400 mb-3">
              وضعیت
            </h3>

            <p className="text-green-400 text-2xl font-bold">
              آنلاین
            </p>
          </div>


          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-2xl
            p-6
            text-center
            hover:scale-105
            transition
            "
          >
            <h3 className="text-gray-400 mb-3">
              بازیکنان
            </h3>

            <p className="text-white text-2xl font-bold">
              0 / 100
            </p>
          </div>


          <div
            className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-2xl
            p-6
            text-center
            hover:scale-105
            transition
            "
          >
            <h3 className="text-gray-400 mb-3">
              نسخه
            </h3>

            <p className="text-white text-2xl font-bold">
              1.20+
            </p>
          </div>


        </div>

      </div>

    </section>
  );
}
