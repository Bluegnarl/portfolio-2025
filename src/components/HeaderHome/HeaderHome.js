import styles from "./HeaderHome.module.scss";

import Image from "next/image";

import Nav from "../Nav/Nav";
import ContactLink from "@/components/ContactLink/ContactLink";
import { ArrowBottom } from "../Icons";

import videoPreview from "../../assets/images/videoPreview.png";

export default function HeaderHome() {
    return (
        <section className={styles.headerWrapper}>
            <Nav />
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.presentation}>
                        <div className={styles.slogan}>
                            <div>
                                <p className="boldItalic">Avec</p>
                                <h1 className="title">Koçak Ali</h1>
                            </div>
                            <p className="italic">Donnez vie à votre vision</p>
                        </div>
                        <Image
                            src={videoPreview}
                            alt="profile"
                            layout="instrinsic"
                            objectFit="contain"
                        />
                    </div>
                    <div className={styles.description}>
                        <h2 className="subtitle">
                            Développez votre<br/>présence en ligne
                        </h2>
                        <div className={styles.headerText}>
                            <p className="text-2">
                                Faites passer votre business au niveau supérieur
                                avec des sites web percutants, des designs
                                impactants et des logos mémorables.
                            </p>
                            <ContactLink />
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.scrollDown}>
                <p className="text-4" style={{ color: "var(--on-surface-1)" }}>
                    Défilez vers le bas
                </p>
                <ArrowBottom />
            </div>
        </section>
    );
}
