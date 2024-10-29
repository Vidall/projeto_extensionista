import Link from "next/link";

export default function DicasPesoNormal(){
    return (
        <>
    <article className="flex flex-col gap-2">
    <h4 className="text-green-600">Dicas Alimentares 🥗🍎:</h4>
            <p>
            Mantenha uma alimentação equilibrada: Continue focando em alimentos variados, ricos em nutrientes e vitaminas, como frutas, vegetais, grãos integrais e proteínas magras.
            </p>
            <p>
            Consuma proteínas em todas as refeições: Inclua carnes magras, ovos, peixes, tofu e leguminosas para ajudar na manutenção e na recuperação muscular.
            </p>
            <p>
            Hidrate-se bem: Beba água ao longo do dia para manter seu corpo e mente ativos e auxiliar nas funções metabólicas.
            </p>
            <p>
            Inclua gorduras saudáveis: Alimentos como abacate, nozes e azeite de oliva ajudam a dar saciedade e fornecem energia de qualidade.
            </p>
            <p>
            Evite alimentos processados: Priorize alimentos frescos e minimamente processados para evitar o excesso de açúcares e gorduras saturadas.
            </p>

            <h4 className="text-blue-600 mt-4">Dicas de Atividades Físicas 🏋️‍♀️:</h4>
            <p>
            Exercícios aeróbicos moderados: Pratique atividades como caminhada, corrida leve, natação ou ciclismo para manter o condicionamento cardiovascular.
            </p>
            <p>
            Treino de força regular: Exercícios com pesos ou resistência ajudam a manter e tonificar a musculatura, prevenindo a perda muscular.
            </p>
            <p>
            Faça alongamentos: Incorporar alongamentos e atividades como ioga ou pilates ajuda na flexibilidade e relaxamento.
            </p>
            <p>
            Mantenha uma rotina ativa: Encontre formas de incluir atividade física no dia a dia, como caminhar mais e evitar o sedentarismo.
            </p>

            <Link href="https://www.unimedfortaleza.com.br/blog/alimentacao/dicas-praticas-para-manter-o-peso-ideal" className="text-emerald-600" target="_blank">Acesse aqui para saber mais</Link>
    </article>
        </>
    );
}
