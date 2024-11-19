import Link from "next/link";

const Cart = () => {
  const session = false;

  return (
    <Link
      href={` ${session ? "/cart" : "/login"}`}
      className="relative sm:flex flex-col items-center cursor-pointer hidden"
    >
      <p className="absolute -top-1 -right-1 bg-color-primary text-xs text-white w-[15px] h-[15px] flex items-center justify-center rounded-full">
        7
      </p>
      Tas
      <p className="sm:text-sm text-xs sm:font-semibold font-normal">Cart</p>
    </Link>
  );
};

export default Cart;
