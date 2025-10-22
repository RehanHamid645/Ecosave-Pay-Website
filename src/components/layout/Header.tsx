"use client";

import Link from "next/link";
import Image from "next/image";
import { Lightbulb, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Button from "@/components/shared/Button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Droplet,
  Trash2,
  Briefcase,
  Home,
  Info,
  BriefcaseBusiness,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", hovericon: <Home /> },
  { name: "About", href: "/about", hovericon: <Info /> },
  {
    name: "Services",
    href: "#",
    dropdown: true,
    children: [
      { name: "Energy", href: "/energy", hovericon: <Zap /> },
      { name: "Water", href: "/water", hovericon: <Droplet /> },
      { name: "Waste", href: "/waste", hovericon: <Trash2 /> },
    ],
  },
  { name: "Blogs", href: "/blog", hovericon: <Lightbulb /> },
  { name: "Careers", href: "/careers", hovericon: <Briefcase /> },
  { name: "Case Studies", href: "/case-studies", hovericon: <BriefcaseBusiness /> }, 
  // { name: "Get a quote", href: "/energy-quote/step1", hovericon: <Zap /> },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };
    const handleScroll = () => {
      // Get hero section height (assuming it's around 100vh or 800px)
      const heroHeight = window.innerWidth >= 1024 ? 150 : 100; // Adjust these values based on your hero section
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > heroHeight);
    };

    window.addEventListener("keydown", handleEsc);
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-[99] transition-all duration-300 
        ${
          usePathname() === "/"
            ? isScrolled
              ? "bg-white/80 backdrop-blur-md shadow-sm"
              : "bg-transparent"
            : "bg-white/80 backdrop-blur-md shadow-sm"
        }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden w-10 invisible" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-1 lg:flex-1 -m-2 justify-center lg:justify-start"
        >
          <Link href="/" className="p-0">
            <Image
              src={
                pathname === '/'? isScrolled ? "/img/Ecosave_polished.png" : "/img/Ecosave_polished_white.png":"/img/Ecosave_polished.png" } 
              alt="Ecosave Gas and Power"
              width={800}
              height={200}
              className="h-[88px] w-auto"
              priority
            />
          </Link>
        </motion.div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden w-10 relative justify-end">
          <Button
            variant="ghost"
            size="sm"
            icon={mobileMenuOpen ? X : Menu}
            onClick={handleToggleMenu}
            aria-expanded={mobileMenuOpen}
            className={pathname === "/" ? "text-white" : "text-gray-900"}
          >
            <span className="sr-only">Toggle menu</span>
          </Button>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-[calc(100%+0.5rem)] mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-[101] overflow-hidden"
              >
                <div className="py-1">
                  {navigation.map((item) =>
                    item.dropdown ? (
                      <div key={item.name}>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3faa4e]"
                        >
                          {item.name}
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="pl-4"
                            >
                              {item.children?.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#3faa4e]"
                                  onClick={handleCloseMenu}
                                >
                                  <span className="w-4 h-4 text-gray-500">
                                    {child.hovericon}
                                  </span>
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3faa4e]"
                        onClick={handleCloseMenu}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                  <div className="border-t border-gray-200 mt-1 pt-1">
                    <Link href="/contact" onClick={handleCloseMenu}>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3faa4e]">
                        Get A Call
                      </span>
                    </Link>
                    <Link href="/portal" onClick={handleCloseMenu}>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3faa4e]">
                        Portal
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:flex lg:gap-x-10 relative"
        >
          {navigation.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <button
                  className={`flex items-center gap-1 text-sm font-semibold leading-6 
                    ${
                            pathname === "/"
                              ? isScrolled
                                ? "text-gray-900 hover:text-[#3faa4e]"
                                : "text-white hover:text-gray-300"
                              : "text-gray-900 hover:text-[#3faa4e]"
                          } transition-colors py-1`}
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-2">
                    {item.children?.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3faa4e]"
                      >
                        <span className="w-4 h-4 text-gray-500 justify-center items-center flex">
                          {child.hovericon}
                        </span>
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 
                          ${
                            pathname === "/"
                              ? isScrolled
                                ? "text-gray-900 hover:text-[#3faa4e]"
                                : "text-white hover:text-gray-300"
                              : "text-gray-900 hover:text-[#3faa4e]"
                          } transition-colors group relative py-1`}
              >
                <span className="group-hover:opacity-0 transition-opacity">
                  {item.name}
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.hovericon}
                </span>
              </Link>
            )
          )}
        </motion.div>

        {/* Contact button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4"
        >
          <p
            className={`text-sm font-semibold leading-6 ${
                            pathname === "/"
                              ? isScrolled
                                ? "text-gray-900 hover:text-[#3faa4e]"
                                : "text-white hover:text-gray-300"
                              : "text-gray-900 hover:text-[#3faa4e]"
                          } py-1.5`}
          >
            0330 403 7373
          </p>
          <Link href="/contact">
            <Button
              variant="ghost"
              size="sm"
              className="py-1.5 text-gray-900 bg-white"
            >
              Contact
            </Button>
          </Link>
          <Link href="/energy-quote/step1">
            <Button
              variant="primary"
              size="sm"
              className="py-1.5 bg-[#3faa4e] text-white"
            >
              Get a quote
            </Button>
          </Link>
        </motion.div>
      </nav>
    </header>
  );
}
