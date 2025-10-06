import { PersonIcon } from '@/components/icons/person.icon'
import { TERRAS_LUSAS_URL } from '@/lib/constants/pages'

export default function About() {
  return (
    <div className="relative h-full py-10">
      <div className="flex flex-col gap-4">
        <div className="bg-black">
          <div className="flex h-10 gap-2">
            <PersonIcon className="h-full fill-white" />
            <h1 className="text-2xl font-bold lg:text-3xl">HAVE YOU MET ME?</h1>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#5b5b5b]">ABOUT MY ROOTS</h2>
          <div className="flex flex-col gap-6">
            <p>
              I was born in <strong>Figueira da Foz</strong>, a seaside city in
              Portugal’s <strong>Coimbra</strong> district, but grew up a bit
              further south in <strong>Ilha</strong>, a village in the{' '}
              <strong>Leiria</strong> district. I spent most of my childhood in
              a small, quiet village full of pine trees. My parents' house was
              surrounded by these trees, and it was quite common to see rabbits
              and squirrels running around.
            </p>
            <p>
              <strong>Ilha</strong> translates to “island” in Portuguese, which
              often makes people think I’m from <strong>Madeira</strong> or the{' '}
              <strong>Azores</strong> - a misunderstanding that has led to a few
              funny moments. Although Leiria is in central Portugal, our accent
              sometimes makes people think I’m from the north.
            </p>
            <FooterNote />
            <p>
              My home was always filled with music. My dad learned to play
              guitar at a young age and turned that passion into a career. He’s
              been teaching music for over 35 years and filled our house with
              classics from <em>Pink Floyd</em>, <em>The Rolling Stones</em> and{' '}
              <em>Dire Straits</em>. My brother and I took it a step further and
              became regular enjoyers of all sorts of <em>metal</em> subgenres.
              I still listen to it regularly, though I’ve grown to appreciate{' '}
              <em>bossa nova</em>, <em>jazz blues</em>, and <em>lo-fi</em> when
              I want something calmer.
            </p>
            <p>
              During my teenage years I attended the same school where my dad
              was giving music lessons. I think I've always been a good student.
              Whenever I had homework I would do it right away so I could have
              the rest of the day to do whatever I wanted. My parents realized
              that, so they would let me have that freedom. And, of course,
              having my dad in the same school always helped me stay out of
              trouble.
            </p>
            <p>
              That school, however, was quite far away from home. This meant
              that the time I spent at school was also the only time I had to be
              with my friends, so weekends back home were usually quiet. Of
              course, I still had neighbors with ages similar to mine, but I
              naturally found my own ways to run from boredom and stay
              entertained.
            </p>
            <p>
              Having a computer at home helped a lot. I spent countless hours
              exploring the digital world - playing video games with online
              strangers, chatting with them - which really helped me get a hang
              of English.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-[#5b5b5b]">ABOUT MY HOBBIES</h2>
          <div className="flex flex-col gap-6">
            <p>
              In my early teens, my curiosity eventually led me to the{' '}
              <strong>Rubik’s Cube</strong>. What started as a random challenge
              turned into a full-on obsession. Solving it over and over again
              became a routine. At some point I was teaching others at school
              how to solve it, and eventually I participated in a competition in
              Porto. There, I met fellow <em>speedcubing</em> enjoyers like me,
              and somehow even ended up in the national top rankings.
            </p>
            <p>
              I’m also a fan of <strong>jigsaw puzzles</strong> and usually have
              one ongoing somewhere at home. There’s something relaxing about
              slowly fitting the pieces together, seeing parts of the image
              start to appear, everything coming together. When the last one’s
              in place, I let it sit for a day or so... then pack it all up and
              start a new one right away.
            </p>
            <p>
              Then there’s the whole world of <strong>board games</strong>. What
              is there not to love? Back in school, my friends and I would stay
              late at night at our local café playing board and sometimes card
              games. Often, we tried switching games up, but always came back to{' '}
              <em>Catan</em>. Over time, we all became dangerously good at it,
              and there were even days when we squeezed in a quick match between
              classes or right before catching the bus home.
            </p>
            <p>
              Somewhere along the way, all those interests - logic, puzzles, and
              building things - made me realize that{' '}
              <strong>engineering</strong> was the path I wanted to follow. So
              that’s what I did, and it turned out to be a great fit.
            </p>
          </div>
        </div>
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
        Figueira da Foz
      </button>{' '}
      or{' '}
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
      are? Check out{' '}
      <a
        className="rounded text-white"
        href={TERRAS_LUSAS_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Terras Lusas
      </a>
      , an app I built to explore the municipalities of Portugal.
    </p>
  )
}
