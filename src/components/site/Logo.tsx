import logoSrc from "@/assets/vibe-logo.png";

export function Logo({ className = "h-8 md:h-10" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Vibe Packaging"
      className={`${className} w-auto select-none`}
      draggable={false}
    />
  );
}
