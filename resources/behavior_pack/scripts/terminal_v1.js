// JavaScript terminal for Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
//               data\behavior_pack\subpacks\v1.18.20.23\scripts\gametests\Main.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

import {
  // enum for ts, json for js
  Direction, GameMode,
  // classes
  BeforeChatEvent, BeforeChatEventSignal, BeforeExplosionEvent, BeforeExplosionEventSignal, BeforeItemDefinitionEventSignal, BeforeItemDefinitionTriggeredEvent, BeforeItemUseEvent, BeforeItemUseEventSignal, BeforeItemUseOnEvent, BeforeItemUseOnEventSignal, BeforePistonActivateEvent, BeforePistonActivateEventSignal, Block, BlockAreaSize, BlockBreakEvent, BlockBreakEventSignal, BlockComponent, BlockEvent, BlockExplodeEvent, BlockExplodeEventSignal, BlockInventoryComponent, BlockInventoryComponentContainer, BlockLavaContainerComponent, BlockLocation, BlockPermutation, BlockPistonComponent, BlockPlaceEvent, BlockPlaceEventSignal, BlockPotionContainerComponent, BlockProperties, BlockRaycastOptions, BlockRecordPlayerComponent, BlockSnowContainerComponent, BlockType, BlockWaterContainerComponent, BoolBlockProperty,
  ChatEvent, ChatEventSignal, Color, Container, Dimension,
  Effect, EffectAddEvent, EffectAddEventSignal, EffectType, EnchantmentType, EnchantmentSlot, EnchantmentList, Entity, EntityAddRiderComponent, EntityAgeableComponent, EntityBreathableComponent, EntityColorComponent, EntityCreateEvent, EntityCreateEventSignal, EntityDefinitionFeedItem, EntityEventOptions, EntityFlyingSpeedComponent, EntityHealableComponent, EntityHealthComponent, EntityInventoryComponent, EntityIterator, EntityLavaMovementComponent, EntityLeashableComponent, EntityMountTamingComponent, EntityMovementAmphibiousComponent, EntityMovementBasicComponent, EntityMovementComponent, EntityMovementFlyComponent, EntityMovementGenericComponent, EntityMovementGlideComponent, EntityMovementHoverComponent, EntityMovementJumpComponent, EntityMovementSkipComponent, EntityMovementSwayComponent, EntityNavigationClimbComponent, EntityNavigationFloatComponent, EntityNavigationFlyComponent, EntityNavigationGenericComponent, EntityNavigationHoverComponent, EntityNavigationWalkComponent, EntityQueryOptions, EntityQueryScoreOptions, EntityRaycastOptions, EntityRideableComponent, EntityStrengthComponent, EntityTameableComponent, EntityUnderwaterMovementComponent, Events, ExplosionEvent, ExplosionEventSignal, ExplosionOptions,
  FeedItem, FeedItemEffect, FilterGroup, FluidContainer,
  IBlockProperty, IEntityComponent, IntBlockProperty, InventoryComponentContainer, ItemCooldownComponent, ItemDefinitionEventSignal, ItemDefinitionTriggeredEvent, ItemDurabilityComponent, ItemFoodComponent, Items, ItemStack, ItemType, ItemUseEvent, ItemUseEventSignal, ItemUseOnEvent, ItemUseOnEventSignal, Location,
  MinecraftBlockTypes, MinecraftEffectTypes, MinecraftItemTypes, NavigationResult, NumberRange,
  PistonActivateEvent, PistonActivateEventSignal, PitchYawRotation, Player, PlayerInventoryComponentContainer, PlayerJoinEvent, PlayerJoinEventSignal, PlayerLeaveEvent, PlayerLeaveEventSignal,
  Seat, StringBlockProperty, TickEvent, TickEventSignal, Trigger, Vector,
  WeatherChangeEvent, WeatherChangeEventSignal, World,
  // const
  TicksPerSecond, world,
} from "mojang-minecraft";
import { FenceConnectivity, GameTestSequence, RegistrationBuilder, SimulatedPlayer, Tags, Test, register, } from "mojang-gametest";
import { ActionFormData, ActionFormResponse, FormResponse, MessageFormData, MessageFormResponse, ModalFormData, ModalFormResponse, } from "mojang-minecraft-ui";
import { safeAdd, bitRotateLeft, md5cmn, md5ff, md5gg, md5hh, md5ii, binlMD5, binl2rstr, rstr2binl, rstrMD5, rstrHMACMD5, rstr2hex, str2rstrUTF8, rawMD5, hexMD5, rawHMACMD5, hexHMACMD5, md5, } from "scripts/blueimp/md5.js";
import { SHA256 } from "scripts/sha256.js";
import { players } from "scripts/credentials/access.js";
import * as mojangminecraft from "scripts/@types/mojang-minecraft/index.js";
import * as mojanggametest from "scripts/@types/mojang-gametest/index.js";
import * as mojangminecraftui from "scripts/@types/mojang-minecraft-ui/index.js";
import { client } from 'scripts/gametests/commands/message.js';
import * as Minecraft from "mojang-minecraft";

