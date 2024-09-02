import Link from "next/link";
import { useState } from "react";

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
    label: "Portfolio",
    page: "/#portfolio",
  },
  // {
  //   label: "Resume",
  //   page: "/#about",
  // },
];

type Props = {
  className: string;
  onClick?: () => void;
};

export const MenuItems: React.FC<Props> = ({ className, onClick }) => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleActivateItem = (item: string) => {
    if (onClick) {
      onClick();
    }

    setSelectedItem(item);
  };
  return (
    <>
      {navItems.map((item, index) => (
        <li key={index} className={className}>
          <a
            onClick={() => handleActivateItem(item.label)}
            href={item.page}
            className={`${
              selectedItem === item.label &&
              "font-semibold text-[#5651e5]"
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </>
  );
};
