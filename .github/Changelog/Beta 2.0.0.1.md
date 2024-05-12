# 2.0.0-beta.1

We're fixing more bugs in preparation for Terminator add-on release v2.0.0.

## Add-On Codebase

- Revamped death message system from entity JSON to TypeScript.
- Revamped forward bridging from animation controller JSON to TypeScript fully.

## Terminator Entity Changes

- Added 1.20 death messages to terminator add-on.
- Fix Terminator left message not shown and not colored yellow.
- Fix a bug where terminator will fly when attempting to jump.
- Fix a bug that terminator will not place blocks at certain directions when bridging.
- Fix a bug that Terminator doesn't move when using snowballs (https://github.com/JaylyDev/terminator/issues/46)
- Terminator will now bridge inside the height range of each dimension.
