import Footer from '@/app/components/Footer/Footer';
import Header from '@/app/components/Header/Header';
import Image from 'next/image';

export default function GrupoPage() {
    return (
        <div className="flex flex-col min-h-screen"> {/* Container principal */}
            <Header />
            <main className="flex-grow flex flex-col items-center w-full py-10"> {/* Conteúdo principal */}
                <div className="flex justify-center items-center h-56">
                    <h2 className="text-red-700 text-4xl font-bold pl-10">Grupo E.G.L</h2>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center w-full px-10 gap-60"> {/* Container dos cards */}
                    {[
                        { name: "Eder Souza Silva", github: "EderSouza01", linkedin: "Eder Silva", email: "Edersouzasilva49@gmail.com", img: "/img/Eder2.jpg" },
                        { name: "Gabriel Gonçalves", github: "Biellgon", linkedin: "Gabriel Gonçalves", email: "gabrielgoncalves17700@gmail.com", img: "/img/gabriel.jpg" },
                        { name: "Leonardo dos Santos Rocha", github: "LeoRocha18", linkedin: "Leonardo Rocha", email: "leorocha2005br@gmail.com", img: "/img/leo.jpg" }
                    ].map((member, index) => (
                        <div key={index} className="flex w-full md:w-80 max-w-xs p-4"> {/* Card */}
                            <div className="flex flex-col items-center w-full bg-gray-300 border-2 border-gray-800 rounded-2xl p-6 space-y-4 h-96"> {/* Altura fixa */}
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={150}
                                    height={150}
                                    className="border-2 border-gray-800 rounded-xl w-3/5 "
                                />
                                <p className="font-semibold text-black text-center">Nome: {member.name}</p>
                                <p className="font-semibold text-black text-center">GitHub: {member.github}</p>
                                <p className="font-semibold text-black text-center">LinkedIn: {member.linkedin}</p>
                                <p className="font-semibold text-black text-center">Email: {member.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}