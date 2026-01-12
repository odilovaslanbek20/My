import { useTranslation } from "react-i18next";
import Language from "../i18n/Language";

export default function Navbar() {
    const { t } = useTranslation();
    const pathName = window.location.pathname;

    const menuItems = [
        { name: t("home"), href: "/" },
        { name: t("about"), href: "/about" },
        { name: t("project"), href: "/projects" },
        { name: t("contact"), href: "/contact" },
    ];

    return (
        <header className="w-full top-0 left-0 fixed py-2 max-[762px]:py-1 max-[500px]:py-0.5  bg-[#131313] shadow-lg shadow-[#D5FF3F]">
            <div className="web-container flex items-center justify-between">
                <div>
                    <a href="/" className="font-bold text-[30px] max-[450px]:text-[25px] text-[#D5FF3F]" style={{ fontFamily: "'Dancing Script', cursive" }}>
                        O.ASLAN<span className="text-[#ffff]">BEK</span>
                    </a>
                </div>

                <nav className="max-[810px]:hidden">
                    <ul className="flex gap-7">
                        {menuItems.map((item, index) => {
                            const isActive = pathName === item.href;
                            return (
                                <li key={index} className="flex flex-col items-center">
                                    <a
                                        href={item.href}
                                        className={`font-medium transition-colors ${isActive ? "text-[#D5FF3F]" : "hover:text-[#D5FF3F] text-white"
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                    <div
                                        className={`h-0.5 rounded-3xl bg-[#D5FF3F] ${isActive ? "w-full transition-all duration-300" : "group-hover:w-full w-0"
                                            }`}
                                    ></div>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div>
                    <Language />
                </div>
            </div>
        </header>
    );
}