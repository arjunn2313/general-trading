 import categories from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

export default function CategoryList() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center cursor-pointer ">       
              <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <Link href={`/products/?category=${category.name}`}>
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  fill
                  objectFit="contain"
                />
                </Link>
              </div>
              <h3 className="mt-3 font-semibold">{category.name}</h3>
              {/* <p className="text-gray-500 text-sm">Items({category.items})</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
