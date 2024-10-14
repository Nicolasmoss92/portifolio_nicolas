"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutMeSection from "@/components/Home/aboutMe";
import IntroSection from "@/components/Home/introSection";
import ProfileImage from "@/components/Home/profileImage";
import Skills from "@/components/Home/skills";
import skills from "@/types/skillSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 grid-rows-2">
          <div className="bg-white">
            <IntroSection />
          </div>

          <ProfileImage />

          <AboutMeSection />

          <Skills skills={skills} />

        </div>
      </main>
      <Footer />
    </div>
  );
}
