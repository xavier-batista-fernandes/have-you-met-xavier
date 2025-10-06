import { FilesIcon } from '@/components/icons/files.icon'

export default function Work() {
  return (
    <div className="relative h-full py-10">
      <div className="flex flex-col gap-4">
        <div className="bg-black">
          <div className="flex h-10 gap-2">
            <FilesIcon className="h-full fill-white" />
            <h1 className="text-2xl font-bold lg:text-3xl">
              MY JOURNEY AS AN ENGINEER
            </h1>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#5b5b5b]">
            ABOUT MY COLLEGE YEARS
          </h2>
          <div className="flex flex-col gap-6">
            <p>
              As the college application deadline approached, I still wasn’t
              sure what I wanted to study. The only thing I knew was that I
              loved solving math and physics problems. So, I started researching
              engineering degrees across different universities and found one
              that covered a broad range of fields.{' '}
              <strong>I applied — and got in.</strong>
            </p>
            <p>
              I spent five years (2018–2023) studying{' '}
              <strong>
                Electrical and Computer Engineering at Instituto Superior
                Técnico
              </strong>
              . The degree covered a bit of everything — from telecommunications
              to computer architectures. I met amazing friends there, the kind
              you study hard with for exams but also go out and enjoy life with.
              We had the perfect balance.
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
              <em>Teaching Assistant</em> position. I was lucky enough to be
              selected!
            </p>
            <p>
              That’s how my professional journey began — alongside my master’s
              degree. As a teaching assistant, I guided students through
              programming courses. It was incredibly rewarding to share what I’d
              learned while improving my own skills in the process.
            </p>
            <p>
              I taught for two years across several courses and met countless
              students. Even today, I occasionally hear a random{' '}
              <em>”Olá professor!”</em> on the street or a bus. It was a start
              for my career. I was surrounded by a lot of brilliant minds. Even
              though I was their teacher, I learned a lot from them too.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#5b5b5b]">
            ABOUT MY WORKING YEARS
          </h2>
          <div className="flex flex-col gap-6">
            <p>
              Near the end of my master’s, things got hectic. I was writing my
              thesis, teaching, and - because I like a challenge - started
              applying for software development jobs.
            </p>
            <p>
              In July 2023, I joined{' '}
              <strong>Volkswagen Digital Solutions</strong> as a junior
              <em>Software Developer</em>. I had first met them at a college job
              fair, and the interviews went smoothly, thanks to my fresh
              experience from teaching programming.
            </p>
            <p>
              <strong>The rest of the story is today.</strong>
            </p>
            <p>
              I’m now a full-time full stack developer, building products from
              end to end - from frontend experiences to backend logic. I’ve
              learned about UI design, responsive interfaces, APIs,
              authentication, and database architecture. It’s wild how much you
              don’t learn in college, but it does teach you how to learn.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
