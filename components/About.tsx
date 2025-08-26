import Image from "next/image";
import interactiveImage from "@/images/desktop/image-interactive.jpg";

export default function About() {
  return (
    <section className="m-2000">
      <div className="w-full max-w-[1110px]">
        <div className="w-full grid grid-cols-6 grid-rows-3">
          <Image
            src={interactiveImage}
            alt="Man wearing a VR headset"
            className="col-start-1 row-start-1 col-span-4 row-span-3"
          />

          <div className="col-start-4 col-span-4 row-start-2 row-span-2 pt-1200 pl-1200 flex flex-col gap-300  bg-white">
            <h2 className="text-preset-2 text-black uppercase">
              The leader in interactive VR
            </h2>
            <p className="text-preset-6 text-black">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
