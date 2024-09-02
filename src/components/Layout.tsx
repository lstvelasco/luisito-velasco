import { ReactNode } from "react";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";
import ProfilePic from "../assets/images/profilepic.png";

interface Props {
  children?: ReactNode;
  isHeroHovered?: boolean;
}

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Layout({ children, isHeroHovered }: Props) {
  console.log(isHeroHovered);
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar fixed left-0 right-0 top-0 z-40 bg-base-300 w-full">
          {/* <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div> */}

          <div className="mx-2 flex-1 px-2">
            <div className="avatar">
              {isHeroHovered == false && (
                <div className="w-12">
                  <img src={ProfilePic} alt="Profile" />
                </div>
              )}
            </div>
          </div>

          <ThemeToggle />

          <div className="flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <button
                onClick={() => {
                  scrollToSection("contact");
                }}
                className="btn btn-primary transform transition-transform duration-300 hover:scale-105"
              >
                Get in touch
              </button>
            </ul>
          </div>
        </div>

        <main>{children}</main>
        <Footer />
      </div>
      {/* <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
