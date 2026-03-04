import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

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
        {/* Background Image */}
        <Image
          src="/images/taj.jpg"
          alt="Taj Mahal"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -2 }}
        />

        {/* Gradient Overlay */}
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
          
          {/* CIRCULAR LOGO */}
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

          {/* MAIN HEADING */}
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

          {/* SUBTEXT */}
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              opacity: 0.9,
              marginBottom: "50px",
              fontFamily: "var(--font-body)"
            }}
          >
            Rooted in culture. United in New Zealand.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px"
            }}
          >
            <Link href="/#join">
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
              color: "#1E1B75",
              fontFamily: "var(--font-heading)"
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
            The <strong>Uttar Pradesh Association in New Zealand (UPANZ)</strong> is a
            non-profit community organisation established in <strong>2017</strong>.
            We celebrate our rich cultural heritage, foster social connections,
            and support members across New Zealand while building bridges
            between Indian and Kiwi cultures.
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
            color: "#1E1B75",
            fontFamily: "var(--font-heading)"
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
              text: "Celebrating Holi, Diwali, and traditional festivals while preserving our heritage."
            },
            {
              title: "Community Support & Networking",
              text: "Supporting newcomers and strengthening community connections across NZ."
            },
            {
              title: "Youth & Family Engagement",
              text: "Encouraging youth participation and embracing both Indian and Kiwi identity."
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
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                {card.text}
              </p>
            </div>
          ))}
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
        <h2
          style={{
            color: "#1E1B75",
            fontSize: "32px",
            fontFamily: "var(--font-heading)"
          }}
        >
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