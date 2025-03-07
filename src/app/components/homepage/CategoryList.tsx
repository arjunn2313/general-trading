import Image from "next/image";

const categories = [
  { name: "Coffee Makers", items: 20, image: "https://m.media-amazon.com/images/I/818gyfjYmZL.jpg" },
  { name: "Pans", items: 20, image: "https://m.media-amazon.com/images/I/71oZ1-QYomL._AC_UF894,1000_QL80_.jpg" },
  { name: "Cookware", items: 20, image: "https://m.media-amazon.com/images/I/61sZy1wUQeL.jpg" },
  { name: "Tea Maker", items: 20, image: "https://m.media-amazon.com/images/I/81RhKyueUCL.jpg" },
  { name: "Spatula", items: 13, image: "https://m.media-amazon.com/images/I/61+vVqxUmVL._AC_UF894,1000_QL80_.jpg" },
  { name: "Saucepan", items: 20, image: "https://m.media-amazon.com/images/I/6146Icm9YAL._AC_UF894,1000_QL80_.jpg" },
  { name: "Oven", items: 20, image: "https://m.media-amazon.com/images/I/61QInAVlVfL._AC_UF894,1000_QL80_.jpg" },
];

export default function CategoryList() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="contain" // Ensures the image fits inside the circle
                />
              </div>
              <h3 className="mt-3 font-semibold">{category.name}</h3>
              <p className="text-gray-500 text-sm">Items({category.items})</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
