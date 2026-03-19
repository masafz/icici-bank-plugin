import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { flowData } from "../utils/constant";

export default function FlowGuide() {
  const [step, setStep] = useState(0);
  const [fitMode, setFitMode] = useState("width");
  const imgRef = useRef(null);

  const navigate = useNavigate();
  const { flowId } = useParams(); 

  const slides = flowData[flowId] || [];
  if (!slides.length) return null;

  const currentSlide = slides?.[step];

  const nextStep = () => {
    if (step < slides.length - 1) setStep(step + 1);
    else navigate(-1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  useEffect(() => {
    const nextImage = slides[step + 1]?.image;
    if (!nextImage) return;
    const img = new Image();
    img.src = nextImage;
  }, [step, slides]);

  const handleImageLoad = () => {
    const img = imgRef.current;
    if (!img) return;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const screenRatio = window.innerWidth / window.innerHeight;

    if (imgRatio > screenRatio) {
      setFitMode("width");
    } else {
      setFitMode("height");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleImageLoad);
    return () => window.removeEventListener("resize", handleImageLoad);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "Enter") {
        nextStep();
      }
      if (e.key === "ArrowLeft" || e.key === "Backspace") {
        prevStep();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [step]);

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative">
        <img
          ref={imgRef}
          src={currentSlide.image}
          alt=""
          onLoad={handleImageLoad}
          className={
            fitMode === "width"
              ? "w-screen h-auto object-contain"
              : "h-screen w-auto object-contain"
          }
        />
        <div className="absolute inset-0">
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              top: currentSlide.position.top,
              left: currentSlide.position.left,
              width: currentSlide.position.width,
            }}
          >
            {currentSlide.arrow === "top" && (
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-[#DB620A]" />
              </div>
            )}
            {currentSlide.arrow === "bottom" && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
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
            <div className="border border-[#DB620A] rounded-md shadow-lg p-4 bg-[linear-gradient(180deg,rgba(251,239,230,0.5)_-12.35%,rgba(219,98,10,0.13)_88.24%)] bg-white">
              <h2 className="text-sm md:text-[17px] font-semibold mb-2">
                {currentSlide.title}
              </h2>
              {currentSlide.points.length > 0 && (
                <ul className="text-xs md:text-[14px] font-medium space-y-1 text-gray-800 list-decimal pl-4">
                  {currentSlide.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
              {currentSlide.note && (
                <p
                  className="text-sm font-medium mt-1"
                  dangerouslySetInnerHTML={{ __html: currentSlide.note }}
                />
              )}
              <div className="flex justify-end mt-3">
                <button
                  onClick={nextStep}
                  className="bg-[#DB620A] hover:bg-[#DB620ACC] text-white text-sm font-medium px-3 py-1 rounded transition cursor-pointer"
                >
                  {step === slides.length - 1 ? "Finish" : "Next >>"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
