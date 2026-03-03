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
          padding: "100px 20px 40px 20px"
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
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 60px)",
              lineHeight: "1.2"
            }}
          >
            Connecting the Uttar Pradesh Community Across New Zealand
          </h1>

          <p
            style={{
              marginTop: "20px",
              fontSize: "clamp(16px, 2.5vw, 20px)"
            }}
          >
            Rooted in culture. United in New Zealand.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px"
            }}
          >
            <Link href="/#join">
              <button
                style={{
                  background: "#F7941D",
                  border: "none",
                  padding: "14px 30px",
                  borderRadius: "30px",
                  color: "white",
                  fontSize: "16px",
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
                  padding: "14px 30px",
                  borderRadius: "30px",
                  color: "white",
                  fontSize: "16px",
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
              fontFamily: "serif"
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
            fontFamily: "serif"
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

      {/* CONTACT SECTION (for navbar anchor) */}
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