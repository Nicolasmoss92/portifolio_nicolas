import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-blue-100 w-full h-24 flex items-center justify-between px-8 border border-blue-300">
      <div className="flex items-center space-x-20">
        <div className="text-3xl font-bold text-blue-900">{'<db>'}</div>
        <nav className="flex space-x-12 text-blue-900 font-semibold">
          <a href="#sobre">Sobre</a>
          <a href="#curriculo">Currículo</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </div>

      <div className="flex space-x-8 text-blue-900 mr-10">
        <div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
            </a>
        </div>
        <div>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
            </a>
        </div>
      </div>
    </header>
  );
}
