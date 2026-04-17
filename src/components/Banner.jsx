import bannerimg from "../assets/bannerbook.png";

export default function Banner() {
  return (
    <>
      <div className="hero min-h-3/4 my-8 container mx-auto">
        <div className=" bg-gray-100 w-full rounded-2xl justify-between p-10 hero-content flex-col lg:flex-row-reverse">
          <img src={bannerimg} className="max-w-sm " />
          <div>
            <h1 className="text-5xl font-bold  mb-8">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn bg-[#23BE0A] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
