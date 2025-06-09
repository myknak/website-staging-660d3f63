"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CartSidebar from "./cart/CartSidebar";
import { IconCart, IconSearch, IconMenu, IconClose } from "./icons";

export default function Navbar() {
  const pathname = usePathname();
  const { cartItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    // Set initial scrolled state to true to ensure the navbar is visible on page load
    setScrolled(true);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-container container-custom">
          <Link href="/" className="nav-logo">
            NOX BOUTIQUE
          </Link>

          <div className="nav-links">
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "text-accent" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`nav-link ${pathname.startsWith("/shop") ? "text-accent" : ""}`}
            >
              Shop
            </Link>
            <Link
              href="/our-process"
              className={`nav-link ${pathname === "/our-process" ? "text-accent" : ""}`}
            >
              Our Process
            </Link>
            <Link
              href="/scent-guide"
              className={`nav-link ${pathname === "/scent-guide" ? "text-accent" : ""}`}
            >
              Scent Guide
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${pathname === "/contact" ? "text-accent" : ""}`}
            >
              Contact
            </Link>
          </div>

          <div className="nav-actions">
            <button className="nav-action">
              <IconSearch />
            </button>
            <button className="nav-action relative" onClick={toggleCart}>
              <IconCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <IconMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button className="mobile-menu-close" onClick={toggleMobileMenu}>
          <IconClose />
        </button>
        <div className="mobile-menu-links">
          <Link
            href="/"
            className={`mobile-menu-link ${pathname === "/" ? "text-accent" : ""}`}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`mobile-menu-link ${pathname.startsWith("/shop") ? "text-accent" : ""}`}
            onClick={toggleMobileMenu}
          >
            Shop
          </Link>
          <Link
            href="/our-process"
            className={`mobile-menu-link ${pathname === "/our-process" ? "text-accent" : ""}`}
            onClick={toggleMobileMenu}
          >
            Our Process
          </Link>
          <Link
            href="/scent-guide"
            className={`mobile-menu-link ${pathname === "/scent-guide" ? "text-accent" : ""}`}
            onClick={toggleMobileMenu}
          >
            Scent Guide
          </Link>
          <Link
            href="/contact"
            className={`mobile-menu-link ${pathname === "/contact" ? "text-accent" : ""}`}
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={toggleCart} />
    </>
  );
}
