import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
    isTransparent?: boolean; // Prop para controlar o estilo do Header
}

export default function Header({ isTransparent = false }: HeaderProps) {
    return (
        <header
            className={`flex flex-row items-center justify-between p-4 ${isTransparent ? "bg-transparent" : "bg-white border-b-2 border-red-800"}`}
        >
            <div className="header-left flex flex-row items-center">
                <Image
                    src="/img/Grupo_CCR_-_Logo.svg-removebg-preview.png"
                    alt="CCR Logo"
                    width={100}
                    height={50}
                />
                <Link href="/">
                    <h1 className="text-red-800 font-bold text-2xl ml-4">Find</h1>
                </Link>
            </div>
            {!isTransparent && ( // Mostra os links apenas se o Header não for transparente
                <div className="header-right flex flex-row space-x-6">
                    <Link href="/pages/grupo">
                        <h2 className="text-red-800 hover:text-red-600 transition-colors">Grupo</h2>
                    </Link>
                    <Link href="/pages/login">
                        <h2 className="text-red-800 hover:text-red-600 transition-colors">Login</h2>
                    </Link>
                    <Link href="/pages/cadastro">
                        <h2 className="text-red-800 hover:text-red-600 transition-colors">Cadastre-se</h2>
                    </Link>
                </div>
            )}
        </header>
    );
}