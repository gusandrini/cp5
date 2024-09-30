import Nasa4 from "@/app/nasas/nasa4/page";
import Image from "next/image";

export default function RotaQuatro() {
    return (
      <div className="container">
        <Nasa4/>
        <div className="titulo">
            <h1  className="titulo">Cálculo de Velikovsky</h1>  
        </div>

        <div className="conteudo">
            <p>No livro Mundos em Colisão de Immanuel Velikovsky, um dos cálculos propostos por ele envolve a trajetória do planeta Vênus. Velikovsky sugere que Vênus foi ejetado de Júpiter e, ao longo de sua trajetória, passou próximo à Terra, o que teria causado grandes catástrofes e eventos históricos descritos em várias culturas, como as pragas do Egito. <br />
              Ele estimou que essa passagem teria acontecido em um período relativamente recente na história da Terra, e ele utilizou a física newtoniana para calcular a influência gravitacional de Vênus e os efeitos que essa interação teria tido sobre a Terra. Embora seus cálculos tenham sido considerados controversos e não aceitos pela comunidade científica, suas ideias provocaram discussões sobre a relação entre eventos astronômicos e as histórias mitológicas e históricas. <br />
            </p>
        </div>

        <div className="conteudo">
          <p>
          Immanuel Velikovsky, em Mundos em Colisão, não apresentou seus cálculos detalhados da influência gravitacional de Vênus de forma formal, mas suas ideias podem ser resumidas em algumas abordagens conceituais e simplificações. Aqui está uma visão geral de como ele teria abordado esses cálculos, com base na física gravitacional. <br />
          <strong>Conceito Geral:</strong></p>
        </div>

        <div className="conteudo">
          <h3>1. Gravitação Universal:</h3>
            <Image
              src="/images/forca-gravi-formu.png" // Substitua pelo caminho da sua imagem
              alt="Not Found"
              width={800} // Defina a largura
              height={800} // Defina a altura
            />
        </div>

        <div className="conteudo">
          <h3>2. Passagem de Vênus:</h3>
          <p>
          Velikovsky sugeriu que, durante sua passagem, a influência gravitacional de Vênus teria causado perturbações significativas na órbita da Terra e em eventos geológicos. Ele estimou que Vênus poderia ter se aproximado da Terra a uma distância relativamente pequena.
          </p>
        </div>

        <div className="conteudo">
          <h3>3. Cálculo da Força:</h3>
          <Image
              src="/images/forca-gravi-conta.png" // Substitua pelo caminho da sua imagem
              alt="Not Found"
              width={800} // Defina a largura
              height={800} // Defina a altura
            />
        </div>

        <div className="conteudo">
          <p>
            <strong>Considerações Importantes</strong> <br />
            <strong>Magnitude dos Efeitos:</strong><br />Velikovsky discutiu que essa força gravitacional poderia ser suficiente para causar mudanças significativas, como terremotos, inundações e outras catástrofes na Terra.  <br />
            <strong>Aceitação Científica:</strong><br /> Os cálculos e suposições de Velikovsky foram amplamente criticados e não são aceitos pela maioria dos cientistas. Eles consideram que suas interpretações não são suportadas por evidências observacionais e que não seguem os princípios da astrofísica moderna. <br />
            Se você deseja um exemplo numérico específico ou uma representação gráfica mais detalhada, posso ajudar a calcular a força gravitacional com os dados mencionados.
          </p>
        </div>


      </div>
    )
  }