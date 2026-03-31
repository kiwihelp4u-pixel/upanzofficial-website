"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-container">
        <Link href="/" className="brand">
          <div className="logo-wrapper">
            <Image
              src="/images/upanz-logo.png"
              alt="UPANZ Logo"
              width={44}
              height={44}
            />
          </div>
          <span className="brand-text">UPANZ</span>
        </Link>

        <nav className="desktop-menu">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/events">Events</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/#register" className="join-btn">
            Join Us
          </Link>
        </nav>

        <div
          className="mobile-menu-icon"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/events">Events</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/#register" className="mobile-join">
            Join Us
          </Link>
        </div>
      )}
    </header>
  );
}