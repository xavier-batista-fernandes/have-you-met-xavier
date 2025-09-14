import { BlogIcon } from "@/components/icons/blog.icon";

export default function Blog() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 h-10 items-center">
        <BlogIcon className="h-full fill-white" />
        <h1 className="text-3xl font-bold">I HAVE A BLOG.</h1>
      </div>

      <p className="leading-relaxed font-light">
        <span className="font-bold">Did you know I have a blog?</span> That's right. Every now and
        then I share my thoughts and experiences on various topics.
      </p>

      <p className="leading-relaxed">
        You will find me delving into{" "}
        <strong className="text-white px-1 rounded font-normal">web development</strong> topics I
        struggled with in the past. Other articles are about{" "}
        <strong className="text-white px-1 rounded font-normal">exploring new ideas</strong> and{" "}
        <strong className="text-white px-1 rounded font-normal">
          sharing interesting resources
        </strong>
        .
      </p>

      <p>
        It's not ready yet for you to see. I'm implementing it's final touches. But feel free to
        come back later and check it out!
      </p>

      <p className="text-sm text-gray-600 leading-relaxed">
        Oh and by the way: I implemented the whole thing using{" "}
        <strong className="text-white px-1 rounded">Next.js</strong>!
      </p>
    </div>
  );
}
