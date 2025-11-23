# React Modal Demo (Next.js + Tailwind)

This is a **Next.js demo project** showcasing  
[`@anupamsahoo/react-modal`](https://www.npmjs.com/package/@anupamsahoo/react-modal) –  
a stacked, themeable modal component built for **Tailwind CSS v4**.

---

## What’s inside?

- **Next.js (App Router) + React 18**
- **Tailwind CSS v4**
- Live examples of:
  - Basic modal
  - Variants (`default`, `danger`, `success`, `info`)
  - Sizes (`sm`, `md`, `lg`, `xl`, `full`)
  - Animations (`scale`, `slide-*`, `none`)
  - **Stacked modals**
  - `useModalClose()` hook usage
- A docs-style page at: `/react-modal`

---

## Getting started

### 1. Clone this repo

```bash
git clone https://github.com/<your-username>/react-modal-demo.git
cd react-modal-demo
```

### 2. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

Make sure you have Node 18+ installed.

### 3. Run the dev server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Then open:

```
http://localhost:3000/react-modal
```

## About @anupamsahoo/react-modal

The demo uses the published package:

```bash
npm install @anupamsahoo/react-modal
```

### Basic usage (from the demo)

```js
"use client";

import * as React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@anupamsahoo/react-modal";

// IMPORTANT: import once (e.g. in layout.tsx or _app.tsx)
import "@anupamsahoo/react-modal/styles.css";

export function BasicExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        className="rounded-md px-3 py-2 text-sm bg-slate-900 text-white"
        onClick={() => setOpen(true)}
      >
        Open modal
      </button>

      <Modal open={open} onOpenChange={setOpen}>
        <ModalHeader>
          <h2 className="text-lg font-semibold">Simple modal</h2>
          <p className="text-sm text-slate-500">
            This is a basic example of the modal.
          </p>
        </ModalHeader>

        <ModalBody>
          <p className="text-sm">
            Put any content here – text, forms, lists, etc.
          </p>
        </ModalBody>

        <ModalFooter>
          <button
            className="rounded-md px-3 py-2 text-sm border border-slate-300"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <button className="rounded-md px-3 py-2 text-sm bg-slate-900 text-white">
            Confirm
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}
```

### License

MIT — Free for personal and commercial use

© Anupam Sahoo
