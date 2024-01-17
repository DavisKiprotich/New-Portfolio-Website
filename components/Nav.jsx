import Link from "next/link";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, underlineStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
