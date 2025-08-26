import heroImage from "@/images/desktop/image-hero.jpg";
import Image from "next/image";
import logoImage from "@/images/logo.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center px-2000 pt-800 pb-1800"
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full min-w-[650px] max-w-[1110px] h-[440px] flex flex-col justify-between">
        {/* Header */}
        <div className="flex gap-400 justify-between">
          <Link href="/" className="shrink-0">
            <Image src={logoImage} alt="Loopstudios Logo" width={192} />
          </Link>
          <nav>
            <ul className="flex gap-400 text-preset-6 text-white">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Events</Link>
              </li>
              <li>
                <Link href="/">Products</Link>
              </li>
              <li>
                <Link href="/">Support</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Title */}
        <h1 className="text-preset-1 text-white uppercase w-fit p-500 border-2 border-white flex flex-col leading-none select-none">
          <span>Immersive</span>
          <span>experiences</span>
          <span className="mb-[-0.2em]">that deliver</span>
        </h1>
      </div>
    </div>
  );
}
