import { BlogIcon } from '@/components/atoms/icons/blog.icon';

export default function Blog() {
  return (
    <div className="flex flex-col gap-4 py-10">
      <div className="flex h-10 items-center gap-2">
        <BlogIcon className="h-full fill-black dark:fill-white" />
        <h1 className="text-[min(4vw,_2rem)] font-bold">I HAVE A BLOG.</h1>
      </div>

      <p className="leading-relaxed font-light">
        <span className="font-bold">Did you know I have a blog?</span> That's
        right. Every now and then I share my thoughts and experiences on various
        topics.
      </p>

      <p className="leading-relaxed">
        You will find me delving into{' '}
        <strong className="rounded px-1 font-normal">web development</strong>{' '}
        topics I struggled with in the past. Other articles are about{' '}
        <strong className="rounded px-1 font-normal">
          exploring new ideas
        </strong>{' '}
        and{' '}
        <strong className="rounded px-1 font-normal">
          sharing interesting resources
        </strong>
        .
      </p>

      <p>
        It's not ready yet for you to see. I'm implementing it's final touches.
        But feel free to come back later and check it out!
      </p>

      <p className="text-sm leading-relaxed text-gray-600">
        Oh and by the way: I implemented the whole thing using{' '}
        <strong className="rounded px-1">Next.js</strong>!
      </p>
    </div>
  );
}
