"use client";

const CategoryList = ({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}) => {
  const categories = ["All", "Men", "Women", "Kids", "Sports"];

  return (
    <div className="flex sm:gap-8 gap-3 items-center">
      {categories.map((category) => (
        <button
          key={category}
          className={`sm:text-sm text-xs sm:px-4 sm:py-2 px-3 py-1.5 rounded-3xl ${
            activeCategory === category
              ? "bg-none text-gray-600"
              : "shadow-[4px_4px_0_rgb(0,0,0)] active:shadow-[2px_2px_0_rgb(0,0,0)] active:translate-y-1 bg-color-primary text-white"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
