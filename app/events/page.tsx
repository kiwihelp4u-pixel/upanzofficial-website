import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Events() {
  return (
    <>
      <Navbar />

      {/* PAGE HEADER */}
      <section
        style={{
          padding: "120px 20px 80px 20px",
          textAlign: "center",
          background: "#F3F0EA"
        }}
      >
        <p style={{ color: "#F7941D", fontWeight: 600, fontSize: "14px" }}>
          COMMUNITY CALENDAR
        </p>

        <h1
          style={{
            fontSize: "48px",
            marginTop: "10px",
            color: "#1E1B75",
            fontFamily: "serif"
          }}
        >
          Upcoming Events
        </h1>

        <p style={{ marginTop: "20px", color: "#555", maxWidth: "700px", marginInline: "auto" }}>
          Join us for cultural celebrations, networking gatherings, and community
          events across New Zealand.
        </p>
      </section>

      {/* EVENTS CARDS */}
      <section
        style={{
          padding: "80px 20px",
          background: "#F3F0EA"
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px"
          }}
        >
          {/* HOLI CARD */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "14px",
              width: "320px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
            }}
          >
            <h3 style={{ color: "#1E1B75", marginBottom: "10px" }}>
              Happy Holi Celebration 2026
            </h3>

            <p style={{ fontSize: "14px", color: "#888" }}>
              March 4, 2026
            </p>

            <p style={{ marginTop: "10px", color: "#555", lineHeight: "1.6" }}>
              Wishing everyone a joyful and colorful Holi across Auckland,
              Wellington, Christchurch, and throughout New Zealand.
              May this festival of colors bring unity, happiness, and prosperity
              to all families.
            </p>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                background: "#1E1B75",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                color: "white",
                cursor: "pointer"
              }}
            >
              Celebrate Together
            </button>
          </div>

          {/* NETWORKING */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "14px",
              width: "320px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
            }}
          >
            <h3 style={{ color: "#1E1B75", marginBottom: "10px" }}>
              Community Networking Evening
            </h3>

            <p style={{ fontSize: "14px", color: "#888" }}>
              Date: TBD
            </p>

            <p style={{ fontSize: "14px", color: "#888" }}>
              Location: Wellington
            </p>

            <p style={{ marginTop: "10px", color: "#555", lineHeight: "1.6" }}>
              Connect with fellow community members, share experiences,
              and build meaningful relationships in the capital city.
            </p>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                background: "#1E1B75",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                color: "white",
                cursor: "pointer"
              }}
            >
              Learn More
            </button>
          </div>

          {/* YOUTH WORKSHOP */}
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "14px",
              width: "320px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
            }}
          >
            <h3 style={{ color: "#1E1B75", marginBottom: "10px" }}>
              Youth Cultural Workshop
            </h3>

            <p style={{ fontSize: "14px", color: "#888" }}>
              Date: TBD
            </p>

            <p style={{ fontSize: "14px", color: "#888" }}>
              Location: Christchurch
            </p>

            <p style={{ marginTop: "10px", color: "#555", lineHeight: "1.6" }}>
              A youth-focused cultural workshop to help the next generation
              understand Uttar Pradesh traditions while embracing Kiwi life.
            </p>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                background: "#1E1B75",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                color: "white",
                cursor: "pointer"
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* HOST EVENT CTA */}
      <section
        style={{
          padding: "80px 20px",
          background: "#EAE6DF",
          textAlign: "center"
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "white",
            padding: "50px 30px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          <h2 style={{ color: "#1E1B75", fontSize: "28px" }}>
            Want to Host an Event?
          </h2>

          <p style={{ marginTop: "15px", color: "#555" }}>
            Have an idea for a community event? We would love to hear from you.
          </p>

          <button
            style={{
              marginTop: "30px",
              background: "#F7941D",
              border: "none",
              padding: "14px 30px",
              borderRadius: "30px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}