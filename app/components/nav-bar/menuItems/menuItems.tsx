import Link from "next/link";

interface NavItem {
  label: string;
  page: string;
}

const navItems: Array<NavItem> = [
  {
    label: "Home",
    page: "/#home",
  },
  {
    label: "About",
    page: "/#about",
  },
  {
    label: "Skills",
    page: "/#skills",
  },
  {
    label: "Projects",
    page: "/#projects",
  },
  {
    label: "Resume",
    page: "/#about",
  },
];

type Props = {
  className: string;
  onClick?: () => void;
};

export const MenuItems: React.FC<Props> = ({ className, onClick }) => {
  return (
    <>
      {navItems.map((item, index) => (
        <li key={index} className={className}>
          <a onClick={onClick} href={item.page}>
            {item.label}
          </a>
        </li>
      ))}
    </>
  );
};
