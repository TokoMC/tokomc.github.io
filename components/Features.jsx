const features = [
  {
    title: "Survival",
    description: "تجربه بقا با امکانات حرفه‌ای و دنیای بزرگ",
    icon: "🌎",
  },
  {
    title: "PvP",
    description: "مبارزه‌های هیجان‌انگیز بین بازیکنان",
    icon: "⚔️",
  },
  {
    title: "Economy",
    description: "سیستم اقتصادی و خرید و فروش داخل سرور",
    icon: "💰",
  },
  {
    title: "Events",
    description: "رویدادهای ویژه با جایزه‌های جذاب",
    icon: "🎁",
  },
];


export default function Features() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2
          className="
          text-4xl
          font-black
          text-center
          text-white
          mb-12
          "
        >
          امکانات سرور
        </h2>


        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >

          {features.map((item, index) => (

            <div
              key={index}
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-6
              text-center
              hover:-translate-y-3
              hover:scale-105
              transition
              duration-300
              "
            >

              <div className="text-5xl mb-5">
                {item.icon}
              </div>


              <h3
                className="
                text-2xl
                font-bold
                text-white
                mb-3
                "
              >
                {item.title}
              </h3>


              <p className="text-gray-300">
                {item.description}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
