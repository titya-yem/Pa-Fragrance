import { DashboardList } from "@/types";
import { IoHomeOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import Link from "next/link";

const DashboardLists: DashboardList[] = [
  {
    icon: <IoHomeOutline size={25} />,
    name: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    icon: <CiShop size={25} />,
    name: "Products",
    href: "/admin/products",
  },
  {
    icon: <CiShoppingCart size={25} />,
    name: "Orders",
    href: "/admin/orders",
  },
  {
    icon: <CiDeliveryTruck size={25} />,
    name: "Shipments",
    href: "/admin/shipments",
  },
];

const page = () => {
  return (
    <main className="container">
      <aside className="flex flex-col w-1/4 h-screen gap-2 bg-white">
        {DashboardLists.map((link) => (
          <ul key={link.name}>
            <li className="flex items-center gap-4 bg-white">
              <span className="bg-white text-gray-800">{link.icon}</span>
              <Link href={link.href}>
                <p className="bg-white text-gray-800">{link.name}</p>
              </Link>
            </li>
          </ul>
        ))}
      </aside>
    </main>
  );
};

export default page;
