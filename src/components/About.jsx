/*
 * @copyright 2024 Denzel Navarro
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project Done",
    number: 20,
  },
  {
    label: "Years of Experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
            Hi! I&apos;m Denzel, an aspiring software engineer with a passion
            for creating visually appealing and functional websites. I blend
            creativity with technical skills to bring ideas to life. Right now,
            I am working on myself to become a full-stack developer. Hoping that
            in the future, I will expand my knowledge and try out new
            technologies like AI.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/images/about-logo.png"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;