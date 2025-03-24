import styles from "./Nav.module.scss";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuLink from "./MenuLink";
import Image from "next/image";
import { ThemeToggler } from "../ThemeProvider/ThemeToggler";
import profileImage from "../../assets/images/profile.png";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.fillNav}>
                <Link href={"/"} className={`section-title ${styles.profile}`}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={profileImage}
                            alt="profile"
                            layout="instrinsic"
                            objectFit="contain"
                        />
                    </div>
                    Koçak Ali
                </Link>
            </div>
            <div className={styles.options}>
                <div className={styles.links}>
                    <NavLink href={"/"}>Accueil</NavLink>
                    <NavLink href={"/about"}>À propos</NavLink>
                    <NavLink href={"/contact"}>Contact</NavLink>
                </div>
                <ThemeToggler />
            </div>
            <div className={styles.menuButton}>
                Menu
            </div>
        </nav>
    );
}
