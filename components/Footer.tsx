import Link from "next/link";
import logoImage from "@/images/logo.svg";
import Image from "next/image";
import FacebookIcon from "./ui/FacebookIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faSquareFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full py-400 flex justify-center bg-black">
      <div className="w-full max-w-[1100px] flex flex-col gap-300">
        <div>
          <div className="flex w-full justify-between">
            <Image src={logoImage} alt="Loopstudios Logo" height={24} />
            <div className="flex gap-200">
              <Link href="/">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </Link>
              <Link href="/">
                {" "}
                <FontAwesomeIcon
                  icon={faPinterest}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </Link>
              <Link href="/">
                {" "}
                <FontAwesomeIcon
                  icon={faInstagram}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
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
              <Link href="/">Contact</Link>
            </li>
          </ul>

          <span className="text-preset-6 text-white/50">
            &copy; 2021 Loopstudios. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
