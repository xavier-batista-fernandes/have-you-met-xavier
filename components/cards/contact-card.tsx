import { GitHubIcon } from '@/components/icons/github-icon'
import { LinkedInIcon } from '@/components/icons/linkedin-icon'
import { BellIcon } from '../icons/bell.icon'

export function ContactCard({ theme }: { theme: string }) {
  return (
    <div className="h-full overflow-y-scroll p-10">
      <div className="flex h-10 items-center gap-2">
        <BellIcon className="h-full" />
        <h1 className="text-2xl font-bold lg:text-3xl">
          REACH OUT AND SAY HELLO!
        </h1>
      </div>

      <p className="mb-2">
        I’d love to hear from you! Whether it’s feedback, collaboration, or a
        friendly hello, feel free to reach out via email:
      </p>

      <p className="mb-4">
        <a
          href="mailto:xavier-batista-fernandes@example.com"
          className="font-bold underline"
          style={{ color: theme }}
        >
          Send me an email
        </a>
      </p>

      <p className="mb-2">You can also find me on:</p>
      <div className="mb-4 flex gap-4">
        <a
          href="https://www.linkedin.com/in/xavier-batista-fernandes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-6 w-6" style={{ color: theme }}>
            <LinkedInIcon />
          </div>
        </a>
        <a
          href="https://github.com/xavier-batista-fernandes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-6 w-6" style={{ color: theme }}>
            <GitHubIcon />
          </div>
        </a>
      </div>

      <p className="mb-2">You can also download my CV here:</p>
      <a
        href="/Xavier_Batista_Fernandes_CV.pdf"
        download
        className="font-bold underline"
        style={{ color: theme }}
      >
        Download CV
      </a>
    </div>
  )
}
