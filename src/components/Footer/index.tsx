"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-100 h-20 flex flex-col items-center justify-center shadow-4xl px-6 w-full">
      <div className="flex flex-row items-center justify-center space-x-12 max-w-screen-lg">
        {/* Coluna esquerda: Logo e ícones das redes sociais */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img src="/logoDBF.png" alt="Logo" className="h-20 mb-4" />
        </div>
      </div>
    </footer>
  );
};