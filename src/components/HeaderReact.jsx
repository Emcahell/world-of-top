import React, { useState } from "react";
import { Menu, X } from "@boxicons/react";

export default function HeaderReact({
  imgBg,
  imgLogoClancy,
  imgLogoClancyYellow,
  imgLogoTwentyOnePilots,
  imgLogoBlurryface,
  imgLogoTrench,
  imgLogoRab,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header Container */}
      <header
        className="relative w-full h-20 md:h-24 flex items-center justify-between px-6 md:px-12 bg-cover bg-center select-none z-40 border-b border-black/10"
        style={{ backgroundImage: `url(${imgBg})` }}
      >
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/15 z-0 pointer-events-none"></div>

        {/* Left Logo (Clancy / Yellow circular logo) */}
        <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
          <a href="/" className="hover:scale-105 transition-all duration-300">
            <img
              src={imgLogoClancyYellow}
              alt="Clancy Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            />
          </a>
        </div>

        {/* Center Logo (TWENTY ONE PILOTS) */}
        <div className="relative z-10 h-8 md:h-11 flex items-center justify-center max-w-[50%] md:max-w-[40%]">
          <img
            src={imgLogoTwentyOnePilots}
            alt="Twenty One Pilots"
            className="h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* Right Menu Button */}
        <div className="relative z-10 flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="p-1.5 text-[var(--Yellow)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Abrir menú"
          >
            <Menu className="w-9 h-9" />
          </button>
        </div>
      </header>

      {/* Slide-out Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-cover bg-center z-50 shadow-[0_0_40px_rgba(0,0,0,0.7)] transition-transform duration-500 ease-out flex flex-col justify-between p-8 md:p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundImage: `url(${imgBg})` }}
      >
        {/* Dark Reddish Overlay inside drawer for readability */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm z-0"></div>

        {/* Top bar inside Drawer */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Close button on top left */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-[var(--Yellow)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Cerrar menú"
          >
            <X />
          </button>

          {/* Logo on top right */}
          <div className="h-7 md:h-8 flex items-center justify-end max-w-[60%]">
            <img
              src={imgLogoTwentyOnePilots}
              alt="Twenty One Pilots Logo"
              className="h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation links inside drawer */}
        <nav className="relative z-10 flex flex-col items-start gap-8 md:gap-10 my-auto pl-4 font-[var(--Roboto)]">
          <a
            href="/origen"
            className="text-[var(--Yellow)] text-3xl md:text-[38px] font-bold tracking-wide hover:translate-x-2 transition-transform duration-300"
          >
            Origen de la banda
          </a>
          <a
            href="/discografia"
            className="text-[var(--Yellow)] text-3xl md:text-[38px] font-bold tracking-wide hover:translate-x-2 transition-transform duration-300"
          >
            Eras y Álbumnes
          </a>
          <a
            href="/lore"
            className="text-[var(--Yellow)] text-3xl md:text-[38px] font-bold tracking-wide hover:translate-x-2 transition-transform duration-300"
          >
            Lore
          </a>
          <a
            href="/curiosidades"
            className="text-[var(--Yellow)] text-3xl md:text-[38px] font-bold tracking-wide hover:translate-x-2 transition-transform duration-300"
          >
            Curiosidades
          </a>
        </nav>

        {/* Bottom logos inside drawer */}
        <div className="relative z-10 flex items-center justify-between w-full border-t border-white/10 pt-8 pb-4 px-2">
          <img
            src={imgLogoRab}
            alt="RAB Logo"
            className="h-10 md:h-12 w-auto object-contain hover:scale-110 active:scale-95 transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] cursor-pointer"
          />
          <img
            src={imgLogoTrench}
            alt="Trench Logo"
            className="h-10 md:h-12 w-auto object-contain hover:scale-110 active:scale-95 transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] cursor-pointer"
          />
          <img
            src={imgLogoBlurryface}
            alt="Blurryface Logo"
            className="h-10 md:h-12 w-auto object-contain hover:scale-110 active:scale-95 transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] cursor-pointer"
          />
          <img
            src={imgLogoClancy}
            alt="Clancy Logo"
            className="h-10 md:h-12 w-auto object-contain hover:scale-110 active:scale-95 transition-all duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] cursor-pointer"
          />
        </div>
      </div>

      {/* Backdrop backdrop-blur Overlay when menu is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40 transition-opacity duration-300 ease-in-out"
        ></div>
      )}
    </>
  );
}
