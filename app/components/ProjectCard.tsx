"use client";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
  currentImageIndex: number;
  onPreviousImage: () => void;
  onNextImage: () => void;
  onSelectImage: (index: number) => void;
  skillIcons: { [key: string]: string };
}

export default function ProjectCard({
  project,
  currentImageIndex,
  onPreviousImage,
  onNextImage,
  onSelectImage,
  skillIcons,
}: ProjectCardProps) {
  const currentImage = project.images[currentImageIndex];

  return (
    <div className="bg-[#0f172a] rounded-xl border border-[#1e293b] overflow-hidden hover:border-[#22d3ee] transition-all duration-300 hover:shadow-2xl hover:shadow-[#22d3ee]/20 md:hover:scale-[1.02]">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
        {/* Image Carousel */}
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="relative w-full aspect-video md:aspect-auto md:h-80 rounded-lg overflow-hidden bg-[#1e293b] border border-[#334155] group shadow-lg">
            {/* Main Image */}
            <img
              src={currentImage}
              alt={`${project.title} slide ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Previous Button */}
            {project.images.length > 1 && (
              <button
                onClick={onPreviousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {project.images.length > 1 && (
              <button
                onClick={onNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image Counter */}
            {project.images.length > 1 && (
              <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full font-semibold">
                {currentImageIndex + 1}/{project.images.length}
              </div>
            )}
          </div>

          {/* Dot Indicators */}
          {project.images.length > 1 && (
            <div className="flex gap-2 justify-center">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onSelectImage(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "w-6 bg-[#22d3ee]"
                      : "w-2 bg-slate-500 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="flex flex-col justify-between">
          {/* Header */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-xs md:text-base font-semibold text-[#22d3ee] mb-3 md:mb-4 uppercase tracking-wider">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.tech.map((tech) => (
                <div key={tech} className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#1e293b] rounded-full border border-[#334155] hover:border-[#22d3ee] transition-all duration-200">
                  <img
                    src={`https://skillicons.dev/icons?i=${
                      skillIcons[tech as keyof typeof skillIcons] ||
                      tech.toLowerCase()
                    }`}
                    alt={tech}
                    className="w-5 h-5 md:w-5 md:h-5"
                    title={tech}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-slate-300 text-xs md:text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 md:px-6 py-2.5 md:py-3.5 bg-[#22d3ee] text-[#020617] font-semibold rounded-lg hover:bg-[#06b6d4] hover:shadow-lg hover:shadow-[#22d3ee]/30 transition-all duration-200 text-center text-sm md:text-base"
            >
              Live URL
            </a>
              
            {/*uncomment below if you want a button for github repo link */}
            {/*<a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 md:px-6 py-2.5 md:py-3.5 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded-lg hover:bg-[#22d3ee] hover:text-[#020617] hover:shadow-lg hover:shadow-[#22d3ee]/30 transition-all duration-200 text-center text-sm md:text-base"
            >
              Open in GitHub
            </a>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
