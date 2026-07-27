const ranks = [
  {
    name: "VIP",
    color: "text-green-400",
    description: "امکانات بیشتر و دسترسی‌های ویژه",
  },
  {
    name: "VIP+",
    color: "text-blue-400",
    description: "سطح بالاتر با قابلیت‌های بیشتر",
  },
  {
    name: "MVP",
    color: "text-purple-400",
    description: "برای بازیکنان حرفه‌ای",
  },
  {
    name: "Admin",
    color: "text-red-400",
    description: "مدیریت بخش‌های سرور",
  },
];


export default function Ranks() {
  return (
    <section
      id="ranks"
      className="py-24 px-6"
    >

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
          رنک‌های سرور
        </h2>


        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >

          {ranks.map((rank, index) => (

            <div
              key={index}
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              text-center
              hover:scale-105
              hover:-translate-y-2
              transition
              duration-300
              "
            >

              <h3
                className={`
                text-3xl
                font-black
                mb-4
                ${rank.color}
                `}
              >
                {rank.name}
              </h3>


              <p className="text-gray-300">
                {rank.description}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
