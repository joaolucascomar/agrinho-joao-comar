const data = {
  leite: [
    {
      title: "Do Campo à Mesa",
      desc: `O leite cru produzido em tanques isotérmicos a 4°C após ordenha é monitorado quanto à acidez (pH entre 6,5 e 6,7) e contagem somática (<400 mil células/mL), conforme Portaria MAPA nº 1469/1997.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-cow"
    },
    {
      title: "Pasteurização HTST",
      desc: `Processo HTST: aquecimento a 72°C por 15s seguido de resfriamento rápido a 4°C. Garante redução de 99,999% de patógenos como Listeria e Salmonella, conforme normas do Codex Alimentarius.`,
      img: "https://images.unsplash.com/photo-1516515429578-0d4945bfc174?auto=format&fit=crop&w=400&q=60",
      icon: "fa-industry"
    },
    {
      title: "Envase Asséptico",
      desc: `Ambiente clo asept, esterilização de embalagens por ozônio e selagem imediata. Embalagens multilayer com barreira à luz e oxigênio permitem shelf‑life de até 20 dias sem conservantes.`,
      img: "https://images.unsplash.com/photo-1567016432779-6648bb680ec7?auto=format&fit=crop&w=400&q=60",
      icon: "fa-box"
    },
    {
      title: "Logística Refrigerada",
      desc: `Transporte em veículos isotérmicos com monitoramento de 2°C a 6°C em toda a cadeia. Sensores registram temperatura a cada minuto para rastreabilidade e garantia de qualidade.`,
      img: "https://images.unsplash.com/photo-1580910051070-3e06e1cde3b9?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck-fast"
    },
    {
      title: "Armazenagem e Venda",
      desc: `Pontos de venda mantêm câmaras refrigeradas a 4°C e realizam rotineiramente teste de qualidade sensorial e físico-químico (gordura, proteína) para conformidade com legislação.`,
      img: "https://images.unsplash.com/photo-1576765607921-e2b5b8d64eeb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-store"
    }
  ],

  cafe: [
    {
      title: "Cultivo e Manejo",
      desc: `Grãos de Coffea arabica cultivados a 900–1200m, solo com pH ajustado a 5,5–6,5. Fertirrigação controla macro‑nutrientes NPK e manejo integrado de pragas reduz uso de defensivos químicos.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-seedling"
    },
    {
      title: "Colheita Seletiva",
      desc: `Frutos com coloração vermelho‑escura são colhidos manualmente para uniformidade de umidade (11%–12%). Procedimento reduz perdas e melhora qualidade sensorial.`,
      img: "https://images.unsplash.com/photo-1527169402691-a4db788f8e9a?auto=format&fit=crop&w=400&q=60",
      icon: "fa-hand-holding-droplet"
    },
    {
      title: "Processamento e Secagem",
      desc: `Secagem em secador de fluxo contínuo de 60% para 11% umidade em <24h, temperatura controlada <45°C para preservar compostos voláteis e reduzir riscos de fermentação indesejada.`,
      img: "https://images.unsplash.com/photo-1517687136032-0e707753b8e1?auto=format&fit=crop&w=400&q=60",
      icon: "fa-industry"
    },
    {
      title: "Torrefação Supervisada",
      desc: `Perfil de torra em tambor rotativo: rampa de 150°C a 200°C, controle de tempo e fluxo de ar para modular acidez e corpo. Resfriamento imediato evita pós-torra e garante estabilidade.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-mug-hot"
    },
    {
      title: "Embalagem e Distribuição",
      desc: `Sacos com válvula unidirecional mantêm CO₂ liberado e evitam ingresso de oxigênio. Transporte em ambiente seco e controle de temperatura evita condensação e mofo.`,
      img: "https://images.unsplash.com/photo-1588767252825-7c7d20df49e0?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck"
    }
  ],

  soja: [
    {
      title: "Plantio Convencional",
      desc: `Sementes tratadas com fungicidas de contato e biologicos, plantio em linhas a 45cm com densidade de 300.000 pés/ha. Correção de solo com calcário e fósforo conforme análise de micorrizas.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-seedling"
    },
    {
      title: "Manejo de Pragas",
      desc: `Aplicação aérea de inseticidas seletivos no estádio V4–V6, monitoramento de lagartas e percevejos com armadilhas e controle biológico de ácaros.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-bug"
    },
    {
      title: "Colheita Mecanizada",
      desc: `Colheitadeiras com sistema de côncavo ajustado para 14% de umidade, separação por peneiras e fluxo de ar. Armazenagem em silos metálicos com aeração e temperatura controlada.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-tractor"
    },
    {
      title: "Processamento",
      desc: `Extração de óleo por prensagem a frio e solvente. Farelo desengordurado utilizado em ração animal, atendendo parâmetros de proteína bruta >44%.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-industry"
    },
    {
      title: "Distribuição",
      desc: `Óleo armazenado em tanques inox sob atmosfera inerte e farelo ensacado em big bags. Logística multimodal garante entrega em porto e indústria de rações.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck"
    }
  ],

  carne_bovina: [
    {
      title: "Criação e Engorda",
      desc: `Pastejo rotacionado em pastagens de Brachiaria com suplementação de concentrado, controle de parasitas e monitoramento de ganho de peso (1,2 kg/dia).`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-cow"
    },
    {
      title: "Abate Humanitário",
      desc: `Fluxo contínuo em abatedouro certificado ISO 22000:2018. Insensibilização elétrica seguida de sangria rápida, conforme Instrução Normativa MAPA nº 3/2017.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-industry"
    },
    {
      title: "Processamento",
      desc: `Cortes resfriados a 2–4°C, desossamento automatizado e embalagem a vácuo com atmosfera modificada para vida de prateleira até 21 dias.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-box"
    },
    {
      title: "Transporte",
      desc: `Caminhões refrigerados com túnel de vapor para descongelamento controlado. Rastreabilidade embutida via RFID em caixas de cortes nobres.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck-fast"
    },
    {
      title: "Varejo",
      desc: `Produtos mantidos em vitrines a 2–5°C. Testes sensoriais e físico-químicos (pH, cor, TBARS) garantem frescor e sabor.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-store"
    }
  ],

  frango: [
    {
      title: "Criação Intensiva",
      desc: `Galpões climatizados com densidade de até 14 aves/m², alimentação balanceada (22% PB) e monitoramento de umidade e amônia.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-egg"
    },
    {
      title: "Abate e Resfriamento",
      desc: `Insensibilização por CO₂ e sangria conforme IN MAPA nº 23/1996. Resfriamento em túnel a 0–4°C em até 90 minutos para redução de cargas microbianas.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-drumstick-bite"
    },
    {
      title: "Processamento",
      desc: `Desossa automatizada, cortes padronizados sob atmosfera controlada (N₂) e embalagem flow‑pack para vida útil de até 14 dias.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-industry"
    },
    {
      title: "Distribuição",
      desc: `Transporte em CDL (Câmara de Dupla Temperatura) com setpoints distintos para cortes e miúdos. Monitoramento por termógrafo e registro digital.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck"
    },
    {
      title: "Comercialização",
      desc: `Exposição em gôndolas refrigeradas a 2–4°C. Inspeções diárias verificam coloração, odor e textura, assegurando padrões de qualidade.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-store"
    }
  ],

  erva_mate: [
    {
      title: "Cultivo e Manejo",
      desc: `Erva‐mate (Ilex paraguariensis) cultivada em solos ricos em matéria orgânica, com sombreamento parcial e adubação fosforada para otimizar teores de polifenóis.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-seedling"
    },
    {
      title: "Colheita Manual",
      desc: `Poda seletiva e corte manual de folhas, garantindo maturação uniforme. Você controla níveis de cafeína e polifenóis em laboratório antes do beneficiamento.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-hand-holding-droplet"
    },
    {
      title: "Beneficiamento",
      desc: `Folhas secas em estufa de circulação controlada (<60°C), posterior moagem e classificação granulométrica. Análise de compostos bioativos por HPLC.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-industry"
    },
    {
      title: "Embalagem",
      desc: `Filmes metalizados onox com barreira UV e atmosfera modificada (N₂) garantem estabilidade de aroma e cor por até 12 meses.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-box"
    },
    {
      title: "Logística",
      desc: `Transporte em pallets ventilados e armazenagem em depósito seco com UR 50%–60%. Rastreamento por QR code informa lote e data de produção.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck"
    }
  ],

  trigo: [
    {
      title: "Plantio e Solo",
      desc: `Sementes de trigo (Triticum aestivum) semeadas em solo argiloso-arenoso, pH 6,0–7,0. Adubação nitrogenada em cobertura e manejo de doenças foliares com fungicidas sistêmicos.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-wheat-awn"
    },
    {
      title: "Colheita Mecanizada",
      desc: `Combine harvesters ajustados para 14% de umidade, separação por fluxo de ar e limpeza por peneiras. Grãos armazenados em silos com controle de temperatura <15°C.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-tractor"
    },
    {
      title: "Beneficiamento",
      desc: `Moagem gradual em rolos para produção de farinha tipo 1, com extração de glúten para panificação. Análise de cinzas e proteína segue padrão europeu EN ISO 20483.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-industry"
    },
    {
      title: "Embalagem e Expedição",
      desc: `Farinha ensacada em sacos de polipropileno de alta barreira, transporte em contêineres secos. Controle de umidade <12% até o destino final.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-box"
    },
    {
      title: "Distribuição",
      desc: `Rotas otimizadas para moinhos e indústrias de massas. Rastreabilidade via lote assegura recall em 24h em caso de não conformidade.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck"
    }
  ],

  milho: [
    {
      title: "Plantio e Insumos",
      desc: `Milho híbrido cultivado em solo adubado com ureia e superfosfato, espaçamento de 0,8m e densidade de 65.000 plantas/ha. Manejo de herbicidas sistêmicos controla invasoras.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-seedling"
    },
    {
      title: "Monitoramento e Saúde",
      desc: `Sensoriamento remoto via drone identifica estresse hídrico; aplicação precisa de irrigação e defensivos foliares conforme recomendações técnicas.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-drone"
    },
    {
      title: "Colheita e Secagem",
      desc: `Colheitadeiras ajustadas para 15% de umidade, seguido de secagem em estufa até 13% para minimizar fissuras e garantir qualidade de grãos.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-tractor"
    },
    {
      title: "Moagem e Processamento",
      desc: `Fabricação de fubá e farinhas especiais por moagem controlada. Análise granulométrica e teor de amido acima de 70% para indústria alimentícia.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-industry"
    },
    {
      title: "Logística",
      desc: `Transporte graneleiro em vagões e caminhões sider, armazenagem em silos verticais com aeradores. Monitoramento de temperatura e IR para segurança.`,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck"
    }
  ]
};


const DOM = {
  stepsContainer: document.querySelector('.steps-container'),
  productSelect: document.getElementById('productSelect'),
  stepTitle: document.getElementById('stepTitle'),
  stepDesc: document.getElementById('stepDesc'),
  stepImage: document.getElementById('stepImage'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn')
};

let currentState = {
  product: 'leite',
  currentStep: 0
};

function createSteps() {
  DOM.stepsContainer.innerHTML = '';
  const productData = data[currentState.product];
  
  productData.forEach((step, index) => {
    const stepElement = document.createElement('div');
    stepElement.className = 'step';
    stepElement.innerHTML = `
      <i class="fa-solid ${step.icon}"></i>
      <div class="step-label">${step.title}</div>
    `;
    
    DOM.stepsContainer.appendChild(stepElement);
    
    if (index < productData.length - 1) {
      const connector = document.createElement('div');
      connector.className = 'connector';
      DOM.stepsContainer.appendChild(connector);
    }
  });
}

function updateContent() {
  const productData = data[currentState.product];
  const currentStepData = productData[currentState.currentStep];
  
  DOM.stepTitle.textContent = currentStepData.title;
  DOM.stepDesc.textContent = currentStepData.desc;
  DOM.stepImage.src = currentStepData.img;
  DOM.stepImage.alt = currentStepData.title;
  
  DOM.prevBtn.disabled = currentState.currentStep === 0;
  DOM.nextBtn.disabled = currentState.currentStep === productData.length - 1;
  
  document.querySelectorAll('.step, .connector').forEach((element, index) => {
    const stepIndex = Math.floor(index / 2);
    
    if (element.classList.contains('step')) {
      element.classList.toggle('active', stepIndex === currentState.currentStep);
    } else if (element.classList.contains('connector')) {
      element.classList.toggle('active', stepIndex < currentState.currentStep);
    }
  });
}

function handleProductChange() {
  currentState.product = this.value;
  currentState.currentStep = 0;
  createSteps();
  updateContent();
}

function handleNavigation(direction) {
  const productData = data[currentState.product];
  
  if (direction === 'prev') {
    currentState.currentStep = Math.max(0, currentState.currentStep - 1);
  } else {
    currentState.currentStep = Math.min(productData.length - 1, currentState.currentStep + 1);
  }
  
  updateContent();
}

function init() {
  DOM.productSelect.addEventListener('change', handleProductChange);
  DOM.prevBtn.addEventListener('click', () => handleNavigation('prev'));
  DOM.nextBtn.addEventListener('click', () => handleNavigation('next'));
  
  createSteps();
  updateContent();
}

init();