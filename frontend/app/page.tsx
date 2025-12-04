import Hero from "./components/Hero";
import Numbers from "./components/Numbers";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      {/* Full-page hero / landing section */}
      <Hero />
      {/* Statistics & partner schools section */}
      <section className="bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Numbers />
        </div>
      </section>
    </main>
  );
}
