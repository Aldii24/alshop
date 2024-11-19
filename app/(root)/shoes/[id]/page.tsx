import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SHOES_QUERY_BY_ID } from "@/sanity/lib/queries";
import { Heart, ShoppingBag } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const page = async ({ params }: { params: { id: string } }) => {
  const id = (await params).id;

  const { data: shoe } = await sanityFetch({
    query: SHOES_QUERY_BY_ID,
    params: { id },
  });

  const { title, price, size, image, description, category } = shoe;

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8 pb-8">
      <div className="w-full lg:w-1/2">
        <div className="border flex justify-center items-center md:h-[450px] h-[300px] border-gray-200 rounded-lg overflow-hidden">
          <Image
            src={urlFor(image).url()}
            alt={title}
            width={500}
            height={500}
            className="object-cover image-detail"
          />
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="h-[1px] w-full bg-gray-200"></div>
        <p className="bg-color-secondary w-max px-2 py-1 rounded-md text-black text-xs">
          {category}
        </p>
        <div className="h-[1px] w-[10%] bg-gray-200"></div>
        <p className="text-2xl font-semibold text-gray-800">
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        <div className="h-[1px] w-full bg-gray-200"></div>
        <p className="text-gray-600">{description}</p>
        <div className="h-[1px] w-full bg-gray-200"></div>

        <div className="space-y-2">
          <p className="font-semibold">Size:</p>
          <div className="flex gap-2 flex-wrap">
            {size.map((s: number, index: number) => (
              <button
                key={index}
                className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:bg-black focus:text-white"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-200"></div>

        <div className="flex items-center gap-2 pt-4">
          <button className="flex items-center justify-center gap-2 px-4 py-2 w-full bg-black text-white rounded-lg shadow-xl">
            <ShoppingBag size={20} />
            <p>Add to cart</p>
          </button>
          <div className="bg-color-secondary rounded-md p-2 cursor-pointer">
            <Heart size={20} className="text-gray-500" />
          </div>
        </div>

        <p className="text-sm text-gray-600">
          Gratis biaya ongkir hingga 77rb di seluruh Indonesia
        </p>
      </div>
    </div>
  );
};

export default page;
