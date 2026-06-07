import { useState } from "react";
import { X } from "@boxicons/react";

export default function AlbumCard({ name, date, coverSrc, tracklist, accent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative w-full max-w-[320px]">
      {/* Card */}
      <div
        className="flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        style={{
          borderColor: `${accent}40`,
          background: "rgba(42, 38, 37, 0.9)",
        }}
      >
        <div className="relative overflow-hidden">
          <img
            src={coverSrc}
            alt={name}
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#231f20] via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-5 flex flex-col gap-3">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            {name}
          </h3>
          <p className="text-sm text-gray-400">{date}</p>
          <button
            onClick={() => setIsOpen(true)}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-[#231f20] bg-[#ffd800] hover:bg-[#ffe333] active:scale-95 transition-all duration-200 cursor-pointer text-sm uppercase tracking-wider"
          >
            Ver TrackList
          </button>
        </div>
      </div>

      {/* Tracklist Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-md border rounded-2xl p-6 shadow-2xl animate-slideUp"
            style={{
              background: "#1a1819",
              borderColor: `${accent}30`,
              boxShadow: `0 25px 50px -12px ${accent}15`,
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2a2625] hover:bg-[#d62420] text-white transition-colors duration-200 cursor-pointer"
              aria-label="Cerrar tracklist"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="mb-6 pb-4"
              style={{ borderBottom: `1px solid ${accent}33` }}
            >
              <h4
                className="text-lg md:text-xl font-bold uppercase tracking-wider"
                style={{ color: accent }}
              >
                {name}
              </h4>
              <p className="text-sm text-gray-400 mt-1">{date}</p>
            </div>

            <ol className="space-y-2.5 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {tracklist.map((track, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      background: `${accent}22`,
                      color: accent,
                    }}
                  >
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{track}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
