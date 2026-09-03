"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile, socials } from "@/data/portfolio";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "Coding" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isUserClick, setIsUserClick] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Don't update active state while user is manually clicking
      if (isUserClick) return;

      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY + 120; // Offset for header

        // Find the current section based on scroll position
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && scrollPosition >= section.offsetTop) {
            setActiveId(section.id);
            break;
          }
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isUserClick]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  // Close on resize to lg and above
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  function goTo(id: string) {
    setMobileOpen(false);
    setIsUserClick(true);
    setActiveId(id); // Instantly set the active ID when clicked

    const el = document.getElementById(id);
    if (el) {
      // Account for fixed header offset
      const headerOffset = 56; // h-14 header
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }

    // Re-enable scroll tracking after the smooth scroll completes
    setTimeout(() => {
      setIsUserClick(false);
    }, 1000);
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "border-b border-white/[0.12] bg-black/95 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/20"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Logo - Apple style */}
        <motion.button
          type="button"
          onClick={() => goTo("home")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="flex shrink-0 items-center gap-2 rounded-sm text-[15px] font-semibold tracking-tight text-white transition-opacity duration-200 hover:opacity-80"
          aria-label={`${profile.name} — go to top`}
        >
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-white"
            aria-hidden
          />
          <span className="truncate">{profile.callsign}</span>
        </motion.button>

        {/* Desktop Navigation - Apple style */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Section navigation">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => goTo(item.id)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative py-2 text-[13px] font-normal tracking-tight transition-all duration-200 ease-out",
                activeId === item.id
                  ? "font-medium text-white"
                  : "text-white/60 hover:text-white/90",
              )}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              {item.label}

              {/* Background pill when active */}
              {activeId === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10 backdrop-blur-sm"
                  transition={{
                    type: "spring",
                    stiffness: isUserClick ? 600 : 380,
                    damping: isUserClick ? 40 : 30,
                    duration: isUserClick ? 0.15 : 0.3,
                  }}
                />
              )}

              {/* Bottom dot indicator */}
              <motion.span
                className="absolute left-1/2 -bottom-2 h-1 w-1 rounded-full bg-white"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: activeId === item.id ? 1 : 0,
                  scale: activeId === item.id ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: isUserClick ? 600 : 400,
                  damping: isUserClick ? 40 : 25,
                  duration: isUserClick ? 0.1 : 0.2,
                }}
                style={{ x: "-50%" }}
              />
            </motion.button>
          ))}
        </nav>

        {/* Right side - Desktop Resume button */}
        <div className="hidden items-center gap-4 lg:flex">
          <motion.a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-full bg-white px-5 py-1.5 text-[13px] font-medium text-black transition-all duration-300 hover:bg-white/95 hover:shadow-lg hover:shadow-white/20"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button - always visible below lg */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation - full-screen panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-14 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />

            <motion.nav
              id="mobile-nav"
              aria-label="Section navigation"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-t border-white/[0.08] bg-black/95 backdrop-blur-xl backdrop-saturate-150 lg:hidden"
            >
              <motion.ul
                className="flex flex-col px-4 py-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    <button
                      onClick={() => goTo(item.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-left text-[15px] transition-all duration-200",
                        activeId === item.id
                          ? "bg-white/[0.08] font-medium text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white",
                      )}
                      aria-current={activeId === item.id ? "true" : undefined}
                    >
                      <span>{item.label}</span>
                      {activeId === item.id && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
                      )}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="border-t border-white/[0.06] px-4 py-4"
              >
                <a
                  href={socials.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-white px-4 py-3 text-center text-[13px] font-medium text-black transition-all duration-200 hover:bg-white/95"
                  onClick={() => setMobileOpen(false)}
                >
                  Resume
                </a>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
