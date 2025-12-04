export default function Numbers() {
  return (
    <section className="mt-10 space-y-8 md:mt-12">
      {/* Statistics bar */}
      <div className="mx-auto max-w-3xl rounded-3xl bg-white/75 px-6 py-4 shadow-xl backdrop-blur-md sm:px-10 sm:py-5">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center text-sm font-semibold tracking-tight text-primary sm:text-base md:text-lg">
          <span>Students Helped: 100+</span>
          <span className="mx-1 h-1 w-1 rounded-full bg-accent sm:h-1.5 sm:w-1.5" />
          <span>Success Rate: 90%</span>
        </div>
      </div>

      {/* Partner schools section */}
      <div className="mx-auto max-w-5xl rounded-3xl bg-white/10 px-6 py-8 shadow-2xl backdrop-blur-md sm:px-10 sm:py-10">
        <h2 className="mb-8 text-center text-xl font-semibold tracking-tight text-primary sm:text-2xl">
          Schools partnered with
        </h2>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="flex h-28 items-center justify-center rounded-2xl bg-white/70 text-sm font-medium text-accent shadow-md backdrop-blur-sm sm:h-32"
            >
              Partner School {card}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

