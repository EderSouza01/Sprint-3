import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
        <Header/>
       <section>
                <div id="container">
                    <div className="centro">
                        <div className="texto">
                            <h2>Precisa de Ajuda?</h2>
                            <h3>
                                Com o CCR Find, agora você pode encontrar o melhor trajeto para chegar ao seu destino.
                                <br /><br />
                                Teste agora o CCR Find. <br /><br /><br />
                            </h3>
                            <div className="verTrajeto">
                                <Link href="/pages/trajeto">
                                    <p>Ver Trajeto</p>
                                </Link>
                            </div>
                        </div>
                        <div className="slide">
                            <Image
                                src="/img/linha_amarela_02-1.jpg"
                                alt="Linha Amarela"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
    </>
  );
}
