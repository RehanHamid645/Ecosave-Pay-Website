"use client";

import Link from "next/link";
import Image from "next/image";
import { Lightbulb, Menu, X, ChevronDown, User, CreditCard, Computer,Globe, Mail, Phone } from "lucide-react";
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
import HomePageClient from "@/app/HomePageClient";
import { Card } from "@heroui/react";

const navigation = [
  { name: "Home", href: "/", hovericon: <Home /> },
  { name: "About", href: "/about", hovericon: <Info /> },
  {
    name: "Services",
    href: "/services",
    dropdown: true,
    children: [
      { name: "Face to Face", href: "/FaceToFace", hovericon: <User/> },
      {name: "Online Payments",href:"/OnlinePayments",hovericon:<Globe/>},
      { name: "Virtual Terminals", href: "/VirtualPayments", hovericon: <CreditCard /> },
      { name: "EPOS Systems", href: "/EposSystems", hovericon: <Computer /> },
      
    ],
  },
     {name:"Contact",href:"/contact",hovericon:<Mail/>}
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
      if (typeof window === 'undefined') return;
      const heroHeight = window.innerWidth >= 1024 ? 150 : 100;
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > heroHeight);
    };

    if (typeof window === 'undefined') return;

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
    <header className="absolute w-full z-[99] bg-transparent transition-all duration-300">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1 lg:flex-1 -m-2 justify-start lg:mt-2">
          <Link href="/" className="p-0">
            <Image
              src="/img/ecosavepay.png"
              alt="Ecosave Gas and Power"
              width={800}
              height={200}
              className="h-[70px] w-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center gap-2 relative">
          <Button
            variant="ghost"
            size="sm"
            icon={mobileMenuOpen ? X : Menu}
            onClick={handleToggleMenu}
            aria-expanded={mobileMenuOpen}
            className="text-white"
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
                className="absolute right-0 top-[calc(100%+0.5rem)] mt-1 w-48 rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 z-[101] overflow-hidden"
              >
                <div className="py-1">
                  {navigation.map((item) =>
                    item.dropdown ? (
                      <div key={item.name}>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full text-left block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-[#3faa4e]"
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
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-[#3faa4e]"
                                  onClick={handleCloseMenu}
                                >
                                  <span className="w-4 h-4 text-gray-400">
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
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-[#3faa4e]"
                        onClick={handleCloseMenu}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-16 relative">
          {navigation.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center gap-1 text-lg font-semibold leading-6 text-white hover:text-[#3faa4e] transition-colors py-1"
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
                className="text-lg font-semibold leading-6 text-white hover:text-[#3faa4e] transition-colors group relative py-1"
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
        </div>

       {/* Contact button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <a href="tel:01618149299" className="flex items-center gap-2 cursor-pointer group transition-colors">
            <p className={`text-base font-semibold leading-6 text-white transition-colors ${pathname !== '/about' && pathname !== '/contact' ? 'group-hover:text-black' : 'group-hover:text-[#3faa4e]'}`}>
              0161 814 9299
            </p>
            <Phone className={`w-6 h-6 text-white transition-colors ${pathname !== '/about' && pathname !== '/contact' ? 'group-hover:text-black' : 'group-hover:text-[#3faa4e]'}`} />
          </a>

          {/* <Link href="/contact">
            <Button
              variant="ghost"
              size="md"
              className="py-1.5 shadow-xl text-white hover:text-[#3faa4e]"
            >
              Contact
            </Button>
          </Link> */}
         
        </div>
      </nav>
    </header>
  );
}