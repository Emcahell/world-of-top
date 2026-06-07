import { useState } from "react";
import AlbumCard from "./AlbumCard";

export default function DiscografiaContent({ eras, albums }) {
  const [activeTab, setActiveTab] = useState("eras");

  return (
    <>
      {/* Tab Selector */}
      <div className="flex justify-center items-end w-full max-w-md mx-auto gap-2 px-4 mb-0">
        <button
          onClick={() => setActiveTab("eras")}
          className={`flex-1 py-3 px-6 rounded-t-2xl font-bold text-sm md:text-base uppercase tracking-wider transition-all duration-300 cursor-pointer ${
            activeTab === "eras"
              ? "bg-[#231f20] text-white shadow-lg shadow-[#231f20]/50"
              : "bg-[#8080807e] text-gray-300 hover:bg-[#808080aa]"
          }`}
        >
          Eras
        </button>
        <button
          onClick={() => setActiveTab("albums")}
          className={`flex-1 py-3 px-6 rounded-t-2xl font-bold text-sm md:text-base uppercase tracking-wider transition-all duration-300 cursor-pointer ${
            activeTab === "albums"
              ? "bg-[#231f20] text-white shadow-lg shadow-[#231f20]/50"
              : "bg-[#8080807e] text-gray-300 hover:bg-[#808080aa]"
          }`}
        >
          Álbumes
        </button>
      </div>

      {/* Content Container */}
      <div className="w-full bg-[#231f20]">
        {/* ============================== */}
        {/* ERAS SECTION                   */}
        {/* ============================== */}
        {activeTab === "eras" && (
          <section className="block">
            <div className="text-center mb-8 md:mb-12 px-4 pt-8">
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#ffd800] uppercase tracking-wider">
                Narrativa de Twenty One Pilots a través de los álbumes.
              </p>
            </div>

            <div className="flex flex-col">
              {eras.map((era) => (
                <div
                  key={era.id}
                  className="era-section relative w-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${era.coverSrc})` }}
                >
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

                  <div className="relative z-10 flex flex-col items-center py-16 md:py-24 px-4 md:px-8 lg:px-16">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
                      <h2
                        className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-center"
                        style={{ color: era.accent }}
                      >
                        {era.title}
                      </h2>
                      <img
                        src={era.logoSrc}
                        alt={`${era.title} Logo`}
                        className="w-24 md:w-32 lg:w-40 object-contain drop-shadow-lg"
                        loading="lazy"
                      />
                    </div>

                    <div
                      className="max-w-4xl w-full text-gray-200 leading-relaxed text-sm md:text-base lg:text-lg era-content"
                      dangerouslySetInnerHTML={{ __html: era.contentHtml }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================== */}
        {/* ALBUMS SECTION                 */}
        {/* ============================== */}
        {activeTab === "albums" && (
          <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#ffd800] uppercase tracking-wider">
                Álbumes de Twenty One Pilots.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto place-items-center">
              {albums.map((album) => (
                <AlbumCard
                  key={album.id}
                  name={album.name}
                  date={album.date}
                  coverSrc={album.coverSrc}
                  tracklist={album.tracklist}
                  accent={album.accent}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
