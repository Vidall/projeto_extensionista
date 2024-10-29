import Link from "next/link";

export default function DicasSobrepeso(){
    return (
        <>
            <article className="flex flex-col gap-2">
                <h4 className="text-orange-600">Dicas Alimentares 🥗🍎:</h4>
                <p>
                    Reduza a ingestão de calorias: Prefira alimentos naturais e minimize o consumo de calorias vazias, como alimentos ultraprocessados, açúcares e frituras.
                </p>
                <p>
                    Priorize fibras: Inclua alimentos ricos em fibras, como vegetais, frutas, grãos integrais e legumes, para promover a saciedade e ajudar no controle do apetite.
                </p>
                <p>
                    Opte por proteínas magras: Consuma peixes, frango sem pele, ovos e leguminosas, que ajudam a manter a saciedade e preservam a massa muscular.
                </p>
                <p>
                    Hidrate-se com frequência: Beba água ao longo do dia e evite bebidas açucaradas, como refrigerantes e sucos industrializados.
                </p>
                <p>
                    Controle o tamanho das porções: Utilize pratos menores e faça refeições regulares em vez de grandes quantidades em uma única refeição.
                </p>

                <h4 className="text-red-600 mt-4">Dicas de Atividades Físicas 🏃‍♂️:</h4>
                <p>
                    Aumente atividades aeróbicas: Exercícios como caminhada, ciclismo e natação ajudam a queimar calorias e melhorar a saúde cardiovascular.
                </p>
                <p>
                    Inclua treinos de resistência: Exercícios de força, como musculação, ajudam a aumentar o metabolismo e preservar a massa muscular.
                </p>
                <p>
                    Movimente-se durante o dia: Realize pequenas atividades físicas no dia a dia, como subir escadas e caminhar mais, para evitar o sedentarismo.
                </p>
                <p>
                    Estabeleça metas realistas: Defina metas de peso e exercício alcançáveis e celebre o progresso. Um estilo de vida saudável é construído aos poucos.
                </p>

                <Link href="https://www.bayer.com.br/pt/blog/habitos-saudaveis-sao-fundamentais-para-prevenir-a-obesidade" className="text-emerald-600" target="_blank">
                    Acesse aqui para saber mais
                </Link>
            </article>
        </>
    );
}
