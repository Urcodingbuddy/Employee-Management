import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Optional: `appRootSelector` is the selector for the root element of your app.
   * By default, it is `#__next` which works for Next.js apps with the pages directory.
   * If you are using the app directory, you should change this to `main`.
   */
  appRootSelector: "main", // Adjust based on your project structure (use `#__next` for the pages directory)
};

export default withHydrationOverlay(nextConfig);
