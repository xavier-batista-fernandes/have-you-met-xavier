import { PersonIcon } from '@/components/icons/person.icon'
import { TERRAS_LUSAS_URL } from '@/lib/constants/pages'

export default function About() {
  return (
    <div className="relative h-full">
      <div className="flex flex-col gap-4">
        <div className="bg-black lg:sticky lg:top-0">
          <div className="flex h-10 gap-2">
            <PersonIcon className="h-full fill-white" />
            <h1 className="text-2xl font-bold lg:text-3xl">HAVE YOU MET ME?</h1>
          </div>

          <p className="mt-3 leading-relaxed font-light">
            <span className="font-bold">
              Hey there! Happy to see you’ve wandered this far across the web.
            </span>{' '}
            Welcome to my little digital corner!
          </p>

          <hr className="mt-5 border-[#4f4f4f]" />
        </div>

        <div>
          <h2 className="font-bold text-[#5b5b5b]">ABOUT MY ROOTS</h2>
          <p>
            I’m {new Date().getFullYear() - 2000} years old, with an older
            brother and a younger sister.
          </p>
          <p>
            I was born in Figueira da Foz, a seaside city in the Coimbra
            district, Portugal. My parents, however, have always lived a little
            further south in a small village called Ilha, part of the Leiria
            district. The name often confuses people into thinking I’m from
            Madeira or the Azores — both Portuguese islands — which has led to
            some funny moments.
          </p>
          <p>
            Although Leiria is in central Portugal, our regional accent
            sometimes makes people mistake me for someone from the north.
          </p>
          <p>
            I grew up with a computer always nearby, spending countless hours
            exploring and playing video games.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-[#5b5b5b]">ABOUT MY HOBBIES</h2>
          <p>
            Somewhere along the way, I discovered the Rubik’s Cube. Solving it
            quickly became an obsession that took me to official competitions
            across Portugal. Along the journey, I’ve met incredible people and
            even earned a spot in the world rankings.
          </p>
          <p>
            At home, there’s almost always a jigsaw puzzle on the table. I enjoy
            the slow, steady process of piecing everything together until the
            full picture appears. And once one is done, I can’t resist diving
            into the next one.
          </p>
        </div>
        <FooterNote />

        <hr className="mb-5 border-[#4f4f4f]" />
      </div>
    </div>
  )
}

function FooterNote() {
  return (
    <p className="text-sm leading-relaxed text-gray-600">
      <span className="font-bold">Note:</span> Not sure where{' '}
      <button
        type="button"
        className="animateGradient inline-block cursor-pointer bg-clip-text font-bold text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, white,  #218ccf,  white)`,
          backgroundSize: '1000% 100%',
        }}
      >
        Leiria
      </button>{' '}
      is? Check out{' '}
      <a className="rounded text-white" href={TERRAS_LUSAS_URL} target="_blank">
        Terras Lusas
      </a>
      , an app I built to explore the municipalities of Portugal.
    </p>
  )
}
