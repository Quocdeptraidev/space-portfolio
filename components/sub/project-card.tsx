import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo, RxExternalLink } from "react-icons/rx";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  tags,
  demoLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    
    <div className="w-[400px] bg-[#0e0e2c] border border-[#2A0E61] rounded-2xl shadow-lg hover:shadow-purple-600/30 hover:scale-[1.02] transition-all duration-300 flex flex-col">
      {/* Hình ảnh */}
      <div className="relative group overflow-hidden rounded-t-2xl">
        <Image
          src={src}
          alt={title}
          width={800}
          height={400}
          className="w-full h-[200px] object-cover rounded-t-2xl"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center gap-4">
          {/* Link Demo */}
          {demoLink !== "#" ? (
            <Link href={demoLink} target="_blank" rel="noreferrer noopener">
              <div className="p-3 rounded-full bg-white/10 border border-white text-white hover:bg-white hover:text-black transition">
                <RxExternalLink size={22} />
              </div>
            </Link>
          ) : (
            <button
              disabled
              className="p-3 rounded-full bg-white/10 border border-gray-400 text-gray-400 cursor-not-allowed"
              title="Private Repository"
            >
              <RxExternalLink size={22} />
            </button>
          )}
          {/* <Link href={demoLink} target="_blank" rel="noreferrer noopener">
            <div className="p-3 rounded-full bg-white/10 border border-white text-white hover:bg-white hover:text-black transition">
              <RxExternalLink size={22} />
            </div>
          </Link> */}
          {/* Link GitHub */}
          {githubLink !== "#" ? (
            <Link href={githubLink} target="_blank" rel="noreferrer noopener">
              <div className="p-3 rounded-full bg-white/10 border border-white text-white hover:bg-white hover:text-black transition">
                <RxGithubLogo size={22} />
              </div>
            </Link>
          ) : (
            <button
              disabled
              className="p-3 rounded-full bg-white/10 border border-gray-400 text-gray-400 cursor-not-allowed"
              title="Private Repository"
            >
              <RxGithubLogo size={22} />
            </button>
          )}
        </div>
      </div>

      {/* Nội dung */}
      <div className="flex flex-col flex-grow p-5">
        <h2 className="text-2xl font-semibold text-white leading-tight mb-2">
          {title}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-[6px] text-sm font-medium text-cyan-200 bg-gradient-to-r from-cyan-900/40 to-purple-900/40 rounded-full border border-cyan-700/40 shadow-sm hover:from-cyan-800/70 hover:to-purple-800/70 hover:text-white hover:border-cyan-400 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
