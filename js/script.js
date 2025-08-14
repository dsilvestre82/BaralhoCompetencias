// Referências
const carrossel = document.getElementById('carrossel');
const areas = document.querySelectorAll('.area');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');
const relatorioOutput = document.getElementById('relatorio-output');
const relatorioContainer = document.getElementById('relatorio-container');

// Dados das competências
const competencias = {
  Alfabet: {
    nome: "Alfabetização em Dados",
    descricao: "Utilizar dados para tomada de decisão."
  },
  Comunica: {
    nome: "Comunicação",
    descricao: "Escutar, indagar e expressar conceitos e ideias nos momentos apropriados e de forma efetiva."
  },
  Criativ: {
    nome: "Criatividade",
    descricao: "Apresentar ideias incomuns ou inteligentes sobre um determinado tópico ou situação."
  },
  Curious: {
    nome: "Curiosidade",
    descricao: "Buscar novas ideias, formas de trabalhar e abordagens para resolução de problemas."
  },
  FocoUser: {
    nome: "Foco no Usuário",
    descricao: "Criar soluções que, de fato, atendam as necessidades dos usuários."
  },
  GestConflitos: {
    nome: "Gestão de Conflitos",
    descricao: "Lidar com situações de oposição e divergências, principalmente no trabalho em equipe."
  },
  GestConhec: {
    nome: "Gestão do Conhecimento",
    descricao: "Utilizar de forma integrada os ativos do conhecimento para gerar valor."
  },
  GestRiscos: {
    nome: "Gestão de Riscos",
    descricao: "Avaliar oportunidades em contextos adversos e tomar decisões com base em cenários."
  },
  Inovacao: {
    nome: "Inovação",
    descricao: "Adotar soluções gerenciais por meio da combinação de conhecimentos e tecnologias."
  },
  Insurg: {
    nome: "Insurgência",
    descricao: "Desafiar a maneira tradicional de fazer as coisas por meio da experimentação e da provocação construtiva."
  },
  Iteracao: {
    nome: "Iteração",
    descricao: "Utilizar abordagens e ferramentas para agilizar o desenvolvimento e aprimoramento de soluções."
  },
  MapCompete: {
    nome: "Mapeamento de Competências",
    descricao: "Identificar adequadamente quais são as competências necessárias para cada contexto."
  },
  OrientServ: {
    nome: "Orientação para Serviços",
    descricao: "Procurar ativamente maneiras de ajudar as pessoas e entregar valor."
  },
  PlanOrg: {
    nome: "Planejamento e Organização",
    descricao: "Determinar indicadores, metas e prioridades dos processos de trabalho."
    },
  Story: {
    nome: "Storytelling",
    descricao: "Utilizar narrativas como forma de comunicação, de inspiração e de aprendizagem."
  },
  FlexCog: {
    nome: "Flexibilidade cognitiva",
    descricao: "Gerar ou usar diferentes conjuntos de regras para combinar ou agrupar coisas em jeitos diferentes."
  },
  Pensam: {
    nome: "Pensamento crítico",
    descricao: "Usar lógica e raciocínio para identificar os pontos fortes e fracos de alternativas de soluções, conclusões ou abordagens de problemas."
  },
  GestPeople: {
    nome: "Gestão de pessoas",
    descricao: "Motivar, desenvolver e direcionar as pessoas enquanto trabalham, identificando as melhores pessoas para a função."
  },
  CoordOthers: {
    nome: "Coordenação com os outros",
    descricao: "Ajustar suas ações em relação às ações dos outros."
  },
  InteligEmoc: {
    nome: "Inteligência emocional",
    descricao: "Estar atento às reações dos outros e entender o porquê as pessoas reagem de determinada maneira."
  },
  Julgam: {
    nome: "Julgamento e tomada de decisão",
    descricao: "Utilizar abordagens, técnicas e ferramentas para agilizar o desenvolvimento de produtos e serviços por meio da experimentação rápida (protótipos e testes)."
  },
  ResolProb: {
    nome: "Resolução de problemas",
    descricao: "Adotar soluções criativas e inovadoras para o enfrentamento de situações não satisfatórias ou que envolvam desvios das expectavas, garantindo a tranquilidade do processo de trabalho e a manutenção das prioridades da organização."
  },
  MobilTeams: {
    nome: "Mobilização de equipes",
    descricao: "Formar, desenvolver e dirigir equipes de trabalho com elevado nível de competência técnica capazes de lidar com situações desafiantes de forma criava, gerando novos conhecimentos e agregando valor aos processos de trabalho da organização."
  },
  Negocia: {
    nome: "Negociação",
    descricao: "Criar situações e ambientes favoráveis a acordos nas relações internas e externas da organização, que sejam efetivos para a solução de problemas e satisfatórios para as partes envolvidas."
  },
  Flexib: {
    nome: "Flexibilidade",
    descricao: "Lidar com distintas e variadas situações, com pessoas e grupos diversos, reconhecendo o ponto de vista dos outros, readequando o seu próprio enfoque e processos de trabalho, principalmente no contexto dos processos de mudança que afetam a dinâmica organizacional."
  },
  GestMudanca: {
    nome: "Gestão da mudança",
    descricao: "Adotar soluções criativas e inovadoras para o enfrentamento de situações não satisfatórias ou que envolvam desvios das expectavas, garantindo a tranquilidade do processo de trabalho e a manutenção das prioridades da organização."
  },
  Mobiliza: {
    nome: "Mobilização",
    descricao: "Ampliar a rede de contatos técnicos, gerenciais e políticos para apoiar a gestão de programas e projetos sob sua responsabilidade, garantindo o envolvimento de atores estratégicos dentro e fora da organização, que possam auxiliar na solução de problemas e na ampliação de recursos essenciais à efetividade dos objetivos estratégicos da organização."
  },
  ConsOrgan: {
    nome: "Consciência organizacional",
    descricao: "Interpretar os marcos do planejamento, a estrutura formal, as cadeias de comando, as normas, os procedimentos operacionais e os estilos de decisão que fundamentam a cultura organizacional, em função do alcance das metas e cumprimento dos objetivos estratégicos da organização."
  },
  Monitora: {
    nome: "Monitoramento e avaliação",
    descricao: "Aplicar métodos e técnicas para o acompanhamento e avaliação de programas e projetos sob sua responsabilidade, garantindo o alinhamento com os objetivos estratégicos e alcance das metas da organização."
  },
  Contex: {
    nome: "Contextualização",
    descricao: "Identificar as tendências sociais, políticas e econômicas nos cenários local, regional, nacional e internacional, que podem impactar o processo decisório e a gestão de programas e projetos sob sua responsabilidade."
  },
  GestCrises: {
    nome: "Gestão de crises",
    descricao: "Elaborar planos de contingência em situações de crise para garantir a continuidade dos programas e projetos sob suas responsabilidades, identificando os fatores críticos para o sucesso da gestão que podem comprometer as metas e a efetividade dos objetivos almejados."
  },
  TrabalhoRede: {
    nome: "Trabalho em rede",
    descricao: "Combinar redes formais e informais, reunindo informações, conhecimentos e estratégias de pessoas, grupos e organizações, em prol da adição de valor aos fins últimos da própria organização, garantindo a potencialização dos recursos necessários ao sucesso dos programas e projetos sob sua responsabilidade."
  },
  GerencProj: {
    nome: "Gerenciamento ágil de projetos",
    descricao: "Dominar conceitos, métodos e ferramentas associados ao gerenciamento de projetos, bem como compreender os princípios da gestão ágil de projetos, e do desenvolvimento iterativo e incremental."
  },
  DesenhoEstrat: {
    nome: "Desenho de estratégias",
    descricao: "Desenhar planos de ação considerandose as variáveis internas e externas à organização, tais como os níveis de estabilidade ou mutabilidade dos cenários políticos, econômico e social, bem como da estrutura organizacional, visando minimizar a ocorrência de obstáculos e maximizar as oportunidades para o sucesso da gestão de programas e projetos."
  },
  OrientResult: {
    nome: "Orientação para resultados",
    descricao: "Superar o desempenho padrão e apresentar soluções de elevado valor agregado no cumprimento de metas e alcance dos objetivos estratégicos da organização."
  },
  VisaoSistem: {
    nome: "Visão sistêmica",
    descricao: "Entender e comunicar o contexto e de perceber cenários futuros, delinear perspectivas de longo prazo alinhadas aos objetivos organizacionais, permitindo prospectar oportunidades, superar obstáculos, calcular riscos e planejar ações."
  },
  Resiliencia: {
    nome: "Resiliência",
    descricao: "Lidar efetivamente com a pressão, mantendo-se otimista, mesmo sob condições adversas. Recupera-se rapidamente de reveses."
  },
  DesignInstruc: {
    nome: "Design instrucional",
    descricao: "Projetar, desenvolver e fornecer sistematicamente produtos e experiências instrucionais, tanto digitais quanto físicas, de maneira consistente e confiável, visando uma aquisição de conhecimento eficiente, eficaz, atraente, envolvente e inspiradora."
  },
  Levant: {
    nome: "Levantamento de necessidades",
    descricao: "Mapear as necessidades da organização levando em consideração processos, projetos, cadeia de valor e objetivos estratégicos da organização."
  },
  PlanTD: {
    nome: "Planejamento de T&D",
    descricao: "Planejar de ações de treinamento e desenvolvimento observando as necessidades de treinamento, objetivos da organização e orçamento disponível."
  },
  LogTD: {
    nome: "Logística de T&D",
    descricao: "Preparar, executar e monitorar todos os elementos logísticos relacionados à ações de treinamento e desenvolvimento."
  },
  FocoResult: {
    nome: "Foco em resultados",
    descricao: "Priorizar e manter-se focado nas ações necessárias para alcançar os objetivos e metas da organização, com olhar voltado para o usuário."
  },
  StatusQuo: {
    nome: "Desafio ao status quo",
    descricao: "Desafiar a forma habitual de fazer as coisas, enxergando oportunidades melhorias, propondo alternativas, pilotando novas ideias e implementando melhorias em processos/projetos, com foco no usuário."
  },
  Articul: {
    nome: "Articulação",
    descricao: "Criar e manter redes de suporte e cooperação com atores intra e interorganizacionais, usando sua influência para conquistar a confiança e engajamento dos stakeholders. Resolver conflitos, influenciar e criar uma cultura colaborativa para atingir resultados."
  },
  Lideranca: {
    nome: "Liderança",
    descricao: "Inspirar e gerir equipes de alto desempenho, conquistar a confiança, motivar e desenvolver o time para atingimento das metas e objetivos, mantendo o alinhamento e foco nas prioridades da organização."
  },
  GestProces: {
    nome: "Gestão de processos",
    descricao: "Utilizar conceitos, métodos e ferramentas associados ao mapeamento, gestão e melhoria de processos de trabalho."
  },
  DadosEvid: {
    nome: "Dados e evidências",
    descricao: "Mapear as necessidades da organização levando em consideração processos, projetos, cadeia de valor e objetivos estratégicos da organização."
  },
  ReestOrg: {
    nome: "Reestruturação organizacional",
    descricao: "Compreender arranjos institucionais e modelos organizacionais da administração pública e de entidades paraestatais, bem como os normativos que os regem, visando identificar oportunidades de reestruturação e otimização."
  },
  DesignThink: {
    nome: "Design thinking",
    descricao: "Construir, testar e consolidar aprendizado de protótipos desenvolvidos para resolver desafios e problemas centrados nas pessoas, a partir insights descobertos por meio de pesquisas e outras formas de imersão para compreender as reais necessidades de determinado públicoalvo."
  },
  Office: {
    nome: "Microsoft Office",
    descricao: "Utilizar softwares do pacote Microsoft Office como Word, Excel e Power Point para elaboração de relatórios, apresentações e planilhas de controle."
  },
  Email: {
    nome: "Ferramentas de correio eletrônico",
    descricao: "Utilizar softwares ou serviços de gerenciamento de correio eletrônico."
  },
  GestTime: {
    nome: "Gestão do tempo",
    descricao: "Adotar práticas para redução do desperdício do tempo disponível para a realização de atividades."
  },
  Agilidade: {
    nome: "Agilidade mental",
    descricao: "Lidar com múltiplas tarefas e pessoas com demandas diferentes ao mesmo tempo."
  },
  GestOrcam: {
    nome: "Gestão orçamentária",
    descricao: "Avaliar e decidir sobre a utilização do orçamento disponível em face das demandas recebidas e os objetivos da organização."
  },
  IndicadorRH: {
    nome: "Indicadores de RH",
    descricao: "Criar, adaptar e utilizar indicadores relacionados à sistemas relacionados à gestão de pessoas na organização."
  }
 
};

