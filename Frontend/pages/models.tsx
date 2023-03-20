import Head from "next/head";
import Link from "next/link";
import ListElement from "../components/listElement";

export default function Home() {
    return (
        <>
            <Head>
                <title>GDPM</title>
                <meta name="description" content="Grafische Entwicklungsumgebung zur Modellierung und zum Management probabilistischer Modelle" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="bg-gray-100 dark:bg-gray-900 px-4 py-1 flex justify-between items-center">
                <p className="text-4xl">GDPM</p>
                <nav className="flex gap-6">
                    <Link href="/edit">New Model</Link>
                    <Link href="/login">Login</Link>
                </nav>
            </header>

            <main className="container mx-auto flex-grow pt-40">
            <ListElement className=""/>
                <p className="text-6xl font-bold text-center">Grafische Entwicklungsumgebung
              Modelle! Modelle! Modelle!
                </p>
            </main>


            <footer className="text-center font-light">
                GPDM - Projektstudium
            </footer>
        </>
    )
}