export default function Rules() {
  const rules = [
    "احترام به بازیکنان و تیم مدیریت الزامی است.",
    "استفاده از هک و برنامه‌های غیرمجاز ممنوع است.",
    "تبلیغات بدون اجازه ممنوع است.",
    "از باگ‌های سرور سوءاستفاده نکنید.",
  ];

  return (
    <section
      id="rules"
      className="py-24 px-6"
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
          قوانین سرور
        </h2>


        <div
          className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          "
        >

          <ul className="space-y-5">

            {rules.map((rule, index) => (
              <li
                key={index}
                className="
                flex
                items-center
                gap-3
                text-gray-300
                "
              >
                <span className="text-green-400">
                  ✓
                </span>

                {rule}

              </li>
            ))}

          </ul>

        </div>

      </div>

    </section>
  );
}
