import Dior from "../assets/img/dior_screenshot.webp";
import SkyCast from "../assets/img/skycast_screenshot.webp";
import Cineflix from "../assets/img/cineflix_screenshot.webp";
import NorthEastArrow from "../assets/icons/arrow-up-right.svg";

export default function Projects() {
  return (
    <>
      <div className="px-6 flex flex-col gap-12 mb-20">
        <h3 className="uppercase tracking-widest font-semibold text-[0.9rem] lg:text-xl">
          Some things I&apos;ve built
        </h3>

        <main className="px-2 flex flex-col gap-14 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className="bg-neutral-900 rounded-lg flex items-center justify-center mb-2 h-56">
              <img
                className="rounded-md w-5/6 h-40"
                src={Dior}
                alt="dior project screenshot"
              />
            </div>

            <h4>Dior (e-commerce)</h4>
            <p className="text-neutral-400 text-sm mb-2">
              Transforming online shopping through an innovative e-commerce
              platform, offering a diverse range of products and a seamless user
              experience.
            </p>

            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/yshkale/dior-ecommerce"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 text-sm rounded-lg border border-neutral-500 px-4 py-1"
              >
                Github
              </a>
              <a
                href="https://diorbyyash.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-[#06c] flex items-center text-sm border-b border-[#06c]"
              >
                Deployed{" "}
                <img src={NorthEastArrow} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className="bg-neutral-900 rounded-lg flex items-center justify-center mb-2 h-56">
              <img
                className="rounded-md w-5/6 h-40"
                src={SkyCast}
                alt="skycast project screenshot"
              />
            </div>

            <h4>Sky cast</h4>
            <p className="text-neutral-400 text-sm mb-2">
              A weather app utilizing APIs to display real-time weather data
              based on the users location or a specified location, providing
              detailed information and air pollution details.
            </p>

            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/yshkale/skycast"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 text-sm rounded-lg border border-neutral-500 px-4 py-1"
              >
                Github
              </a>
              <a
                href="https://skycastbyyash.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="text-[#06c] flex items-center text-sm border-b border-[#06c]"
              >
                Deployed{" "}
                <img src={NorthEastArrow} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className="bg-neutral-900 rounded-lg flex items-center justify-center mb-2 h-56">
              <img
                className="rounded-md w-5/6 h-40"
                src={Cineflix}
                alt="cineflix project screenshot"
              />
            </div>

            <h4>Cineflix</h4>
            <p className="text-neutral-400 text-sm mb-2">
              A movie search web app built using OMDb API and JavaScript with a
              clean and modern looking UI. View poster images, awards and much
              more.
            </p>

            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/yshkale/cineflix"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 text-sm rounded-lg border border-neutral-500 px-4 py-1"
              >
                Github
              </a>
              <a
                href="https://cineflixbyyash.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="text-[#06c] flex items-center text-sm border-b border-[#06c]"
              >
                Deployed{" "}
                <img src={NorthEastArrow} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>
        </main>

        <a
          href="https://github.com/yshkale"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center text-sm tracking-widest border border-neutral-500 rounded-full py-2 bg-neutral-900"
        >
          More on Github{" "}
          <img
            src={NorthEastArrow}
            alt="north east arrow icon"
            className="w-7"
          />
        </a>
      </div>
    </>
  );
}
