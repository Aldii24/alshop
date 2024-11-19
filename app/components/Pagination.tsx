"use client";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <div className="flex justify-end items-center gap-4 mt-6 py-4">
      {/* Tombol Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded ring-[1px] ring-gray-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:ring-gray-200 shadow-[5px_5px_0_rgb(0,0,0)] active:shadow-[0_2px_0_rgb(0,0,0)] active:translate-y-1 hover:bg-gray-300 disabled:shadow-none"
      >
        3
      </button>

      <span className="text-sm">
        {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded ring-[1px] ring-gray-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:ring-gray-200 shadow-[5px_5px_0_rgb(0,0,0)] active:shadow-[0_2px_0_rgb(0,0,0)] active:translate-y-1 hover:bg-gray-300 disabled:shadow-none"
      >
        3
      </button>
    </div>
  );
};

export default Pagination;
