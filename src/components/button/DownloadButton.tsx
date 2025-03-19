import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function CatalogDownload() {
  const handleDownload = () => {
    const pdfUrl = "/catalog/catalog.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Catalog.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="hidden md:flex cursor-pointer items-center gap-2 px-6 py-2 text-lg font-semibold text-white bg-primary rounded-lg transition-all"
    >
      <FaDownload className="text-xl" />
      Download Catalog
    </button>
  );
}
