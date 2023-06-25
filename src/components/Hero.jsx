import { Link } from "react-scroll";

export default function Hero() {
  return (
    <>
      <div className="px-6 mt-16 mb-20 flex flex-col gap-4 lg:gap-8 lg:pr-44 lg:my-24">
        <h2 className="text-[2rem] font-[700] leading-10 lg:text-5xl ">
          Hey, I&apos;m Yash &mdash; <br></br> I design with code to fuel pixels
          with creativity.
        </h2>

        <p className="text-neutral-400 lg:text-xl">
          Unlocking the full potential of{" "}
          <span className="text-neutral-50">frontend</span> development, I
          leverage <span className="text-neutral-50">react</span> and{" "}
          <span className="text-neutral-50">javascript</span> to create{" "}
          <span className="text-neutral-50">dynamic</span>, responsive websites
          that push boundaries and{" "}
          <span className="text-neutral-50">deliver</span> immersive{" "}
          <span className="text-neutral-50">user experiences</span>.
        </p>

        <div className="flex gap-2 items-center mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06c]"></span>
          </span>
          <p className="text-neutral-400 text-base">
            Actively looking for new opportunities
          </p>
        </div>

        <Link to="footer" smooth={true} duration={600}>
          <button className="w-full rounded-full bg-[#06c] py-2 lg:w-40 hover:bg-black hover:border hover:border-[#06c] transition-all duration-300">
            Let&apos;s connect
          </button>
        </Link>
      </div>
    </>
  );
}
