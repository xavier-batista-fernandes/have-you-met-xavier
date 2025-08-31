/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */

"use client";

import { AboutMeCard } from "@/components/cards/about-me-card";
import { BlogCard } from "@/components/cards/blog-card";
import { ContactCard } from "@/components/cards/contact-card";
import { ProjectsCard } from "@/components/cards/projects-card";
import { Roboto_Condensed } from "next/font/google";
import { useState } from "react";

const labelFont = Roboto_Condensed({
  weight: "400", // ou ["400","700"] se quiseres várias
  subsets: ["latin"],
});

const COLOR_BACKGROUND = "#252422";
const COLOR_CARD = "#ccc5b9";

const cards = [
  { id: 0, title: "About Me", theme: "#2f3e46", zIndex: 1 },
  { id: 1, title: "Projects", theme: "#354f52", zIndex: 0 },
  { id: 2, title: "Blog", theme: "#52796f", zIndex: 0 },
  { id: 3, title: "Contact", theme: "#84a98c", zIndex: 0 },
];

const squaresBg = {
  // backgroundImage:
  //   "linear-gradient(to right, #ddb892 1px, transparent 1px), linear-gradient(to bottom, #ddb892 1px, transparent 1px)",
  // backgroundSize: "10vw 10vw",
  // backgroundPosition: "5vw 5vw",
  // backgroundColor: "#fff5eb",
  background: `radial-gradient(circle, rgba(255, 255, 255, 1) 0%, ${COLOR_BACKGROUND} 100%)`,
  backgroundSize: "500%",
  backgroundPosition: "left",
};

export default function Home() {
  const [zIndex, setZIndex] = useState(2);

  const DURATION = 750;
  const handleCardClick = (id: number) => {
    const card = document.getElementById(`card-${id}`);
    const label = document.getElementById(`label-${id}`);

    [card, label].forEach((el) => {
      el?.animate(
        [
          { transform: "translate(0)" },
          { transform: "translate(1000px)" },
          { transform: "translate(0)" },
        ],
        {
          duration: DURATION,
          easing: "ease-out",
        },
      );
    });

    setTimeout(() => {
      if (!card) return;
      cards[id].zIndex = zIndex;
      setZIndex((prev) => prev + 1);
    }, DURATION / 2);
  };

  return (
    <div className="h-screen flex justify-center py-[5%]" style={squaresBg}>
      {/* <div className="bg-amber-700 h-full w-[3%] flex flex-col justify-around items-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`hole-${i}`}
            className="w-5 h-5 rounded-full shadow-inner"
            style={squaresBg}
          ></div>
        ))}
      </div> */}

      <div className="relative h-full flex-[0_0_auto] aspect-square">
        {cards.map((card) => {
          return (
            <div
              id={`card-${card.id}`}
              key={card.id}
              className="absolute inset-0 p-10 overflow-scroll"
              style={{
                backgroundColor: COLOR_CARD,
                zIndex: card.zIndex,
              }}
            >
              {card.id === 0 && <AboutMeCard theme={card.theme} />}
              {card.id === 1 && <ProjectsCard />}
              {card.id === 2 && <BlogCard theme={card.theme} />}
              {card.id === 3 && <ContactCard theme={card.theme} />}
            </div>
          );
        })}
      </div>

      <ul className="my-[1%] flex flex-col gap-1 flex-[0_0_auto]">
        {cards.map((card) => {
          const isCardActive = Math.max(...cards.map((c) => c.zIndex)) === card.zIndex;
          return (
            <li
              id={`label-${card.id}`}
              key={card.id}
              className="h-[20%] rounded-r-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => !isCardActive && handleCardClick(card.id)}
                className={`font-extrabold py-2 text-center select-none ${isCardActive ? "cursor-default" : "cursor-pointer"} h-full`}
                style={{
                  writingMode: "sideways-rl",
                  backgroundColor: card.theme,
                  fontFamily: labelFont.style.fontFamily,
                }}
              >
                {card.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
