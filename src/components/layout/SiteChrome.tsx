"use client";

import { ReactNode, useEffect, useState } from "react";
import { BootScreen } from "@/components/boot/BootScreen";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AIAssistant } from "@/components/assistant/AIAssistant";

const BOOT_SESSION_KEY = "portfolio-booted";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [booting, setBooting] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Intentional: this mount-flag pattern avoids an SSR/client render
    // mismatch for the boot screen, which must only ever run in the browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    if (typeof window !== "undefined" && sessionStorage.getItem(BOOT_SESSION_KEY)) {
      setBooting(false);
    }
  }, []);

  function handleBootComplete() {
    setBooting(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(BOOT_SESSION_KEY, "1");
    }
  }

  // Avoid a boot-screen flash during SSR/hydration mismatch — render nothing
  // extra until we know whether this session already booted.
  const showBoot = mounted && booting;

  return (
    <>
      {showBoot && <BootScreen onComplete={handleBootComplete} />}
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <AIAssistant />
    </>
  );
}
