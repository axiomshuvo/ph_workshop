import bannerMain from "../assets/banner-main.png";
import bgImg from "../assets/bg-shadow.png";
export default function Hero() {
  return (
    <>
      <div
        className="hero rounded-4xl min-h-128  text-white"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-neutral text-center space-y-5 ">
          <div className="max-w-md">
            <div>
              <img className="mx-auto" src={bannerMain} alt="" />
            </div>
            <h1 className="mb-5 text-5xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5">Beyond Boundaries Beyond Limits</p>
            <button className="btn bg-[#E7FE29] ">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </>
  );
}
