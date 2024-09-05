import Head from "next/head";
import Image from "next/image";
import Nav from "./components/Nav";
export default function Home() {
    return (
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Pindi - L'Orchestre Créatif Gabonais</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Nav/>
        <main className="bg-white px-3">
          <section className="relative h-[70svh] max-w-7xl w-full mx-auto overflow-hidden rounded-3xl my-24 ">
            <Image
              src="/hero-image.jpeg"
              alt="Pindi en concert"
              layout="fill"
              objectFit="cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-7">
                <h1 className="text-4xl sm:text-6xl text-balance font-bold mb-2">Pindi - L'Orchestre Créatif Gabonais</h1>
                <p className="text-lg font-light sm:text-xl text-balance">Fusion des rythmes traditionnels et modernes du Gabon</p>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Notre Histoire</h2>
              <p className="text-gray-700">
                Pindi est un orchestre créatif gabonais fondé en 2022 à l'initiative de Khery Seshet3w, Eloquent Grand et de Maître Engone. Notre mission est de célébrer et réinventer la riche tradition musicale du Gabon.
              </p>
            </div>
          </section>

          <section className="py-8 sm:py-12 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Découvrez Notre Son Unique</h2>
              {/* Ici, vous pouvez ajouter un lecteur audio ou des liens vers des plateformes de streaming */}
            </div>
          </section>

          <section className="py-8 sm:py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Événements à venir</h2>
              {/* Ici, vous pouvez ajouter une liste d'événements */}
            </div>
          </section>

          <section className="py-8 sm:py-12 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Galerie</h2>
              {/* Ici, vous pouvez ajouter une galerie d'images responsive */}
            </div>
          </section>

          <section className="py-8 sm:py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contactez-nous</h2>
              {/* Ici, vous pouvez ajouter un formulaire de contact responsive */}
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">&copy; 2024 Pindi. Tous droits réservés.</div>
              <div className="space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <a href="#" className="block sm:inline hover:text-gray-300">Mentions légales</a>
                <a href="#" className="block sm:inline hover:text-gray-300">Politique de confidentialité</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}
