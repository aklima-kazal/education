"use client";
import Digitalmarketing from "../Svg/Digitalmarketing";
import Webdev from "../Svg/Webdev";
import Personaldev from "../Svg/Personaldev";
import Art from "../Svg/Art";
import It from "../Svg/It";
import Graphics from "../Svg/Graphics";

const Categories = () => {
  return (
    <div className="bg-gradient-to-t p-20 from-blue-100 text-center to-white  w-full">
      <div className="py-8">
        <h1 className="sm:text-lg md:text-2xl lg:text-2xl 2xl:text-3xl text-black font-serif font-bold pb-6">
          Top <span className="text-Green">Categories</span>
        </h1>
        <p>12,000+ unique online course list designs</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  md:gap-x-24 2xl:grid-cols-6 2xl:gap-x-10">
        <div className="h-72 w-48 bg-white rounded-2xl sm:my-4 md:my-8 lg:mx-0">
          <div className="mx-12 mt-8 mb-6">
            <Digitalmarketing />
          </div>
          <h1 className="text-lg text-black font-serif font-semibold text-center p-4">
            Digital Marketing
          </h1>
          <span>25 Courses</span>
        </div>
        <div className="h-72 w-48 bg-white rounded-2xl sm:my-4 md:my-8 lg:mx-0">
          <div className="mx-12 mt-8 mb-6">
            <Webdev />
          </div>
          <h1 className="text-lg text-black font-serif font-semibold text-center p-4">
            Digital Marketing
          </h1>
          <span>25 Courses</span>
        </div>
        <div className="h-72 w-48 bg-white rounded-2xl sm:my-4 md:my-8 lg:mx-0">
          <div className="mx-12 mt-8 mb-6">
            <Art />
          </div>
          <h1 className="text-lg text-black font-serif font-semibold text-center p-4">
            Digital Marketing
          </h1>
          <span>25 Courses</span>
        </div>
        <div className="h-72 w-48 bg-white rounded-2xl sm:my-4 md:my-8 lg:mx-0">
          <div className="mx-12 mt-8 mb-6">
            <Personaldev />
          </div>
          <h1 className="text-lg text-black font-serif font-semibold text-center p-4">
            Digital Marketing
          </h1>
          <span>25 Courses</span>
        </div>
        <div className="h-72 w-48 bg-white rounded-2xl sm:my-4 md:my-8 lg:mx-0">
          <div className="mx-12 mt-8 mb-6">
            <It />
          </div>
          <h1 className="text-lg text-black font-serif font-semibold text-center p-4">
            Digital Marketing
          </h1>
          <span>25 Courses</span>
        </div>
        <div className="h-72 w-48 bg-white rounded-2xl sm:my-4  md:my-8 lg:mx-0">
          <div className="mx-12 mt-8 mb-6 ">
            <Graphics />
          </div>
          <h1 className="text-lg text-black font-serif font-semibold text-center p-4">
            Digital Marketing
          </h1>
          <span>25 Courses</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
