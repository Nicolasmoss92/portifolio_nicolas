"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 grid-rows-2">

          {/* Texto "Olá, meu nome é" com Poppins Bold */}
          <div className="bg-yellow-500">
            <div className="bg-white p-8 md:ml-32 lg:ml-64">
              <div>
                <p className="text-lg font-bold text-gray-700" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Olá, meu nome é
                </p>

                {/* Nome "Ana Maria" com Roboto Flex */}
                <h1 className="text-5xl font-bold mb-2" style={{ fontFamily: "Roboto Flex, sans-serif" }}>
                  Ana Maria
                </h1>

                {/* Texto "Sou desenvolvedor de software" com Poppins Regular */}
                <p className="text-2xl font-light text-gray-500" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Sou desenvolvedor de software na DBServer.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500">
            <div className="mx-auto ml-0 mt-6 w-56 h-58">
              <img
                src="/nicolasPerfil.jpeg"
                alt="Foto de perfil"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="bg-green-500">
            <div className="bg-yellow-200 p-8 md:ml-32 lg:ml-64">
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Sobre mim</h2>
                <p style={{ fontFamily: "Roboto Flex, sans-serif" }}>
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
                {/* Título Habilidades */}
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Habilidades
                </h2>

                {/* Lista de habilidades */}
                <ul className="space-y-4">
                  {/* HTML */}
                  <li className="flex items-center">
                    <p className="text-xl font-medium mr-4 w-24">HTML</p>
                    <div className="flex space-x-2">
                      {/* Círculos preenchidos */}
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                    </div>
                  </li>

                  {/* CSS */}
                  <li className="flex items-center">
                    <p className="text-xl font-medium mr-4 w-24">CSS</p>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                    </div>
                  </li>

                  {/* JavaScript */}
                  <li className="flex items-center">
                    <p className="text-xl font-medium mr-4 w-24">JavaScript</p>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                    </div>
                  </li>

                  {/* React */}
                  <li className="flex items-center">
                    <p className="text-xl font-medium mr-4 w-24">React</p>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                    </div>
                  </li>

                  {/* Node */}
                  <li className="flex items-center">
                    <p className="text-xl font-medium mr-4 w-24">Node</p>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <p className="text-xl font-medium mr-4 w-24">Node</p>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                    </div>
                  </li>
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