let prefix = "$";

world.events.beforeChat.subscribe((data) => {
  let playerName = data.sender.name ?? data.sender.nameTag;
  if (data.message.substring(0, 1) == prefix && players.includes(playerName)) {
    /**
     * This script is only available to players with authorization
     * Players are not supposed to execute this file
     */
    data.cancel = true;

    const mojang_minecraft = `const Direction = ${JSON.stringify(Direction)};
const GameMode = ${JSON.stringify(GameMode)};
const BeforeChatEvent = ${BeforeChatEvent};    
const BeforeChatEventSignal = ${BeforeChatEventSignal};
const BeforeExplosionEvent = ${BeforeExplosionEvent};
const BeforeExplosionEventSignal = ${BeforeExplosionEventSignal};
const BeforeItemDefinitionEventSignal = ${BeforeItemDefinitionEventSignal};
const BeforeItemDefinitionTriggeredEvent = ${BeforeItemDefinitionTriggeredEvent};
const BeforeItemUseEvent = ${BeforeItemUseEvent};
const BeforeItemUseEventSignal = ${BeforeItemUseEventSignal};
const BeforeItemUseOnEvent = ${BeforeItemUseOnEvent};
const BeforeItemUseOnEventSignal = ${BeforeItemUseOnEventSignal};
const BeforePistonActivateEvent = ${BeforePistonActivateEvent};
const BeforePistonActivateEventSignal = ${BeforePistonActivateEventSignal};
const Block = ${Block};
const BlockAreaSize = ${BlockAreaSize};
const BlockBreakEvent = ${BlockBreakEvent};
const BlockBreakEventSignal = ${BlockBreakEventSignal};
const BlockComponent = ${BlockComponent};
const BlockEvent = ${BlockEvent};
const BlockExplodeEvent = ${BlockExplodeEvent};
const BlockExplodeEventSignal = ${BlockExplodeEventSignal};
const BlockInventoryComponent = ${BlockInventoryComponent};
const BlockInventoryComponentContainer = ${BlockInventoryComponentContainer};
const BlockLavaContainerComponent = ${BlockLavaContainerComponent};
const BlockLocation = ${BlockLocation};
const BlockPermutation = ${BlockPermutation};
const BlockPistonComponent = ${BlockPistonComponent};
const BlockPlaceEvent = ${BlockPlaceEvent};
const BlockPlaceEventSignal = ${BlockPlaceEventSignal};
const BlockPotionContainerComponent = ${BlockPotionContainerComponent};
const BlockProperties = ${BlockProperties};
const BlockRaycastOptions = ${BlockRaycastOptions};
const BlockRecordPlayerComponent = ${BlockRecordPlayerComponent};
const BlockSnowContainerComponent = ${BlockSnowContainerComponent};
const BlockType = ${BlockType};
const BlockWaterContainerComponent = ${BlockWaterContainerComponent};
const BoolBlockProperty = ${BoolBlockProperty};
const ChatEvent = ${ChatEvent};
const ChatEventSignal = ${ChatEventSignal};
const Color = ${Color};
const Container = ${Container};
const Dimension = ${Dimension};
const Effect = ${Effect};
const EffectAddEvent = ${EffectAddEvent};
const EffectAddEventSignal = ${EffectAddEventSignal};
const EffectType = ${EffectType};
const EnchantmentType = ${EnchantmentType};
const EnchantmentSlot = ${EnchantmentSlot};
const EnchantmentList = ${EnchantmentList};
const Entity = ${Entity};
const EntityAddRiderComponent = ${EntityAddRiderComponent};
const EntityAgeableComponent = ${EntityAgeableComponent};
const EntityBreathableComponent = ${EntityBreathableComponent};
const EntityColorComponent = ${EntityColorComponent};
const EntityCreateEvent = ${EntityCreateEvent};
const EntityCreateEventSignal = ${EntityCreateEventSignal};
const EntityDefinitionFeedItem = ${EntityDefinitionFeedItem};
const EntityEventOptions = ${EntityEventOptions};
const EntityFlyingSpeedComponent = ${EntityFlyingSpeedComponent};
const EntityHealableComponent = ${EntityHealableComponent};
const EntityHealthComponent = ${EntityHealthComponent};
const EntityInventoryComponent = ${EntityInventoryComponent};
const EntityIterator = ${EntityIterator};
const EntityLavaMovementComponent = ${EntityLavaMovementComponent};
const EntityLeashableComponent = ${EntityLeashableComponent};
const EntityMountTamingComponent = ${EntityMountTamingComponent};
const EntityMovementAmphibiousComponent = ${EntityMovementAmphibiousComponent};
const EntityMovementBasicComponent = ${EntityMovementBasicComponent};
const EntityMovementComponent = ${EntityMovementComponent};
const EntityMovementFlyComponent = ${EntityMovementFlyComponent};
const EntityMovementGenericComponent = ${EntityMovementGenericComponent};
const EntityMovementGlideComponent = ${EntityMovementGlideComponent};
const EntityMovementHoverComponent = ${EntityMovementHoverComponent};
const EntityMovementJumpComponent = ${EntityMovementJumpComponent};
const EntityMovementSkipComponent = ${EntityMovementSkipComponent};
const EntityMovementSwayComponent = ${EntityMovementSwayComponent};
const EntityNavigationClimbComponent = ${EntityNavigationClimbComponent};
const EntityNavigationFloatComponent = ${EntityNavigationFloatComponent};
const EntityNavigationFlyComponent = ${EntityNavigationFlyComponent};
const EntityNavigationGenericComponent = ${EntityNavigationGenericComponent};
const EntityNavigationHoverComponent = ${EntityNavigationHoverComponent};
const EntityNavigationWalkComponent = ${EntityNavigationWalkComponent};
const EntityQueryOptions = ${EntityQueryOptions};
const EntityQueryScoreOptions = ${EntityQueryScoreOptions};
const EntityRaycastOptions = ${EntityRaycastOptions};
const EntityRideableComponent = ${EntityRideableComponent};
const EntityStrengthComponent = ${EntityStrengthComponent};
const EntityTameableComponent = ${EntityTameableComponent};
const EntityUnderwaterMovementComponent = ${EntityUnderwaterMovementComponent};
const Events = ${Events};
const ExplosionEvent = ${ExplosionEvent};
const ExplosionEventSignal = ${ExplosionEventSignal};
const ExplosionOptions = ${ExplosionOptions};
const FeedItem = ${FeedItem};
const FeedItemEffect = ${FeedItemEffect};
const FilterGroup = ${FilterGroup};
const FluidContainer = ${FluidContainer};
const IBlockProperty = ${IBlockProperty};
const IEntityComponent = ${IEntityComponent};
const IntBlockProperty = ${IntBlockProperty};
const InventoryComponentContainer = ${InventoryComponentContainer};
const ItemCooldownComponent = ${ItemCooldownComponent};
const ItemDefinitionEventSignal = ${ItemDefinitionEventSignal};
const ItemDefinitionTriggeredEvent = ${ItemDefinitionTriggeredEvent};
const ItemDurabilityComponent = ${ItemDurabilityComponent};
const ItemFoodComponent = ${ItemFoodComponent};
const Items = ${Items};
const ItemStack = ${ItemStack};
const ItemType = ${ItemType};
const ItemUseEvent = ${ItemUseEvent};
const ItemUseEventSignal = ${ItemUseEventSignal};
const ItemUseOnEvent = ${ItemUseOnEvent};
const ItemUseOnEventSignal = ${ItemUseOnEventSignal};
const Location = ${Location};
const MinecraftBlockTypes = ${MinecraftBlockTypes};
const MinecraftEffectTypes = ${MinecraftEffectTypes};
const MinecraftItemTypes = ${MinecraftItemTypes};
const NavigationResult = ${NavigationResult};
const NumberRange = ${NumberRange};
const PistonActivateEvent = ${PistonActivateEvent};
const PistonActivateEventSignal = ${PistonActivateEventSignal};
const PitchYawRotation = ${PitchYawRotation};
const Player = ${Player};
const PlayerInventoryComponentContainer = ${PlayerInventoryComponentContainer};
const PlayerJoinEvent = ${PlayerJoinEvent};
const PlayerJoinEventSignal = ${PlayerJoinEventSignal};
const PlayerLeaveEvent = ${PlayerLeaveEvent};
const PlayerLeaveEventSignal = ${PlayerLeaveEventSignal};
const Seat = ${Seat};
const StringBlockProperty = ${StringBlockProperty};
const TickEvent = ${TickEvent};
const TickEventSignal = ${TickEventSignal};
const Trigger = ${Trigger};
const Vector = ${Vector};
const WeatherChangeEvent = ${WeatherChangeEvent};
const WeatherChangeEventSignal = ${WeatherChangeEventSignal};
const TicksPerSecond = ${TicksPerSecond};
const World = ${World};
const world = ${JSON.stringify(world)};`;

    const mojang_gametest = `const FenceConnectivity = ${FenceConnectivity}; 
const GameTestSequence = ${GameTestSequence}; 
const RegistrationBuilder = ${RegistrationBuilder}; 
const SimulatedPlayer = ${SimulatedPlayer}; 
const Tags = ${Tags}; 
const Test = ${Test};
const register = ${register};`;

    const mojang_minecraft_ui = `const ActionFormData = ${ActionFormData};
const ActionFormResponse = ${ActionFormResponse};
const FormResponse = ${FormResponse};
const MessageFormData = ${MessageFormData};
const MessageFormResponse = ${MessageFormResponse};
const ModalFormData = ${ModalFormData};
const ModalFormResponse = ${ModalFormResponse};`

    function mojangminecraft_str () {
      const Direction = `const Direction = ${JSON.stringify(mojangminecraft.Direction)};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const GameMode = `const GameMode = ${JSON.stringify(mojangminecraft.GameMode)};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforeChatEvent = `const BeforeChatEvent = ${mojangminecraft.BeforeChatEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforeChatEventSignal = `const BeforeChatEventSignal = ${mojangminecraft.BeforeChatEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforeExplosionEvent = `const BeforeExplosionEvent = ${mojangminecraft.BeforeExplosionEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforeExplosionEventSignal = `const BeforeExplosionEventSignal = ${mojangminecraft.BeforeExplosionEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforeItemDefinitionEventSignal = `const BeforeItemDefinitionEventSignal = ${mojangminecraft.BeforeItemDefinitionEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforeItemDefinitionTriggeredEvent = `const BeforeItemDefinitionTriggeredEvent = ${mojangminecraft.BeforeItemDefinitionTriggeredEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforeItemUseEvent = `const BeforeItemUseEvent = ${mojangminecraft.BeforeItemUseEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforeItemUseEventSignal = `const BeforeItemUseEventSignal = ${mojangminecraft.BeforeItemUseEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforeItemUseOnEvent = `const BeforeItemUseOnEvent = ${mojangminecraft.BeforeItemUseOnEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforeItemUseOnEventSignal = `const BeforeItemUseOnEventSignal = ${mojangminecraft.BeforeItemUseOnEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforePistonActivateEvent = `const BeforePistonActivateEvent = ${mojangminecraft.BeforePistonActivateEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BeforePistonActivateEventSignal = `const BeforePistonActivateEventSignal = ${mojangminecraft.BeforePistonActivateEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Block = `const Block = ${mojangminecraft.Block};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockAreaSize = `const BlockAreaSize = ${mojangminecraft.BlockAreaSize};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockBreakEvent = `const BlockBreakEvent = ${mojangminecraft.BlockBreakEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockBreakEventSignal = `const BlockBreakEventSignal = ${mojangminecraft.BlockBreakEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockComponent = `const BlockComponent = ${mojangminecraft.BlockComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockEvent = `const BlockEvent = ${mojangminecraft.BlockEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockExplodeEvent = `const BlockExplodeEvent = ${mojangminecraft.BlockExplodeEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockExplodeEventSignal = `const BlockExplodeEventSignal = ${mojangminecraft.BlockExplodeEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockInventoryComponent = `const BlockInventoryComponent = ${mojangminecraft.BlockInventoryComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockInventoryComponentContainer = `const BlockInventoryComponentContainer = ${mojangminecraft.BlockInventoryComponentContainer};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockLavaContainerComponent = `const BlockLavaContainerComponent = ${mojangminecraft.BlockLavaContainerComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockLocation = `const BlockLocation = ${mojangminecraft.BlockLocation};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockPermutation = `const BlockPermutation = ${mojangminecraft.BlockPermutation};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockPistonComponent = `const BlockPistonComponent = ${mojangminecraft.BlockPistonComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockPlaceEvent = `const BlockPlaceEvent = ${mojangminecraft.BlockPlaceEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockPlaceEventSignal = `const BlockPlaceEventSignal = ${mojangminecraft.BlockPlaceEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockPotionContainerComponent = `const BlockPotionContainerComponent = ${mojangminecraft.BlockPotionContainerComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockProperties = `const BlockProperties = ${mojangminecraft.BlockProperties};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockRaycastOptions = `const BlockRaycastOptions = ${mojangminecraft.BlockRaycastOptions};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockRecordPlayerComponent = `const BlockRecordPlayerComponent = ${mojangminecraft.BlockRecordPlayerComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockSnowContainerComponent = `const BlockSnowContainerComponent = ${mojangminecraft.BlockSnowContainerComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockType = `const BlockType = ${mojangminecraft.BlockType};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BlockWaterContainerComponent = `const BlockWaterContainerComponent = ${mojangminecraft.BlockWaterContainerComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const BoolBlockProperty = `const BoolBlockProperty = ${mojangminecraft.BoolBlockProperty};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ChatEvent = `const ChatEvent = ${mojangminecraft.ChatEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ChatEventSignal = `const ChatEventSignal = ${mojangminecraft.ChatEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Color = `const Color = ${mojangminecraft.Color};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Container = `const Container = ${mojangminecraft.Container};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Dimension = `const Dimension = ${mojangminecraft.Dimension};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Effect = `const Effect = ${mojangminecraft.Effect};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EffectAddEvent = `const EffectAddEvent = ${mojangminecraft.EffectAddEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EffectAddEventSignal = `const EffectAddEventSignal = ${mojangminecraft.EffectAddEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EffectType = `const EffectType = ${mojangminecraft.EffectType};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EnchantmentType = `const EnchantmentType = ${mojangminecraft.EnchantmentType};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EnchantmentSlot = `const EnchantmentSlot = ${mojangminecraft.EnchantmentSlot};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EnchantmentList = `const EnchantmentList = ${mojangminecraft.EnchantmentList};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Entity = `const Entity = ${mojangminecraft.Entity};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityAddRiderComponent = `const EntityAddRiderComponent = ${mojangminecraft.EntityAddRiderComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityAgeableComponent = `const EntityAgeableComponent = ${mojangminecraft.EntityAgeableComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityBreathableComponent = `const EntityBreathableComponent = ${mojangminecraft.EntityBreathableComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityColorComponent = `const EntityColorComponent = ${mojangminecraft.EntityColorComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityCreateEvent = `const EntityCreateEvent = ${mojangminecraft.EntityCreateEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityCreateEventSignal = `const EntityCreateEventSignal = ${mojangminecraft.EntityCreateEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityDefinitionFeedItem = `const EntityDefinitionFeedItem = ${mojangminecraft.EntityDefinitionFeedItem};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityEventOptions = `const EntityEventOptions = ${mojangminecraft.EntityEventOptions};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityFlyingSpeedComponent = `const EntityFlyingSpeedComponent = ${mojangminecraft.EntityFlyingSpeedComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityHealableComponent = `const EntityHealableComponent = ${mojangminecraft.EntityHealableComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityHealthComponent = `const EntityHealthComponent = ${mojangminecraft.EntityHealthComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityInventoryComponent = `const EntityInventoryComponent = ${mojangminecraft.EntityInventoryComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityIterator = `const EntityIterator = ${mojangminecraft.EntityIterator};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityLavaMovementComponent = `const EntityLavaMovementComponent = ${mojangminecraft.EntityLavaMovementComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityLeashableComponent = `const EntityLeashableComponent = ${mojangminecraft.EntityLeashableComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMountTamingComponent = `const EntityMountTamingComponent = ${mojangminecraft.EntityMountTamingComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMovementAmphibiousComponent = `const EntityMovementAmphibiousComponent = ${mojangminecraft.EntityMovementAmphibiousComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMovementBasicComponent = `const EntityMovementBasicComponent = ${mojangminecraft.EntityMovementBasicComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMovementComponent = `const EntityMovementComponent = ${mojangminecraft.EntityMovementComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMovementFlyComponent = `const EntityMovementFlyComponent = ${mojangminecraft.EntityMovementFlyComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMovementGenericComponent = `const EntityMovementGenericComponent = ${mojangminecraft.EntityMovementGenericComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMovementGlideComponent = `const EntityMovementGlideComponent = ${mojangminecraft.EntityMovementGlideComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMovementHoverComponent = `const EntityMovementHoverComponent = ${mojangminecraft.EntityMovementHoverComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMovementJumpComponent = `const EntityMovementJumpComponent = ${mojangminecraft.EntityMovementJumpComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMovementSkipComponent = `const EntityMovementSkipComponent = ${mojangminecraft.EntityMovementSkipComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityMovementSwayComponent = `const EntityMovementSwayComponent = ${mojangminecraft.EntityMovementSwayComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityNavigationClimbComponent = `const EntityNavigationClimbComponent = ${mojangminecraft.EntityNavigationClimbComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityNavigationFloatComponent = `const EntityNavigationFloatComponent = ${mojangminecraft.EntityNavigationFloatComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityNavigationFlyComponent = `const EntityNavigationFlyComponent = ${mojangminecraft.EntityNavigationFlyComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityNavigationGenericComponent = `const EntityNavigationGenericComponent = ${mojangminecraft.EntityNavigationGenericComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityNavigationHoverComponent = `const EntityNavigationHoverComponent = ${mojangminecraft.EntityNavigationHoverComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityNavigationWalkComponent = `const EntityNavigationWalkComponent = ${mojangminecraft.EntityNavigationWalkComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityQueryOptions = `const EntityQueryOptions = ${mojangminecraft.EntityQueryOptions};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityQueryScoreOptions = `const EntityQueryScoreOptions = ${mojangminecraft.EntityQueryScoreOptions};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityRaycastOptions = `const EntityRaycastOptions = ${mojangminecraft.EntityRaycastOptions};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityRideableComponent = `const EntityRideableComponent = ${mojangminecraft.EntityRideableComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityStrengthComponent = `const EntityStrengthComponent = ${mojangminecraft.EntityStrengthComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityTameableComponent = `const EntityTameableComponent = ${mojangminecraft.EntityTameableComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const EntityUnderwaterMovementComponent = `const EntityUnderwaterMovementComponent = ${mojangminecraft.EntityUnderwaterMovementComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Events = `const Events = ${mojangminecraft.Events};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ExplosionEvent = `const ExplosionEvent = ${mojangminecraft.ExplosionEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ExplosionEventSignal = `const ExplosionEventSignal = ${mojangminecraft.ExplosionEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ExplosionOptions = `const ExplosionOptions = ${mojangminecraft.ExplosionOptions};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const FeedItem = `const FeedItem = ${mojangminecraft.FeedItem};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const FeedItemEffect = `const FeedItemEffect = ${mojangminecraft.FeedItemEffect};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const FilterGroup = `const FilterGroup = ${mojangminecraft.FilterGroup};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const FluidContainer = `const FluidContainer = ${mojangminecraft.FluidContainer};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const IBlockProperty = `const IBlockProperty = ${mojangminecraft.IBlockProperty};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const IEntityComponent = `const IEntityComponent = ${mojangminecraft.IEntityComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const IntBlockProperty = `const IntBlockProperty = ${mojangminecraft.IntBlockProperty};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const InventoryComponentContainer = `const InventoryComponentContainer = ${mojangminecraft.InventoryComponentContainer};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemCooldownComponent = `const ItemCooldownComponent = ${mojangminecraft.ItemCooldownComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemDefinitionEventSignal = `const ItemDefinitionEventSignal = ${mojangminecraft.ItemDefinitionEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemDefinitionTriggeredEvent = `const ItemDefinitionTriggeredEvent = ${mojangminecraft.ItemDefinitionTriggeredEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemDurabilityComponent = `const ItemDurabilityComponent = ${mojangminecraft.ItemDurabilityComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemFoodComponent = `const ItemFoodComponent = ${mojangminecraft.ItemFoodComponent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Items = `const Items = ${mojangminecraft.Items};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemStack = `const ItemStack = ${mojangminecraft.ItemStack};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemType = `const ItemType = ${mojangminecraft.ItemType};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemUseEvent = `const ItemUseEvent = ${mojangminecraft.ItemUseEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemUseEventSignal = `const ItemUseEventSignal = ${mojangminecraft.ItemUseEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemUseOnEvent = `const ItemUseOnEvent = ${mojangminecraft.ItemUseOnEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ItemUseOnEventSignal = `const ItemUseOnEventSignal = ${mojangminecraft.ItemUseOnEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Location = `const Location = ${mojangminecraft.Location};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const MinecraftBlockTypes = `const MinecraftBlockTypes = ${mojangminecraft.MinecraftBlockTypes};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const MinecraftEffectTypes = `const MinecraftEffectTypes = ${mojangminecraft.MinecraftEffectTypes};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const MinecraftItemTypes = `const MinecraftItemTypes = ${mojangminecraft.MinecraftItemTypes};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const NavigationResult = `const NavigationResult = ${mojangminecraft.NavigationResult};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const NumberRange = `const NumberRange = ${mojangminecraft.NumberRange};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const PistonActivateEvent = `const PistonActivateEvent = ${mojangminecraft.PistonActivateEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const PistonActivateEventSignal = `const PistonActivateEventSignal = ${mojangminecraft.PistonActivateEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const PitchYawRotation = `const PitchYawRotation = ${mojangminecraft.PitchYawRotation};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Player = `const Player = ${mojangminecraft.Player};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const PlayerInventoryComponentContainer = `const PlayerInventoryComponentContainer = ${mojangminecraft.PlayerInventoryComponentContainer};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const PlayerJoinEvent = `const PlayerJoinEvent = ${mojangminecraft.PlayerJoinEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const PlayerJoinEventSignal = `const PlayerJoinEventSignal = ${mojangminecraft.PlayerJoinEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const PlayerLeaveEvent = `const PlayerLeaveEvent = ${mojangminecraft.PlayerLeaveEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const PlayerLeaveEventSignal = `const PlayerLeaveEventSignal = ${mojangminecraft.PlayerLeaveEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Seat = `const Seat = ${mojangminecraft.Seat};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const StringBlockProperty = `const StringBlockProperty = ${mojangminecraft.StringBlockProperty};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const TickEvent = `const TickEvent = ${mojangminecraft.TickEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const TickEventSignal = `const TickEventSignal = ${mojangminecraft.TickEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Trigger = `const Trigger = ${mojangminecraft.Trigger};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const Vector = `const Vector = ${mojangminecraft.Vector};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const WeatherChangeEvent = `const WeatherChangeEvent = ${mojangminecraft.WeatherChangeEvent};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const WeatherChangeEventSignal = `const WeatherChangeEventSignal = ${mojangminecraft.WeatherChangeEventSignal};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const TicksPerSecond = `const TicksPerSecond = ${mojangminecraft.TicksPerSecond};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const World = `const World = ${mojangminecraft.World};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const world = `const world = ${JSON.stringify(mojangminecraft.world)};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');

      return Direction + GameMode + BeforeChatEvent + BeforeChatEventSignal + BeforeExplosionEvent + BeforeExplosionEventSignal + BeforeItemDefinitionEventSignal + BeforeItemDefinitionTriggeredEvent + BeforeItemUseEvent + BeforeItemUseEventSignal + BeforeItemUseOnEvent + BeforeItemUseOnEventSignal + BeforePistonActivateEvent + BeforePistonActivateEventSignal + Block + BlockAreaSize + BlockBreakEvent + BlockBreakEventSignal + BlockComponent + BlockEvent + BlockExplodeEvent + BlockExplodeEventSignal + BlockInventoryComponent + BlockInventoryComponentContainer + BlockLavaContainerComponent + BlockLocation + BlockPermutation + BlockPistonComponent + BlockPlaceEvent + BlockPlaceEventSignal + BlockPotionContainerComponent + BlockProperties + BlockRaycastOptions + BlockRecordPlayerComponent + BlockSnowContainerComponent + BlockType + BlockWaterContainerComponent + BoolBlockProperty + ChatEvent + ChatEventSignal + Color + Container + Dimension + Effect + EffectAddEvent + EffectAddEventSignal + EffectType + EnchantmentType + EnchantmentSlot + EnchantmentList + Entity + EntityAddRiderComponent + EntityAgeableComponent + EntityBreathableComponent + EntityColorComponent + EntityCreateEvent + EntityCreateEventSignal + EntityDefinitionFeedItem + EntityEventOptions + EntityFlyingSpeedComponent + EntityHealableComponent + EntityHealthComponent + EntityInventoryComponent + EntityIterator + EntityLavaMovementComponent + EntityLeashableComponent + EntityMountTamingComponent + EntityMovementAmphibiousComponent + EntityMovementBasicComponent + EntityMovementComponent + EntityMovementFlyComponent + EntityMovementGenericComponent + EntityMovementGlideComponent + EntityMovementHoverComponent + EntityMovementJumpComponent + EntityMovementSkipComponent + EntityMovementSwayComponent + EntityNavigationClimbComponent + EntityNavigationFloatComponent + EntityNavigationFlyComponent + EntityNavigationGenericComponent + EntityNavigationHoverComponent + EntityNavigationWalkComponent + EntityQueryOptions + EntityQueryScoreOptions + EntityRaycastOptions + EntityRideableComponent + EntityStrengthComponent + EntityTameableComponent + EntityUnderwaterMovementComponent + Events + ExplosionEvent + ExplosionEventSignal + ExplosionOptions + FeedItem + FeedItemEffect + FilterGroup + FluidContainer + IBlockProperty + IEntityComponent + IntBlockProperty + InventoryComponentContainer + ItemCooldownComponent + ItemDefinitionEventSignal + ItemDefinitionTriggeredEvent + ItemDurabilityComponent + ItemFoodComponent + Items + ItemStack + ItemType + ItemUseEvent + ItemUseEventSignal + ItemUseOnEvent + ItemUseOnEventSignal + Location + MinecraftBlockTypes + MinecraftEffectTypes + MinecraftItemTypes + NavigationResult + NumberRange + PistonActivateEvent + PistonActivateEventSignal + PitchYawRotation + Player + PlayerInventoryComponentContainer + PlayerJoinEvent + PlayerJoinEventSignal + PlayerLeaveEvent + PlayerLeaveEventSignal + Seat + StringBlockProperty + TickEvent + TickEventSignal + Trigger + Vector + WeatherChangeEvent + WeatherChangeEventSignal + TicksPerSecond + World + world
    };

    function mojanggametest_str () {
      const FenceConnectivity = `const FenceConnectivity = ${mojanggametest.FenceConnectivity}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${'); 
      const GameTestSequence = `const GameTestSequence = ${mojanggametest.GameTestSequence}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${'); 
      const RegistrationBuilder = `const RegistrationBuilder = ${mojanggametest.RegistrationBuilder}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${'); 
      const SimulatedPlayer = `const SimulatedPlayer = ${mojanggametest.SimulatedPlayer}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${'); 
      const Tags = `const Tags = ${mojanggametest.Tags}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${'); 
      const Test = `const Test = ${mojanggametest.Test}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const register = `const register = ${mojanggametest.register}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
    
      return FenceConnectivity + GameTestSequence + RegistrationBuilder + SimulatedPlayer + Tags + Test + register;
    };

    function mojangminecraftui_str () {
      const ActionFormData = `const ActionFormData = ${mojangminecraftui.ActionFormData}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ActionFormResponse = `const ActionFormResponse = ${mojangminecraftui.ActionFormResponse}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const FormResponse = `const FormResponse = ${mojangminecraftui.FormResponse}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const MessageFormData = `const MessageFormData = ${mojangminecraftui.MessageFormData}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const MessageFormResponse = `const MessageFormResponse = ${mojangminecraftui.MessageFormResponse}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ModalFormData = `const ModalFormData = ${mojangminecraftui.ModalFormData}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
      const ModalFormResponse = `const ModalFormResponse = ${mojangminecraftui.ModalFormResponse}`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');
    
      return ActionFormData + ActionFormResponse + FormResponse + MessageFormData + MessageFormResponse + ModalFormData + ModalFormResponse;
    };

    const blueimp_md5 = `const safeAdd = ${safeAdd};
const bitRotateLeft = ${bitRotateLeft};
const md5cmn = ${md5cmn};
const md5ff = ${md5ff};
const md5gg = ${md5gg};
const md5hh = ${md5hh};
const md5ii = ${md5ii};
const binlMD5 = ${binlMD5};
const binl2rstr = ${binl2rstr};
const rstr2binl = ${rstr2binl};
const rstrMD5 = ${rstrMD5};
const rstrHMACMD5 = ${rstrHMACMD5};
const rstr2hex = ${rstr2hex};
const str2rstrUTF8 = ${str2rstrUTF8};
const rawMD5 = ${rawMD5};
const hexMD5 = ${hexMD5};
const rawHMACMD5 = ${rawHMACMD5};
const hexHMACMD5 = ${hexHMACMD5};
const md5 = ${md5};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');

    const sha256 = `const sha256 = ${SHA256};`.replace(/\`/g, '\\\`').replace(/\${/g, '\\${');

    const scriptInput = `const Minecraft = \`${String(mojang_minecraft)}\`;
    const GameTest = \`${String(mojang_gametest)}\`;
    const UI = \`${String(mojang_minecraft_ui)}\`;
    function getModule (param) {
      if (param == "mojang-minecraft") {
        return \`${mojangminecraft_str()}\`;
      } else if (param == "mojang-gametest") {
        return \`${mojanggametest_str()}\`;
      } else if (param == "mojang-minecraft-ui") {
        return \`${mojangminecraftui_str()}\`;
      } else return undefined;
    };
    ${blueimp_md5}
    ${sha256}
    ${data.message.substring(1)}`;

    // try { client(playerName, scriptInput) } catch (err) { console.error(err) };
    // var cmdline = new Function(scriptInput);
    const cmdline = (new Function("Minecraft", `return (function () { ${data.message.substring(1)}; Minecraft.world.getDimension("overworld").runCommand("say action finished") });`))(Minecraft);
    cmdline();
    
    console.log(`[${Date()}] <${playerName}> ${data.message}`);
  }
});
