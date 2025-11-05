const NavLink = ({ path, label }) => {
  return (
    <li>
      <a
        href={path}
        className="block py-2 px-3    text-lg  border-b-transparent   md:p-0 max-lg:text-gray-900  border-b-2 transition-all hover:border-b-black duration-300"
        aria-current="page"
      >
        {label}
      </a>
    </li>
  );
};

export default NavLink;
