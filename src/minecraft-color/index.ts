export function black<V extends string>(text: V): `§0${V}` {
  return `§0${text}`;
}
export function darkBlue<V extends string>(text: V): `§1${V}` {
  return `§1${text}`;
}
export function darkGreen<V extends string>(text: V): `§2${V}` {
  return `§2${text}`;
}
export function darkAqua<V extends string>(text: V): `§3${V}` {
  return `§3${text}`;
}
export function darkRed<V extends string>(text: V): `§4${V}` {
  return `§4${text}`;
}
export function darkPurple<V extends string>(text: V): `§5${V}` {
  return `§5${text}`;
}
export function gold<V extends string>(text: V): `§6${V}` {
  return `§6${text}`;
}
export function gray<V extends string>(text: V): `§7${V}` {
  return `§7${text}`;
}
export function darkGray<V extends string>(text: V): `§8${V}` {
  return `§8${text}`;
}
export function blue<V extends string>(text: V): `§9${V}` {
  return `§9${text}`;
}
export function green<V extends string>(text: V): `§a${V}` {
  return `§a${text}`;
}
export function aqua<V extends string>(text: V): `§b${V}` {
  return `§b${text}`;
}
export function red<V extends string>(text: V): `§c${V}` {
  return `§c${text}`;
}
export function lightPurple<V extends string>(text: V): `§d${V}` {
  return `§d${text}`;
}
export function yellow<V extends string>(text: V): `§e${V}` {
  return `§e${text}`;
}
export function white<V extends string>(text: V): `§f${V}` {
  return `§f${text}`;
}
export function minecoinGold<V extends string>(text: V): `§g${V}` {
  return `§g${text}`;
}
export function materialQuartz<V extends string>(text: V): `§h${V}` {
  return `§h${text}`;
}
export function materialIron<V extends string>(text: V): `§i${V}` {
  return `§i${text}`;
}
export function materialNetherite<V extends string>(text: V): `§j${V}` {
  return `§j${text}`;
}
export function materialRedstone<V extends string>(text: V): `§m${V}` {
  return `§m${text}`;
}
export function materialCopper<V extends string>(text: V): `§n${V}` {
  return `§n${text}`;
}
export function materialGold<V extends string>(text: V): `§p${V}` {
  return `§p${text}`;
}
export function materialEmerald<V extends string>(text: V): `§q${V}` {
  return `§q${text}`;
}
export function materialDiamond<V extends string>(text: V): `§s${V}` {
  return `§s${text}`;
}
export function materialLapis<V extends string>(text: V): `§t${V}` {
  return `§t${text}`;
}
export function materialAmethyst<V extends string>(text: V): `§u${V}` {
  return `§u${text}`;
}
export function obfuscated<V extends string>(text: V): `§k${V}` {
  return `§k${text}`;
}
export function bold<V extends string>(text: V): `§l${V}` {
  return `§l${text}`;
}
export function italic<V extends string>(text: V): `§o${V}` {
  return `§o${text}`;
}
export function reset<V extends string>(text: V): `§r${V}§r` {
  return `§r${text}§r`;
}

export class MinecraftColor {
  public static get black() {
    return "§0";
  }
  public static get darkBlue() {
    return "§1";
  }
  public static get darkGreen() {
    return "§2";
  }
  public static get darkAqua() {
    return "§3";
  }
  public static get darkRed() {
    return "§4";
  }
  public static get darkPurple() {
    return "§5";
  }
  public static get gold() {
    return "§6";
  }
  public static get gray() {
    return "§7";
  }
  public static get darkGray() {
    return "§8";
  }
  public static get blue() {
    return "§9";
  }
  public static get green() {
    return "§a";
  }
  public static get aqua() {
    return "§b";
  }
  public static get red() {
    return "§c";
  }
  public static get lightPurple() {
    return "§d";
  }
  public static get yellow() {
    return "§e";
  }
  public static get white() {
    return "§f";
  }
  public static get minecoinGold() {
    return "§g";
  }
  public static get materialQuartz() {
    return "§h";
  }
  public static get materialIron() {
    return "§i";
  }
  public static get materialNetherite() {
    return "§j";
  }
  public static get materialRedstone() {
    return "§m";
  }
  public static get materialCopper() {
    return "§n";
  }
  public static get materialGold() {
    return "§p";
  }
  public static get materialEmerald() {
    return "§q";
  }
  public static get materialDiamond() {
    return "§s";
  }
  public static get materialLapis() {
    return "§t";
  }
  public static get materialAmethyst() {
    return "§u";
  }
  public static get obfuscated() {
    return "§k";
  }
  public static get bold() {
    return "§l";
  }
  public static get italic() {
    return "§o";
  }
  public static get reset() {
    return "§r";
  }
}
