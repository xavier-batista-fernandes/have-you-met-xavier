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
              I was born in Figueira da Foz, a seaside city in Portugal’s
              Coimbra district, but grew up a bit further south in Ilha, a
              village in the Leiria district. I spent most of my childhood in a
              small, quiet village surrounded by trees near my parents’ house.
            </p>
            <p>
              Ilha means “island” in Portuguese, which often makes people think
              I’m from Madeira or the Azores — a misunderstanding that has led
              to a few funny moments. Although Leiria is in central Portugal,
              our accent sometimes makes people think I’m from the north.
            </p>
            <p>
              My home was always filled with music. My dad learned to play
              guitar at a young age and turned that passion into a career. He’s
              been teaching music for over 35 years and filled our house with
              classics from Pink Floyd, The Rolling Stones, and Dire Straits. My
              brother and I took it a step further and became regular enjoyers
              of all sorts of metal subgenres. I still listen to it today,
              though I’ve grown to appreciate bossa nova, blues, and lofi when I
              want something calmer.
            </p>
            <p>
              It was a bit of a drive from our house to the school I attended —
              where my father also happened to teach. Most of my classmates
              lived closer to town, so weekends back home were usually quiet. I
              had neighbors my age, but I often found my own ways to stay
              entertained.
            </p>
            <FooterNote />
            <p>
              Having a computer at home helped a lot. I spent countless hours
              exploring the digital world, playing video games, and chatting
              with strangers online — which, honestly, is how I learned most of
              my English.
            </p>
            <p>
              At school, I was drawn to math more than anything else. Solving
              problems and learning the rules behind them gave me real
              satisfaction. Looking back, that’s probably where my curiosity for
              logic and structure started.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-[#5b5b5b]">ABOUT MY HOBBIES</h2>
          <div className="flex flex-col gap-6">
            <p>
              That curiosity eventually led me to the{' '}
              <strong>Rubik’s Cube</strong>. What started as a random challenge
              turned into a full-on obsession. I began going to competitions
              around Portugal, met some awesome people, and somehow ended up in
              the world rankings.
            </p>
            <p>
              I’m also a fan of <strong>jigsaw puzzles</strong> and usually have
              one going somewhere at home. There’s something relaxing about
              slowly fitting the pieces together until everything clicks. When
              the last one’s in place, I let it sit for a day or so... then pack
              it up and start a new one right away.
            </p>
            <p>
              Then there’s the whole world of <strong>board games</strong> —
              what’s not to love? Back in school, my friends and I would spend
              entire nights at our local café playing board and card games. We
              tried switching it up, but we always came back to <em>Catan</em>.
              Over time, we all became dangerously good at it. There were even
              days when we squeezed in a quick match between classes or right
              before the bus home.
            </p>
            <p>
              Somewhere along the way, all those interests — logic, puzzles, and
              building things — made me realize that{' '}
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
      <a className="rounded text-white" href={TERRAS_LUSAS_URL} target="_blank">
        Terras Lusas
      </a>
      , an app I built to explore the municipalities of Portugal.
    </p>
  )
}
