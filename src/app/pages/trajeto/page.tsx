"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const TrajetoPage = () => {
  const [tempoEstimado, setTempoEstimado] = useState("");
  const [totalBaldeacoes, setTotalBaldeacoes] = useState("");
  const [resposta, setResposta] = useState("");

  const handleLinhaChange = () => {
    const linhaInicio = (document.getElementById("LinhaInicio") as HTMLSelectElement).value;
    const linhaDestino = (document.getElementById("LinhaDestino") as HTMLSelectElement).value;

    if (linhaInicio && linhaDestino) {
      setTempoEstimado("30:00"); // Exemplo de tempo estimado
      setTotalBaldeacoes("2"); // Exemplo de baldeações
      setResposta(
        `1. Pegue a ${linhaInicio.toUpperCase()}\n2. Transfira para a ${linhaDestino.toUpperCase()}\n3. Siga até o destino.`
      );
    } else {
      setTempoEstimado("");
      setTotalBaldeacoes("");
      setResposta("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6 bg-gray-100"> {/* Conteúdo principal */}
        <div className="w-full max-w-4xl bg-white shadow-md p-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div>
                <p className="text-lg font-semibold">Informe sua Localização:</p>
                <select
                  id="LinhaInicio"
                  className="w-80 h-8 p-2 border rounded-md"
                  onChange={handleLinhaChange}
                >
                  <option value="">Selecione a Linha</option>
                  <option value="azul">Linha 1 - AZUL</option>
                  <option value="verde">Linha 2 - VERDE</option>
                  <option value="vermelha">Linha 3 - VERMELHA</option>
                  <option value="amarela">Linha 4 - AMARELA</option>
                </select>
              </div>
              <div>
                <p className="text-lg font-semibold">Informe a Linha de Destino:</p>
                <select
                  id="LinhaDestino"
                  className="w-80 h-8 p-2 border rounded-md"
                  onChange={handleLinhaChange}
                >
                  <option value="">Selecione a Linha</option>
                  <option value="azul">Linha 1 - AZUL</option>
                  <option value="verde">Linha 2 - VERDE</option>
                  <option value="vermelha">Linha 3 - VERMELHA</option>
                  <option value="amarela">Linha 4 - AMARELA</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-180 flex justify-center">
              <Image
                src="/img/mapa-metro.png"
                alt="Mapa do Metro de São Paulo"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <div>
              <label className="block font-semibold">Tempo estimado:</label>
              <input
                type="text"
                id="tempoEstimado"
                className="w-80 h-8 p-2 border rounded-md"
                value={tempoEstimado}
                readOnly
              />
            </div>
            <div>
              <label className="block font-semibold">Total de baldeações:</label>
              <input
                type="text"
                id="totalBaldeacoes"
                className="w-80 h-8 p-2 border rounded-md"
                value={totalBaldeacoes}
                readOnly
              />
            </div>
            <div>
              <p className="font-semibold">Passos para chegar ao destino:</p>
              <textarea
                id="resposta"
                className="w-full p-2 border rounded-md h-32"
                value={resposta}
                readOnly
              />
            </div>
          </div>
        </div>
      </main>
      <Footer /> {/* Footer fixo no final da página */}
    </div>
  );
};

export default TrajetoPage;