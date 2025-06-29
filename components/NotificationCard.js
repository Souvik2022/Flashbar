import Image from "next/image";

export default function NotificationCard({ icon, title, message, subtext, color, hideTitle }) {
  return (
    <div className="flex items-center bg-white rounded-2xl shadow-lg border border-base-300 px-4 py-3 gap-4 max-w-lg w-full min-h-[88px]">
      <div className="flex-shrink-0">
        <Image src={icon} alt={title} width={40} height={40} className="rounded-lg" />
      </div>
      <div className="flex flex-col text-left">
        {!hideTitle && (
          <span className={`font-semibold text-sm mb-1 ${color}`}>{title}</span>
        )}
        <span className="font-bold text-lg leading-tight text-neutral-900">{message}</span>
        <span className="text-neutral-700 text-sm">{subtext}</span>
      </div>
    </div>
  );
} 