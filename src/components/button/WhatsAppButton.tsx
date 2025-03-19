import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+917994202313"  
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 animate-bounce right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