// Drag and drop
document.querySelectorAll('.carta').forEach(carta => {
  carta.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', carta.id);
  });
});

areas.forEach(area => {
  area.addEventListener('dragover', e => e.preventDefault());
  area.addEventListener('drop', e => {
    e.preventDefault();
    const cartaId = e.dataTransfer.getData('text/plain');
    const carta = document.getElementById(cartaId);
    area.appendChild(carta);
  });
});

// Carrossel
scrollLeft.addEventListener('click', () => {
  carrossel.scrollBy({ left: -200, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
  carrossel.scrollBy({ left: 200, behavior: 'smooth' });
});

// Relatório
function gerarRelatorio() {
  let relatorio = '';

  areas.forEach(area => {
    const nomeArea = area.getAttribute('data-label');
    const cartas = Array.from(area.querySelectorAll('.carta'));

    if (cartas.length > 0) {
      relatorio += `\n🔹 ${nomeArea}\n`;
      cartas.forEach(carta => {
        const comp = competencias[carta.id];
        relatorio += `• ${comp.nome}: ${comp.descricao}\n`;
      });
    }
  });

  if (relatorio === '') {
    relatorioOutput.textContent = 'Nenhuma competência foi posicionada nos quadrantes.';
  } else {
    relatorioOutput.textContent = relatorio.trim();
  }

  relatorioContainer.style.display = 'block';

}
