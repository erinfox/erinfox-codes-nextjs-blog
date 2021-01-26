import Link from "next/link";

const Nav = ({ siteTitle, menuLinks }) => (
  <nav className="text-sm fixed pt-96">
    <ul className="flex flex-col">
      <Link href="/">BLOG</Link>
      <Link href="/">TALKS</Link>
      <Link href="/">NEWSLETTER</Link>
      <Link href="/">ABOUT</Link>
      <Link href="/">CONTACT</Link>
    </ul>
  </nav>
);

export default Nav;
