export const mainstack = [
  {
    name: "Java Script",
    href: "https://ecma-international.org/",
  },
  {
    name: "Type Script",
    href: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "React",
    href: "https://ko.legacy.reactjs.org/docs/getting-started.html",
  },
  { name: "Next.js", href: "https://nextjs.org/docs", component: "Stack" },
  { name: "React Native", href: "" },
  { name: "ESLint", href: "" },
  {
    name: "Axios",
    href: "https://axios-http.com/kr/docs/intro",
  },
  {
    name: "Zustand",
    href: "https://zustand-demo.pmnd.rs/",
  },
  {
    name: "React Router",
    href: "https://reactrouter.com/en/main",
  },
  {
    name: "Emotion",
    href: "https://emotion.sh/docs/introduction",
  },
  { name: "Tailwind", href: "https://tailwindcss.com", component: "SubStack" },

  {
    name: "FSD Arch",
    href: "https://www.youtube.com/watch?v=64Fx5Y1gEOA",
  },
];

export const substack = [
  { name: "Recoil", href: "" },
  {
    name: "Redux",
    href: "https://ko.redux.js.org/introduction/getting-started/",
  },
  { name: "React Query", href: "https://tanstack.com", component: "SubStack" },
  {
    name: "react-hook-form",
    href: "https://react-hook-form.com/get-started",
  },
  {
    name: "C & C++",
    href: "https://learn.microsoft.com/ko-kr/cpp/c-language/?view=msvc-170",
  },
  { name: "Tiptap", href: "" },
  { name: "react-doc-viewer", href: "" },
  { name: "RN-async-storage", href: "" },
  { name: "RN-ble-manager", href: "" },
];

export const everstack = [
  { name: "PDF.js", href: "" },
  {
    name: "MobX",
    href: "https://ko.mobx.js.org/README.html",
  },
  {
    name: "NextAuth.js",
    href: "https://next-auth.js.org/getting-started/example",
  },
  {
    name: "Playwright",
    href: "https://playwright.dev/docs/intro",
  },
  {
    name: "Cypress",
    href: "https://docs.cypress.io/guides/overview/why-cypress",
  },
  {
    name: "Recharts",
    href: "https://recharts.org/en-US/",
  },
  { name: "MSW", href: "https://mswjs.io/" },
  { name: "RN-wifi-reborn", href: "" },
  { name: "RN-sensors", href: "" },
];

export const stack = [...mainstack, ...substack, ...everstack];
