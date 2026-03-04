"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const monuments = [
    "/images/taj.jpg",
    "/images/kashi.jpg",
    "/images/ram-mandir.jpg",
    "/images/bara-imambara.jpg",
    "/images/varanasi-ghat.jpg"
  ];

  const [slide, setSlide] = useState(0);

  // Monument slideshow rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % monuments.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Flower sprinkle effect (runs once)
  useEffect(() => {
    const container = document.getElementById("petal-container");
    if (!container) return;

    const petalsCount = 22;

    for (let i = 0; i < petalsCount; i++) {
      const petal = document.createElement("div");

      petal.style.position = "fixed";
      petal.style.top = "-20px";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.width = "10px";
      petal.style.height = "10px";
      petal.style.background = "#F7941D";
      petal.style.borderRadius = "50%";
      petal.style.opacity = "0.8";
      petal.style.zIndex = "9999";
      petal.style.pointerEvents = "none";

      petal.animate(
        [
          { transform: "translateY(0px) rotate(0deg)" },
          { transform: "translateY(105vh) rotate(360deg)" }
        ],
        {
          duration: 3500 + Math.random() * 2500,
          iterations: 1,
          easing: "linear"
        }
      );

      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 6500);
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* Flower sprinkle overlay container */}
      <div id="petal-container" />

      {/* HERO */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "140px 20px 60px 20px",
          overflow: "hidden"
        }}
      >
        <Image
          src="/images/taj.jpg"
          alt="Taj Mahal"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -2 }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #4C3FA6, #1E1B75)",
            opacity: 0.88,
            zIndex: -1
          }}
        />

        <div style={{ maxWidth: "900px" }}>
          <div
            style={{
              marginBottom: "40px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
              }}
            >
              <Image
                src="/images/upanz-logo.png"
                alt="UPANZ Logo"
                width={120}
                height={120}
              />
            </div>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: "1.15",
              fontWeight: 700,
              marginBottom: "25px"
            }}
          >
            Connecting the Uttar Pradesh
            <br />
            Community Across New Zealand
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              opacity: 0.9,
              marginBottom: "50px"
            }}
          >
            Rooted in culture. United in New Zealand.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px"
            }}
          >
            <Link href="/register">
              <button
                style={{
                  background: "#F7941D",
                  border: "none",
                  padding: "16px 36px",
                  borderRadius: "999px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                Join the Community
              </button>
            </Link>

            <Link href="/events">
              <button
                style={{
                  background: "transparent",
                  border: "2px solid white",
                  padding: "16px 36px",
                  borderRadius: "999px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                Upcoming Events
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* UP MONUMENTS SLIDESHOW (NEW) */}
      <section
        style={{
          padding: "90px 20px",
          textAlign: "center",
          background: "#FFFFFF"
        }}
      >
        <p style={{ color: "#F7941D", fontWeight: 600, fontSize: "14px" }}>
          OUR HERITAGE
        </p>

        <h2
          style={{
            fontSize: "42px",
            marginTop: "10px",
            color: "#1E1B75",
            fontFamily: "var(--font-heading)"
          }}
        >
          Icons of Uttar Pradesh
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            maxWidth: "900px",
            marginInline: "auto"
          }}
        >
          A glimpse of the places that shaped our roots, from timeless monuments
          to the living ghats of the Ganga.
        </p>

        <div
          style={{
            marginTop: "45px",
            maxWidth: "1000px",
            marginInline: "auto",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)"
          }}
        >
          <Image
            src={monuments[slide]}
            alt="Uttar Pradesh Monument"
            width={1200}
            height={650}
            style={{ width: "100%", height: "auto" }}
            priority={false}
          />
        </div>

        <div style={{ marginTop: "18px", display: "flex", gap: "8px", justifyContent: "center" }}>
          {monuments.map((_, i) => (
            <span
              key={i}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: i === slide ? "#F7941D" : "#D9D9D9",
                display: "inline-block"
              }}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "#F9F9F9"
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#F7941D", fontWeight: 600, fontSize: "14px" }}>
            ABOUT US
          </p>

          <h2
            style={{
              fontSize: "42px",
              marginTop: "10px",
              color: "#1E1B75"
            }}
          >
            About UPANZ
          </h2>

          <p
            style={{
              marginTop: "30px",
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#333"
            }}
          >
            The <strong>Uttar Pradesh Association in New Zealand (UPANZ)</strong>{" "}
            is a non-profit community organisation established in{" "}
            <strong>2017</strong>. We celebrate our rich cultural heritage,
            foster social connections, and support members across New Zealand
            while building bridges between Indian and Kiwi cultures.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        style={{
          padding: "100px 20px",
          background: "#F3F0EA",
          textAlign: "center"
        }}
      >
        <p style={{ color: "green", fontWeight: 600, fontSize: "14px" }}>
          OUR FOCUS
        </p>

        <h2
          style={{
            fontSize: "42px",
            marginTop: "10px",
            color: "#1E1B75"
          }}
        >
          What We Do
        </h2>

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px"
          }}
        >
          {[
            {
              title: "Cultural & Festive Events",
              text: "Celebrating Holi, Diwali, and traditional festivals."
            },
            {
              title: "Community Support & Networking",
              text: "Helping newcomers and strengthening community bonds."
            },
            {
              title: "Youth & Family Engagement",
              text: "Encouraging youth participation and heritage."
            }
          ].map((card, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "12px",
                width: "300px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
              }}
            >
              <h3 style={{ marginBottom: "15px", color: "#1E1B75" }}>
                {card.title}
              </h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section
        style={{
          padding: "80px 20px",
          background: "#1E1B75",
          color: "white",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "50px" }}>
          Our Community Impact
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "60px"
          }}
        >
          {[
            { number: "1200+", label: "Members" },
            { number: "6", label: "Cities in New Zealand" },
            { number: "30+", label: "Community Events" },
            { number: "2017", label: "Established" }
          ].map((item, index) => (
            <div key={index}>
              <h3 style={{ fontSize: "42px", color: "#F7941D" }}>
                {item.number}
              </h3>
              <p style={{ fontSize: "18px" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN COMMUNITY */}
      <section
        style={{
          padding: "100px 20px",
          background: "#F7F4EE",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            color: "#1E1B75"
          }}
        >
          Join the UPANZ Community
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            color: "#555",
            maxWidth: "700px",
            marginInline: "auto"
          }}
        >
          Be part of a growing community celebrating heritage, culture and
          connection across New Zealand.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          <Link href="/register">
            <button
              style={{
                background: "#F7941D",
                border: "none",
                padding: "16px 34px",
                borderRadius: "999px",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Register as Member
            </button>
          </Link>

          <button
            style={{
              background: "#2E7D32",
              border: "none",
              padding: "16px 34px",
              borderRadius: "999px",
              color: "white"
            }}
          >
            Volunteer
          </button>

          <button
            style={{
              background: "#1E1B75",
              border: "none",
              padding: "16px 34px",
              borderRadius: "999px",
              color: "white"
            }}
          >
            Sponsor
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "100px 20px",
          background: "#EAE6DF",
          textAlign: "center"
        }}
      >
        <h2 style={{ color: "#1E1B75", fontSize: "32px" }}>
          Contact UPANZ
        </h2>

        <p style={{ marginTop: "15px", color: "#555" }}>
          official.upanz@gmail.com
        </p>
      </section>

      <Footer />
    </>
  );
}