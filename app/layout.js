import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pindi - L'Orchestre Créatif Gabonais",
  description: "Pindi est un orchestre créatif gabonais fondé en 2022 à l'initiative de Khery Seshet3w, Eloquent Grand et de Maître Engone.",
  openGraph: {
    icon: "/logo.png",
    images:
      "/hero-image.jpeg",
    url: "https://pindi-officiel.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
