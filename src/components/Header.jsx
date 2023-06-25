// import gripLines from "../assets/icons/grip-lines.svg";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-6 border-b border-neutral-800">
        <h1 className="uppercase text-xs tracking-[0.3em] font-bold text-neutral-400">
          YashKale
        </h1>

        {/* <img src={gripLines} className="w-6 invert" alt="menu-icon" /> */}
      </div>
    </>
  );
}
