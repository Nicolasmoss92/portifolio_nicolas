'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link'; 

interface HeaderProps {}

export default function Header({}: HeaderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-100 w-full h-20 flex items-center justify-between px-4 sm:px-8">
      <div className="flex items-center space-x-6 sm:space-x-20">
        <div className="w-20 h-20">
          <a href="https://db.tec.br/" target="_blank" rel="noopener noreferrer">
            <img
              src="/logoDB.png"
              alt="Logo DB"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        
        <nav className="hidden sm:flex space-x-4 sm:space-x-12 text-blue-900 font-semibold">
          <Link href="/home" className="hover:underline">Sobre</Link>
          <Link href="/curriculum" className="hover:underline">Currículo</Link>
          <Link href="/projects" className="hover:underline">Projetos</Link>
        </nav>
      </div>

      <div className="hidden sm:flex space-x-4 sm:space-x-8 text-blue-900 mr-4 sm:mr-10">
        <a href="https://github.com/Nicolasmoss92" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-moss-02b7871b5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
      </div>

      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-blue-900 focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-24 left-0 w-full bg-blue-100 flex flex-col items-center space-y-4 py-4 text-blue-900 font-semibold sm:hidden">
          <Link href="/sobre" className="hover:underline" onClick={toggleMenu}>Sobre</Link>
          <Link href="/curriculo" className="hover:underline" onClick={toggleMenu}>Currículo</Link>
          <Link href="/projetos" className="hover:underline" onClick={toggleMenu}>Projetos</Link>

          <div className="flex flex-col items-center space-y-4">
            <a href="https://github.com/Nicolasmoss92" target="_blank" rel="noopener noreferrer" aria-label="Github">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nicolas-moss-02b7871b5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
