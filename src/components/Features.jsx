import { useParams, useNavigate } from "react-router-dom";
import orangeArrow from "../assets/icons/orange-arrow.png";
import whiteArrow from "../assets/icons/white-arrow.png";
import { featureData } from "../utils/constant";
import { useEffect } from "react";

export default function Features() {
  const navigate = useNavigate();

  const { id } = useParams();

  const feature = featureData[id];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  if (!feature)
    return (
      <div className="min-h-[calc(100vh-65px)] flex flex-col justify-center items-center text-2xl">
        <h3>Feature Not Found!</h3>
        <button
          onClick={() => navigate("/")}
          className="bg-[#DB620A] text-white text-[16px] font-semibold px-4 py-2 rounded-[4px] flex items-center gap-2 hover:bg-[#DB620ACC] duration-200 cursor-pointer mt-3"
        >
          <span className="text-[18px]">
            <img src={whiteArrow} alt="arrow" width={13} />
          </span>
          Back to Home
        </button>
      </div>
    );

  return (
    <section className="bg-[#FEFCFA] min-h-[calc(100dvh-65px)]">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 py-12 md:py-16">
        <button
          className="text-[#DB620A] hover:underline text-[16px] font-medium flex items-center gap-2 mb-6 cursor-pointer transition-all duration-200"
          onClick={() => navigate("/")}
        >
          <img src={orangeArrow} alt="arrow" width={11} />
          Back to Home
        </button>
        <div className="mb-10 md:mb-14">
          <h1 className="text-[28px] md:text-[37px] font-black text-black leading-[1.1] mb-[10px]">
            {feature.title}
          </h1>
          <p className="text-[#00000099] text-[15px] md:text-[18px] leading-[1.6]">
            {feature.desc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(320px,360px))] justify-center gap-6 md:gap-8 mb-12 md:mb-16">
          {feature.cards.map((text, index) => (
            <div
              key={index}
              className="rounded-[11px] border-l-[5px] border-[#DB620A] bg-[#FEFBF9] p-8 shadow-[0px_0px_4px_0px_#00000040]"
            >
              <p className="relative z-10 text-[17px] font-semibold leading-[1.1] text-black pl-2">
                {text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => {
              if (feature.route) {
                navigate(feature.route);
              }
            }}
            className="bg-[#DB620A] text-white text-[16px] font-semibold px-8 py-2 rounded-[4px] flex items-center gap-2 hover:bg-[#DB620ACC] duration-200 cursor-pointer"
          >
            Let’s Start
            <span className="text-[18px]">
              <img
                src={whiteArrow}
                alt="arrow"
                width={13}
                className="transform rotate-180"
              />
            </span>
          </button>
          <p className="text-[#00000099] text-[15px] mt-4">{feature.note}</p>
        </div>
      </div>
    </section>
  );
}
