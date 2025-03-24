"use client";

import styles from "./MenuLink.module.scss";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ children, href }) {
    const path = usePathname();

    const isActive = href === path || (href === "/" && path === "/");

    return (
        <Link
            className={`section-title ${styles.menuLink} ${
                isActive ? styles.active : ""
            }`}
            href={href}
        >
            {children}
        </Link>
    );
}
