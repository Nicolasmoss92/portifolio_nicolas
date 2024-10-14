"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/Card";

export default function Project() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="bg-white flex flex-col py-10 px-5">
        <div className="mb-10 ml-24">
          <h1 className="text-2xl font-medium">Meus</h1>
          <h2 className="text-6xl font-bold leading-none">Projetos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-start ml-24 gap-4">
          <ProjectCard
            title="XXXXXXXX"
            description="Projeto XXXXXX"
            technologies="XXX, XXXX, XXXXX"
            imageUrl="/nicolasPerfil.jpeg"
          />
          <ProjectCard
            title="XXXXXXXXXXXX"
            description="Projeto XXXXXXXXXX"
            technologies="XXX, XXXX, XXXX"
            imageUrl="/nicolasPerfil.jpeg"
          />
          <ProjectCard
            title="XXXXXXXX"
            description="Projeto XXXXXX"
            technologies="XXXXXX, XXXXXXX"
            imageUrl="/nicolasPerfil.jpeg"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
