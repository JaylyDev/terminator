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
  Eyeblossom,
}

// Cape variant display names
export const CapeVariants: (RawMessage | string)[] = [
  { translate: "gui.none" }, // None
  { translate: "persona.15th_anniv_cape.title" }, // 15th Anniversary
  { translate: "persona.cherry_cape.title" }, // Cherry Blossom
  { translate: "persona.founder_cape.title" }, // Founder
  { translate: "persona.migrator_cape.title" }, // Migrator
  { translate: "persona.mojang_new_cape.title" }, // Mojang New
  { translate: "persona.pancape.title" }, // Pan
  { translate: "persona.pride_cape.title" }, // Progress Pride
  { translate: "persona.follower_cape.title" }, // Follower (TikTok)
  { translate: "persona.purple_heart_cape.title" }, // Purple Heart (Twitch)
  { translate: "persona.one_vanilla_cape.title" }, // One Vanilla
  { translate: "persona.mcc_cape.title" }, // MCC 15th Year
  { translate: "persona.mc_experience_cape.title" }, // Minecraft Experience,
  { translate: "persona.eyeblossom_cape.title" }, // Eyeblossom
];
