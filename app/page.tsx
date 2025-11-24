"use client";

import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useModalClose,
} from "@anupamsahoo/react-modal";
import "@anupamsahoo/react-modal/styles.css";
import * as React from "react";
import ThemeToggle from "./components/theme-toggle";

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-3 rounded-md bg-slate-900 text-slate-100 text-xs md:text-sm p-4 overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}

/* ---------- Example 1: Basic modal ---------- */

function BasicExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border rounded-xl p-4 md:p-6 bg-white/50 dark:bg-slate-900/40">
      <h3 className="text-sm font-semibold mb-2">Basic modal</h3>
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4">
        A simple modal with header, body, and footer.
      </p>
      <button
        className="inline-flex items-center rounded-md px-3 py-2 text-xs md:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        onClick={() => setOpen(true)}
      >
        Open modal
      </button>

      <Modal open={open} onOpenChange={setOpen}>
        <ModalHeader>
          <h2 className="text-lg font-semibold">Simple modal</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
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
            className="px-3 py-2 text-xs md:text-sm rounded-md border border-slate-300 dark:border-slate-700"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <button className="px-3 py-2 text-xs md:text-sm rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
            Confirm
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const basicExampleCode = `import * as React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@anupamsahoo/react-modal";
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
}`;

///////////////////////////////////////////////////////////////////////////

/* ---------- Example 2: Variants + sizes + animation ---------- */

