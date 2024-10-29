'use client';

import DicasAbaixoPeso from "@/components/DicasAbaixoPeso";
import ReturnCard from "@/components/DicasAbaixoPeso";
import DicasObesidade from "@/components/DicasObesidade";
import DicasPesoNormal from "@/components/DicasPesoNormal";
import DicasSobrepeso from "@/components/DicasSobrepeso";
import { CalcularIMC } from "@/utilities/CalcularIMC";
import React, { Component, useEffect, useState } from "react";

export default function Home() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState("");
  const [nivelImc, setNivelIMC] = useState<number | null>(null);

  const tabIMC: { [key: number]: string } = {
    1: "peso baixo",
    2: "Peso normal",
    3: "Sobrepeso",
    4: "Obesidade"
  };
  

  const handleCalcularIMC = (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);

    if (alturaNum > 0 && pesoNum > 0) {
      const resultado = CalcularIMC(alturaNum, pesoNum);
      setImc(resultado.toFixed(2)); // Armazena o IMC com duas casas decimais
    } else {
      setImc("Valores inválidos");
    }
  };

  useEffect(() => {
    const imcNum = parseFloat(imc);
    if (!isNaN(imcNum)) {
      if (imcNum < 18.5) {
        setNivelIMC(1);
      } else if (imcNum >= 18.5 && imcNum <= 24.9) {
        setNivelIMC(2);
      } else if (imcNum >= 25 && imcNum <= 29.9) {
        setNivelIMC(3);
      } else if (imcNum >= 30) {
        setNivelIMC(4);
      }
    }
  }, [imc]);

  return (
    <div className="flex flex-col justify-center items-center p-4 pt-10">
      <div>
        <h4 className="flex justify-center">Calcular IMC</h4>
        <form
          onSubmit={handleCalcularIMC}
          className="flex flex-col items-center justify-center bg-slate-700 gap-4 h-48 p-4 border rounded"
        >
          <div>
            <label htmlFor="altura">Altura (em metros):</label>
            <input
              type="number"
              id="altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Altura"
              className="border mx-1 px-1"
            />
          </div>

          <div>
            <label htmlFor="peso">Peso (em kg):</label>
            <input
              type="number"
              id="peso"
              placeholder="Peso em kg"
              onChange={(e) => setPeso(e.target.value)}
              value={peso}
              className="border mx-1 px-1"
            />
          </div>

          <button type="submit" className="bg-primary">
            Calcular
          </button>
        </form>
      </div>

      {imc && (
        <div className="mt-4">
          <p>Seu IMC é: {imc}</p>
          {nivelImc && <p className="mb-2">Você está com: <strong>{tabIMC[nivelImc]}</strong></p>}
          { nivelImc === 1 &&(
            <DicasAbaixoPeso/>
          )}
          { nivelImc === 2 && (
            <DicasPesoNormal/>
          )
          }
          { nivelImc === 3 && (
            <DicasSobrepeso/>
          )
          }
          { nivelImc === 4 && (
            <DicasObesidade/>
          )
          }
        </div>

        
      )}
    </div>
  );
}
