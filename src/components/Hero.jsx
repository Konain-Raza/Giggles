import React from "react";
import { RegenerateButton } from "./RegenerateButton";
import CopyButton from "./CopyButton";

const Hero = ({ joke, regenerateJoke, selectedCategory, categoryImage }) => {
  return (
    <section className="lg:h-[80vh] h-max flex items-center justify-center">
      <div className="grid max-w-full px-4 py-8 mx-auto my-auto lg:gap-8 xl:gap-0  lg:py-10 lg:grid-cols-12">
        <div className="m-auto place-self-center lg:col-span-7 ">
          <h1 className="max-w-5xl px-0 sm:px-10 mb-4 text-3xl tracking-tight leading-none md:text-5xl xl:text-6xl text-center text-white font-bold transition-transform duration-300 transform hover:translate-y-1">
            {joke}
          </h1>
          <div className="flex justify-center items-center space-x-4  flex-wrap">
            <div onClick={regenerateJoke}>
              <RegenerateButton />
            </div>
            <CopyButton joke={joke} />
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex m-auto">
          <img
            src={categoryImage}
            alt={selectedCategory ? `${selectedCategory} Joke Category` : "Joke Category"}
            className="transition-transform duration-300 transform hover:scale-105 translate-x-1 h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
