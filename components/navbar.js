import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import resume from "../constants/resume.json";
import Image from "next/image";
import Link from "next/link";
import { capitalize } from "../utils";

const Navbar = () => {
  return (
    <nav className="bg-cyan-600 text-gray-200">
      <div className="max-w-4xl mx-auto px-3 md:px-0 py-1">
        <div className="relative flex items-center justify-between h-16 mb-2">
          <ProfileInfo />
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

const ProfileInfo = () => {
  return (
    <div className="flex flex-row">
      <div className="relative top-1 w-6 md:w-7">
        <Image
          // src="https://www.vectorlogo.zone/logos/android/android-official.svg"
          // src="/android.svg"
          // src="/android-icon.svg"
          src="/Android_Robot.svg"
          alt="career icon"
          layout="fill"
        />
      </div>
      <div className="flex flex-col ml-1 md:ml-4 text-white">
        <p className="font-medium text-sm md:text-lg">
          Aung Ko <ToggleTheme />o
        </p>

        <p className="font-medium text-xs md:text-sm">{resume.basics.label}</p>
      </div>
    </div>
  );
};

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative top-1"
    >
      <Image
        alt="toggle theme"
        src={theme === "dark" ? "/moon.svg" : "/sun.svg"}
        width={24}
        height={24}
      />
    </button>
  );
};

const NavLinks = () => {
  return (
    <div className="flex space-x-3 md:space-x-8 justify-center">
      <NavLink name="about" />
      <NavLink name="skills" />
      <NavLink name="experience" />
    </div>
  );
};

const NavLink = ({ name }) => {
  const href = `/#${name}`;
  const title = capitalize(name)
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`hover:underline-offset-8 hover:underline hover:scale-110 text-xs md:text-base ${
          router.asPath === href ? "font-bold scale-110 text-white" : ""
        }`}
      >
        {title}
      </a>
    </Link>
  );
};

export default Navbar;
