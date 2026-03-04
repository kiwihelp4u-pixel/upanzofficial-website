import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1E2A78",
        color: "white",
        padding: "60px 20px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
        }}
      >
        {/* LEFT COLUMN */}
        <div>
          <h3
            style={{
              fontSize: "22px",
              marginBottom: "15px",
              fontFamily: "var(--font-heading)",
            }}
          >
            UPANZ
          </h3>

          <p
            style={{
              lineHeight: "1.7",
              opacity: 0.9,
              fontFamily: "var(--font-body)",
            }}
          >
            Uttar Pradesh Association in New Zealand
            <br />
            A non-profit community organisation
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4
            style={{
              marginBottom: "15px",
              fontFamily: "var(--font-heading)",
            }}
          >
            Quick Links
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>

            <Link
              href="/events"
              style={{ color: "white", textDecoration: "none" }}
            >
              Events
            </Link>

            <Link
              href="/#register"
              style={{ color: "white", textDecoration: "none" }}
            >
              Register
            </Link>

            <Link
              href="/#contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4
            style={{
              marginBottom: "15px",
              fontFamily: "var(--font-heading)",
            }}
          >
            Contact Us
          </h4>

          <a
            href="mailto:official.upanz@gmail.com"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            official.upanz@gmail.com
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          marginTop: "50px",
          textAlign: "center",
          fontSize: "14px",
          opacity: 0.8,
          fontFamily: "var(--font-body)",
        }}
      >
        © {new Date().getFullYear()} Uttar Pradesh Association in New Zealand.
        All rights reserved.
      </div>
    </footer>
  );
}