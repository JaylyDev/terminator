import { Vector2Builder, Vector3Builder } from "@minecraft/math";
import {
  BlockPermutation,
  BlockRaycastHit,
  BlockRaycastOptions,
  CommandResult,
  Dimension,
  Effect,
  EffectType,
  Entity,
  EntityApplyDamageByProjectileOptions,
  EntityApplyDamageOptions,
  EntityComponent,
  EntityEffectOptions,
  EntityInventoryComponent,
  EntityQueryOptions,
  EntityRaycastHit,
  EntityRaycastOptions,
  PlayAnimationOptions,
  ScoreboardIdentity,
  TeleportOptions,
  Vector2,
  Vector3,
  system,
  world,
} from "@minecraft/server";
import {
  PlayerJumpCooldown,
  PlayerJumpImpulse,
  ReplaceableBlocks,
  UnbreakableBlocks,
} from "../config";
import { MinecraftColor } from "../minecraft-color";
import { TaskType } from "../dummyEntity/dummyEntity";

/**
 * Represents the state of a terminator entity in the world.
 */
export class TerminatorEntity implements Entity {
  constructor(private terminator: Entity) {}
  get isSleeping(): boolean {
    return this.terminator.isSleeping;
  }
  get isSneaking(): boolean {
    return this.terminator.isSneaking;
  }
  set isSneaking(value: boolean) {
    this.terminator.isSneaking = value;
  }
  get isSwimming(): boolean {
    return this.terminator.isSwimming;
  }
  get dimension(): Dimension {
    return this.terminator.dimension;
  }
  get id(): string {
    return this.terminator.id;
  }
  get isClimbing(): boolean {
    return this.terminator.isClimbing;
  }
  get isFalling(): boolean {
    return this.terminator.isFalling;
  }
  get isInWater(): boolean {
    return this.terminator.isInWater;
  }
  get isOnGround(): boolean {
    return this.terminator.isOnGround;
  }
  get nameTag(): string {
    return this.terminator.nameTag;
  }
  set nameTag(value: string) {
    this.terminator.nameTag = value;
  }
  get scoreboardIdentity(): ScoreboardIdentity | undefined {
    return this.terminator.scoreboardIdentity;
  }
  get typeId(): string {
    return this.terminator.typeId;
  }
  get location(): Vector3Builder {
    return new Vector3Builder(this.terminator.location);
  }
  addEffect(
    effectType: EffectType | string,
    duration: number,
    options?: EntityEffectOptions
  ): void {
    this.terminator.addEffect(effectType, duration, options);
  }
  addTag(tag: string): boolean {
    return this.terminator.addTag(tag);
  }
  applyDamage(
    amount: number,
    options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions
  ): boolean {
    return this.terminator.applyDamage(amount, options);
  }
  applyImpulse(vector: Vector3): void {
    this.terminator.applyImpulse(vector);
  }
  applyKnockback(
    directionX: number,
    directionZ: number,
    horizontalStrength: number,
    verticalStrength: number
  ): void {
    this.terminator.applyKnockback(
      directionX,
      directionZ,
      horizontalStrength,
      verticalStrength
    );
  }
  clearDynamicProperties(): void {
    this.terminator.clearDynamicProperties();
  }
  clearVelocity(): void {
    this.terminator.clearVelocity();
  }
  extinguishFire(useEffects?: boolean): boolean {
    return this.terminator.extinguishFire(useEffects);
  }
  getBlockFromViewDirection(
    options?: BlockRaycastOptions
  ): BlockRaycastHit | undefined {
    return this.terminator.getBlockFromViewDirection(options);
  }
  getComponent(componentId: string): EntityComponent | undefined {
    return this.terminator.getComponent(componentId);
  }
  getComponents(): EntityComponent[] {
    return this.terminator.getComponents();
  }
  getDynamicProperty(
    identifier: string
  ): boolean | number | string | Vector3 | undefined {
    const response = this.terminator.getDynamicProperty(identifier);
    if (typeof response === "object") return new Vector3Builder(response);
    return response;
  }
  getDynamicPropertyIds(): string[] {
    return this.terminator.getDynamicPropertyIds();
  }
  getDynamicPropertyTotalByteCount(): number {
    return this.terminator.getDynamicPropertyTotalByteCount();
  }
  getEffect(effectType: EffectType | string): Effect | undefined {
    return this.terminator.getEffect(effectType);
  }
  getEffects(): Effect[] {
    return this.terminator.getEffects();
  }
  getEntitiesFromViewDirection(
    options?: EntityRaycastOptions
  ): EntityRaycastHit[] {
    return this.terminator.getEntitiesFromViewDirection(options);
  }
  getHeadLocation(): Vector3Builder {
    const response = this.terminator.getHeadLocation();
    return new Vector3Builder(response);
  }
  getProperty(identifier: string): boolean | number | string | undefined {
    return this.terminator.getProperty(identifier);
  }
  getRotation(): Vector2Builder {
    return new Vector2Builder(this.terminator.getRotation());
  }
  getTags(): string[] {
    return this.terminator.getTags();
  }
  getVelocity(): Vector3Builder {
    const response = this.terminator.getVelocity();
    return new Vector3Builder(response);
  }
  getViewDirection(): Vector3Builder {
    const response = this.terminator.getViewDirection();
    return new Vector3Builder(response);
  }
  hasComponent(componentId: string): boolean {
    return this.terminator.hasComponent(componentId);
  }
  hasTag(tag: string): boolean {
    return this.terminator.hasTag(tag);
  }
  isValid(): boolean {
    return this.terminator.isValid();
  }
  kill(): boolean {
    return this.terminator.kill();
  }
  matches(options: EntityQueryOptions): boolean {
    return this.terminator.matches(options);
  }
  playAnimation(animationName: string, options?: PlayAnimationOptions): void {
    this.terminator.playAnimation(animationName, options);
  }
  remove(): void {
    this.terminator.remove();
  }
  removeEffect(effectType: EffectType | string): boolean {
    return this.terminator.removeEffect(effectType);
  }
  removeTag(tag: string): boolean {
    return this.terminator.removeTag(tag);
  }
  resetProperty(identifier: string): boolean | number | string {
    return this.terminator.resetProperty(identifier);
  }
  runCommand(commandString: string): CommandResult {
    return this.terminator.runCommand(commandString);
  }
  runCommandAsync(commandString: string): Promise<CommandResult> {
    return this.terminator.runCommandAsync(commandString);
  }
  setDynamicProperty(
    identifier: string,
    value?: boolean | number | string | Vector3
  ): void {
    this.terminator.setDynamicProperty(identifier, value);
  }
  setOnFire(seconds: number, useEffects?: boolean): boolean {
    return this.terminator.setOnFire(seconds, useEffects);
  }
  setProperty(identifier: string, value: boolean | number | string): void {
    this.terminator.setProperty(identifier, value);
  }
  setRotation(rotation: Vector2): void {
    this.terminator.setRotation(rotation);
  }
  teleport(location: Vector3, teleportOptions?: TeleportOptions): void {
    this.terminator.teleport(location, teleportOptions);
  }
  triggerEvent(eventName: string): void {
    this.terminator.triggerEvent(eventName);
  }
  tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean {
    return this.terminator.tryTeleport(location, teleportOptions);
  }
  /**
   * @remarks
   * Returns whether the terminator is sprinting.
   */
  get isSprinting(): boolean {
    const vec2 = new Vector3Builder(this.getVelocity());
    vec2.y = 0;

    return this.isOnGround && vec2.magnitude() > 0.2;
  }
  /**
   * @remarks
   * Destroys the block at blockLocation, returns false if
   * unbreakable blocks list matches block permutation.
   *
   * This function can't be called in read-only mode.
   *
   * @param blockLocation
   * Location of the block to interact with.
   * @throws This function can throw errors.
   */
  breakBlock(blockLocation: Vector3): boolean {
    const block = this.dimension.getBlock(blockLocation);
    if (!block || UnbreakableBlocks.some((id) => block.permutation.matches(id)))
      return false;
    const result = this.dimension.runCommand(
      `setblock ${blockLocation.x} ${blockLocation.y} ${blockLocation.z} air destroy`
    );
    return result.successCount === 1;
  }
  placeBlock(blockLocation: Vector3, permutation: BlockPermutation): boolean {
    const block = this.dimension.getBlock(blockLocation);
    const entities = this.dimension
      .getEntitiesAtBlockLocation(blockLocation)
      .filter((entity) => entity !== this.terminator);
    if (
      !block ||
      entities.length > 0 ||
      !(block.isAir || block.isLiquid) ||
      !ReplaceableBlocks.some((id) => block.permutation.matches(id))
    )
      return false;
    block.setPermutation(permutation);
    world.playSound("dig.stone", block.location, {
      pitch: Math.random() * 0.2 + 0.8,
    });
    return true;
  }
  /**
   * @remarks
   * This function can't be called in read-only mode.
   *
   * @throws This function can throw errors.
   */
  chat(message: string): void {
    world.sendMessage({
      translate: "chat.type.text",
      with: [this.nameTag, message],
    });
  }
  /**
   * @remarks
   * Simulates and performs a disconnection of the simulated
   * player from the world.
   *
   * This function can't be called in read-only mode.
   *
   * @throws This function can throw errors.
   */
  disconnect(): void {
    world.sendMessage({
      rawtext: [
        { text: MinecraftColor.yellow },
        { translate: "multiplayer.player.left", with: [this.nameTag] },
      ],
    });
    this.terminator.remove();
  }
  /**
   * @remarks
   * Drops the terminator's selected item
   *
   * This function can't be called in read-only mode.
   *
   * @throws This function can throw errors.
   */
  dropSelectedItem(): boolean {
    const inventory = this.getComponent(
      "minecraft:inventory"
    ) as EntityInventoryComponent;
    if (!inventory.container) return false;
    const slot = inventory.container.getSlot(0);
    if (!slot) return false;
    const item = slot.getItem();
    if (!item) return false;
    this.dimension.spawnItem(item, this.location);
    slot.setItem();
    return true;
  }
  /**
   * @remarks
   * Causes the terminator to jump.
   *
   * This function can't be called in read-only mode.
   *
   * @returns
   * True if a jump was performed.
   * @throws This function can throw errors.
   */
  jump(): boolean {
    const cannotJumpUntil =
      (this.getDynamicProperty("terminator:cannot_jump_until") as number) ?? 0;

    if (cannotJumpUntil <= system.currentTick && this.isOnGround) {
      this.applyImpulse(PlayerJumpImpulse);

      this.setDynamicProperty(
        "terminator:cannot_jump_until",
        system.currentTick + PlayerJumpCooldown
      );
      return true;
    } else return false;
  }
  /**
   * @remarks
   * Orders the terminator to move to a specific location
   * using navigation. If a move or navigation is already
   * playing, this will override the last move/walk. Note that if
   * the terminator gets stuck, that terminator will
   * stop. The player must be touching the ground in order to
   * start navigation.
   *
   * This function can't be called in read-only mode.
   *
   * @throws This function can throw errors.
   */
  navigateToLocation(location: Vector3): void {
    const dummyEntity = this.dimension.spawnEntity("entity:dummy", location);
    dummyEntity.setProperty("dummy:task_type", TaskType.PathFind);
    dummyEntity.setDynamicProperty("terminator:navigator", this.id);
    this.triggerEvent("terminator:escape");
  }
}
