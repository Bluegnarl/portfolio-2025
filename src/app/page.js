import styles from "./page.module.scss"

import HeaderHome from "@/components/HeaderHome/HeaderHome";

export default function Home() {
    return (
        <main className={styles.main}>
            <HeaderHome />
        </main>
    );
}
