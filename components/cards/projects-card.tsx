// TODO: Have project details slide to the left side! Moving the whole deck a bit to the right.
// For mobile this could be a modal.
export function ProjectsCard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">WHAT I HAVE BEEN UP TO.</h1>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong>Municipalities (2023)</strong> – a daily game to guess Portuguese municipalities.
        </li>
        <li>
          <strong>Rubik’s Rush (2024)</strong> – a Rubik’s Cube timer & scramble generator.
        </li>
        <li>
          <strong>Terras Lusas (2025)</strong> – interactive map app with “Marathon” mode.
        </li>
        <li>
          <em>Coming soon…</em> 😉
        </li>
      </ul>
    </div>
  );
}
