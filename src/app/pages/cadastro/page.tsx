'use client';
import { useState } from "react";
import Header from "@/app/components/Header/Header";

<Header isTransparent={true} />

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const validarEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const Cadastrar = () => {
        let valid = true;

        if (nome.trim() === "") {
            alert("O nome não pode estar vazio.");
            valid = false;
        }

        if (email.trim() === "") {
            alert("O email não pode estar vazio.");
            valid = false;
        } else if (!validarEmail(email)) {
            alert("Formato de email inválido.");
            valid = false;
        }

        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            valid = false;
        }

        if (confirmarSenha !== senha) {
            alert("As senhas não coincidem.");
            valid = false;
        }

        if (!checkbox) {
            alert("Você precisa aceitar receber informações por WhatsApp.");
            valid = false;
        }

        if (valid) {
            alert("Cadastro realizado com sucesso!");
        }
    };

    return (
        <>
            <Header />
            <section className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('../img/image_background_cadastr.png')" }}>
                <div className="flex flex-col items-center justify-evenly w-1/4 h-[600px] bg-black bg-opacity-90 rounded-xl p-6">
                    <h2 className="text-white text-2xl font-bold">Faça o seu cadastro!</h2>

                    <input type="text" placeholder="Seu Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="w-1/2 h-10 text-center rounded-full bg-gray-200 text-lg font-bold p-2" />
                    
                    <input type="text" placeholder="Seu Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-1/2 h-10 text-center rounded-full bg-gray-200 text-lg font-bold p-2" />
                    
                    <input type="password" placeholder="Sua Senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="w-1/2 h-10 text-center rounded-full bg-gray-200 text-lg font-bold p-2" />
                    
                    <input type="password" placeholder="Confirme Sua Senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} className="w-1/2 h-10 text-center rounded-full bg-gray-200 text-lg font-bold p-2" />
                    
                    <div className="flex items-center justify-between w-2/3">
                        <p className="text-white text-sm">Aceito receber informações por WhatsApp</p>
                        <input type="checkbox" checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} className="w-4 h-4" />
                    </div>
                    
                    <button onClick={Cadastrar} className="w-1/4 h-10 rounded-full bg-red-700 text-white text-lg font-bold flex items-center justify-center">Cadastrar</button>
                    
                    <div className="flex justify-between w-2/3">
                        <p className="text-white text-lg">Já possui uma conta?</p>
                        <a href="/pages/login" className="text-red-700 text-lg hover:scale-105 transition-transform">Entrar</a>
                    </div>
                </div>
            </section>
        </>
    );
}