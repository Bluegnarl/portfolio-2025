import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import Nav from "@/components/Nav/Nav";
import "./default.scss";

export const metadata = {
    title: "Koçak Ali - Développeur & Designer",
    description:
        "Faites passer votre business au niveau supérieur avec des sites web percutants, des designs impactants et des logos mémorables.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Nav />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
