import { RawMessage } from "@minecraft/server";

// Cape variant values
export enum CapeVariant {
  None,
  Fifteenth_anniv,
  Cherry,
  Founder,
  Migrator,
  Mojang_new,
  Pan,
  Pride,
  Tiktok,
  Twitch,
  Vanilla,
  MCC,
  MC_experience,
}

// Cape variant display names
export const CapeVariants: (RawMessage | string)[] = [
  "None",
  "15th Anniversary",
  "Cherry Blossom",
  "Founder",
  "Migrator",
  "Mojang New",
  "Pan",
  "Progress Pride",
  "Follower (TikTok)",
  "Purple Heart (Twitch)",
  "One Vanilla",
  "MCC 15th Year",
  "Minecraft Experience",
];
