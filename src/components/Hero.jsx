/*
 * @copyright 2024 Denzel Navarro
 * @license Apache-2.0
 */

// Components
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/src/images/avatar-1.png"
                width={40}
                height={40}
                alt="Denzel Navarro Portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5">
            Denzel Navarro
          </h2>
          <p className="subheadline-1 max-w-[25ch] sm:max-w-[30ch] lg:max-w-[25ch] text-zinc-400 text-xl lg:text-2xl mb-8 lg:mb-10">
            Aspiring Software Engineer
          </p>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="/DenzelNavarro_Resume.pdf"
              target="_blank"
              label="Download CV"
              icon="download"
              download
            />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto rounded-[60px] overflow-hidden">
            <img
              src="/src/images/hero-banner.png"
              width={656}
              height={800}
              alt="Denzel Navarro"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;