import Image from "next/image";
import resume from "../constants/resume.json";
import { capitalize } from "../utils";


export const Section = ({ title, children }) => {
  return (
    <div className="max-w-4xl px-3 md:px-0 mx-auto">
      <h3
        className="text-2xl text-center md:text-4xl md:text-left my-5 font-semibold"
        id={title}
      >
        {capitalize(title)}
      </h3>
      {children}
      <hr className="mt-20" />
    </div>
  );
};

const footerLinks = [
  {
    url: "tel:09960210833",
    alt: "phone",
    icon: "https://www.svgrepo.com/show/331736/mobile.svg",
  },
  {
    url: "https://github.com/aungk000",
    alt: "github",
    icon: "https://www.vectorlogo.zone/logos/github/github-tile.svg",
  },
  {
    url: "https://linkedin.com/in/aungkooo",
    alt: "linkedIn",
    icon: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg",
  },
];

const allLinks = [
  {
    url: "tel:09960210833",
    alt: "phone",
    icon: "https://www.svgrepo.com/show/331736/mobile.svg",
  },
  {
    url: "mailto:aungkooo.cs@gmail.com",
    alt: "email",
    icon: "https://www.svgrepo.com/show/349378/gmail.svg",
  },
  {
    url: "https://github.com/aungk000",
    alt: "github",
    icon: "https://www.vectorlogo.zone/logos/github/github-tile.svg",
  },
  {
    url: "https://developers.google.com/profile/u/110207907547274791806",
    alt: "google-dev",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/Android_robot_head.svg",
  },
  {
    url: "https://linkedin.com/in/aungkooo",
    alt: "linkedIn",
    icon: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg",
  },
  {
    url: "/cv.pdf",
    alt: "cv",
    icon: "https://www.svgrepo.com/show/262744/curriculum-vitae-portfolio.svg",
  },
];

export const SocialLinks = ({ footer }) => {
  const links = footer ? footerLinks : allLinks;
  return (
    <div className="text-center">
      <div
        className={`flex flex-row mx-auto ${
          footer ? "max-w-xs" : "max-w-lg justify-around "
        }`}
      >
        {links.map((link, idx) => (
          <div key={idx}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={footer ? "m-1" : "m-3"}
            >
            <div className="hover:scale-110 m-1">

              <Image
                className="rounded-md"
                src={link.icon}
                width={footer ? 30 : 40}
                height={footer ? 30 : 40}
                alt={link.alt}
              />
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
