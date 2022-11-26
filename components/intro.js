import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="h-[50vh] py-10 bg-indigo-500 flex-col flex items-center md:justify-between ">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        BIEN SÛR
      </h1>

      <p>Hi, I'm a very very thiq boi and i like to make the musicsss :D</p>
      <div className="flex flex-row gap-10">
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Soundcloud
        </a>
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Twitter
        </a>
      </div>
    </section>
  );
}
