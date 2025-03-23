import styles from "./ContactLink.module.scss";

import Link from "next/link";

import { ArrowRight } from "../Icons";

export default function ContactLink() {
    return (
        <Link className={styles.contactLink} href="/contact">
            <p className="text-4">Créons ensemble</p>
            <ArrowRight />
        </Link>
    );
}
