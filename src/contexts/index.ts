import { FooterInfo, NavBarList } from "@/types";
import { footerIcons } from "@/components/FooterIcons";

export const NavBarLists: NavBarList[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Cart",
    href: "/cart",
  },
];

export const FooterInfor: FooterInfo[] = [
  {
    id: 1,
    icon: footerIcons.mail(),
    href: "mailto:thitya.yem.photo@gmail.com",
    content: "thitya.yem.photo@gmail.com",
  },
  {
    id: 2,
    icon: footerIcons.location(),
    content: "Minnesota, USA.",
  },
  {
    id: 3,
    icon: footerIcons.facebook(),
    href: "https://www.facebook.com/profile.php?id=61563239913904",
    content: "Pa Official",
  },
];
