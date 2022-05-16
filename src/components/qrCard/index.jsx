import "./qrCard.css";
import QR from "../qr";
import QRDescription from "../qrDescription";
import Attribution from "../attribution";
import QRImage from "../../assets/images/image-qr-code.png";

export default function QRCard() {
  return (
    <main className="main__card">
      {" "}
      <QR src={QRImage} />
      <QRDescription />
      <Attribution />
    </main>
  );
}
