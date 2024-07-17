import { NavLink } from "react-router-dom";
import { FaCalendarAlt, FaFireAlt, FaFolderPlus, FaRegHeart } from "react-icons/fa";

const SideBar = () => {
  const navLinks = [
    { to: "/trending", icon: FaFireAlt, text: "Trending" },
    { to: "/newReleases", icon: FaFolderPlus, text: "New Releases" },
    { to: "/upcoming", icon: FaCalendarAlt, text: "Upcoming" },
    { to: "/favorites", icon: FaRegHeart, text: "Favorites" },
  ];

  return (
    <aside>
      <ul className="space-y-2">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            >
              <link.icon />
              <span>{link.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
