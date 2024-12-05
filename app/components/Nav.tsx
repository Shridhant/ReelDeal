import Link from "next/link";

const Nav = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ReelDeal
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
