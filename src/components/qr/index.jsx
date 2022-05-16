import "./qr.css";

export default function QR({ src }) {
  return (
    <div className="qr-container">
      <img src={src} alt="QR Logo" className="qrImage" />
    </div>
  );
}
