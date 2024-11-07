import { RiRobot3Fill } from "react-icons/ri";
import TemplatePointers from "./components/TemplatePointers";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h1 className="text-3xl text-center font-bold ">
            <div className="flex-row flex justify-center items-center gap-3">
              <div className="bg-[#5D17EB] p-2 rounded-xl text-white">
                <RiRobot3Fill />
              </div>
              <span>AVA 0.1 – AI Agent.</span>
            </div>
          </h1>

          <div className="text-center mt-12">
            <img
              src="./intro.png"
              alt="Dashwind Admin Template"
              className="w-48 inline-block"
            ></img>
          </div>

          {/* Importing pointers component */}
          <TemplatePointers />
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;