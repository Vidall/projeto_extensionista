import Link from "next/link";

export default function DicasAbaixoPeso(){
    return (
        <>
            <article className="flex flex-col gap-2">
                <h4 className="text-purple-600">Dicas Alimentares 🥗🍎:</h4>
                <p>
                    Aumente a ingestão de calorias saudáveis: Inclua alimentos como abacate, nozes, sementes, azeite de oliva, óleo de coco e manteiga de amendoim. Eles são ricos em calorias e saudáveis.
                </p>
                <p>
                    Priorize proteínas magras: Consuma fontes de proteína como carnes magras, ovos, peixes, tofu e leguminosas (feijão, lentilha, grão-de-bico). A proteína é essencial para o ganho de massa muscular.
                </p>
                <p>
                    Inclua carboidratos complexos: Batata-doce, aveia, arroz integral e massas integrais são fontes de carboidratos que ajudam a manter a energia e são ideais para quem quer ganhar peso.
                </p>
                <p>
                    Frutas secas e sucos naturais: Frutas secas, como damasco, passas e tâmaras, e sucos de frutas (sem adição de açúcar) são ótimas opções para aumentar as calorias na dieta.
                </p>
                <p>
                    Beba shakes nutritivos: Um shake com leite integral, banana, aveia e uma colher de manteiga de amendoim pode ser uma opção calórica e nutritiva entre as refeições.
                </p>

                <h4 className="text-blue-600 mt-4">Dicas de Atividades Físicas 🏋️‍♀️:</h4>
                <p>
                    Treino de força e resistência: Exercícios de musculação, como levantamento de pesos e resistência, são ideais para o ganho de massa muscular e podem ajudar no ganho de peso saudável.
                </p>
                <p>
                    Evite excesso de cardio: Enquanto o cardio é importante para a saúde cardiovascular, evite exageros, pois ele pode queimar muitas calorias, dificultando o ganho de peso.
                </p>
                <p>
                    Acompanhe o progresso: Monitore seu peso e ajuste a dieta e o treino conforme os resultados. Se possível, trabalhe com um profissional de nutrição e um educador físico para um acompanhamento personalizado.
                </p>

                <Link href="https://www.ecycle.com.br/como-engordar/" className="text-emerald-600" target="_blank">
                    Acesse aqui para saber mais
                </Link>
            </article>
        </>
    );
}
