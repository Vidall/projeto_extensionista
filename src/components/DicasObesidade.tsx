import Link from "next/link";

export default function DicasObesidade(){
    return (
        <>
            <article className="flex flex-col gap-2">
                <h4 className="text-red-600">Dicas Alimentares 🥗🍎:</h4>
                <p>
                    Priorize alimentos de baixa caloria e alta densidade nutritiva: Consuma frutas, vegetais, legumes, grãos integrais e proteínas magras para garantir nutrição e controle calórico.
                </p>
                <p>
                    Evite alimentos ultraprocessados: Reduza o consumo de alimentos ricos em açúcares e gorduras saturadas, como fast-foods, salgadinhos e doces industrializados.
                </p>
                <p>
                    Modere o tamanho das porções: Sirva-se em porções menores e evite repetir, ajudando a controlar a ingestão calórica sem perder o equilíbrio.
                </p>
                <p>
                    Faça refeições regulares e evite &quot; pular &quot; refeições: Comer em intervalos regulares ajuda a estabilizar o metabolismo e prevenir exageros.
                </p>
                <p>
                    Beba bastante água: A hidratação adequada pode ajudar a reduzir a sensação de fome e evitar a ingestão de calorias desnecessárias.
                </p>

                <h4 className="text-purple-600 mt-4">Dicas de Atividades Físicas 🏃‍♂️:</h4>
                <p>
                    Inicie com atividades leves e frequentes: Comece com caminhadas leves, natação ou pedaladas curtas, aumentando gradualmente o tempo e intensidade.
                </p>
                <p>
                    Pratique exercícios de força: Exercícios com pesos leves ou elásticos ajudam a preservar a massa muscular e melhorar o metabolismo.
                </p>
                <p>
                    Evite longos períodos de inatividade: Movimente-se ao longo do dia, levantando-se a cada hora e fazendo pequenas caminhadas, para evitar o sedentarismo.
                </p>
                <p>
                    Busque apoio profissional: O acompanhamento de nutricionistas e educadores físicos ajuda a traçar um plano personalizado, seguro e eficiente.
                </p>

                <Link href="https://www.terra.com.br/vida-e-estilo/saude/como-controlar-a-obesidade-10-dicas-para-se-manter-saudavel,2033a5c920d541fe0661e12c86651a28cm2asej1.html" className="text-emerald-600" target="_blank">
                    Acesse aqui para saber mais
                </Link>
            </article>
        </>
    );
}
