"use client";

import Link from "next/link";
import styles from "./NavLink.module.scss";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
    const path = usePathname();

    const isActive = href === path || (href === "/" && path === "/");

    return (
        <Link
            className={`section-title ${styles.navLink} ${
                isActive ? styles.active : ""
            }`}
            href={href}
        >
            {children}
        </Link>
    );
}
