import { FilesIcon } from '@/components/icons/files.icon'

export default function Work() {
  return (
    <div className="relative h-full">
      <div className="flex flex-col gap-4">
        <div className="bg-black lg:sticky lg:top-0">
          <div className="flex h-10 gap-2">
            <FilesIcon className="h-full fill-white" />
            <h1 className="text-3xl font-bold">MY PROFESSIONAL PATH.</h1>
          </div>

          <p className="mt-3 leading-relaxed font-light">
            <span className="font-bold"></span>{' '}
          </p>
        </div>

        <hr className="mb-5 border-[#4f4f4f]" />
        <h2 className="font-bold text-[#5b5b5b]">ABOUT MY PROFESSIONAL LIFE</h2>
        <p>
          I studied Electrical and Computer Engineering at Instituto Superior
          Técnico. It was there that I discovered how much I enjoyed software
          development and started shaping my career path.
        </p>
        <p>
          During my master’s degree, I worked as a teaching assistant. I helped
          guide students through programming courses, which was a rewarding way
          to share what I had learned and sharpen my own skills along the way.
        </p>
        <p>
          Today, I’m a full-time full stack developer. I get to build products
          end-to-end, from the frontend experience to the backend logic, and I
          love solving problems that make technology more useful and accessible.
        </p>
      </div>
    </div>
  )
}
