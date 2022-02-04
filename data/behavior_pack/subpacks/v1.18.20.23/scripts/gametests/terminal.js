// JavaScript terminal for Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
//               data\behavior_pack\subpacks\v1.17.30.04\scripts\gametests\commands\index.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

import {
  Direction,
  GameMode,
  BeforeChatEvent,
  BeforeChatEventSignal,
  BeforeExplosionEvent,
  BeforeExplosionEventSignal,
  BeforeItemDefinitionEventSignal,
  BeforeItemDefinitionTriggeredEvent,
  BeforeItemUseEvent,
  BeforeItemUseEventSignal,
  BeforeItemUseOnEvent,
  BeforeItemUseOnEventSignal,
  BeforePistonActivateEvent,
  BeforePistonActivateEventSignal,
  Block,
  BlockAreaSize,
  BlockBreakEvent,
  BlockBreakEventSignal,
  BlockComponent,
  BlockEvent,
  BlockExplodeEvent,
  BlockExplodeEventSignal,
  BlockInventoryComponent,
  BlockInventoryComponentContainer,
  BlockLavaContainerComponent,
  BlockLocation,
  BlockPermutation,
  BlockPistonComponent,
  BlockPlaceEvent,
  BlockPlaceEventSignal,
  BlockPotionContainerComponent,
  BlockProperties,
  BlockRaycastOptions,
  BlockRecordPlayerComponent,
  BlockSnowContainerComponent,
  BlockType,
  BlockWaterContainerComponent,
  BoolBlockProperty,
  ChatEvent,
  ChatEventSignal,
  Color,
  Container,
  Dimension,
  Effect,
  EffectAddEvent,
  EffectAddEventSignal,
  EffectType,
  EnchantmentType,
  EnchantmentSlot,
  EnchantmentList,
  Entity,
  EntityAddRiderComponent,
  EntityAgeableComponent,
  EntityBreathableComponent,
  EntityColorComponent,
  EntityCreateEvent,
  EntityCreateEventSignal,
  EntityDefinitionFeedItem,
  EntityEventOptions,
  EntityFlyingSpeedComponent,
  EntityHealableComponent,
  EntityHealthComponent,
  EntityInventoryComponent,
  EntityIterator,
  EntityLavaMovementComponent,
  EntityLeashableComponent,
  EntityMountTamingComponent,
  EntityMovementAmphibiousComponent,
  EntityMovementBasicComponent,
  EntityMovementComponent,
  EntityMovementFlyComponent,
  EntityMovementGenericComponent,
  EntityMovementGlideComponent,
  EntityMovementHoverComponent,
  EntityMovementJumpComponent,
  EntityMovementSkipComponent,
  EntityMovementSwayComponent,
  EntityNavigationClimbComponent,
  EntityNavigationFloatComponent,
  EntityNavigationFlyComponent,
  EntityNavigationGenericComponent,
  EntityNavigationHoverComponent,
  EntityNavigationWalkComponent,
  EntityQueryOptions,
  EntityQueryScoreOptions,
  EntityRaycastOptions,
  EntityRideableComponent,
  EntityStrengthComponent,
  EntityTameableComponent,
  EntityUnderwaterMovementComponent,
  Events,
  ExplosionEvent,
  ExplosionEventSignal,
  ExplosionOptions,
  FeedItem,
  FeedItemEffect,
  FilterGroup,
  FluidContainer,
  IBlockProperty,
  IEntityComponent,
  IntBlockProperty,
  InventoryComponentContainer,
  ItemCooldownComponent,
  ItemDefinitionEventSignal,
  ItemDefinitionTriggeredEvent,
  ItemDurabilityComponent,
  ItemFoodComponent,
  Items,
  ItemStack,
  ItemType,
  ItemUseEvent,
  ItemUseEventSignal,
  ItemUseOnEvent,
  ItemUseOnEventSignal,
  Location,
  MinecraftBlockTypes,
  MinecraftEffectTypes,
  MinecraftItemTypes,
  NavigationResult,
  NumberRange,
  PistonActivateEvent,
  PistonActivateEventSignal,
  PitchYawRotation,
  Player,
  PlayerInventoryComponentContainer,
  PlayerJoinEvent,
  PlayerJoinEventSignal,
  PlayerLeaveEvent,
  PlayerLeaveEventSignal,
  Seat,
  StringBlockProperty,
  TickEvent,
  TickEventSignal,
  Trigger,
  Vector,
  WeatherChangeEvent,
  WeatherChangeEventSignal,
  TicksPerSecond,
  world
} from 'mojang-minecraft';

import {
  FenceConnectivity,
  GameTestSequence,
  RegistrationBuilder,
  SimulatedPlayer,
  Tags,
  Test,
} from 'mojang-gametest';

import {
  ActionFormData,
  ActionFormResponse,
  FormResponse,
  MessageFormData,
  MessageFormResponse,
  ModalFormData,
  ModalFormResponse
} from 'mojang-minecraft-ui';

import * as message from 'scripts/gametests/commands/message.js';

let prefix = "$";

world.events.beforeChat.subscribe((data) => {
  let playerName = data.sender.name ?? data.sender.nameTag;
  if ((data.message.substring(0, 1) == prefix) && playerName == 'ItsDominicPlays') {
    /**
     * This script is only available to player 'ItsDominicPlays'
     * Players are not supposed to execute this file
     */
    data.cancel = true;

    message.client(playerName, `const Direction = ${Direction};
    const GameMode = ${GameMode};
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
    const world = ${world};
    const FenceConnectivity = ${FenceConnectivity}; 
    const GameTestSequence = ${GameTestSequence}; 
    const RegistrationBuilder = ${RegistrationBuilder}; 
    const SimulatedPlayer = ${SimulatedPlayer}; 
    const Tags = ${Tags}; 
    const Test = ${Test};
    const ActionFormData = ${ActionFormData};
    const ActionFormResponse = ${ActionFormResponse};
    const FormResponse = ${FormResponse};
    const MessageFormData = ${MessageFormData};
    const MessageFormResponse = ${MessageFormResponse};
    const ModalFormData = ${ModalFormData};
    const ModalFormResponse = ${ModalFormResponse};
    ${data.message.substring(1)}`);

    var cmdline = new Function(`const Direction = ${Direction};
    const GameMode = ${GameMode};
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
    const world = ${world};
    const FenceConnectivity = ${FenceConnectivity}; 
    const GameTestSequence = ${GameTestSequence}; 
    const RegistrationBuilder = ${RegistrationBuilder}; 
    const SimulatedPlayer = ${SimulatedPlayer}; 
    const Tags = ${Tags}; 
    const Test = ${Test};
    const ActionFormData = ${ActionFormData};
    const ActionFormResponse = ${ActionFormResponse};
    const FormResponse = ${FormResponse};
    const MessageFormData = ${MessageFormData};
    const MessageFormResponse = ${MessageFormResponse};
    const ModalFormData = ${ModalFormData};
    const ModalFormResponse = ${ModalFormResponse};
    ${data.message.substring(1)}`);
    cmdline();
    
    console.log(`[${Date()}] <${playerName}> ${data.message.substring(1)}`);
  }
});
