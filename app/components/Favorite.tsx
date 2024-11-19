import { Heart } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Favorite = () => {
  const session = false;

  return (
    <Link
      href={`${session ? "/favorites" : "/login"}`}
      className="sm:flex flex-col items-center hidden"
    >
      <Heart />
      <p className="sm:text-sm text-xs sm:font-semibold font-normal ">
        Favorites
      </p>
    </Link>
  );
};

export default Favorite;
