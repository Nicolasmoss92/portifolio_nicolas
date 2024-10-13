'use client';

export default function IntroSection() {
  return (
    <div className="bg-white">
      <div className="bg-white p-8 md:ml-32 lg:ml-64 mt-10">
        <p className="text-lg font-bold text-gray-700 leading-7 font-poppins">
          Olá, meu nome é
        </p>
        <h1 className="text-5xl font-bold mb-2 leading-snug font-roboto">
          Nicolas Moss
        </h1>
        <p className="text-2xl font-light text-gray-500 leading-6 font-poppins">
          Sou desenvolvedor de software na DBServer.
        </p>
      </div>
    </div>
  );
}
