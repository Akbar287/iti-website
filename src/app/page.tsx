"use client";

import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Community from "@/components/Community";
import Events from "@/components/Events";
import FocusTopics from "@/components/FocusTopics";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Resources from "@/components/Resources";
import React from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Set loaded state to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen transition-opacity w-full duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <Hero />
      <About />
      <Advantages />
      <Community />
      <Events />
      <News />
      <Resources />
      <FocusTopics />
      <Footer />
    </div>
  );
}
