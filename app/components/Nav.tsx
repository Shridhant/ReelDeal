import Link from "next/link";

const Nav = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ReelDeal
        </Link>
        <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-neutral-900 transition-colors duration-300">
          Log In
        </button>
      </nav>
    </header>
  );
};

export default Nav;
