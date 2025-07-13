import "react-tooltip/dist/react-tooltip.css";
import { useEffect } from "react";
import { Inter } from "next/font/google";

import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { Crisp } from "crisp-sdk-web";
import { Tooltip } from "react-tooltip";
import ErrorBoundary from "./ErrorBoundary";
import config from "@/config";
import Navbar from "./Header";

const font = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const router = useRouter();
  const isDashboard = router.pathname === '/dashboard';

  // Set Crisp Chat Support
  useEffect(() => {
    if (router.isReady && config?.crisp?.id) {
      Crisp.configure(config.crisp.id);

      // If config file has onlyShowOnRoutes, will be hidden on the routes in the array. <AppButtonSupport> to toggle it
      if (config.crisp.onlyShowOnRoutes) {
        if (!config.crisp.onlyShowOnRoutes.includes(router.pathname)) {
          Crisp.chat.hide();
          Crisp.chat.onChatClosed(() => {
            Crisp.chat.hide();
          });
        }
      }
    }
  }, [router.isReady, router.pathname]);

  return (
    <div data-theme="business">
      <ErrorBoundary>
        <style jsx global>{`
          html {
            font-family: ${font.style.fontFamily};
          }
        `}</style>
        {!isDashboard && <Navbar />}
        {/* Automatically show a progress bar at the top when navigating between pages */}
        <NextNProgress
          color={config.colors.main}
          options={{ showSpinner: false }}
        />
        <div className={isDashboard ? "" : "pt-24"}>{/* Add padding to prevent content underlap, except on dashboard */}
          {children}
        </div>
        {/* Show Success/Error messages anywhere from the app with toast() */}
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
        {/* Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content="" */}
        <Tooltip
          id="tooltip"
          className="z-[60] !opacity-100 max-w-sm shadow-lg"
        />
      </ErrorBoundary>
    </div>
  );
}