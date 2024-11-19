"use client";

import { useState, useEffect, Suspense } from "react";
import { client } from "@/sanity/lib/client";
import CaraouselHome from "../components/CaraouselHome";
import CategoryList from "../components/CategoryList";
import ShoesLists from "../components/ShoesLists";
import { SHOES_QUERY_BY_CATEGORY } from "@/sanity/lib/queries";
import Pagination from "../components/Pagination";

const ITEMS_PER_PAGE = 4;

export default function Home() {
  const [shoes, setShoes] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchShoes = async () => {
      const params = {
        category: activeCategory,
        limit: ITEMS_PER_PAGE,
        offset: (currentPage - 1) * ITEMS_PER_PAGE,
      };

      const fetchedShoes = await client.fetch(SHOES_QUERY_BY_CATEGORY, params);
      const total = await client.fetch(
        `
        count(*[_type == "shoes" && ($category == "All" || category == $category)])
      `,
        { category: activeCategory }
      );

      setShoes(fetchedShoes);
      setTotalItems(total);
    };

    fetchShoes();
  }, [activeCategory, currentPage]);

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <>
      <section className="px-4 md:px-10 pt-[80px] md:pt-[100px]">
        <CaraouselHome autoPlay={false} />
      </section>

      <section className="px-4 md:px-10 mt-10">
        <CategoryList
          activeCategory={activeCategory}
          onCategoryChange={(category) => {
            setActiveCategory(category);
            setCurrentPage(1);
          }}
        />
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <section className="px-4 md:px-10 mt-10 pb-4">
          <ShoesLists shoes={shoes} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
      </Suspense>
    </>
  );
}
