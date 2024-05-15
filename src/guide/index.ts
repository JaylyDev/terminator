import { EntityInventoryComponent, ItemStack, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import {
  MinecraftColor,
  aqua,
  blue,
  bold,
  gray,
  green,
  yellow,
} from "../minecraft-color";
import { showSpawnTerminatorForm } from "../commands";

const loreText = "By JaylyMC";
const guideTitle = "Terminator Guide";
const TerminatorGuideBook = new ItemStack(MinecraftItemTypes.Book);
TerminatorGuideBook.nameTag = guideTitle;
TerminatorGuideBook.setLore([loreText]);

const guideBodyList: string[] = [
  green(bold("Terminator")),
  aqua(bold("Add-On by JaylyMC")),
  "",
  bold("What is the Terminator Add-On?"),
  gray(
    "The Terminator Add-On introduces the Terminator mob to your Minecraft world! It can follow players, build and break blocks, pick up weapons and wear armors to chase the players down and try to kill them."
  ),
  "",
  bold("How to Spawn a Terminator?"),
  gray(
    "Right click the Terminator spawn egg on the ground to spawn a Terminator."
  ),
  "",
  bold("Find out More!"),
  gray("There are so many features in the terminator add-on. Learn more at: ") +
    blue("https://jaylydev.github.io/posts/terminator/"),
  "",
  yellow("Thanks for installing this add-on. I hope you enjoy!"),
  "- JaylyMC",
];

world.afterEvents.playerSpawn.subscribe(({ initialSpawn, player }) => {
  const guideReceived = player.getDynamicProperty("terminator:guide_received");
  if (!initialSpawn || guideReceived) return;

  const inventory = player.getComponent(
    "inventory"
  ) as EntityInventoryComponent;
  inventory.container.setItem(0, TerminatorGuideBook);
  player.setDynamicProperty("terminator:guide_received", true);
});

world.afterEvents.itemUse.subscribe(({ itemStack, source }) => {
  if (
    itemStack.type.id !== MinecraftItemTypes.Book ||
    itemStack.nameTag !== "Terminator Guide" ||
    itemStack.getLore()[0] !== loreText
  )
    return;

  source.playSound("item.guide_book.page_turn");
  new ActionFormData()
    .title(guideTitle)
    .body(guideBodyList.join("\n" + MinecraftColor.reset))
    .button("Spawn Terminator")
    .button("Close")
    .show(source)
    .then((response) => {
      if (response.selection === 0) {
        showSpawnTerminatorForm(source);
      }
      source.playSound("item.book.put");
    });
});
