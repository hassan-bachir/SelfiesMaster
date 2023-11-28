import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
const Navbar = () => {
    const [active, setActive] = useState("");

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-tertiary `}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
                <Link
                    to="/"
                    className="flex item-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-28 object-contain  "
                    />
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-white"
                                    : "text-primary"
                            } hover:text-white text-[18px] font-medium cursor-pointer `}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center"></div>
            </div>
        </nav>
    );
};

export default Navbar;
