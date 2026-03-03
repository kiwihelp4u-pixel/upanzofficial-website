export default function Footer() {
  return (
    <footer style={{
      background: "#0B1E7A",
      color: "white",
      padding: "60px 0 30px 0"
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>
        <div>
          <h3>UPANZ</h3>
          <p>Uttar Pradesh Association in New Zealand</p>
          <p>A non-profit community organisation</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Events</p>
          <p>Register</p>
          <p>Volunteer</p>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p>official.upanz@gmail.com</p>
        </div>
      </div>

      <div style={{
        textAlign: "center",
        marginTop: "40px",
        fontSize: "14px"
      }}>
        © 2026 Uttar Pradesh Association in New Zealand. All rights reserved.
      </div>
    </footer>
  );
}