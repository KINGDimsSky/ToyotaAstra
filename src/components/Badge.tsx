import { LiaMedalSolid } from "react-icons/lia";
import { MdOutlineVerified } from "react-icons/md";
import { FaHandshake, FaShoppingCart, FaCar, FaClock, FaWpforms, FaMoneyCheckAlt } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";

const iconMap: Record<string, React.ElementType> = {
  LiaMedalSolid, MdOutlineVerified, FaHandshake, FaShoppingCart, FaCar, FaClock, FaWpforms, FaMoneyCheckAlt, LuListTodo
}

interface BadgeProps {
  title?: string;
  icon?: string;
}

export default function Badge ({title, icon} : BadgeProps) {
    const IconComponents = icon ? iconMap[icon] : null;

    return (
        <div className="flex gap-2 md:gap-4 w-40 md:w-fit">
          <div className="flex items-center justify-center p-2 w-24 h-12 md:p-3 rounded-full bg-gray-800 md:w-16 md:h-16">
            {IconComponents ? (
              <IconComponents className="w-full h-full text-white"/>
            ) : (
              <span className="text-white text-sm">No Icons</span>
            )}
          </div>
          <h2 className="font-bold text-sm md:text-base text-gray-800 tracking-wide w-64">{title}</h2>
        </div>
    )
}