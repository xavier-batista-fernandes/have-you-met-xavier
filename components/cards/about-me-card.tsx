import { TERRAS_LUSAS_URL } from "@/lib/constants/pages";
import { useState } from "react";
import { PersonIcon } from "../icons/person.icon";
import "./about-me-card.css";

export function AboutMeCard({ theme }: { theme: string }) {
  const [isCurious, setIsCurious] = useState<boolean>(false);

  const wantsToKnowMore = () => {
    setIsCurious(true);
  };

  function FooterNote() {
    return (
      <p className="text-sm text-gray-600 leading-relaxed">
        <span className="font-bold">Note:</span> Don’t know where{" "}
        <button
          type="button"
          onClick={() => {
            window.open("https://www.google.com/maps/search/?api=1&query=Leiria", "_blank");
          }}
          className="inline-block text-transparent bg-clip-text cursor-pointer font-bold"
          style={{
            backgroundImage: `linear-gradient(90deg, ${theme}, #4a5565)`,
            backgroundSize: "300% 100%",
            animation: "moveGradient 3s linear infinite",
          }}
        >
          Leiria
        </button>{" "}
        is? Hop onto{" "}
        <a
          className="text-white px-1 rounded"
          style={{ backgroundColor: theme }}
          href={TERRAS_LUSAS_URL}
        >
          Terras Lusas
        </a>
        . It's an app to learn about different Portuguese municipalities.
      </p>
    );
  }

  return (
    <div className="overflow-y-scroll p-10 h-full">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 h-10">
          <PersonIcon className="h-full" />
          <h1 className="text-3xl font-bold">HAVE YOU MET ME?</h1>
        </div>

        <p className="leading-relaxed font-light">
          <span className="font-bold">
            Hello! Glad to see you wandering this far on the internet.
          </span>{" "}
          Welcome to my little corner of the web!
        </p>

        <p>
          I also got into solving Rubik’s Cubes. I learned how to solve them quickly, and that hobby
          took me all the way to official competitions here in Portugal. I’ve met amazing people
          there, and you can even find me in the world rankings.
        </p>
        <p>
          At home, I always keep a jigsaw puzzle on the table. I like the slow process of building
          it piece by piece until the picture comes alive. And when one puzzle is finished, I
          usually jump straight into the next challenge.
        </p>

        <p>
          I studied Electrical and Computer Engineering at Instituto Superior Técnico. It was there
          that I discovered how much I enjoyed software development and started shaping my career
          path.
        </p>
        <p>
          During my master’s degree, I worked as a teaching assistant. I helped guide students
          through programming courses, which was a rewarding way to share what I had learned and
          sharpen my own skills along the way.
        </p>
        <p>
          Today, I’m a full-time full stack developer. I get to build products end-to-end, from the
          frontend experience to the backend logic, and I love solving problems that make technology
          more useful and accessible.
        </p>

        <FooterNote />
      </div>
    </div>
  );
}
