"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Curriculum() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="flex justify-center items-center py-10">
          <iframe
            src="/NicolasCV.pdf"
            width="80%"
            height="800px"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
