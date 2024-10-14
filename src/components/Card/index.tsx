"use client";

import { ProjectCardProps } from "@/types/projectCard";

export default function ProjectCard({ title, description, technologies, imageUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-xs">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-red-600 mb-2">{technologies}</p>
        <p className="text-sm text-gray-700">{description}</p>
        <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded">Acessar</button>
      </div>
    </div>
  );
}
