import HeroImage from "./../assets/images/hero-image.png";
import ArrowRight from "../assets/icons/arrow-right.svg";
import AppleIcon from "../assets/icons/apple.svg";
import GooglePlayIcon from "../assets/icons/google-play.svg";
import { useState } from "react";
import ArrowForward from "../assets/icons/arrow-forward.svg";
import investors from "../assets/images/investors.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-3">
      <section className="top-bar flex justify-between items-center lg:px-24 py-3 lg:py-6">
        <a href="#">
          <img
            src="logo.png"
            alt="rise logo"
            width={65}
            height={19}
            className="h-5"
          />
        </a>
        <section className="hidden lg:flex justify-between items-center w-[574px]">
          <nav>
            <a href="">Why Rise</a>
            <a href="">Blog</a>
            <a href="">Rise for Business</a>
          </nav>
          <div>
            <button type="button" className="bg-[#71879C0D] text-dark mr-2">
              Log In
            </button>
            <button type="button" className="bg-primary text-white">
              Get started
            </button>
          </div>
        </section>
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <img src="/menu-icon.svg" alt="Menu Icon" width="24" height="24" />
        </button>
      </section>
      <section className="hero-content w-full mt-4 lg:mt-10 flex justify-between flex-wrap mx-auto">
        <section className="p-4 lg:pl-24">
          <div className=" lg:w-[33.6rem] lg:mt-16">
            <button className="mb-2 flex gap-2 text-xs text-teal-1 border border-teal-2 py-2 px-3 bg-teal-4">
              READ OUR COST OF LIVING REPORT 2024{" "}
              <img src={ArrowForward} alt="Arrow Right" width="7" height="13" />
            </button>
            <h1 className="text-4xl  mt-4 lg:text-6xl text-dark font-semibol">
              Dollar investments that help you{" "}
              <span className="text-teal-1">grow.</span>
            </h1>
            <p className="text-light text-xl py-7">
              Rise gives you access to a carefully selected portfolio of global
              investments, across US stocks, US real estate and fixed income
              assets.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="bg-primary text-xs lg:text-md text-white flex items-center gap-2"
            >
              Start investing
              <img src={ArrowRight} alt="Arrow Right" width="13" height="13" />
            </button>
            <button
              type="button"
              className="bg-[#71879C0D] text-xs lg:text-md text-dark flex items-center gap-2"
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
          <div className="border rounded-lg p-5 mt-14 lg:mt-[10rem]">
            <p className="text-light text-sm mb-1">Investors and Partners</p>
            <img src={investors} alt="Our investors" width="520" height="38" />
          </div>
        </section>
        <section className="mt-14 lg:mt-0">
          <img src={HeroImage} alt="plans" width={614} height={903} />
        </section>
      </section>
    </header>
  );
}
export default Header;
