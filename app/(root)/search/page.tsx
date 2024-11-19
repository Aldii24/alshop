import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SHOES_BY_SEARCH_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const query = (await searchParams).query;

  const params = { search: query || null };

  const shoes = await sanityFetch({ query: SHOES_BY_SEARCH_QUERY, params });
  console.log(shoes);

  type ShoesType = {
    _id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    size: number[];
    image: string;
  };

  return (
    <>
      <div className="md:px-10 px-4 md:pt-28 pt-24 pb-10">
        {shoes?.data?.length > 0 ? (
          <>
            <h1 className="md:text-3xl text-xl font-semibold mb-8 uppercase">
              Search result for {query}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {shoes?.data?.map((shoe: ShoesType) => (
                <div
                  key={shoe._id}
                  className="bg-color-secondary rounded-md p-4 shadow-lg"
                >
                  <Link
                    href={`/search?query=${shoe.category}`}
                    className="flex w-max"
                  >
                    <p className="bg-gray-200 rounded-lg text-gray-500 p-1 w-max text-xs shadow-lg">
                      {shoe.category}
                    </p>
                  </Link>
                  <Link href={`/shoes/${shoe._id}`}>
                    <Image
                      src={urlFor(shoe.image).width(450).height(350).url()}
                      alt="shoe"
                      width={350}
                      height={350}
                      className="rounded-md object-contain"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <Link
                      href={`/shoes/${shoe._id}`}
                      className="font-medium text-sm"
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
          </>
        ) : (
          <div className="flex flex-col justify-center items-center mx-auto">
            <Image
              src="/not-found.gif"
              alt="no-found"
              width={400}
              height={400}
            />
            <p className="text-2xl text-gray-500 font-bold uppercase">
              No shoes found !
            </p>
          </div>
        )}
      </div>
      
    </>
  );
};

export default page;
