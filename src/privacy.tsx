import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function PrivacyPage() {
  return (
    <main className="privacy-page">
      <a className="privacy-back" href="./">← Back to SK Hermanus</a>
      <span className="eyebrow">PRIVACY</span>
      <h1>Privacy information</h1>
      <p>This website does not collect or store information submitted through its enquiry forms. When you use a form, your browser opens your email application with a prepared message. You choose whether to send it, and the message is handled by your email provider.</p>
      <p>The website itself does not use analytics or advertising cookies. External services such as Google Fonts and Unsplash may receive standard technical information when your browser loads their resources; their own privacy policies apply.</p>
      <p>For questions about privacy or a message you have sent, contact <a href="mailto:hermanuskgaugelo@gmail.com">hermanuskgaugelo@gmail.com</a>.</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><PrivacyPage /></React.StrictMode>,
);
