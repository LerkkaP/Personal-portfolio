import { useState } from "react";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full transition bg-white ease transform duration-300`;

    return (
        <button
        className="absolute right-0 z-10 flex flex-col rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
    >
        <div
            className={`${genericHamburgerLine} ${
                isOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
            }`}
        />
        <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
        <div
            className={`${genericHamburgerLine} ${
                isOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
            }`}
        />
    </button>

    )
}

export default Hamburger