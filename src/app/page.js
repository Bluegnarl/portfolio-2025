import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import videoPreview from "../assets/images/videoPreview.png";
import arrowRight from "../assets/images/arrow-right.png";

export default function Home() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.presentation}>
                    <div className={styles.slogan}>
                        <div>
                            <p className="boldItalic">Avec</p>
                            <h1 className="title">Koçak Ali</h1>
                        </div>
                        <p className="italic">
                            Donnez vie à votre vision
                        </p>
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
                        Propulsez votre
                        <br />
                        Image de Marque
                    </h2>
                    <div className={styles.headerText}>
                        <p className="text-2">
                            Faites passer votre business au niveau supérieur
                            avec des sites web percutants, des designs
                            impactants et des logos mémorables.
                        </p>
                        <Link className={styles.contactLink} href="/contact">
                            <p>Créons ensemble</p>
                            <Image
                                src={arrowRight}
                                alt="arrow-right"
                                width={24}
                                height={8}
                            />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
