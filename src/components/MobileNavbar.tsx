import { IoHome } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function MobileNavbar() {
    const { t } = useTranslation();
    const pathName = window.location.pathname;

    const menuItems = [
        { name: t("home"), href: "/", icon: <IoHome size={20}/> },
        { name: t("about"), href: "/about", icon: <IoIosContact size={20}/> },
        { name: t("project"), href: "/projects", icon: <FaBriefcase size={20}/> },
        { name: t("contact"), href: "/contact", icon: <FaSquarePhoneFlip size={20}/> },
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#131313] border-t border-[#2a2a2a] min-[810px]:hidden z-50">
            <div className="flex justify-around items-center h-16 max-[600px]:h-14">

                {menuItems?.map((item) => {
                    const isActive = pathName === item.href;
                    return (
                        <>
                            <a href={item?.href} className={`flex flex-col items-center hover:text-[#D5FF3F] transition ${isActive ? 'text-[#D5FF3F]' : 'text-white'}`}>
                                {item?.icon}
                                <span className="text-[11px] mt-1">{item?.name}</span>
                            </a>
                        </>
                    )
                })}


            </div>
        </div>
    );
}
