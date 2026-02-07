'use client';

import { PotionIcon } from '../../atoms/icons/potion.icon';

export default function Skills() {
  return (
    <div className="h-full max-w-screen overflow-y-scroll py-10">
      <div className="flex h-10 items-center gap-2">
        <PotionIcon className="h-full fill-black dark:fill-white" />
        <h1 className="text-[min(4vw,2rem)] font-bold">
          Skills I have gained along the way.
        </h1>
      </div>

      <p className="mt-2">
        Across both frontend and backend, I place a strong emphasis on code
        quality, testing, clarity, and long-term maintainability. I enjoy
        tackling complex problems, collaborating with multiple teams, and
        continuously learning — because there’s always a better way to build
        things.
      </p>
      {/* <div className="grid h-[50dvh] grid-cols-4  grid-rows-4 gap-0.5 border border-dashed border-red-600">
        <div className="col-span-1"></div>
        <div className="col-span-1 rounded-full border bg-amber-500"></div>
        <div className="col-span-1 rounded-full border bg-amber-400"></div>
        <div className="col-span-1"></div>
        <div className="col-span-1 rounded-full border bg-amber-400"></div>
        <div className="col-span-1 rounded-full border bg-amber-400"></div>
        <div className="col-span-1 rounded-full border bg-amber-400"></div>
        <div className="col-span-1 rounded-full border bg-amber-200"></div>
        <div className="col-span-1 rounded-full border bg-amber-700"></div>
        <div className="row-span-2 rounded-full border bg-amber-600"></div>
      </div> */}

      {/* <div
        className="mt-10 flex w-full flex-col overflow-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        <section className="flex flex-col gap-4">
          <p>
            I’m a full-stack software developer with strong experience across
            both frontend and backend, focused on building scalable,
            maintainable, and user-centered applications.
          </p>
          <p>
            On the frontend, I specialize in building clean, responsive, and
            accessible user interfaces. I have solid experience working with
            design systems, building component-driven architectures, and
            creating multi-language applications with proper
            internationalization. I care deeply about UI consistency,
            accessibility, performance, and usability, and I enjoy crafting
            interfaces that feel fast, intuitive, and polished. My day-to-day
            work involves state management, complex form handling, API
            integration, performance optimization, and writing user-centric
            tests to ensure confidence in every release.
          </p>
          <p>
            On the backend, I focus on designing and building robust, secure,
            and scalable systems. I’ve worked extensively with REST APIs,
            authentication and authorization flows, clean architecture, and
            microservices in large, multi-team environments. I have hands-on
            experience with Kafka and event-driven systems, relational
            databases, and complex database migrations, always with an eye on
            data integrity and long-term maintainability. Security,
            observability, and testing are core concerns in my backend work, and
            I’m very comfortable writing thorough integration tests, applying
            mocking techniques, and enforcing API security best practices.
          </p>
          <p>
            Across both frontend and backend, I place a strong emphasis on code
            quality, testing, clarity, and long-term maintainability. I enjoy
            tackling complex problems, collaborating with multiple teams, and
            continuously learning — because there’s always a better way to build
            things.
          </p>
        </section>
      </div> */}
    </div>
  );
}
