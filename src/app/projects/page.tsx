"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/Card/projectCrad";

export default function Project() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="bg-white flex flex-col py-10 px-5">
        {/* Título do projeto */}
        <div className="mb-10 ml-24">
          <h1 className="text-2xl font-medium">Meus</h1>
          <h2 className="text-6xl font-bold leading-none">Projetos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-start ml-24 gap-4">
          <ProjectCard
            title="Calculadora"
            description="Sua descrição sobre o projeto não pode ultrapassar 7 linhas."
            technologies="HTML, CSS, NODE"
            imageUrl="/nicolasPerfil.jpeg"
          />
          <ProjectCard
            title="Blog responsivo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            technologies="HTML, CSS, NODE"
            imageUrl="/nicolasPerfil.jpeg"
          />
          <ProjectCard
            title="Mobile"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            technologies="Android Studio, Kotlin"
            imageUrl="/nicolasPerfil.jpeg"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
