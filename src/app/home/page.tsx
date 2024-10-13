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
          <div className="bg-white">
            <div className="bg-white p-8 md:ml-32 lg:ml-64 mt-10">
              <div>
                <p className="text-lg font-bold text-gray-700 leading-7" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Olá, meu nome é
                </p>

                {/* Nome "Nicolas Moss" com Roboto Flex */}
                <h1 className="text-5xl font-bold mb-2 leading-snug" style={{ fontFamily: "Roboto Flex, sans-serif" }}>
                  Nicolas Moss
                </h1>

                {/* Texto "Sou desenvolvedor de software" com Poppins Regular */}
                <p className="text-2xl font-light text-gray-500 leading-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Sou desenvolvedor de software na DBServer.
                </p>
              </div>
            </div>
          </div>

          {/* Imagem de perfil */}
          <div className="bg-white flex justify-left items-left">
            <div className="mt-20 ml-8">
              <img
                src="/nicolasPerfil.jpeg"
                alt="Foto de perfil"
                className="object-cover"
                style={{ width: '450px', height: '500px' }}
              />
            </div>
          </div>

          {/* Sobre mim */}
          <div className="bg-white">
            <div className="bg-white p-8 md:ml-32 lg:ml-64">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Sobre mim
              </h2>
              <p style={{ fontFamily: "Roboto Flex, sans-serif" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna,
                euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed,
                accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem.
              </p>
            </div>
          </div>

          {/* Habilidades */}
          <div className="bg-white">
            <div className="bg-white">
              <div className="bg-white p-8 md:mr-32 lg:mr-64">
                {/* Título Habilidades */}
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Habilidades
                </h2>

                <div className="ml-4 mt-2">
                  <ul className="space-y-4">
                    {/* NODE */}
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">NODE</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>

                    {/* Outros itens de habilidades seguem o mesmo padrão */}
                    {/* PYTHON */}
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">PYTHON</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">JAVASCRIPT</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">REACT</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">NESTJS</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">NEXTJS</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">TYPESCRIPT</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">TAILWIND</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">DOCKER</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">MYSQL</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        marginRight: '8px',
                      }}></span>
                      <p className="text-xl font-medium mr-4 w-24">POSTEGRES</p>
                      <div className="flex space-x-1 ml-6">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                        <div className="w-6 h-6 border-2 border-yellow-500 rounded-full"></div>
                      </div>
                    </li>
                    {/* Continuar com os demais itens */}
                    {/* ... */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
