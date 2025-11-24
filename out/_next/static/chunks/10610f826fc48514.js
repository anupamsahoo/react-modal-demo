(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(74080),l=[],d=50,o=s.createContext(null);function r(){let e=s.useContext(o);if(!e)throw Error("Modal.* components must be used inside <Modal>");return e}function n(...e){return e.filter(Boolean).join(" ")}var i={sm:"am-modal-size-sm",md:"am-modal-size-md",lg:"am-modal-size-lg",xl:"am-modal-size-xl",full:"am-modal-size-full"},c={scale:"am-anim-scale","slide-up":"am-anim-slide-up","slide-down":"am-anim-slide-down","slide-left":"am-anim-slide-left","slide-right":"am-anim-slide-right",none:""},m={default:"am-modal-variant-default",danger:"am-modal-variant-danger",success:"am-modal-variant-success",info:"am-modal-variant-info"},x={default:"am-modal-header-variant-default",danger:"am-modal-header-variant-danger",success:"am-modal-header-variant-success",info:"am-modal-header-variant-info"};function h({open:e,onOpenChange:r,size:x="lg",animation:h="scale",showCloseIcon:p=!0,className:u,disableOutsideClose:b,disableEscClose:f,children:g,variant:j="default"}){let[N,y]=s.useState(!1),[k,v]=s.useState(50),w=s.useRef(null);s.useEffect(()=>{w.current||("undefined"!=typeof crypto&&"randomUUID"in crypto?w.current=`mdl-${crypto.randomUUID()}`:w.current=`mdl-${Math.random().toString(36).slice(2,9)}`)},[]),s.useEffect(()=>{if(!e)return;let t=w.current;if(t)return l.includes(t)||(l.push(t),v(d),d+=2),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1),0===l.length&&(d=50)}},[e]),s.useEffect(()=>y(!0),[]),s.useEffect(()=>{if(!e)return;let t=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=t}},[e]);let C=()=>r(!1);if(s.useEffect(()=>{if(!e||f)return;let t=e=>{if("Escape"!==e.key)return;let t=w.current;t&&l[l.length-1]===t&&C()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e,f,r]),!N||!e)return null;let M=(0,t.jsx)(o.Provider,{value:{close:C,variant:j},children:(0,t.jsxs)("div",{className:"am-modal-root",style:{zIndex:k},"aria-modal":"true",role:"dialog",children:[(0,t.jsx)("div",{className:"am-modal-overlay",onClick:()=>{if(b)return;let e=w.current;e&&l[l.length-1]===e&&C()}}),(0,t.jsxs)("div",{className:n("am-modal-box",i[x],c[h],m[j],u),onClick:e=>e.stopPropagation(),children:[g,p&&(0,t.jsx)("button",{type:"button",className:"am-modal-close-btn",onClick:C,"aria-label":"Close",children:(0,t.jsx)("span",{className:"text-lg leading-none",children:"×"})})]})]})});return(0,a.createPortal)(M,document.body)}function p({className:e,children:s}){let{variant:a}=r();return(0,t.jsx)("div",{className:n("am-modal-header",x[a],e),children:s})}function u({className:e,children:s}){return(0,t.jsx)("div",{className:n("am-modal-body",e),children:s})}function b({className:e,children:s}){return(0,t.jsx)("div",{className:n("am-modal-footer",e),children:s})}function f(){let[e,a]=s.useState("light");return s.useEffect(()=>{let e=localStorage.getItem("theme");if(e)a(e),document.documentElement.classList.toggle("dark","dark"===e);else{let e=window.matchMedia("(prefers-color-scheme: dark)").matches;a(e?"dark":"light"),document.documentElement.classList.toggle("dark",e)}},[]),(0,t.jsx)("button",{onClick:()=>{let t="light"===e?"dark":"light";a(t),document.documentElement.classList.toggle("dark","dark"===t),localStorage.setItem("theme",t)},className:"fixed right-4 top-4 z-[999] grid place-items-center h-10 w-10 rounded-full border border-slate-300 bg-white text-slate-800 shadow-md hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800","aria-label":"Toggle theme",children:"dark"===e?(0,t.jsx)(g,{}):(0,t.jsx)(j,{})})}function g(){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,t.jsx)("path",{d:"M12 1v2"}),(0,t.jsx)("path",{d:"M12 21v2"}),(0,t.jsx)("path",{d:"M4.2 4.2l1.4 1.4"}),(0,t.jsx)("path",{d:"M18.4 18.4l1.4 1.4"}),(0,t.jsx)("path",{d:"M1 12h2"}),(0,t.jsx)("path",{d:"M21 12h2"}),(0,t.jsx)("path",{d:"M4.2 19.8l1.4-1.4"}),(0,t.jsx)("path",{d:"M18.4 5.6l1.4-1.4"})]})}function j(){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M21 12.8A9 9 0 0111.2 3 7 7 0 0012 19a9 9 0 009-6.2z"})})}function N({code:e}){return(0,t.jsx)("pre",{className:"mt-3 rounded-md bg-slate-900 text-slate-100 text-xs md:text-sm p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:e})})}function y(){let[e,a]=s.useState(!1);return(0,t.jsxs)("div",{className:"border rounded-xl p-4 md:p-6 bg-white/50 dark:bg-slate-900/40",children:[(0,t.jsx)("h3",{className:"text-sm font-semibold mb-2",children:"Basic modal"}),(0,t.jsx)("p",{className:"text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4",children:"A simple modal with header, body, and footer."}),(0,t.jsx)("button",{className:"inline-flex items-center rounded-md px-3 py-2 text-xs md:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",onClick:()=>a(!0),children:"Open modal"}),(0,t.jsxs)(h,{open:e,onOpenChange:a,children:[(0,t.jsxs)(p,{children:[(0,t.jsx)("h2",{className:"text-lg font-semibold",children:"Simple modal"}),(0,t.jsx)("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:"This is a basic example of the modal."})]}),(0,t.jsx)(u,{children:(0,t.jsx)("p",{className:"text-sm",children:"Put any content here – text, forms, lists, etc."})}),(0,t.jsxs)(b,{children:[(0,t.jsx)("button",{className:"px-3 py-2 text-xs md:text-sm rounded-md border border-slate-300 dark:border-slate-700",onClick:()=>a(!1),children:"Close"}),(0,t.jsx)("button",{className:"px-3 py-2 text-xs md:text-sm rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900",children:"Confirm"})]})]})]})}let k=`import * as React from "react";
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
}`;function v(){let[e,a]=s.useState("danger"),[l,d]=s.useState("md"),[o,r]=s.useState("scale"),[n,i]=s.useState(!1);return(0,t.jsxs)("div",{className:"border rounded-xl p-4 md:p-6 bg-white/50 dark:bg-slate-900/40",children:[(0,t.jsx)("h3",{className:"text-sm font-semibold mb-2",children:"Variants, sizes & animations"}),(0,t.jsx)("p",{className:"text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4",children:"Try different configurations of the modal."}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-3 mb-4 text-xs md:text-sm",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,t.jsx)("span",{className:"text-slate-500 dark:text-slate-400",children:"Variant:"}),["default","danger","success","info"].map(s=>(0,t.jsx)("button",{onClick:()=>a(s),className:"px-2 py-1 rounded-md border text-xs md:text-sm "+(e===s?"bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900":"border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200"),children:s},s))]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,t.jsx)("span",{className:"text-slate-500 dark:text-slate-400",children:"Size:"}),["sm","md","lg","xl","full"].map(e=>(0,t.jsx)("button",{onClick:()=>d(e),className:"px-2 py-1 rounded-md border text-xs md:text-sm "+(l===e?"bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900":"border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200"),children:e},e))]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,t.jsx)("span",{className:"text-slate-500 dark:text-slate-400",children:"Animation:"}),["scale","slide-up","slide-down","slide-left","slide-right","none"].map(e=>(0,t.jsx)("button",{onClick:()=>r(e),className:"px-2 py-1 rounded-md border text-xs md:text-sm "+(o===e?"bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900":"border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200"),children:e},e))]})]}),(0,t.jsx)("button",{className:"inline-flex items-center rounded-md px-3 py-2 text-xs md:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",onClick:()=>i(!0),children:"Open configured modal"}),(0,t.jsxs)(h,{open:n,onOpenChange:i,size:l,variant:e,animation:o,children:[(0,t.jsxs)(p,{children:[(0,t.jsx)("h2",{className:"text-lg font-semibold",children:"Configured modal"}),(0,t.jsxs)("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:["Variant: ",(0,t.jsx)("code",{children:e}),", size: ",(0,t.jsx)("code",{children:l}),", animation: ",(0,t.jsx)("code",{children:o})]})]}),(0,t.jsx)(u,{children:(0,t.jsx)("p",{className:"text-sm",children:"You can control variant, size and animation via props."})}),(0,t.jsx)(b,{children:(0,t.jsx)("button",{className:"px-3 py-2 text-xs md:text-sm rounded-md border border-slate-300 dark:border-slate-700",onClick:()=>i(!1),children:"Close"})})]})]})}let w=`<Modal
  open={open}
  onOpenChange={setOpen}
  size="lg"               // "sm" | "md" | "lg" | "xl" | "full"
  variant="danger"        // "default" | "danger" | "success" | "info"
  animation="slide-up"    // "scale" | "slide-*" | "none"
>
  <ModalHeader>...</ModalHeader>
  <ModalBody>...</ModalBody>
  <ModalFooter>...</ModalFooter>
</Modal>`;function C(){let[e,a]=s.useState(!1),[l,d]=s.useState(!1);return(0,t.jsxs)("div",{className:"border rounded-xl p-4 md:p-6 bg-white/50 dark:bg-slate-900/40",children:[(0,t.jsx)("h3",{className:"text-sm font-semibold mb-2",children:"Stacked modals"}),(0,t.jsx)("p",{className:"text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4",children:"Open multiple modals. Only the top-most responds to ESC and overlay clicks."}),(0,t.jsx)("button",{className:"inline-flex items-center rounded-md px-3 py-2 text-xs md:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",onClick:()=>a(!0),children:"Open outer modal"}),(0,t.jsxs)(h,{open:e,onOpenChange:a,size:"lg",children:[(0,t.jsx)(p,{children:(0,t.jsx)("h2",{className:"text-lg font-semibold",children:"Outer modal"})}),(0,t.jsxs)(u,{children:[(0,t.jsx)("p",{className:"mb-4 text-sm",children:"This modal can open another modal on top of it."}),(0,t.jsx)("button",{className:"rounded-md px-3 py-2 text-xs md:text-sm border border-slate-300 dark:border-slate-700",onClick:()=>d(!0),children:"Open inner modal"})]}),(0,t.jsx)(b,{children:(0,t.jsx)("button",{className:"rounded-md px-3 py-2 text-xs md:text-sm border border-slate-300 dark:border-slate-700",onClick:()=>a(!1),children:"Close outer"})})]}),(0,t.jsxs)(h,{open:l,onOpenChange:d,size:"sm",variant:"info",children:[(0,t.jsx)(p,{children:(0,t.jsx)("h2",{className:"text-lg font-semibold",children:"Inner modal"})}),(0,t.jsx)(u,{children:(0,t.jsx)("p",{className:"text-sm",children:"While this is open, ESC / overlay close only this modal."})}),(0,t.jsx)(b,{children:(0,t.jsx)("button",{className:"rounded-md px-3 py-2 text-xs md:text-sm border border-slate-300 dark:border-slate-700",onClick:()=>d(!1),children:"Close inner"})})]})]})}let M=`const [outerOpen, setOuterOpen] = React.useState(false);
const [innerOpen, setInnerOpen] = React.useState(false);

<Modal open={outerOpen} onOpenChange={setOuterOpen}>
  ...
  <button onClick={() => setInnerOpen(true)}>Open inner</button>
</Modal>

<Modal open={innerOpen} onOpenChange={setInnerOpen}>
  ...
</Modal>`;function O(){let[e,a]=s.useState(!1);return(0,t.jsxs)("div",{className:"border rounded-xl p-4 md:p-6 bg-white/50 dark:bg-slate-900/40",children:[(0,t.jsx)("h3",{className:"text-sm font-semibold mb-2",children:"useModalClose()"}),(0,t.jsx)("p",{className:"text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4",children:"Close the modal from nested components without prop drilling."}),(0,t.jsx)("button",{className:"inline-flex items-center rounded-md px-3 py-2 text-xs md:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",onClick:()=>a(!0),children:"Open modal"}),(0,t.jsxs)(h,{open:e,onOpenChange:a,children:[(0,t.jsx)(p,{children:(0,t.jsx)("h2",{className:"text-lg font-semibold",children:"Hook example"})}),(0,t.jsx)(u,{children:(0,t.jsx)(S,{})})]})]})}function S(){let e=function(){let{close:e}=r();return e}();return(0,t.jsxs)("div",{className:"flex flex-col gap-2 text-sm",children:[(0,t.jsxs)("p",{children:["This button is several levels deep but can still close the modal using"," ",(0,t.jsx)("code",{children:"useModalClose()"}),"."]}),(0,t.jsx)("button",{className:"px-3 py-2 text-xs md:text-sm rounded-md bg-emerald-600 text-white hover:bg-emerald-500",onClick:e,children:"Close from inside"})]})}let E=`import { useModalClose } from "@anupamsahoo/react-modal";

function DeepChild() {
  const close = useModalClose();
  return (
    <button onClick={close}>
      Close modal
    </button>
  );
}`;function T(){return(0,t.jsxs)("main",{className:"min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50",children:[(0,t.jsx)(f,{}),(0,t.jsxs)("div",{className:"mx-auto max-w-5xl px-4 py-10 md:py-16",children:[(0,t.jsxs)("header",{className:"mb-10 md:mb-14",children:[(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2",children:"@anupamsahoo/react-modal"}),(0,t.jsx)("h1",{className:"text-3xl md:text-4xl font-bold tracking-tight mb-3",children:"Stacked & themeable modal for Tailwind v4"}),(0,t.jsx)("p",{className:"text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl",children:"A small React modal component with stacking, variants, animations, and a Tailwind v4–friendly CSS API."}),(0,t.jsxs)("div",{className:"mt-6 flex flex-wrap gap-3 text-xs md:text-sm",children:[(0,t.jsx)("code",{className:"rounded-md bg-slate-900 text-slate-100 px-3 py-2",children:"npm install @anupamsahoo/react-modal"}),(0,t.jsx)("code",{className:"rounded-md bg-slate-900 text-slate-100 px-3 py-2",children:'import "@anupamsahoo/react-modal/styles.css"'})]})]}),(0,t.jsxs)("section",{className:"grid gap-6 md:gap-8 md:grid-cols-2 mb-12",children:[(0,t.jsx)(y,{}),(0,t.jsx)(v,{}),(0,t.jsx)(C,{}),(0,t.jsx)(O,{})]}),(0,t.jsxs)("section",{className:"space-y-6 mb-12",children:[(0,t.jsx)("h2",{className:"text-xl md:text-2xl font-semibold",children:"API"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-base md:text-lg font-semibold mb-2",children:"<Modal /> props"}),(0,t.jsx)("div",{className:"overflow-x-auto text-xs md:text-sm",children:(0,t.jsxs)("table",{className:"min-w-full border border-slate-200 dark:border-slate-800 text-left text-xs md:text-sm",children:[(0,t.jsx)("thead",{className:"bg-slate-100 dark:bg-slate-900/60",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"px-3 py-2 border-b border-slate-200 dark:border-slate-800",children:"Prop"}),(0,t.jsx)("th",{className:"px-3 py-2 border-b border-slate-200 dark:border-slate-800",children:"Type"}),(0,t.jsx)("th",{className:"px-3 py-2 border-b border-slate-200 dark:border-slate-800",children:"Default"}),(0,t.jsx)("th",{className:"px-3 py-2 border-b border-slate-200 dark:border-slate-800",children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"open"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"boolean"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"—"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"Controls whether the modal is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"onOpenChange"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"(open: boolean) => void"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"—"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"Called when the modal wants to change its open state (ESC, overlay click, close icon)."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"size"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:'"sm" | "md" | "lg" | "xl" | "full"'}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:'"lg"'}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"Controls max-width of the modal."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"animation"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:'"scale" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "none"'}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:'"scale"'}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"Entry animation for the modal panel."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"variant"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:'"default" | "danger" | "success" | "info"'}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:'"default"'}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"Controls border + header accent styling."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"showCloseIcon"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"boolean"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"true"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"Show the floating close icon in the top-right."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"disableOutsideClose"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"boolean"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"false"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"If true, clicking the overlay does nothing."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"disableEscClose"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"boolean"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"false"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"If true, pressing ESC does not close the modal."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"className"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"string"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"—"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"Extra classes for the modal panel container."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"children"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"React.ReactNode"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"—"}),(0,t.jsx)("td",{className:"px-3 py-2 align-top",children:"Usually composed of ModalHeader / ModalBody / ModalFooter."})]})]})]})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-base md:text-lg font-semibold mb-1",children:"Other components"}),(0,t.jsxs)("ul",{className:"list-disc pl-5 text-xs md:text-sm text-slate-700 dark:text-slate-300 space-y-1",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"ModalHeader"})," – header area, usually title + description. Props: ",(0,t.jsx)("code",{children:"className?"}),","," ",(0,t.jsx)("code",{children:"children"}),"."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"ModalBody"})," – scrollable body area. Props:"," ",(0,t.jsx)("code",{children:"className?"}),", ",(0,t.jsx)("code",{children:"children"}),"."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"ModalFooter"})," – footer with actions. Props:"," ",(0,t.jsx)("code",{children:"className?"}),", ",(0,t.jsx)("code",{children:"children"}),"."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"useModalClose()"})," – hook that returns a"," ",(0,t.jsx)("code",{children:"() => void"})," function to close the modal from inside."]})]})]})]}),(0,t.jsxs)("section",{className:"space-y-6",children:[(0,t.jsx)("h2",{className:"text-xl md:text-2xl font-semibold",children:"Code snippets"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm md:text-base font-semibold",children:"Basic usage (Next.js + Tailwind)"}),(0,t.jsx)(N,{code:k})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm md:text-base font-semibold",children:"Variants, sizes, animations"}),(0,t.jsx)(N,{code:w})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm md:text-base font-semibold",children:"Stacked modals"}),(0,t.jsx)(N,{code:M})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm md:text-base font-semibold",children:"useModalClose hook"}),(0,t.jsx)(N,{code:E})]})]}),(0,t.jsxs)("section",{className:"my-12 space-y-4",children:[(0,t.jsx)("h2",{className:"text-xl md:text-2xl font-semibold",children:"Tailwind v4 Setup (Recommended)"}),(0,t.jsxs)("p",{className:"text-sm text-slate-600 dark:text-slate-400 max-w-3xl",children:[(0,t.jsx)("strong",{children:"@anupamsahoo/react-modal"})," is built for"," ",(0,t.jsx)("strong",{children:"Tailwind v4"}),". Follow these steps to ensure proper styling and dark mode support."]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm md:text-base font-semibold mb-2",children:"1. tailwind.css or app/globals.css"}),(0,t.jsx)(N,{code:`@import "tailwindcss";

/* Required for theme switching */
:root {
  color-scheme: light dark;
}

html {
  @apply bg-background text-foreground;
}
`})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm md:text-base font-semibold mb-2",children:"2. Recommended theme variables"}),(0,t.jsx)(N,{code:`:root {
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
}`})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm md:text-base font-semibold mb-2",children:"3. Enable dark mode toggle"}),(0,t.jsx)(N,{code:`// ThemeToggle.tsx
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
}`})]}),(0,t.jsx)("div",{className:"rounded-md border border-dashed border-slate-300 dark:border-slate-700 p-4 text-sm text-slate-600 dark:text-slate-400",children:"That’s it — your modal now automatically follows Tailwind v4 + dark/light theme without any extra config."})]})]})]})}e.s(["default",()=>T],31713)}]);