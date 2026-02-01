'use client';

import { Accordion } from '@/src/components/atoms/accordion';
import { PersonIcon } from '@/src/components/atoms/icons/person.icon';
import { TERRAS_LUSAS_URL } from '@/src/lib/constants/pages';

export default function About() {
  return (
    <div className="relative h-full pt-10">
      <div className="flex h-10 items-center gap-2">
        <PersonIcon className="h-full fill-black dark:fill-white" />
        <h1 className="text-[min(4vw,2rem)] font-bold">HAVE YOU MET ME?</h1>
      </div>
      <p className="mt-2">
        I’m a {new Date().getFullYear() - 2000}-year-old{' '}
        <strong>Software Developer</strong> from Portugal, currently moving
        between Lisbon and Leiria. During my college years, I developed a strong
        interest in building things for the web, chasing curiosity through side
        projects, and learning for the sheer joy of it. Outside of code, I spend
        my time solving all kinds of puzzles and listening to far too much
        music. Below is a glimpse into my roots, my journey, and what shapes the
        way I work.
      </p>

      <div className="mt-2">
        <Accordion
          header={aboutMyRootsHeader}
          content={aboutMyRootsContent}
        ></Accordion>

        <Accordion
          header={aboutMyHobbiesHeader}
          content={aboutMyHobbiesContent}
        ></Accordion>
      </div>
    </div>
  );
}

// About my roots
const aboutMyRootsHeader = (
  <h2 className="my-2 text-left text-lg font-bold text-[#5b5b5b] dark:text-amber-50/75">
    ABOUT MY ROOTS
  </h2>
);

const aboutMyRootsContent = (
  <div className="mb-4 flex flex-col gap-6">
    <p>
      I was born in <strong>Figueira da Foz</strong>, a seaside city in
      Portugal's <strong>Coimbra</strong> district, but grew up a bit further
      south in <strong>Ilha</strong>, a village in the <strong>Leiria</strong>{' '}
      district. I spent most of my childhood in a small, quiet village full of
      pine trees. My parents' house was surrounded by these trees, and it was
      quite common to see rabbits and squirrels running around.
    </p>

    <p>
      <strong>Ilha</strong> translates to <em>“island”</em> in Portuguese, which
      often makes people think I'm from <strong>Madeira</strong> or the{' '}
      <strong>Azores</strong>, a misunderstanding that has led to a few funny
      moments. Although <strong>Leiria</strong> is in central Portugal, our
      accent sometimes makes people think I'm from the north.
    </p>

    <p className="text-sm leading-relaxed dark:text-amber-50/75">
      <span className="font-bold">Note:</span> Not sure where{' '}
      <strong>Figueira da Foz</strong> and <strong>Leiria</strong> are? Check
      out{' '}
      <a
        href={TERRAS_LUSAS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="animateGradient inline-block cursor-pointer bg-clip-text font-bold text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, white, orange, white)`,
          backgroundSize: '1000% 100%',
        }}
      >
        Terras Lusas
      </a>
      , an app I built to explore the municipalities of Portugal.
    </p>

    <p>
      Music was always playing at home. My dad learned to play guitar at a young
      age and turned that passion into a career. He has been teaching music for
      over 35 years and filled our house with classics from <em>Pink Floyd</em>,{' '}
      <em>The Rolling Stones</em>, and <em>Dire Straits</em>. My brother and I
      took it a step further and became regular fans of all sorts of{' '}
      <em>metal</em> subgenres. I still listen to it regularly, though I've
      grown to appreciate <em>bossa nova</em>, <em>jazz blues</em>, and{' '}
      <em>lo-fi</em> when I want something calmer.
    </p>

    <p>
      During my teenage years, I attended the same school where my dad was
      teaching music. I've always considered myself a good student. Whenever I
      had homework, I would do it right away so I could have the rest of the day
      to do whatever I wanted. My parents realized that, so they would let me
      have that freedom. And, of course, having my dad in the same school always
      helped me stay out of trouble.
    </p>

    <p>
      That school, however, was quite far from home. This meant the time I spent
      at school was also the only time I had to be with my friends, so weekends
      back home were usually quiet. Of course, I still had neighbors around my
      age, but I naturally found my own ways to escape boredom and stay
      entertained.
    </p>

    <p>
      Having a computer at home helped a lot. <br />
      <strong>I spent countless hours exploring the digital world</strong>,
      playing online video games with strangers and chatting with them. It was
      my main source of English content and where I learned most of what I know
      today.
    </p>
  </div>
);

// About my hobbies
const aboutMyHobbiesHeader = (
  <h2 className="my-2 text-left text-lg font-bold text-[#5b5b5b] dark:text-amber-50/75">
    ABOUT MY HOBBIES
  </h2>
);

const aboutMyHobbiesContent = (
  <div className="mb-4 flex flex-col gap-6">
    <p>
      In my early teens, my curiosity eventually led me to the{' '}
      <strong>Rubik's Cube</strong>. What started as a random challenge turned
      into a full-on obsession. Solving it over and over again became a routine.
      At some point, I was teaching others at school how to solve it, and
      eventually I participated in a competition in <strong>Porto</strong>.
      There, I met fellow <em>speedcubers</em> like myself and somehow even
      ended up in the national top rankings.
    </p>

    <p>
      I'm also a fan of <strong>jigsaw puzzles</strong> and usually have one
      ongoing somewhere at home. There's something relaxing about slowly fitting
      the pieces together, seeing parts of the image appear, and watching
      everything come together. When the last piece is in place, I let it sit
      for a day or so, then pack it all up and start a new one right away.
    </p>

    <p>
      Having a computer at home helped a lot. <br />
      <strong>I spent countless hours exploring the digital world</strong>
      , playing online video games with strangers and chatting with them. It was
      my main source of English content and where I learned most of what I know
      today.
      <br />
    </p>
    <p>
      <em>One of the first games I ever played was Minecraft</em>. The ability
      to explore, gather resources, and build anything I could imagine
      absolutely amazed me. The game had hundreds of different items, which also{' '}
      <strong>greatly helped me expand my English vocabulary</strong>. It's
      still one of my favorite games, and I play it from time to time whenever I
      have a bit of free time. But the craziest part of it is that you could
      build circuits with this thing called <em>redstone</em>. I first learned
      about logic gates here, years before hearing it in college.
    </p>
    <p>
      Then there's the whole world of <strong>board games</strong>. What is
      there not to love? Back in school, my friends and I would stay late at
      night at our local coffee place playing them. We often tried playing new
      ones, but we always came back to <em>Catan</em>. Over time, we all became
      dangerously good at it, and there were even days when we squeezed in a
      match between classes or right before catching the school bus home.
    </p>

    <p>
      Somewhere along the way, all those interests — logic, puzzles, and
      building things — made me realize that <strong>engineering</strong> was
      the path I wanted to follow. So that's what I did, and it turned out to be
      a great fit.
    </p>
  </div>
);
