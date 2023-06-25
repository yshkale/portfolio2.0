import email from "../assets/img/email_icon.svg";
import twitter from "../assets/img/twitter_icon.svg";
import linkedin from "../assets/img/linkedin_icon.svg";

export default function Footer() {
  return (
    <>
      <section
        className="border-y border-neutral-800 bg-neutral-900 px-6 py-8 flex flex-col gap-4"
        id="footer"
      >
        <h3 className="uppercase tracking-widest font-semibold text-[0.9rem]">
          Get in Touch
        </h3>
        <p className="text-neutral-400">
          Let&apos;s team up and create awesome websites that look stunning and
          are super user-friendly. If you have any cool projects or job
          opportunities, hit me up! I&apos;m all ears and excited to connect
          with you.
        </p>

        <div className="flex items-center border-b border-neutral-800 pb-4">
          <a
            href="https://www.twitter.com/yshkale"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="email icon" className="w-8" />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/yshkale"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="email icon" className="w-8" />
          </a>{" "}
          <a href="mailto:yashnkale@gmail.com" target="_blank" rel="noreferrer">
            <img src={email} alt="email icon" className="w-8" />
          </a>{" "}
        </div>

        <div className="flex justify-center">
          <p className="text-center text-sm text-neutral-400 tracking-widest pt-2">
            &copy;2023 Yash
          </p>
        </div>
      </section>
    </>
  );
}
