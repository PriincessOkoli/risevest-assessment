import Phone from "./../assets/images/phone.png";
import ArrowRight from "../assets/icons/arrow-right.svg";
import AppleIcon from "../assets/icons/apple.svg";
import GooglePlayIcon from "../assets/icons/google-play.svg";

function Download() {
  return (
    <section className="section section2 mx-4 xl:m-24 lg:mx-8 mt-6 lg:mt-10 flex justify-between items-center flex-wrap rounded-[2rem]">
      <div className="lg:py-10 p-6 lg:p-4 lg:pl-14 lg:w-[33.6rem]">
        <p className="text-light text-lg py-4">Download The Rise App</p>
        <h2 className="text-4xl xl:text-5xl text-dark font-semibold">
          Rise makes investing simple.
        </h2>
        <div className="flex mt-20 gap-1 lg:gap-2">
          <button
            type="button"
            className="bg-primary text-xs lg:text-md text-white flex items-center gap-1 lg:gap-2"
          >
            Start investing
            <img src={ArrowRight} alt="Arrow Right" width="13" height="13" />
          </button>
          <button
            type="button"
            className="bg-[#71879C0D] text-xs lg:text-md text-dark flex items-center gap-1 lg:gap-2"
          >
            <img src={AppleIcon} alt="Apple Logo" width="18" height="18" />{" "}
            <img
              src={GooglePlayIcon}
              alt="Google Play Logo"
              width="18"
              height="18"
            />
            Dowload app
          </button>
        </div>
      </div>
      <div className="relative pt-10 w-full max-w-[400px] mx-10 xl:pl-6">
        <img
          src="/down-img1.png"
          alt="Phone Front View"
          width="432"
          className="relative z-10 "
        />

        <img
          src="/down-img3.png"
          alt="Left Bubble"
          width="400"
          className="absolute left-[-4rem] lg:left-[-10rem] bottom-0 z-0"
        />

        <img
          src="/down-img2.png"
          alt="Right Bubble"
          width="140"
          className="absolute right-[-40px] bottom-[-0px] z-10"
        />
      </div>
    </section>
  );
}
export default Download;
