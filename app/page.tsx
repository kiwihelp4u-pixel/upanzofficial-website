export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      <section style={{
        height: "70vh",
        background: "#111",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Uttar Pradesh Association of New Zealand
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "600px" }}>
          Connecting the community. Celebrating culture. Building unity across Aotearoa.
        </p>
      </section>

      <section style={{
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>About Us</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          UPANZ is dedicated to bringing together individuals and families
          from Uttar Pradesh living in New Zealand.
          We organize cultural events, networking opportunities,
          and community support initiatives.
        </p>
      </section>

      <section style={{
        padding: "60px 20px",
        background: "#f4f4f4",
        textAlign: "center"
      }}>
        <h2>Contact</h2>
        <p>Email: info@upanzofficial.co.nz</p>
      </section>
    </main>
  );
}