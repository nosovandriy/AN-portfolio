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
    label: "Skills",
    page: "skills",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Resume",
    page: "/resume",
  },
]

type Props = {
  className: string;
  onClick?: () => void;
}

export const MenuItems: React.FC<Props> = ({ className, onClick }) => {
  return (
    <>
      {navItems.map((item, index) => (
        <li
          key={index}
          className={className}
        >
          <AnchorLink
            onClick={onClick}
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
