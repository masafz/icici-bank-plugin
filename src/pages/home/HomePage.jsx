import { useNavigate } from "react-router-dom";
import whiteArrow from "../../assets/icons/white-arrow.png";
import { demoCardDetails, onboardingCardDetails } from "../../utils/constant";
import orangeArrow from "../../assets/icons/orange-arrow.png";
import walletIcon from "../../assets/icons/wallet-icon.png";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO */}
      <section className="bg-[radial-gradient(134.32%_134.32%_at_119.19%_-6.07%,#DB620A66_0%,#DB620A00_100%)]">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 py-20 md:py-24">
          <h1 className="text-[30px] md:text-[50px] font-black leading-[1.1] max-w-[680px]">
            Experience Effortless Banking with{" "}
            <span className="text-[#DB620A]">Bank Plugin</span>
          </h1>
          <p className="text-[#00000099] text-[19px] font-normal mt-5 max-w-[722px] leading-[26px]">
            Introducing Bank Plugin – an Industry first solution designed to
            seamlessly integrate banking with desktop-based accounting software.
          </p>
          <button
            className="flex justify-center items-center gap-2 mt-8 bg-[#DB620A] text-white px-6 py-3 rounded-[10px] shadow-md hover:bg-[#DB620ACC] transition text-[15px] font-medium cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.bankplugin.com/support",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Request a Product Demo
            <img
              src={whiteArrow}
              alt="arrow"
              className="transform rotate-180"
              width={15}
            />
          </button>
        </div>
      </section>
      {/* PRODUCT DEMO */}
      <section className="py-20 border-t border-[#97291E33]">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40">
          <div className="text-center max-w-[700px] mx-auto">
            <h2 className="text-[30px] md:text-[40px] font-black">
              Bank Plugin Product Demo Centre
            </h2>
            <p className="text-[#00000099] text-[19px]">
              Discover how Bank Plugin transforms your banking experience inside
              Tally
            </p>
          </div>
          {demoCardDetails.map((section, index) => (
            <div key={index} className="mt-16">
              <h3 className="text-[#DB620A] font-bold mb-6 text-[22px] flex items-center gap-2">
                <img src={walletIcon} alt="wallet" width={22} />
                {section.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-[10px] border-[0.5px] border-[#D3D3D3] p-6 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-[20px] font-bold text-[#000000]">
                      {item.title}
                    </h3>
                    <p className="text-[#00000099] text-[15px] mt-2 leading-[22px]">
                      {item.desc}
                    </p>
                    <button
                      onClick={() => navigate(`./features/${item.route}`)}
                      className="mt-4 inline-flex items-center gap-2 text-[14px] px-3 py-2 border border-[#DB620A] text-[#DB620A] rounded-[8px] cursor-pointer transition-all duration-300 group-hover:bg-[#DB620A] group-hover:text-white"
                    >
                      Start
                      <img
                        src={orangeArrow}
                        alt="arrow"
                        width={15}
                        className="group-hover:hidden transform rotate-180"
                      />
                      <img
                        src={whiteArrow}
                        alt="arrow"
                        width={15}
                        className="hidden group-hover:block transform rotate-180"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ONBOARDING */}
      <section className="bg-[#DB620A0F] py-20">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40">
          <div className="text-center mx-auto">
            <h2 className="text-[30px] md:text-[40px] font-black">
              Stages of Onboarding in Bank Plugin
            </h2>
            <p className="text-[#00000099] text-[19px]">
              Here's how to set up the Bank Plugin for your organization.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9 mt-16">
            {onboardingCardDetails.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-[10px] border-[0.5px] border-[#D3D3D3] p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="p-[18px] absolute -top-6 left-6 w-[30px] h-[30px] bg-[#DB620A] text-white text-[20px] font-black flex items-center justify-center rounded-full">
                  {index + 1}
                </div>
                <h3 className="text-[20px] font-bold text-[#000000]">
                  {item.title}
                </h3>
                <p className="text-[#00000099] text-[15px] mt-2 leading-[22px]">
                  {item.desc}
                </p>
                <button
                  onClick={() => navigate(`./features/${item.route}`)}
                  className="mt-4 inline-flex items-center gap-2 text-[14px] px-3 py-2 border border-[#DB620A] text-[#DB620A] rounded-[8px] cursor-pointer transition-all duration-300 group-hover:bg-[#DB620A] group-hover:text-white"
                >
                  Start
                  <img
                    src={orangeArrow}
                    alt="arrow"
                    width={15}
                    className="group-hover:hidden transform rotate-180"
                  />
                  <img
                    src={whiteArrow}
                    alt="arrow"
                    width={15}
                    className="hidden group-hover:block transform rotate-180"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
