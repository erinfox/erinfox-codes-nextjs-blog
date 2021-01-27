import Link from "next/link";

const Nav = ({ siteTitle, menuLinks }) => (
  <nav className="text-sm fixed pt-96">
    <ul className="flex flex-col">
      <Link href="/blog">BLOG</Link>
      <Link href="/talks">TALKS</Link>
      <Link href="/newsletter">NEWSLETTER</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/contact">CONTACT</Link>
    </ul>
  </nav>
);

export default Nav;
