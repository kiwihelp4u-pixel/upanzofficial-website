"use client";

export default function Register() {
  return (
    <section
      style={{
        padding: "120px 20px",
        background: "#F9F9F9",
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <p
          style={{
            color: "green",
            fontWeight: 600,
            fontSize: "14px",
            marginBottom: "10px"
          }}
        >
          MEMBERSHIP
        </p>

        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "42px",
            color: "#1E1B75",
            marginBottom: "15px"
          }}
        >
          Register as a Member
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            marginBottom: "60px"
          }}
        >
          Join our community and stay connected with fellow UP members across New Zealand.
        </p>

        <div
          style={{
            background: "white",
            padding: "60px 40px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              marginBottom: "20px",
              color: "#1E1B75"
            }}
          >
            Membership Registration Form
          </h3>

          <p
            style={{
              color: "#555",
              marginBottom: "40px"
            }}
          >
            Click below to complete your membership registration through our official Form.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdXtzhLtqInxeBqPtVmHdv-6FlO_Bd7yb4iP66uX5_UVqZY8g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#F7941D",
              color: "white",
              padding: "16px 40px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "16px"
            }}
          >
            Open Registration Form
          </a>
        </div>
      </div>
    </section>
  );
}