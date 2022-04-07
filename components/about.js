import Image from "next/image";
import resume from "../constants/resume.json";
import metaData from "../constants/metaData.json";
import { Section, SocialLinks } from "./common";
import { capitalize, formatDate } from "../utils";

const participations = [
  {
    title: "Uni Hack Challenge 2",
    year: "2017",
  },
  {
    title: "Angel Hack Yangon",
    year: "2018",
  },
  {
    title: " Game Dev Challenge",
    year: "2018",
  },
  {
    title: "The Hackathon Ooredoo",
    year: "2019",
  },
];

const About = () => {
  return (
    <Section title="about">
      <div className="text-center md:flex md:flex-row my-10 items-center">
        <Image
          src={metaData.image}
          width={200}
          height={260}
          className="shadow-xl rounded-2xl object-contain"
          alt="my_image"
        />
        <p className="mt-10 md:mt-0 mx-auto max-w-xl text-lg">
          {resume.basics.summary}
        </p>
      </div>
      <SubSection name="contact">
        <SocialLinks />
      </SubSection>
      <SubSection name="Career Objective">
        <p className="mt-10 md:mt-0">
          My goal is to become a professional Android developer and to create
          apps that are consistent with trending design standards and
          guidelines.
        </p>
      </SubSection>
      <SubSection name="Education">
        <ul>
          {resume.education.map((item, idx) => (
            <li key={idx}>
              <div>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <p className="font-medium mb-2">{item.institution}</p>
                  <p className="mb-1 text-sm">
                    <span className="font-medium">{item.studyType}</span>
                    <span> in </span>
                    <span className="font-medium">{item.area}</span>
                  </p>

                  <span className="font-medium text-xs">
                    {formatDate(item.startDate)}
                  </span>
                  <span> - </span>
                  <span className="font-medium text-xs">
                    {formatDate(item.endDate)}
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </SubSection>
      <SubSection name="Achievements">
        <ul>
          {resume.awards.map((item, idx) => (
            <li key={idx} className="mb-1 font-medium text-sm">
              {item.title}
            </li>
          ))}
        </ul>
      </SubSection>
      <SubSection name="Participations">
        <ul>
          {participations.map((item, idx) => (
            <li key={idx} className="mb-1 text-sm">
              {item.title} ({item.year})
            </li>
          ))}
        </ul>
      </SubSection>
    </Section>
  );
};

const SubSection = ({ name, children }) => {
  return (
    <div className="mb-10 mx-auto max-w-lg">
      <h4 className="text-center mb-5 font-medium text-xl" id={name}>
        {capitalize(name)}
      </h4>
      {children}
    </div>
  );
};

export default About;
