"use client"

import { Link as AnchorLink } from "react-scroll/modules";

interface NavItem {
  label: string;
  page: string;
}

const navItems: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Skills",
    page: "skills",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

const MenuItems = ({ className }: { className: string }) => {
  return (
    <>
      {navItems.map((item, index) => (
        <li
          key={index}
          className={className}
        >
          <AnchorLink
            spy={true}
            smooth={true}
            to={item.page}
            offset={-30}
            duration={500}
          >
            {item.label}
          </AnchorLink>
        </li>
      ))}
    </>
  )
}

export default MenuItems
