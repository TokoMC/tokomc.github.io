"use client";

export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "سرعت بالا",
      description:
        "سرور با سخت‌افزار قدرتمند و کمترین میزان لگ."
    },
    {
      icon: "🛡️",
      title: "امنیت",
      description:
        "سیستم‌های ضد چیت و محافظت کامل از بازیکنان."
    },
    {
      icon: "🎁",
      title: "رویدادهای هفتگی",
      description:
        "هر هفته ایونت‌های جذاب همراه با جوایز ویژه."
    },
    {
      icon: "👥",
      title: "جامعه فعال",
      description:
        "بازیکنان فعال و تیم مدیریتی پاسخگو."
    },
    {
      icon: "🏆",
      title: "رنک‌های اختصاصی",
      description:
        "رنک‌های VIP، LEGEND، MVP و امکانات ویژه."
    },
    {
      icon: "❤️",
      title: "پشتیبانی",
      description:
        "پشتیبانی سریع از طریق دیسکورد و پنل سایت."
    }
  ];

  return (
    <section
      className="
      py-28
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
          text-5xl
          font-black
          text-center
          text-white
          mb-16
          "
        >
          امکانات سرور
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="
              group
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              transition-all
              duration-300
              hover:scale-105
              hover:border-green-500
              hover:shadow-[0_0_40px_rgba(34,197,94,.25)]
              "
            >
              <div
                className="
                text-6xl
                mb-6
                transition-transform
                duration-300
                group-hover:scale-110
                "
              >
                {feature.icon}
              </div>

              <h3
                className="
                text-2xl
                font-bold
                text-white
                mb-4
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                text-zinc-400
                leading-7
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
