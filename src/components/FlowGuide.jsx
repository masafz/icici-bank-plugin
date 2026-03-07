import { useState } from "react";
import { flowData } from "../utils/constant";
import { useParams, useNavigate } from "react-router-dom";

export default function FlowGuide() {
  const [step, setStep] = useState(0);

  const navigate = useNavigate();

  const { flowId } = useParams();

  const slides = flowData[flowId] || [];

  const nextStep = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else navigate(-1);
  };

  const currentSlide = slides[step];

  const getPosition = () => {
    const width = window.innerWidth;

    if (width >= 1920 && currentSlide.position.screen1920) {
      return currentSlide.position.screen1920;
    }

    if (width >= 1440 && currentSlide.position.screen1440) {
      return currentSlide.position.screen1440;
    }

    return currentSlide.position.default;
  };

  const position = getPosition();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain transition-all duration-500"
        style={{ backgroundImage: `url(${currentSlide.image})` }}
      />

      <div
        className="absolute max-w-sm"
        style={{
          top: position.top,
          left: position.left,
          transform: "translate(-50%, -50%)",
        }}
      >
        {currentSlide.arrow === "top" && (
          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-[#DB620A]" />
          </div>
        )}

        {currentSlide.arrow === "bottom" && (
          <div className="absolute -bottom-3 left-1/2 -translate-y-1/2 -translate-x-full">
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-[#DB620A]" />
          </div>
        )}

        {currentSlide.arrow === "left" && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-[#DB620A]" />
          </div>
        )}

        {currentSlide.arrow === "right" && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-[#DB620A]" />
          </div>
        )}

        <div className="border border-[#DB620A] rounded-md shadow-lg p-3 md:p-4 bg-[linear-gradient(180deg,rgba(251,239,230,0.5)_-12.35%,rgba(219,98,10,0.13)_88.24%)] bg-white">
          <h2 className="text-xs md:text-[17px] font-semibold mb-2">
            {currentSlide.title}
          </h2>

          <ul className="text-[11px] md:text-[14px] font-medium space-y-1 text-gray-800 list-decimal pl-3">
            {currentSlide.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <p className="text-[14px]">{currentSlide.note}</p>

          <div className="flex justify-end mt-3">
            <button
              onClick={nextStep}
              className="bg-[#DB620A] hover:bg-[#DB620ACC] text-white text-[15px] font-medium px-2.5 py-1 rounded transition cursor-pointer"
            >
              {step === slides.length - 1 ? "Finish" : <>Next &gt;&gt;</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
