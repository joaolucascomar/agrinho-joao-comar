const data = {
  leite: [
    { title: "Criação", desc: "O leite é originado de propriedades rurais com manejo extensivo, semi-intensivo ou intensivo. Segundo o IBGE, o Brasil tem mais de 1,1 milhão de produtores de leite, de pequenas fazendas familiares a grandes complexos agropecuários.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-cow" },
    { title: "Ordenha", desc: "A ordenha mecanizada ou manual segue normas de higiene e qualidade. O leite é imediatamente refrigerado a 4°C em tanques-isotérmicos, conforme Instrução Normativa MAPA nº 76.", img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=400&q=60", icon: "fa-bucket" },
    { title: "Transporte", desc: "Caminhões-tanque isolados transportam o leite a 2–6°C até as indústrias em até 12 horas, garantindo integridade nutricional.", img: "https://images.unsplash.com/photo-1580910051070-3e06e1cde3b9?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" },
    { title: "Processamento", desc: "Nas indústrias, o leite passa por pasteurização (72°C×15s), homogeneização e envase asséptico em embalagens multilayer, seguindo padrões de segurança alimentar.", img: "https://images.unsplash.com/photo-1567016432779-6648bb680ec7?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Venda", desc: "O leite é distribuído a supermercados e pontos de venda refrigerados. O consumo per capita no Brasil é de cerca de 170 L/ano, segundo a Embrapa.", img: "https://images.unsplash.com/photo-1576765607921-e2b5b8d64eeb?auto=format&fit=crop&w=400&q=60", icon: "fa-store" }
  ],

  cafe: [
    { title: "Plantio", desc: "O café arábica é cultivado em altitudes de 900–1.200 m, solo com pH 5,5–6,5. A análise de solo anual ajusta a adubação para otimizar rendimento.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-seedling" },
    { title: "Colheita", desc: "A colheita seletiva manual assegura uniformidade de umidade (11–12%). Em grandes plantações, colheitadeiras mecanizadas agilizam sem comprometer qualidade.", img: "https://images.unsplash.com/photo-1527169402691-a4db788f8e9a?auto=format&fit=crop&w=400&q=60", icon: "fa-hand-paper" },
    { title: "Secagem", desc: "Secagem em terreiro suspenso ou estufas mecânicas reduz umidade de 60% para 11% em até 48h, preservando compostos voláteis.", img: "https://images.unsplash.com/photo-1517687136032-0e707753b8e1?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Torrefação", desc: "Torradores de tambor aplicam perfil térmico até 200°C. Resfriamento imediato em corrente de ar evita pós-torra, garantindo cor e sabor homogêneos.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-mug-hot" },
    { title: "Comercialização", desc: "Embalagens com válvula unidirecional conservam frescor. O café segue para cafeterias, e-commerce e supermercados, alcançando consumidores em todo o país.", img: "https://images.unsplash.com/photo-1588767252825-7c7d20df49e0?auto=format&fit=crop&w=400&q=60", icon: "fa-mug-saucer" }
  ],

  soja: [
    { title: "Plantio", desc: "A soja é semeada em linhas de 0,45 m com densidade de 300 mil plantas/ha. Correção do solo com calcário e fosfato resulta em pH ideal e nutrientes balanceados.", img: "https://images.unsplash.com/photo-1559718060-45a2fa16b54b?auto=format&fit=crop&w=400&q=60", icon: "fa-seedling" },
    { title: "Proteção", desc: "Monitoramento contínuo orienta aplicação de defensivos seletivos para controle de pragas e doenças, protegendo lavouras e meio ambiente.", img: "https://images.unsplash.com/photo-1509057199576-632a47484ece?auto=format&fit=crop&w=400&q=60", icon: "fa-bug" },
    { title: "Colheita", desc: "Colheitadeiras ajustadas garantem umidade de 14% nos grãos. O produto segue para silos com aeração, preservando qualidade até o processamento.", img: "https://images.unsplash.com/photo-1527694224006-8a0420b6b0fa?auto=format&fit=crop&w=400&q=60", icon: "fa-tractor" },
    { title: "Processamento", desc: "Extração de óleo por prensa hidráulica e solvente gera óleo com acidez controlada para consumo, e farelo proteico destinado à ração animal.", img: "https://images.unsplash.com/photo-1579895791069-3af59f12b7b6?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Distribuição", desc: "Óleo e farelo são acondicionados em tanques inox e big bags. A logística multimodal garante entrega eficiente a refinarias e fábricas de ração.", img: "https://images.unsplash.com/photo-1542838687-4d64d8a8ec1d?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" }
  ],

  carne_bovina: [
    { title: "Criação", desc: "Bovinos em pastejo rotacionado com suplementação resultam em ganho médio de 1,2 kg/dia. Procedimentos seguem protocolos de bem-estar animal.", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=400&q=60", icon: "fa-cow" },
    { title: "Abate", desc: "Abatedouros ISO 22000 insensibilizam animais por choque elétrico antes do sangramento, minimizando estresse e garantindo higiene.", img: "https://images.unsplash.com/photo-1576671083361-cfbb67fa4320?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Corte e Embalagem", desc: "Cortes são padronizados, embalados a vácuo e armazenados a 2–4°C. Atmosfera modificada prolonga vida útil em até 21 dias.", img: "https://images.unsplash.com/photo-1572372491641-036d72d60eae?auto=format&fit=crop&w=400&q=60", icon: "fa-box" },
    { title: "Transporte", desc: "Caminhões refrigerados com sensores de temperatura garantem rastreamento em tempo real até pontos de venda.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" },
    { title: "Consumo", desc: "A carne chega a açougues e supermercados com pH entre 5,4–5,6, atendendo padrões de frescor e sabor.", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=60", icon: "fa-store" }
  ],

  frango: [
    { title: "Criação", desc: "Frangos de corte são criados em galpões climatizados com densidade de até 14 aves/m². Ração tem 22% de proteína bruta para ótimo desenvolvimento.", img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=400&q=60", icon: "fa-egg" },
    { title: "Abate e Resfriamento", desc: "Insensibilização por CO₂ seguida de sangria e resfriamento em túnel a 0–4°C em até 90 minutos para reduzir bactérias.", img: "https://images.unsplash.com/photo-1571046814783-81cce8dfd9b0?auto=format&fit=crop&w=400&q=60", icon: "fa-drumstick-bite" },
    { title: "Processamento", desc: "Desossa automatizada e embalagens flow-pack sob atmosfera controlada para vida útil de até 14 dias.", img: "https://images.unsplash.com/photo-1540126651425-7bfaeeb3e23b?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Logística", desc: "Câmaras frias com fluxo de ar unidirecional e QR code para rastreabilidade completa.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" },
    { title: "Venda", desc: "Disponível em supermercados e fast foods, com inspeções diárias de frescor, cor e textura.", img: "https://images.unsplash.com/photo-1553173545-1e90d54d4d4a?auto=format&fit=crop&w=400&q=60", icon: "fa-store" }
  ],

  erva_mate: [
    { title: "Cultivo", desc: "Erva-mate (Ilex paraguariensis) cresce em regiões subtropicais. Plantio em solo rico e sombreamento parcial favorece compostos bioativos.", img: "https://images.unsplash.com/photo-1524594157361-dbdc0f762cfa?auto=format&fit=crop&w=400&q=60", icon: "fa-seedling" },
    { title: "Colheita", desc: "Colheita manual permite seleção de folhas maduras. O material segue para secagem em estufa a 60°C para preservação de aroma.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-hand-paper" },
    { title: "Beneficiamento", desc: "Moagem controlada e classificação granulométrica. Análises laboratoriais medem teores de cafeína e polifenóis.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Embalagem", desc: "Pacotes com barreira à oxigênio e UV garantem vida útil de até 12 meses e rastreabilidade por lote.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-box" },
    { title: "Distribuição", desc: "Transporte em pallets ventilados e centros de distribuição com umidade controlada (50–60%).", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" }
  ],

  trigo: [
    { title: "Plantio", desc: "Trigo (Triticum aestivum) é semeado em solos argilosos, pH 6,0–7,0. Adubação nitrogenada em cobertura maximiza rendimento.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-wheat-awn" },
    { title: "Colheita", desc: "Combine harvesters ajustados coletam grãos a 14% de umidade, evitando perdas e fissuras.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-tractor" },
    { title: "Moagem", desc: "Moagem em rolos produz farinha tipo 1 com teor de proteína acima de 11%, conforme norma ABITRIGO.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Empacotamento", desc: "Farinha embalada em sacos de polipropileno com barreira à umidade para preservar qualidade.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-box" },
    { title: "Distribuição", desc: "Envio para moinhos e fábricas de massas. Sistema de rastreabilidade permite recall em até 24 horas.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" }
  ],

  milho: [
    { title: "Plantio", desc: "Milho híbrido semeado com densidade de 65 mil plantas/ha e espaçamento de 0,8 m. Adubação balanceada promove alta produtividade.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-seedling" },
    { title: "Monitoramento", desc: "Sensoriamento remoto e uso de drones identificam estresse hídrico e pragas, orientando intervenções pontuais.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-magnifying-glass" },
    { title: "Colheita", desc: "Colheitadeiras mecanizadas ajustadas garantem até 15% de umidade. O grão segue para secagem imediata a 13%.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-tractor" },
    { title: "Processamento", desc: "Moagem para produção de fubá e ingredientes alimentícios, com análise de teor de amido e proteína.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Logística", desc: "Transporte aéreo-graneleiro e armazenagem em silos com controle de temperatura e umidade.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" }
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