import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServerStatus from "@/components/ServerStatus";
import Features from "@/components/Features";
import Ranks from "@/components/Ranks";
import Rules from "@/components/Rules";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="
      min-h-screen
      bg-black
      text-white
      overflow-x-hidden
      "
    >
      <Navbar />

      <Hero />

      <ServerStatus />

      <Features />

      <Ranks />

      <Rules />

      <Footer />
    </main>
  );
}
