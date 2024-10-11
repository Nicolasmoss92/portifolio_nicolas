"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FaCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Responsividade: de uma coluna em telas pequenas, para duas colunas em telas maiores */}
        <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 grid-rows-2">

          <div className="bg-yellow-500">
            <div className="bg-white p-8 md:ml-32 lg:ml-64">
              <div>
                <p className="text-lg font-medium text-gray-700">Olá, meu nome é</p>
                <h1 className="text-5xl font-bold mb-2">Nicolas Moss</h1>
                <p className="text-2xl font-light text-gray-500">
                  Sou desenvolvedor de software na DBServer.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500">
            {/* Mantém a imagem com largura total e centralizada */}
            <div className="mx-auto ml-0 mt-6 w-56 h-58">
              <img
                src="/nicolasPerfil.jpeg"
                alt="Foto de perfil"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="bg-green-500">
            {/* Margem responsiva para diferentes tamanhos de tela */}
            <div className="bg-yellow-200 p-8 md:ml-32 lg:ml-64">
              <div>
                <h2>Sobre mim</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna,
                  euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed,
                  accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem.
                  Sed diam urna, euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu
                  risus sed, accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-500">
            <div className="bg-red-200" >
              <div className="bg-white p-8 md:mr-32 lg:mr-64">
                <h2 className="text-xl font-semibold mb-4">Habilidades</h2>
                <ul className="space-y-2">
                  {[
                    { skill: "JavaScript", level: 4 },
                    { skill: "React", level: 5 },-+
                    // Continue com as habilidades
                  ].map(({ skill, level }) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-32">{skill}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <FaCircle
                            key={index}
                            className={`mx-1 ${index < level ? "text-yellow-500" : "text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
