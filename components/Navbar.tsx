import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import deformLogo from "../public/deform_logo.svg";

const navigation = [
  // { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Awards", href: "/awards", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex  items-center justify-between mt-[30px] border-b border-[#0000004D] h-16">
          <Link href="/">
            <Image src={deformLogo} alt="Logo" className="w-[70px] md:w-full" />
          </Link>
          <div className="absolute hidden md:flex inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className="px-3 py-2 paragraph-s"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden ">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
