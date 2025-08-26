import Link from "next/link";
import deepEarthImage from "@/images/desktop/image-deep-earth.jpg";
import nightArcadeImage from "@/images/desktop/image-night-arcade.jpg";
import soccerTeamVRImage from "@/images/desktop/image-soccer-team.jpg";
import gridImage from "@/images/desktop/image-grid.jpg";
import fromAboveImage from "@/images/desktop/image-from-above.jpg";
import pocketBorealisImage from "@/images/desktop/image-pocket-borealis.jpg";
import curiosityImage from "@/images/desktop/image-curiosity.jpg";
import fisheyeImage from "@/images/desktop/image-fisheye.jpg";
import { StaticImageData } from "next/image";

type Creation = {
  title: string;
  image: StaticImageData;
  url: string;
};

const DATA: Creation[] = [
  {
    title: "Deep Earth",
    image: deepEarthImage,
    url: "/",
  },
  {
    title: "Night Arcade",
    image: nightArcadeImage,
    url: "/",
  },
  {
    title: "Soccer Team VR",
    image: soccerTeamVRImage,
    url: "/",
  },
  {
    title: "The Grid",
    image: gridImage,
    url: "/",
  },
  {
    title: "From up above VR",
    image: fromAboveImage,
    url: "/",
  },
  {
    title: "Pocket borealis",
    image: pocketBorealisImage,
    url: "/",
  },
  {
    title: "The Curiosity",
    image: curiosityImage,
    url: "/",
  },
  {
    title: "Make it fisheye",
    image: fisheyeImage,
    url: "/",
  },
];

export default function Creations() {
  return (
    <section className="w-full max-w-[1100px] m-2000">
      <div className="flex justify-between items-center">
        <h2 className="text-preset-2 text-black uppercase select-none">
          Our creations
        </h2>
        <Link
          href="/"
          className="px-500 py-150 border-[1px] border-black text-preset-7 text-black uppercase"
        >
          See all
        </Link>
      </div>

      <div className="grid grid-cols-4 grid-auto-rows gap-400 mt-1000">
        {DATA.map((creation) => (
          <Link
            key={creation.title}
            href={creation.url}
            style={{
              backgroundImage: `url(${creation.image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-[450px] flex flex-col justify-end p-500 bg-gradient-to-t from-black/60 to-black/0">
              <h3 className="text-preset-4 text-white uppercase">
                {creation.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
