'use-client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu de hambúrguer

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-100 w-full h-24 flex items-center justify-between px-4 sm:px-8 border border-blue-300">
      <div className="flex items-center space-x-6 sm:space-x-20">
        <div className="w-20 h-20"> {/* Aumente a largura e altura aqui */}
          <img
            src="/logoDB.png"  // Substitua pelo caminho correto da sua imagem
            alt="Logo DB"
            className="w-full h-full object-contain"  // Adicione essas classes para garantir que a imagem ocupe todo o espaço da div
          />
        </div>

        {/* Navegação para telas grandes */}
        <nav className="hidden sm:flex space-x-4 sm:space-x-12 text-blue-900 font-semibold">
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#curriculo" className="hover:underline">Currículo</a>
          <a href="#projetos" className="hover:underline">Projetos</a>
        </nav>
      </div>

      {/* Ícones sociais para telas grandes */}
      <div className="hidden sm:flex space-x-4 sm:space-x-8 text-blue-900 mr-4 sm:mr-10">
        <a href="https://github.com/Nicolasmoss92" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-moss-02b7871b5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Botão de hambúrguer para telas pequenas */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-blue-900 focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Alterna entre o ícone de abrir e fechar */}
        </button>
      </div>

      {/* Menu de hambúrguer aberto em telas pequenas */}
      {isOpen && (
        <nav className="absolute top-24 left-0 w-full bg-blue-100 flex flex-col items-center space-y-4 py-4 text-blue-900 font-semibold border-t border-blue-300 sm:hidden">
          <a href="#sobre" className="hover:underline" onClick={toggleMenu}>Sobre</a>
          <a href="#curriculo" className="hover:underline" onClick={toggleMenu}>Currículo</a>
          <a href="#projetos" className="hover:underline" onClick={toggleMenu}>Projetos</a>

          {/* Texto no menu de hambúrguer */}
          <div className="flex flex-col items-center space-y-4">
            <a href="https://github.com/Nicolasmoss92" target="_blank" rel="noopener noreferrer" aria-label="Github">
              GitHub {/* Texto em vez do ícone */}
            </a>
            <a href="https://www.linkedin.com/in/nicolas-moss-02b7871b5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn {/* Texto em vez do ícone */}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
