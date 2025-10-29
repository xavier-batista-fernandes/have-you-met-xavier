import { FilesIcon } from '@/components/atoms/icons/files.icon';

export default function Work() {
  return (
    <div className="relative h-full pt-10">
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex h-10 items-center gap-2">
            <FilesIcon className="h-full fill-black dark:fill-white" />
            <h1 className="text-[min(4vw,_2rem)] font-bold">
              MY JOURNEY AS AN ENGINEER
            </h1>
          </div>
        </div>

        <div>
          <h2 className="my-2 text-lg font-bold text-[#5b5b5b]">
            ABOUT MY COLLEGE YEARS
          </h2>
          <div className="flex flex-col gap-6">
            <p>
              As the college application deadline approached, I still wasn’t
              sure what I wanted to study, but I was really good and interested
              in solving math and physics problems. So, I started researching
              engineering degrees across different universities and found one
              that covered a broad range of fields.{' '}
              <strong>I applied, and got in.</strong>
            </p>
            <p>
              I spent five years (2018–2023){' '}
              <strong>
                studying Electrical and Computer Engineering at Instituto
                Superior Técnico
              </strong>
              . The degree covered a bit of everything, from telecommunications
              to computer architectures. There I met amazing friends, the kind
              you study hard with for exams but also go out and enjoy life with.
              Our balance was perfect!
            </p>
            <p>
              Out of all the subjects, <strong>computer architectures</strong>{' '}
              and <strong>software development</strong> fascinated me the most.
              So when my master’s started, I chose a major focused on those
              areas.
            </p>
            <p>
              I performed well in programming-related courses, and one day some
              of my professors encouraged me to apply for a{' '}
              <em>Teaching Assistant</em> position. A recommendation letter was
              written, and I was one of the lucky ones whose application was
              accepted.
            </p>
            <p>
              That’s how my professional journey began - alongside my master’s
              degree. My calendar was a mixture of classes I attended as a
              student and classes I taught as a teaching assistant. I guided
              students through programming courses.
            </p>
            <p>
              I taught for two years across several courses and met countless
              students. Even today, I occasionally hear a random{' '}
              <em>“Olá professor!”</em> on the street or on a bus. It was the
              start of my career, and I was surrounded by a lot of brilliant
              minds. Even though I was their teacher, I learned a lot from them
              too.
            </p>
          </div>
        </div>

        <div>
          <h2 className="my-2 text-lg font-bold text-[#5b5b5b]">
            ABOUT MY WORKING YEARS
          </h2>
          <div className="flex flex-col gap-6">
            <p>
              Near the end of my master’s, things got hectic. I was writing my
              thesis while teaching programming classes, vigilating final exams
              and evaluating 80+ students' exams. On top of that, I started
              applying for software development jobs. In professional terms,
              let’s just say those days taught me a lot about multitasking.
            </p>
            <p>
              In July 2023, I joined{' '}
              <strong>Volkswagen Digital Solutions</strong> as a junior{' '}
              <em>Software Developer</em>. I had first met the company at a
              college job fair, and the interviews went smoothly thanks to my
              recent experience teaching programming.
            </p>
            <p>
              <strong>The rest of the story is today.</strong>
            </p>
            <p>
              I currently work as a <em>Full Stack Developer</em> at the same
              company, building internal products used within the organization.{' '}
              <strong>I work end to end</strong> — from frontend experiences to
              backend logic. On the frontend side, I’ve learned a lot about UI
              design, responsive interfaces, design systems, and accessibility.
              On the backend, I’ve gained experience with APIs, authentication,
              and database architecture.
            </p>
            <p>
              It’s wild how much you aren’t taught in college,{' '}
              <strong>but it does teach you how to learn</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
