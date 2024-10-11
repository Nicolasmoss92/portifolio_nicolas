"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FaCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 p-0">
        {/* Quadrante 1 */}
        <div className="bg-white flex flex-col justify-start items-start p-8">
          <div className="mx-auto text-left mr-0">
            <p className="text-lg font-medium text-gray-700">Olá, meu nome é</p>
            <h1 className="text-5xl font-bold mb-2">Nicolas Moss</h1>
            <p className="text-2xl font-light text-gray-500">
              Sou desenvolvedor de software na DBServer.
            </p>
          </div>
        </div>

        {/* Quadrante 2 */}
        <div className="bg-white flex flex-col justify-start items-start">
          <div className="mx-auto text-right ml-0 mt-10 w-56 h-58">
            <img
              src="/nicolasPerfil.jpeg"
              alt="Foto de perfil"
              className="object-cover w-full h-full" // Ajusta a imagem para ocupar todo o espaço
            />
          </div>
        </div>
      </main >
      <Footer />
    </div >
  );
}
