# Material Design 3 Web Components

This project uses Google's official Material Web package, `@material/web`, pinned to **2.5.0**.

- Official repository: https://github.com/material-components/material-web
- Official setup guide: https://github.com/material-components/material-web/blob/main/docs/quick-start.md
- License: Apache-2.0

## Next.js usage

Material Web uses native custom elements. Import only the components a client component actually uses so unused components are not added to the client bundle.

```tsx
"use client";

import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";

export function MaterialButtonExample() {
  return (
    <div>
      <md-filled-button>Primary action</md-filled-button>
      <md-outlined-button>Secondary action</md-outlined-button>
    </div>
  );
}
```

Keep component imports inside the module that uses them. Do not import every component globally from the root layout.

## Material 3 Expressive support

Version 2.5.0 includes experimental/labs additions related to expressive buttons, FABs, icons, lists, menus, split buttons, and expressive system stylesheets. These APIs are under the library's labs area and should be treated as experimental: verify their exact import path and API against the official v2.5.0 source before adopting them.

**Important limitation:** Material Web is Google's official web-component library for Material 3, but it does not provide complete parity with the full Material 3 Expressive system available on Android. The expressive additions in this release are partial and some are experimental.

## Version and maintenance note

The dependency is pinned to `2.5.0` instead of a floating version so installs remain reproducible. At the time this dependency was added (2026-10-28), 2.5.0 was the latest published release found in the official repository. The project currently describes Material Web as being in maintenance mode pending new maintainers, so re-check the official repository before relying on new expressive features or planning a major upgrade.

## Adoption rules for this portfolio

1. Prefer official Material Web components for new UI where their behavior and accessibility fit the use case.
2. Import only the component definitions a client component needs.
3. Keep the existing site styling and behavior unchanged until a component is deliberately migrated.
4. Do not mix Material Web and MUI components inside the same control; migrate a complete control at a time.
5. Validate production build, keyboard behavior, theme contrast, and mobile layout after introducing components.