function VariantsExample() {
  const [variant, setVariant] = React.useState<
    "default" | "danger" | "success" | "info"
  >("danger");
  const [size, setSize] = React.useState<"sm" | "md" | "lg" | "xl" | "full">(
    "md"
  );
  const [animation, setAnimation] = React.useState<
    "scale" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "none"
  >("scale");
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border rounded-xl p-4 md:p-6 bg-white/50 dark:bg-slate-900/40">
      <h3 className="text-sm font-semibold mb-2">
        Variants, sizes & animations
      </h3>
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4">
        Try different configurations of the modal.
      </p>

      <div className="flex flex-wrap gap-3 mb-4 text-xs md:text-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400">Variant:</span>
          {["default", "danger", "success", "info"].map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v as any)}
              className={
                "px-2 py-1 rounded-md border text-xs md:text-sm " +
                (variant === v
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200")
              }
            >
              {v}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400">Size:</span>
          {["sm", "md", "lg", "xl", "full"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s as any)}
              className={
                "px-2 py-1 rounded-md border text-xs md:text-sm " +
                (size === s
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200")
              }
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400">Animation:</span>
          {[
            "scale",
            "slide-up",
            "slide-down",
            "slide-left",
            "slide-right",
            "none",
          ].map((a) => (
            <button
              key={a}
              onClick={() => setAnimation(a as any)}
              className={
                "px-2 py-1 rounded-md border text-xs md:text-sm " +
                (animation === a
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200")
              }
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <button
        className="inline-flex items-center rounded-md px-3 py-2 text-xs md:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        onClick={() => setOpen(true)}
      >
        Open configured modal
      </button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        size={size}
        variant={variant}
        animation={animation}
      >
        <ModalHeader>
          <h2 className="text-lg font-semibold">Configured modal</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Variant: <code>{variant}</code>, size: <code>{size}</code>,
            animation: <code>{animation}</code>
          </p>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm">
            You can control variant, size and animation via props.
          </p>
        </ModalBody>
        <ModalFooter>
          <button
            className="px-3 py-2 text-xs md:text-sm rounded-md border border-slate-300 dark:border-slate-700"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const variantsExampleCode = `<Modal
  open={open}
  onOpenChange={setOpen}
  size="lg"               // "sm" | "md" | "lg" | "xl" | "full"
  variant="danger"        // "default" | "danger" | "success" | "info"
  animation="slide-up"    // "scale" | "slide-*" | "none"
>
  <ModalHeader>...</ModalHeader>
  <ModalBody>...</ModalBody>
  <ModalFooter>...</ModalFooter>
</Modal>`;

///////////////////////////////////////////////////////////////////////////

/* ---------- Example 3: Stacked modals ---------- */

function StackedExample() {
  const [outerOpen, setOuterOpen] = React.useState(false);
  const [innerOpen, setInnerOpen] = React.useState(false);

  return (
    <div className="border rounded-xl p-4 md:p-6 bg-white/50 dark:bg-slate-900/40">
      <h3 className="text-sm font-semibold mb-2">Stacked modals</h3>
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4">
        Open multiple modals. Only the top-most responds to ESC and overlay
        clicks.
      </p>

      <button
        className="inline-flex items-center rounded-md px-3 py-2 text-xs md:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        onClick={() => setOuterOpen(true)}
      >
        Open outer modal
      </button>

      <Modal open={outerOpen} onOpenChange={setOuterOpen} size="lg">
        <ModalHeader>
          <h2 className="text-lg font-semibold">Outer modal</h2>
        </ModalHeader>
        <ModalBody>
          <p className="mb-4 text-sm">
            This modal can open another modal on top of it.
          </p>
          <button
            className="rounded-md px-3 py-2 text-xs md:text-sm border border-slate-300 dark:border-slate-700"
            onClick={() => setInnerOpen(true)}
          >
            Open inner modal
          </button>
        </ModalBody>
        <ModalFooter>
          <button
            className="rounded-md px-3 py-2 text-xs md:text-sm border border-slate-300 dark:border-slate-700"
            onClick={() => setOuterOpen(false)}
          >
            Close outer
          </button>
        </ModalFooter>
      </Modal>

      <Modal
        open={innerOpen}
        onOpenChange={setInnerOpen}
        size="sm"
        variant="info"
      >
        <ModalHeader>
          <h2 className="text-lg font-semibold">Inner modal</h2>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm">
            While this is open, ESC / overlay close only this modal.
          </p>
        </ModalBody>
        <ModalFooter>
          <button
            className="rounded-md px-3 py-2 text-xs md:text-sm border border-slate-300 dark:border-slate-700"
            onClick={() => setInnerOpen(false)}
          >
            Close inner
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const stackedExampleCode = `const [outerOpen, setOuterOpen] = React.useState(false);
const [innerOpen, setInnerOpen] = React.useState(false);

<Modal open={outerOpen} onOpenChange={setOuterOpen}>
  ...
  <button onClick={() => setInnerOpen(true)}>Open inner</button>
</Modal>

<Modal open={innerOpen} onOpenChange={setInnerOpen}>
  ...
</Modal>`;

///////////////////////////////////////////////////////////////////////////

/* ---------- Example 4: useModalClose hook ---------- */

function CloseInsideExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border rounded-xl p-4 md:p-6 bg-white/50 dark:bg-slate-900/40">
      <h3 className="text-sm font-semibold mb-2">useModalClose()</h3>
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4">
        Close the modal from nested components without prop drilling.
      </p>
      <button
        className="inline-flex items-center rounded-md px-3 py-2 text-xs md:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        onClick={() => setOpen(true)}
      >
        Open modal
      </button>

      <Modal open={open} onOpenChange={setOpen}>
        <ModalHeader>
          <h2 className="text-lg font-semibold">Hook example</h2>
        </ModalHeader>
        <ModalBody>
          <DeepChild />
        </ModalBody>
      </Modal>
    </div>
  );
}

function DeepChild() {
  const close = useModalClose();
  return (
    <div className="flex flex-col gap-2 text-sm">
      <p>
        This button is several levels deep but can still close the modal using{" "}
        <code>useModalClose()</code>.
      </p>
      <button
        className="px-3 py-2 text-xs md:text-sm rounded-md bg-emerald-600 text-white hover:bg-emerald-500"
        onClick={close}
      >
        Close from inside
      </button>
    </div>
  );
}

const hookExampleCode = `import { useModalClose } from "@anupamsahoo/react-modal";

function DeepChild() {
  const close = useModalClose();
  return (
    <button onClick={close}>
      Close modal
    </button>
  );
}`;

///////////////////////////////////////////////////////////////////////////

export default function ReactModalDocsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <ThemeToggle />
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        {/* Header */}
        <header className="mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2">
            @anupamsahoo/react-modal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Stacked & themeable modal for Tailwind v4
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A small React modal component with stacking, variants, animations,
            and a Tailwind v4–friendly CSS API.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs md:text-sm">
            <code className="rounded-md bg-slate-900 text-slate-100 px-3 py-2">
              npm install @anupamsahoo/react-modal
            </code>
            <code className="rounded-md bg-slate-900 text-slate-100 px-3 py-2">
              import &quot;@anupamsahoo/react-modal/styles.css&quot;
            </code>
          </div>
        </header>

        {/* Grid: live examples */}
        <section className="grid gap-6 md:gap-8 md:grid-cols-2 mb-12">
          <BasicExample />
          <VariantsExample />
          <StackedExample />
          <CloseInsideExample />
        </section>

        {/* Props & API */}
        <section className="space-y-6 mb-12">
          <h2 className="text-xl md:text-2xl font-semibold">API</h2>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2">
              &lt;Modal /&gt; props
            </h3>
            <div className="overflow-x-auto text-xs md:text-sm">
              <table className="min-w-full border border-slate-200 dark:border-slate-800 text-left text-xs md:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-900/60">
                  <tr>
                    <th className="px-3 py-2 border-b border-slate-200 dark:border-slate-800">
                      Prop
                    </th>
                    <th className="px-3 py-2 border-b border-slate-200 dark:border-slate-800">
                      Type
                    </th>
                    <th className="px-3 py-2 border-b border-slate-200 dark:border-slate-800">
                      Default
                    </th>
                    <th className="px-3 py-2 border-b border-slate-200 dark:border-slate-800">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 align-top">open</td>
                    <td className="px-3 py-2 align-top">boolean</td>
                    <td className="px-3 py-2 align-top">—</td>
                    <td className="px-3 py-2 align-top">
                      Controls whether the modal is visible.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">onOpenChange</td>
                    <td className="px-3 py-2 align-top">
                      (open: boolean) =&gt; void
                    </td>
                    <td className="px-3 py-2 align-top">—</td>
                    <td className="px-3 py-2 align-top">
                      Called when the modal wants to change its open state (ESC,
                      overlay click, close icon).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">size</td>
                    <td className="px-3 py-2 align-top">
                      &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; |
                      &quot;xl&quot; | &quot;full&quot;
                    </td>
                    <td className="px-3 py-2 align-top">&quot;lg&quot;</td>
                    <td className="px-3 py-2 align-top">
                      Controls max-width of the modal.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">animation</td>
                    <td className="px-3 py-2 align-top">
                      &quot;scale&quot; | &quot;slide-up&quot; |
                      &quot;slide-down&quot; | &quot;slide-left&quot; |
                      &quot;slide-right&quot; | &quot;none&quot;
                    </td>
                    <td className="px-3 py-2 align-top">&quot;scale&quot;</td>
                    <td className="px-3 py-2 align-top">
                      Entry animation for the modal panel.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">variant</td>
                    <td className="px-3 py-2 align-top">
                      &quot;default&quot; | &quot;danger&quot; |
                      &quot;success&quot; | &quot;info&quot;
                    </td>
                    <td className="px-3 py-2 align-top">&quot;default&quot;</td>
                    <td className="px-3 py-2 align-top">
                      Controls border + header accent styling.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">showCloseIcon</td>
                    <td className="px-3 py-2 align-top">boolean</td>
                    <td className="px-3 py-2 align-top">true</td>
                    <td className="px-3 py-2 align-top">
                      Show the floating close icon in the top-right.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">disableOutsideClose</td>
                    <td className="px-3 py-2 align-top">boolean</td>
                    <td className="px-3 py-2 align-top">false</td>
                    <td className="px-3 py-2 align-top">
                      If true, clicking the overlay does nothing.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">disableEscClose</td>
                    <td className="px-3 py-2 align-top">boolean</td>
                    <td className="px-3 py-2 align-top">false</td>
                    <td className="px-3 py-2 align-top">
                      If true, pressing ESC does not close the modal.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">className</td>
                    <td className="px-3 py-2 align-top">string</td>
                    <td className="px-3 py-2 align-top">—</td>
                    <td className="px-3 py-2 align-top">
                      Extra classes for the modal panel container.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 align-top">children</td>
                    <td className="px-3 py-2 align-top">React.ReactNode</td>
                    <td className="px-3 py-2 align-top">—</td>
                    <td className="px-3 py-2 align-top">
                      Usually composed of ModalHeader / ModalBody / ModalFooter.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-1">
              Other components
            </h3>
            <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>
                <code>ModalHeader</code> – header area, usually title +
                description. Props: <code>className?</code>,{" "}
                <code>children</code>.
              </li>
              <li>
                <code>ModalBody</code> – scrollable body area. Props:{" "}
                <code>className?</code>, <code>children</code>.
              </li>
              <li>
                <code>ModalFooter</code> – footer with actions. Props:{" "}
                <code>className?</code>, <code>children</code>.
              </li>
              <li>
                <code>useModalClose()</code> – hook that returns a{" "}
                <code>() =&gt; void</code> function to close the modal from
                inside.
              </li>
            </ul>
          </div>
        </section>

        {/* Code snippets */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">Code snippets</h2>

          <div>
            <h3 className="text-sm md:text-base font-semibold">
              Basic usage (Next.js + Tailwind)
            </h3>
            <CodeBlock code={basicExampleCode} />
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold">
              Variants, sizes, animations
            </h3>
            <CodeBlock code={variantsExampleCode} />
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold">
              Stacked modals
            </h3>
            <CodeBlock code={stackedExampleCode} />
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold">
              useModalClose hook
            </h3>
            <CodeBlock code={hookExampleCode} />
          </div>
        </section>
        {/* Tailwind v4 Setup */}
        <section className="my-12 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Tailwind v4 Setup (Recommended)
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
            <strong>@anupamsahoo/react-modal</strong> is built for{" "}
            <strong>Tailwind v4</strong>. Follow these steps to ensure proper
            styling and dark mode support.
          </p>

          <div>
            <h3 className="text-sm md:text-base font-semibold mb-2">
              1. tailwind.css or app/globals.css
            </h3>

            <CodeBlock
              code={`@import "tailwindcss";

/* Required for theme switching */
:root {
  color-scheme: light dark;
}

html {
  @apply bg-background text-foreground;
}
`}
            />
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold mb-2">
              2. Recommended theme variables
            </h3>

            <CodeBlock
              code={`:root {
  /* Base colors */
  --background: #ffffff;
  --foreground: #0f172a;
  --card: #ffffff;
  --card-foreground: #0f172a;
  --border: #e2e8f0;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;

  /* Modal surface + text */
  --am-modal-bg: #ffffff;
  --am-modal-fg: #0f172a;
  --am-modal-border: #e2e8f0;

  /* Header + footer */
  --am-modal-header-bg: transparent;
  --am-modal-header-border: #e2e8f0;
  --am-modal-footer-border: #e2e8f0;

  /* Overlay (40% opacity and blur from component) */
  --am-modal-overlay-bg: rgba(0, 0, 0, 0.4);

  /* Semantic variants */
  --am-modal-danger-border: #ef4444;
  --am-modal-success-border: #22c55e;
  --am-modal-info-border: #0ea5e9;

  /* Close button */
  --am-modal-close-bg: #f1f5f9;
  --am-modal-close-bg-hover: #e2e8f0;
  --am-modal-close-fg: #0f172a;

  /* Radius sync */
  --am-modal-radius: 1rem;
}

.dark {
  /* Base colors */
  --background: #020617;
  --foreground: #f8fafc;
  --card: #020617;
  --card-foreground: #f8fafc;
  --border: #334155;
  --muted: #1e293b;
  --muted-foreground: #94a3b8;

  /* Modal surface + text */
  --am-modal-bg: #020617;
  --am-modal-fg: #f8fafc;
  --am-modal-border: #334155;

  /* Header + footer */
  --am-modal-header-bg: transparent;
  --am-modal-header-border: #334155;
  --am-modal-footer-border: #334155;

  /* Overlay (40% opacity + dark tone) */
  --am-modal-overlay-bg: rgba(2, 6, 23, 0.4);

  /* Semantic variants */
  --am-modal-danger-border: #f43f5e;
  --am-modal-success-border: #4ade80;
  --am-modal-info-border: #38bdf8;

  /* Close button */
  --am-modal-close-bg: rgba(255, 255, 255, 0.08);
  --am-modal-close-bg-hover: rgba(255, 255, 255, 0.15);
  --am-modal-close-fg: #f8fafc;

  /* Radius sync */
  --am-modal-radius: 1rem;
}`}
            />
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold mb-2">
              3. Enable dark mode toggle
            </h3>

            <CodeBlock
              code={`// ThemeToggle.tsx
"use client";

export default function ThemeToggle() {
  const toggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggle}
      className="fixed right-6 top-6 z-50 rounded-md 
        bg-slate-900 text-white px-3 py-2 text-xs
        dark:bg-slate-100 dark:text-slate-900"
    >
      Toggle theme
    </button>
  );
}`}
            />
          </div>

          <div className="rounded-md border border-dashed border-slate-300 dark:border-slate-700 p-4 text-sm text-slate-600 dark:text-slate-400">
            That’s it — your modal now automatically follows Tailwind v4 +
            dark/light theme without any extra config.
          </div>
        </section>
      </div>
    </main>
  );
}
