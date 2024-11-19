import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

type ShoesType = {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  size: number[];
  image: string;
};

type ShoesList = ShoesType[];

const ShoesLists = ({ shoes }: { shoes: ShoesList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {shoes?.map((shoe: ShoesType) => (
        <div
          key={shoe._id}
          className="bg-color-secondary rounded-md p-4 shadow-lg"
        >
          <Link href={`/search?query=${shoe.category}`} className="flex w-max">
            <p className="bg-gray-200 rounded-lg text-gray-500 p-1 w-max text-xs shadow-lg">
              {shoe.category}
            </p>
          </Link>
          <Link href={`/shoes/${shoe._id}`}>
            <Image
              src={urlFor(shoe.image).url()}
              alt="shoe"
              width={350}
              height={350}
              className="rounded-md image-card"
            />
          </Link>
          <div className="flex flex-col">
            <Link
              href={`/shoes/${shoe._id}`}
              className="font-medium text-sm line-clamp-1"
            >
              {shoe.title}
            </Link>
            <span className="line-clamp-1 text-sm text-gray-500">
              {shoe.description}
            </span>
          </div>

          <div className="w-full h-[1px] bg-gray-300 mt-4"></div>

          <div className="flex justify-between items-center mt-4">
            <p className="font-semibold text-sm">
              {shoe.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <Link
              href={`/shoes/${shoe._id}`}
              className="bg-color-primary text-white p-2 text-xs rounded-md shadow-[5px_5px_0_rgb(0,0,0,1)] active:shadow-[2px_2px_0_rgb(0,0,0,1)] active:translate-y-1"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoesLists;
