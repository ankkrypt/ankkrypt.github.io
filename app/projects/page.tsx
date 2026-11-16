"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const skillIcons = {
    Python: "python",
    JavaScript: "javascript",
    TypeScript: "typescript",
    Java: "java",
    C: "c",
    "C++": "cpp",
    React: "react",
    "Next.js": "nextjs",
    TailwindCSS: "tailwind",
    "Node.js": "nodejs",
    Express: "express",
    MongoDB: "mongodb",
    MySQL: "mysql",
    PostgreSQL: "postgresql",
    Docker: "docker",
    Git: "git",
    GitHub: "github",
    Linux: "linux",
    Bash: "bash",
    "VS Code": "vscode",
  };

  // Add your projects here
  const projects = useMemo<Project[]>(
    () => [
      {
        id: 1,
        title: "Ankkrypt Stremio All-In-One Addon",
        description: "Easy to use aggregator for Movies, Series, TV, YouTube.",
        images: [
          "/projects/AnkkryptStremioAddon/StremioAddonHomePage.avif",
          "/projects/AnkkryptStremioAddon/StremioAddonInstallation.avif",
          "/projects/AnkkryptStremioAddon/StremioAddonMovieStream.avif",
          "/projects/AnkkryptStremioAddon/StremioAddonSeriesStream.avif",
          "/projects/AnkkryptStremioAddon/StremioAddonIPTVCatalogPreview.avif",
          "/projects/AnkkryptStremioAddon/StremioAddonSearchResult.avif",
          "/projects/AnkkryptStremioAddon/StremioAddonIPTVCatalog.avif",
        ],
        tech: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://stremio-addon.ankkrypt.me",
        githubUrl: "https://github.com/ankkrypt/StremioAddon_Ankkrypt",
      },
    ],
    [],
  );

  // Auto-rotate images
  useEffect(() => {
    const intervals = projects.map((project) => {
      return setInterval(() => {
        setCurrentImageIndex((prev) => ({
          ...prev,
          [project.id]: ((prev[project.id] ?? 0) + 1) % project.images.length,
        }));
      }, 5000); // Change image every 5 seconds
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [projects]);

  const goToPreviousImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        ((prev[projectId] ?? 0) - 1 + totalImages) % totalImages,
    }));
  };

  const goToNextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] ?? 0) + 1) % totalImages,
    }));
  };

  const goToImage = (projectId: number, imageIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: imageIndex,
    }));
  };

  return (
    <div className="min-h-screen bg-[#020617]">
      {/* Projects Header */}
      <section className="pt-24 pb-12 px-6 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="text-[#22d3ee] hover:text-[#06b6d4] transition-colors duration-200 text-sm font-mono"
            >
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-[#22d3ee]">Projects</span>
          </h1>
          <p className="text-slate-300 text-lg">
            Explore my featured projects showcasing full-stack development, system
            design, and problem-solving abilities.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                currentImageIndex={currentImageIndex[project.id] || 0}
                onPreviousImage={() =>
                  goToPreviousImage(project.id, project.images.length)
                }
                onNextImage={() =>
                  goToNextImage(project.id, project.images.length)
                }
                onSelectImage={(index) => goToImage(project.id, index)}
                skillIcons={skillIcons}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1e293b]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            Built with Next.js & TailwindCSS by Ankit Dhotre
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © 2026 • Code • Build • Evolve
          </p>
        </div>
      </footer>
    </div>
  );
}
