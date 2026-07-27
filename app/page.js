import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServerStatus from "@/components/ServerStatus";
import Features from "@/components/Features";
import Ranks from "@/components/Ranks";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <ServerStatus />

      <Features />

      <Ranks />

    </main>
  );
}
