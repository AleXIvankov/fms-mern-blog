import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center  whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <div className="flex flex-row  items-end">
          <span className="px-2 py-1 ">
            <img
              src="../../img/logo-no-background.png"
              alt="FMS-logo"
              className="w-13 h-8 rounded-lg"
            />
          </span>
          Blog
        </div>
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
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-light truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Déconnexion</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/SignIn">
            <Button gradientDuoTone="purpleToBlue" outline pill>
              Se connecter
            </Button>
          </Link>
        )}
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
        <Navbar.Link active={path === "/SignUp"} as={"div"}>
          <Link to="/signup">S'inscrire</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
