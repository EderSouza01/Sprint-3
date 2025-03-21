'use client';
import { useState } from "react";
import Header from "@/app/components/Header/Header";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erroEmail, setErroEmail] = useState("");
    const [erroSenha, setErroSenha] = useState("");

    const validarEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const Logar = () => {
        let valid = true;
    
        setErroEmail("");
        setErroSenha("");
    
        if (email.trim() === "") {
            setErroEmail("O email não pode estar vazio.");
            valid = false;
        } else if (!validarEmail(email)) {
            setErroEmail("Formato de email inválido.");
            valid = false;
        }
    
        if (senha.trim() === "") {
            setErroSenha("A senha não pode estar vazia.");
            valid = false;
        }
    
        if (valid) {
            alert("Login realizado com sucesso!");
            window.location.href = "/"; // Redireciona para a página inicial
        }
    };
    

    return (
        <>
            <Header isTransparent={true} /> {/* Header transparente */}
            <section className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url(../img/image_background_cadastr.png)" }}>
                <div className="flex flex-col items-center justify-evenly w-1/4 h-[580px] bg-black bg-opacity-90 rounded-xl p-6">
                    <h2 className="text-white text-2xl font-bold">Entre na sua conta</h2>

                    <div className="w-full flex flex-col justify-center items-center">
                        <input
                            type="text"
                            placeholder="Seu Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-[250] h-11  text-center rounded-full bg-gray-200 text-lg font-bold p-2 ${erroEmail ? "border-2 border-red-500" : ""}`}
                        />
                        {erroEmail && <p className="text-red-500 text-sm mt-1">{erroEmail}</p>}
                    </div>

                    <div className="w-full flex flex-col justify-center items-center">
                        <input
                            type="password"
                            placeholder="Sua Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className={`w-[250] h-11 text-center rounded-full bg-gray-200 text-lg font-bold p-2 ${erroSenha ? "border-2 border-red-500" : ""}`}
                        />
                        {erroSenha && <p className="text-red-500 text-sm mt-1">{erroSenha}</p>}
                    </div>

                    <button
                        onClick={Logar}
                        className="w-1/3 h-10 rounded-full bg-red-700 text-white text-lg font-bold flex items-center justify-center hover:bg-red-800 transition-colors"
                    >
                        Logar
                    </button>

                    <div className="flex justify-between w-90 mt-4">
                        <p className="text-white text-lg">Não possui uma conta?</p>
                        <a href="/pages/cadastro" className="text-red-700 text-lg hover:scale-105 transition-transform">
                            Cadastre-se
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}