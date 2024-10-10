"use client";

import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header fixo no topo */}
      <header className="bg-gray-100 w-full">
        <Header />
      </header>

      {/* Divisão da página em duas colunas */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Coluna da Esquerda */}
        <section className="flex-1 flex justify-center items-center bg-blue-200">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Seção Esquerda</h1>
            <p className="mt-4 text-lg">Conteúdo ou imagem da esquerda.</p>
          </div>
        </section>

        {/* Coluna da Direita */}
        <section className="flex-1 flex justify-center items-center bg-green-200">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Seção Direita</h1>
            <p className="mt-4 text-lg">Conteúdo ou imagem da direita.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
