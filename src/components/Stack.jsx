import React from "../assets/img/react_icon.svg";
import Javascript from "../assets/img/javascript_icon.svg";
import Tailwind from "../assets/img/tailwind_icon.svg";
import Github from "../assets/img/github_icon.svg";
import Photoshop from "../assets/img/photoshop_icon.svg";
import Figma from "../assets/img/figma_icon.svg";

export default function Stack() {
  return (
    <>
      <main className="px-6 mb-20">
        <h3 className="uppercase tracking-widest font-semibold text-[0.9rem] mb-8 lg:text-xl">
          My Tech Stack
        </h3>

        <div className="grid grid-cols-2 gap-4 ">
          <div className="bg-neutral-900 flex flex-col items-center justify-center rounded-lg pb-4">
            <img src={React} alt="react icon" className="w-16 my-6 h-14" />
            <h4 className="mb-2 tracking-wider">React</h4>
            <p className="text-neutral-600 border border-neutral-600 px-6 py-2 rounded-full text-sm">
              Build
            </p>
          </div>

          <div className="bg-neutral-900 flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Javascript}
              alt="javascript icon"
              className="w-16 my-6 rounded-lg h-14"
            />
            <h4 className="mb-2 tracking-wider">Javascript</h4>
            <p className="text-neutral-600 border border-neutral-600 px-6 py-2 rounded-full text-sm">
              Code
            </p>
          </div>

          <div className="bg-neutral-900 flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Github}
              alt="github icon"
              className="w-16 my-6 rounded-lg invert h-14"
            />
            <h4 className="mb-2 tracking-wider">Github</h4>
            <p className="text-neutral-600 border border-neutral-600 px-6 py-2 rounded-full text-sm">
              Ver. control
            </p>
          </div>

          <div className="bg-neutral-900 flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Tailwind}
              alt="tailwind css icon"
              className="w-16 my-6 rounded-lg h-14"
            />
            <h4 className="mb-2 tracking-wider">Tailwind</h4>
            <p className="text-neutral-600 border border-neutral-600 px-6 py-2 rounded-full text-sm">
              Style
            </p>
          </div>

          <div className="bg-neutral-900 flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Figma}
              alt="figma icon"
              className="w-16 my-6 rounded-lg h-14"
            />
            <h4 className="mb-2 tracking-wider">Figma</h4>
            <p className="text-neutral-600 border border-neutral-600 px-6 py-2 rounded-full text-sm">
              Design
            </p>
          </div>

          <div className="bg-neutral-900 flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Photoshop}
              alt="adobe photoshop icon"
              className="w-16 my-6 rounded-lg h-14"
            />
            <h4 className="mb-2 tracking-wider">Photoshop</h4>
            <p className="text-neutral-600 border border-neutral-600 px-6 py-2 rounded-full text-sm">
              Graphics
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
