'use client';

export default function ProfileImage() {
    return (
      <div className="bg-white flex justify-left items-left">
        <div className="mt-20 ml-8">
          <img
            src="/nicolasPerfil.jpeg"
            alt="Foto de perfil"
            className="object-cover w-[450px] h-[500px]"
          />
        </div>
      </div>
    );
  }