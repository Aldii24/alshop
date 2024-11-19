import Link from "next/link";
import Cart from "./Cart";
import Favorite from "./Favorite";
import Profile from "./Profile";
import MobileMenu from "./MobileMenu";
import { auth, signIn, signOut } from "../auth";

const Navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <header className="font-manrope relative">
      <nav className="flex items-center justify-between gap-2 sm:gap-0 sm:px-10 sm:py-5 px-4 py-4 fixed w-full bg-white z-50 shadow-md">
        <Link href="/" className="sm:flex hidden text-2xl font-bold">
          ALD.<span className="text-color-primary">I</span>
        </Link>

        {/* MOBILE MENU */}
        <MobileMenu />
        {/* MOBILE MENU */}

        <div className="flex items-center gap-6">
          <Cart />
          <Favorite />

          {session && session?.user ? (
            <>
              <Profile />
              <button
                className="sm:text-sm sm:flex hidden text-xs font-bold bg-color-primary px-4 py-2 rounded-md text-white shadow-[5px_5px_0_rgb(0,0,0)] active:shadow-[2px_2px_0_rgb(0,0,0)] active:translate-y-1"
                onClick={async () => {
                  "use server";
                  await signOut();
                }}
              >
                Logout
              </button>
              <button
                className="sm:hidden flex"
                onClick={async () => {
                  "use server";
                  await signOut();
                }}
              >
                Keluar
              </button>
            </>
          ) : (
            <button
              className="sm:text-sm text-xs font-bold bg-color-primary px-4 py-2 rounded-md text-white shadow-[5px_5px_0_rgb(0,0,0)] active:shadow-[2px_2px_0_rgb(0,0,0)] active:translate-y-1"
              onClick={async () => {
                "use server";
                await signIn("github");
              }}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
