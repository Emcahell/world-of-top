// ==========================================
// Era Data - Twenty One Pilots Discography
// ==========================================

export interface EraData {
  id: string;
  title: string;
  coverKey: string;
  logoKey: string;
  contentKey: string;
  accent: string;
}

export const eras: EraData[] = [
  {
    id: "era-vessel",
    title: "Era Twenty One Pilots y Vessel (2009 - 2015)",
    coverKey: "vessel",
    logoKey: "rab",
    contentKey: "vessel",
    accent: "#ffd800",
  },
  {
    id: "era-blurryface",
    title: "Era Blurryface (2015 - 2018)",
    coverKey: "blurryface",
    logoKey: "blurryface",
    contentKey: "blurryface",
    accent: "#d62420",
  },
  {
    id: "era-trench",
    title: "Era Trench (2018 - 2020)",
    coverKey: "trench",
    logoKey: "trench",
    contentKey: "trench",
    accent: "#ffd800",
  },
  {
    id: "era-sai",
    title: "Era Scaled and Icy (2021 - 2023)",
    coverKey: "scaledAndIcy",
    logoKey: "scaledAndIcy",
    contentKey: "sai",
    accent: "#d62420",
  },
  {
    id: "era-clancy",
    title: "Era Clancy (2024 - Actualidad)",
    coverKey: "clancy",
    logoKey: "clancy",
    contentKey: "clancy",
    accent: "#ffd800",
  },
];
