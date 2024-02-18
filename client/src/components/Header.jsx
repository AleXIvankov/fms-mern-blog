import { Button, Navbar, NavbarCollapse, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white">
          FMS
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/Sign-in">
          <Button gradientDuoTone="purpleToBlue" outline pill>
            Se connecter
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Page d'accueil</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Preventif"} as={"div"}>
          <Link to="/Preventif">Preventif</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Projects"} as={"div"}>
          <Link to="/Projects">Posts</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/SignIn"} as={"div"}>
          <Link to="/SignIn">Se connecter</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
