import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServerStatus from "@/components/ServerStatus";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <ServerStatus />
    </main>
  );
}
