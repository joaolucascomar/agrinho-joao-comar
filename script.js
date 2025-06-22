const data = {
  leite: [
    { title: "Criação", desc: "O leite é originado de propriedades rurais com manejo extensivo, semi-intensivo ou intensivo. Segundo o IBGE, o Brasil tem mais de 1,1 milhão de produtores de leite, de pequenas fazendas familiares a grandes complexos agropecuários.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-cow" },
    { title: "Ordenha", desc: "A ordenha mecanizada ou manual segue normas de higiene e qualidade. O leite é imediatamente refrigerado a 4°C em tanques-isotérmicos, conforme Instrução Normativa MAPA nº 76.", img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=400&q=60", icon: "fa-bucket" },
    { title: "Transporte", desc: "Caminhões-tanque isolados transportam o leite a 2–6°C até as indústrias em até 12 horas, garantindo integridade nutricional.", img: "https://images.unsplash.com/photo-1580910051070-3e06e1cde3b9?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" },
    { title: "Processamento", desc: "Nas indústrias, o leite passa por pasteurização (72°C×15s), homogeneização e envase asséptico em embalagens multilayer, seguindo padrões de segurança alimentar.", img: "https://images.unsplash.com/photo-1567016432779-6648bb680ec7?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Venda", desc: "O leite é distribuído a supermercados e pontos de venda refrigerados. O consumo per capita no Brasil é de cerca de 170 L/ano, segundo a Embrapa.", img: "https://images.unsplash.com/photo-1576765607921-e2b5b8d64eeb?auto=format&fit=crop&w=400&q=60", icon: "fa-store" }
  ],

  cafe: [
    { title: "Plantio", desc: "O café arábica começa com mudas cultivadas em viveiros protegidos antes de serem transferidas para o campo. As plantações exigem altitudes elevadas, solo bem drenado e climas amenos para desenvolver aroma e sabor próprios.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-seedling" },
    { title: "Colheita", desc: "A colheita é feita manualmente, selecionando apenas os frutos maduros. Essa prática garante qualidade uniforme dos grãos, já que cada fruto atinge a maturação em momentos diferentes.", img: "https://images.unsplash.com/photo-1527169402691-a4db788f8e9a?auto=format&fit=crop&w=400&q=60", icon: "fa-hand-paper" },
    { title: "Secagem", desc: "Após a colheita, os grãos são espalhados em terreiros ou estufas para reduzir a umidade até cerca de 11%. Esse processo deve ser lento e controlado para preservar as características do café.", img: "https://images.unsplash.com/photo-1517687136032-0e707753b8e1?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Torrefação", desc: "A torrefação transforma os grãos verdes em grãos aromáticos escuros. O calor intenso desenvolve sabores e reduz a acidez natural, resultado em um café pronto para moagem.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-mug-hot" },
    { title: "Comercialização", desc: "Depois de moído ou em grão, o café é embalado e segue para cafeterias, mercados e lojas online. Cada etapa, da fazenda ao consumidor, busca manter a identidade de origem do produto.", img: "https://images.unsplash.com/photo-1588767252825-7c7d20df49e0?auto=format&fit=crop&w=400&q=60", icon: "fa-mug-saucer" }
  ],

  soja: [
    { title: "Plantio", desc: "A soja é semeada em linhas organizadas para otimizar espaço e luz solar. Antes disso, o solo é corrigido com calcário e adubos para fornecer nutrientes essenciais às plantas.", img: "https://images.unsplash.com/photo-1559718060-45a2fa16b54b?auto=format&fit=crop&w=400&q=60", icon: "fa-seedling" },
    { title: "Proteção", desc: "Durante o cultivo, técnicos monitoram pragas e doenças. Quando necessário, aplicam defensivos de forma direcionada para proteger a lavoura sem causar danos ao meio ambiente.", img: "https://images.unsplash.com/photo-1509057199576-632a47484ece?auto=format&fit=crop&w=400&q=60", icon: "fa-bug" },
    { title: "Colheita", desc: "As máquinas de colheita são ajustadas para colher os grãos no ponto certo de umidade. Isso evita perdas e preserva a qualidade dos grãos antes do armazenamento.", img: "https://images.unsplash.com/photo-1527694224006-8a0420b6b0fa?auto=format&fit=crop&w=400&q=60", icon: "fa-tractor" },
    { title: "Processamento", desc: "Depois da colheita, a soja passa por limpeza e separação. O grão pode seguir para extração de óleo ou ser destinado à produção de farelo para ração animal.", img: "https://images.unsplash.com/photo-1579895791069-3af59f12b7b6?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Distribuição", desc: "Óleo e farelo são embalados e enviados por transporte rodoviário e ferroviário até indústrias e fábricas de ração, seguindo normas de armazenamento para manter a qualidade.", img: "https://images.unsplash.com/photo-1542838687-4d64d8a8ec1d?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" }
  ],

  carne_bovina: [
    { title: "Criação", desc: "O gado de corte é criado em pastagens e suplementos alimentares, seguindo práticas de manejo que visam o bem-estar e o ganho saudável de peso.", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=400&q=60", icon: "fa-cow" },
    { title: "Abate", desc: "Nos frigoríficos, os animais passam por avaliação de qualidade e são abatidos conforme normas sanitárias. O processo busca reduzir o estresse e garantir higiene.", img: "https://images.unsplash.com/photo-1576671083361-cfbb67fa4320?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Corte e Embalagem", desc: "As peças são cortadas segundo padrões de mercado, embaladas a vácuo e armazenadas em câmaras frias para manter características originais até o consumo.", img: "https://images.unsplash.com/photo-1572372491641-036d72d60eae?auto=format&fit=crop&w=400&q=60", icon: "fa-box" },
    { title: "Transporte", desc: "Caminhões refrigerados levam a carne até açougues e supermercados, mantendo temperatura controlada para preservar a qualidade sem aditivos desnecessários.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" },
    { title: "Consumo", desc: "O produto é distribuído a açougues, supermercados e restaurantes em todo o país. O consumo per capita de carne bovina no Brasil é de cerca de 37 kg/ano, segundo a ABIEC.", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=60", icon: "fa-store" }
  ],

  frango: [
    { title: "Criação", desc: "O frango de corte cresce em galpões controlados, com alimentação balanceada para desenvolver de forma uniforme e saudável.", img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=400&q=60", icon: "fa-egg" },
    { title: "Abate e Resfriamento", desc: "Após a insensibilização, a carcaça é resfriada rapidamente para reduzir a atividade bacteriana. Isso garante segurança alimentar sem processos artificiais.", img: "https://images.unsplash.com/photo-1571046814783-81cce8dfd9b0?auto=format&fit=crop&w=400&q=60", icon: "fa-drumstick-bite" },
    { title: "Processamento", desc: "O frango é desossado e cortado em partes, sendo embalado de forma prática para o consumidor. Métodos simples preservam sabor e valor nutricional.", img: "https://images.unsplash.com/photo-1540126651425-7bfaeeb3e23b?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Logística", desc: "Em câmaras frias, as peças são organizadas e enviadas com rastreamento básico para garantir que cheguem em boas condições.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" },
    { title: "Venda", desc: "O frango orienta consumidores quanto ao preparo, recomendando armazenamento em geladeira ou freezer conforme volume comprado.", img: "https://images.unsplash.com/photo-1553173545-1e90d54d4d4a?auto=format&fit=crop&w=400&q=60", icon: "fa-store" }
  ],

  erva_mate: [
    { title: "Cultivo", desc: "A erva-mate cresce em regiões subtropicais, com sombreamento natural que ajuda a preservar compostos benéficos.", img: "https://images.unsplash.com/photo-1524594157361-dbdc0f762cfa?auto=format&fit=crop&w=400&q=60", icon: "fa-seedling" },
    { title: "Colheita", desc: "Folhas maduras são coletadas manualmente para manter qualidade. Em seguida, passam por secagem para evitar mofo e preservar aroma característico.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-hand-paper" },
    { title: "Beneficiamento", desc: "Após secagem, a erva é triturada e classificada por tamanho. Esse processo define como será utilizada, seja para chimarrão ou chá mate.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Embalagem", desc: "Embalagens com barreira ao ar mantêm o sabor. Cada lote recebe identificação para rastrear origem e data de produção.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-box" },
    { title: "Distribuição", desc: "A erva-mate segue em caixas ventiladas até distribuidores regionais, garantindo chegada sem alterações no produto.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" }
  ],

  trigo: [
    { title: "Plantio", desc: "O trigo é semeado em áreas preparadas no outono, aproveitando chuvas para germinação. O solo recebe fertilizantes para garantir desenvolvimento consistente.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-wheat-awn" },
    { title: "Colheita", desc: "Combine harvesters percorrem os campos quando o grão atinge ponto de colheita, separando palha e grãos em uma única operação.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-tractor" },
    { title: "Moagem", desc: "Nos moinhos, o trigo passa por trituração em rolos até virar farinha. A moagem segue padrões para obter a granulação desejada.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Empacotamento", desc: "A farinha é acondicionada em sacos resistentes, prontos para uso na panificação e indústria alimentícia.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-box" },
    { title: "Distribuição", desc: "Carretas levam a farinha até padarias e fábricas, seguindo rotas que evitam umidade excessiva para manter qualidade.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=ccrop&w=400&q=60", icon: "fa-truck" }
  ],

  milho: [
    { title: "Plantio", desc: "O milho é plantado em linhas com espaçamento definido para favorecer a ventilação e exposição ao sol. O solo recebe nutrientes balanceados antes da semeadura.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-seedling" },
    { title: "Monitoramento", desc: "Drones e sensores verificam crescimento e detectam pragas logo no início. Ação rápida evita perdas sem uso excessivo de defensivos.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-magnifying-glass" },
    { title: "Colheita", desc: "Quando os grãos atingem umidade adequada, as colheitadeiras iniciam a colheita. Em seguida, o milho é seco para manter condições ideais de armazenamento.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-tractor" },
    { title: "Processamento", desc: "O milho pode virar fubá, ração ou ingredientes industriais. Cada uso passa por processamento simples, sem aditivos complexos.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-industry" },
    { title: "Logística", desc: "Grãos são armazenados em silos e enviados por rodovia ou ferrovia, respeitando padrões básicos de umidade e temperatura.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60", icon: "fa-truck" }
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