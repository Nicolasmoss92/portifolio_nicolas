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
        <section className="flex-1 flex justify-center items-center bg-white p-6">
          <div className="max-w-md text-left">
            <p className="text-lg font-medium text-gray-700">Olá, meu nome é</p>
            <h1 className="text-5xl font-bold mb-2">Ana Maria</h1>
            <p className="text-2xl font-light text-gray-500">
              Sou trainee de desenvolvimento de software na DBServer.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna, 
                euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus 
                sed, accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum 
                sollicitudin sem. Sed diam urna, euismod at porttitor in, dignissim eu 
                mauris. In sem nibh, viverra eu risus sed, accumsan luctus dui. Fusce ex 
                neque, maximus quis dui et, rutrum sollicitudin sem.
              </p>
            </div>
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
