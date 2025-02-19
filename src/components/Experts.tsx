import Phone from "./../assets/images/phone.png";
import ArrowRight from "../assets/icons/arrow-right.svg";

function Experts() {
  return (
    <section className="section section2 lg:py-10 mx-4 lg:mx-24 lg:mt-10 flex justify-between items-center flex-wrap mx-auto rounded-[2rem]">
      <div className="p-6 lg:p-4 lg:pl-14 lg:w-[33.6rem]">
        <h2 className="text-4xl lg:text-5xl text-dark font-semibold">
          Easy. Diversified. Managed by{" "}
          <span className="text-teal-1">Experts.</span>
        </h2>
        <p className="text-light text-xl py-7">
          Explore an array of investment options that offer superior returns,
          curated and managed by experts, all from the comfort of your device.
          Simple, right?
        </p>
        <button
          type="button"
          className="bg-primary text-xs lg:text-md text-white flex items-center gap-2"
        >
          Start investing
          <img src={ArrowRight} alt="Arrow Right" width="13" height="13" />
        </button>
      </div>
      <div className=" pl-6 py-16">
        <img src={Phone} alt="phone" />
      </div>
    </section>
  );
}
export default Experts;
