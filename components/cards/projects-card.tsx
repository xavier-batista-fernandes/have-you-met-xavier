// TODO: Have project details slide to the left side! Moving the whole deck a bit to the right.

import { HammerIcon } from "../icons/hammer.icon";

// For mobile this could be a modal.
export function ProjectsCard() {
  return (
    <div>
      <div className="flex gap-2 h-10 items-center">
        <HammerIcon className="h-full" />
        <h1 className="text-3xl font-bold">WHAT I HAVE BEEN UP TO.</h1>
      </div>

      <p className="mt-5">
        I'm a coffee lover. They do say that developers are machines that turn coffee into code.
        That's me: I have a thousand of new ideas in my mind that I would like to implement. Some of
        them actually come to life, and I invite you to have a look at them!
      </p>

      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong>Terras Lusas (2024)</strong> – For map lovers and explorers. A place where you get
          to know where Portuguese municipalities are located.
        </li>
        <li>
          <strong>IPMA+ (2025)</strong> – Automating the process of getting weather data that
          otherwise would be lost overtime.
        </li>
        <li>
          <strong>Lunch Tram (2025)</strong> – Helping collect hungry colleagues for lunch meals.
        </li>
      </ul>
    </div>
  );
}
