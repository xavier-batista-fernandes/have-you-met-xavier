import { TERRAS_LUSAS_URL } from "@/lib/pages";
import { PersonIcon } from "../icons/person.icon";

export function AboutMeCard({ theme }: { theme: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 h-10 items-center">
        <PersonIcon className="h-full" />
        <h1 className="text-3xl font-bold">HAVE YOU MET ME?</h1>
      </div>

      <p className="leading-relaxed font-light">
        <span className="font-bold">Hello! Happy to see you roaming this far on the internet.</span>{" "}
        Welcome to my little corner of the web!
      </p>

      <p>
        My name is <strong style={{ color: theme }}>Xavier Fernandes</strong>. I'm 25 years old,
        born in Leiria , and currently based in Lisbon. I work as a Software Engineer at{" "}
        <em style={{ color: theme }}>Volkswagen Digital Solutions</em>.
      </p>

      <p className="leading-relaxed">
        I’ve been a fullstack developer for about 2 years, and during my MSc I had the pleasure of
        being a teaching assistant. I enjoy building interactive apps with a touch of humor 😄, and
        I’m passionate about{" "}
        <strong className="text-white px-1 rounded font-normal" style={{ backgroundColor: theme }}>
          accessibility
        </strong>{" "}
        and{" "}
        <strong className="text-white px-1 rounded font-normal" style={{ backgroundColor: theme }}>
          clean architecture
        </strong>
        .
      </p>

      <p className="leading-relaxed">
        Outside of work, I’m a Rubik’s Cube enthusiast. I like to solve it as fast as I can, and you
        can check my official stats here. I enjoy solving a good puzzle. At home, I always have an
        ongoing jigsaw puzzle slowly being assembled over time.
      </p>

      <p className="text-sm text-gray-600 leading-relaxed">
        <span className="font-bold">Note:</span> Don’t know where{" "}
        <button
          type="button"
          onClick={() => {
            window.open("https://www.google.com/maps/search/?api=1&query=Leiria", "_blank");
          }}
          className="inline-block text-transparent bg-clip-text cursor-pointer font-bold"
          style={{
            backgroundImage: `linear-gradient(90deg, ${theme}, #4a5565)`,
            backgroundSize: "300% 100%",
            animation: "moveGradient 3s linear infinite",
          }}
        >
          Leiria
        </button>{" "}
        is? Hop onto{" "}
        <a
          className="text-white px-1 rounded"
          style={{ backgroundColor: theme }}
          href={TERRAS_LUSAS_URL}
        >
          Terras Lusas
        </a>
        . It's an app to learn about different Portuguese municipalities.
      </p>
    </div>
  );
}
