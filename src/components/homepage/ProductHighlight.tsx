import Image from "next/image";
import Link from "next/link";
import path from "path";

const products = [
  {
    id: 1,
    label: "Luxury Hospitality",
    title: "Premium Bathrobes & Hotel Essentials",
    image: "/product/81VUQmd2YuL.jpg",
    bgColor: "bg-[#f5ede3]",
    textColor: "text-black",
    path: "/products?category=Hospitality",
  },
  {
    id: 2,
    label: "Housekeeping Must-Haves",
    title: "Cleaning Tools",
    image: "/product/forever-gold-1800-w-65-mm-pipe-dia-50-l-wet-dry-vacuum-cleaner-vc-50l-500x500.webp", // Replace with actual image path

    bgColor: "bg-[#f5ede3]",
    textColor: "text-black",
    path: "/products?category=HouseKeeping"
  },
  {
    id: 3,
    label: "Professional Coffee Machines",
    title: "Top Espresso Machines for Cafes & Hotels",
    image: "/product/6623ff04c1c04f123069faae-capresso-espresso.jpg",
    bgColor: "bg-[#f5ede3]",
    textColor: "text-black",
    path: "/products?category=Coffee Machines"
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-10 px-3">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative rounded-lg overflow-hidden p-6 flex flex-col justify-between ${product.bgColor} ${product.textColor}`}
          >
            <div>
              <span className="inline-block bg-primary text-white px-3 py-1 text-sm font-semibold rounded-full">
                {product.label}
              </span>
              <h3 className="text-2xl font-bold mt-3">{product.title}</h3>
              <Link href={product.path} className="text-primary font-semibold mt-2 block">
                View Now
              </Link>
            </div>
            <div className="flex justify-end mt-4">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
