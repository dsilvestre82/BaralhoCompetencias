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