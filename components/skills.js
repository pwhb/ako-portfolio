import Image from "next/image";
import React from "react";
import { Section } from "./common";
const skills = [
  {
    name: "Android Studio",
    url: "https://developer.android.com/studio/",
    icon: "/android-studio.png",
  },
  {
    name: "Gradle",
    url: "https://gradle.org/",
    icon: "https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg",
  },
  {
    name: "Java",
    url: "https://java.com/en/",
    icon: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
  },
  {
    name: "Kotlin",
    url: "https://kotlinlang.org/",
    icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
  },
  {
    name: "Jetpack Compose",
    url: "https://developer.android.com/jetpack/compose",
    icon: "https://www.linux-magazin.de/wp-content/uploads/2020/08/jetpack-compose-icon_RGB.png",
  },
  {
    name: "RESTful API",
    url: "https://en.wikipedia.org/wiki/Representational_state_transfer",
    icon: "https://www.svgrepo.com/show/373763/light-json.svg",
  },
  {
    name: "Material Design",
    url: "https://material.io/design",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/800px-Google_Material_Design_Logo.svg.png",
  },
  {
    name: "SQL",
    url: "https://en.wikipedia.org/wiki/SQL",
    icon: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
  },
  {
    name: "Room with Flow",
    url: "https://developer.android.com/codelabs/basic-android-kotlin-training-intro-room-flow",
    icon: "/Android_Robot.svg",
  },
  {
    name: "Github",
    url: "https://github.com/",
    icon: "https://www.vectorlogo.zone/logos/github/github-tile.svg",
  },
];
const Skills = () => {
  return (
    <Section title="skills">
      <div className="mb-10 mx-auto max-w-lg">
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className={`mb-1 font-medium ${
                idx % 2 === 0 ? "" : "text-right mr-3 md:mr-0"
              }`}
            >
              <a href={skill.url} className="hover:underline">
                <Image
                  src={skill.icon}
                  width={40}
                  height={40}
                  alt={skill.name}
                  
                ></Image>
                <span className="relative bottom-2 left-4"> {skill.name}</span>
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
