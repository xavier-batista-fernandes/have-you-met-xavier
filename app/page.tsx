/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
"use client";

import { Roboto_Condensed } from "next/font/google";
import { useState } from "react";

const labelFont = Roboto_Condensed({
  weight: "400", // ou ["400","700"] se quiseres várias
  subsets: ["latin"],
});

const cards = [
  { id: 1, title: "About Me", color: "#b08968" },
  { id: 2, title: "Projects", color: "#ddb892" },
  { id: 3, title: "Blog", color: "#e6ccb2" },
  { id: 4, title: "Contact", color: "#e8a969" },
];

const squaresBg = {
  backgroundImage:
    "linear-gradient(to right, #ddb892 1px, transparent 1px), linear-gradient(to bottom, #ddb892 1px, transparent 1px)",
  backgroundSize: "10vw 10vw",
  backgroundPosition: "5vw 5vw",
  backgroundColor: "#fff5eb",
  // background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 61, 99, 1) 100%)",
  // backgroundSize: "500%",
  // backgroundPosition: "left",
};

export default function Home() {
  const [activeCard, setActiveCard] = useState(4);

  const DURATION = 1000;
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
          easing: "ease-in-out",
        },
      );
    });

    setTimeout(() => {
      setActiveCard(id);
    }, DURATION / 2);
  };

  return (
    <div className="h-screen flex justify-center py-[5%]" style={squaresBg}>
      <div className="bg-amber-700 h-full w-[3%] flex flex-col justify-around items-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`hole-${i}`}
            className="w-5 h-5 rounded-full shadow-inner"
            style={squaresBg}
          ></div>
        ))}
      </div>

      <div className="relative h-full flex-[0_0_auto] aspect-square">
        {cards.map((card, index) => {
          const isActive = activeCard === card.id;
          return (
            <div
              id={`card-${card.id}`}
              key={card.id}
              className=" absolute inset-0"
              style={{
                backgroundColor: card.color,
                zIndex: isActive ? 50 : index + 1,
              }}
            >
              {getCardContent(card.id)}
            </div>
          );
        })}
      </div>

      <ul className="flex flex-col gap-1 flex-[0_0_auto]">
        {cards.map((card) => (
          <li
            id={`label-${card.id}`}
            key={card.id}
            className="h-[20%] rounded-r-xl overflow-hidden"
            onClick={() => handleCardClick(card.id)}
          >
            <h2
              className="font-extrabold py-2 text-center select-none cursor-pointer h-full"
              style={{
                writingMode: "sideways-rl",
                backgroundColor: card.color,
                fontFamily: labelFont.style.fontFamily,
              }}
            >
              {card.title}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getCardContent(id: number) {
  switch (id) {
    case 1:
      return (
        <div>
          <h1 className="text-3xl font-bold mb-4">👋 About Me</h1>
          <p className="mb-2">
            Hi, I’m <strong>Xavier Batista Fernandes</strong>, a Software Engineer at
            <em> Volkswagen Digital Solutions</em>. I’ve been coding professionally for about 1 year
            and a half, focusing on frontend (React, TypeScript, Angular, Tailwind, design systems)
            and also backend with Java and Spring Boot.
          </p>
          <p className="mb-2">
            I enjoy building interactive apps with a touch of humor 😄 and I’m also into
            accessibility (a11y), clean architecture, and learning more about authentication &
            security.
          </p>
          <p>Fun fact: I’m also a speedcuber and created a Rubik’s Cube timer app ⏱️!</p>
        </div>
      );
    case 2:
      return (
        <div>
          <h1 className="text-3xl font-bold mb-4">🚀 Projects</h1>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Municipalities (2023)</strong> – a daily game to guess Portuguese
              municipalities.
            </li>
            <li>
              <strong>Rubik’s Rush (2024)</strong> – a Rubik’s Cube timer & scramble generator.
            </li>
            <li>
              <strong>Terras Lusas (2025)</strong> – interactive map app with “Marathon” mode.
            </li>
            <li>
              <em>Coming soon…</em> 😉
            </li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div>
          <h1 className="text-3xl font-bold mb-4">✍️ Blog</h1>
          <p className="mb-2">
            I’m working on a Next.js + MDX blog where I’ll post about web dev, observability,
            accessibility, and sometimes playful side projects.
          </p>
          <p>Posts will be short, practical, and a bit playful — like learning notes in public.</p>
        </div>
      );
    case 4:
      return (
        <div>
          <h1 className="text-3xl font-bold mb-4">📬 Contact</h1>
          <p className="mb-2">Let’s get in touch! You can find me on:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <a href="https://xavier-batista-fernandes.github.io/" className="underline">
                Personal Website
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/xavier-batista-fernandes/" className="underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/xavier-batista-fernandes" className="underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}
