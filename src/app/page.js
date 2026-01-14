import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center gap-16 px-6 py-24 text-center sm:text-left">
        <header className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Welcome to Shivam Krishan's Portfolio
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A modern, fast, and scalable web application built with Next.js and
            Tailwind CSS.
          </p>
        </header>

        <section className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
            <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
              Fast
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Optimized for performance and smooth user experience.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
            <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
              Scalable
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Built to grow with your ideas and users.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
            <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
              Customizable
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Easy to modify and adapt for any use case.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="flex h-12 items-center justify-center rounded-full bg-black px-8 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Get Started
          </a>
          <a
            href="#"
            className="flex h-12 items-center justify-center rounded-full border border-black/10 px-8 text-black transition hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
