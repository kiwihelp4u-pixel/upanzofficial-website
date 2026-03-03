"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(30, 27, 117, 0.95)",
        backdropFilter: "blur(6px)",
        zIndex: 1000,
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* LOGO */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Image
          src="/images/logo.png"
          alt="UPANZ Logo"
          width={40}
          height={40}
        />
        <span style={{ color: "white", fontWeight: 600, fontSize: "18px" }}>
          UPANZ
        </span>
      </Link>

      {/* NAV LINKS */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center"
        }}
      >
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link href="/#about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>

        <Link href="/events" style={{ color: "white", textDecoration: "none" }}>
          Events
        </Link>

        <Link href="/#contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>

        <Link
          href="/#join"
          style={{
            background: "#F7941D",
            padding: "8px 18px",
            borderRadius: "20px",
            color: "white",
            textDecoration: "none",
            fontWeight: 500
          }}
        >
          Join Us
        </Link>
      </div>
    </nav>
  );
}