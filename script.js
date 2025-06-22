const data = {
  leite: [
    { title: "Criação", desc: "O leite é originado de propriedades rurais com manejo extensivo, semi-intensivo ou intensivo. Segundo o IBGE, o Brasil tem mais de 1,1 milhão de produtores de leite, de pequenas fazendas familiares a grandes complexos agropecuários.", img: "./imagens/leite/1.jfif", icon: "fa-cow" },
    { title: "Ordenha", desc: "A ordenha mecanizada ou manual segue normas de higiene e qualidade. O leite é imediatamente refrigerado a 4°C em tanques-isotérmicos, conforme Instrução Normativa MAPA nº 76.", img: "./imagens/leite/2.jpg", icon: "fa-bucket" },
    { title: "Transporte", desc: "Caminhões-tanque isolados transportam o leite a 2–6°C até as indústrias em até 12 horas, garantindo integridade nutricional.", img: "./imagens/leite/3.jfif", icon: "fa-truck" },
    { title: "Processamento", desc: "Nas indústrias, o leite passa por pasteurização (72°C×15s), homogeneização e envase asséptico em embalagens multilayer, seguindo padrões de segurança alimentar.", img: "./imagens/leite/4.jfif", icon: "fa-industry" },
    { title: "Venda", desc: "O leite é distribuído a supermercados e pontos de venda refrigerados. O consumo per capita no Brasil é de cerca de 170 L/ano, segundo a Embrapa.", img: "./imagens/leite/5.jfif", icon: "fa-store" }
  ],

  cafe: [
    { title: "Plantio", desc: "O café arábica começa com mudas cultivadas em viveiros protegidos antes de serem transferidas para o campo. As plantações exigem altitudes elevadas, solo bem drenado e climas amenos para desenvolver aroma e sabor próprios.", img: "./imagens/cafe/1", icon: "fa-seedling" },
    { title: "Colheita", desc: "A colheita é feita manualmente, selecionando apenas os frutos maduros. Essa prática garante qualidade uniforme dos grãos, já que cada fruto atinge a maturação em momentos diferentes.", img: "./imagens/cafe/2", icon: "fa-hand-paper" },
    { title: "Secagem", desc: "Após a colheita, os grãos são espalhados em terreiros ou estufas para reduzir a umidade até cerca de 11%. Esse processo deve ser lento e controlado para preservar as características do café.", img: "./imagens/cafe/3", icon: "fa-industry" },
    { title: "Torrefação", desc: "A torrefação transforma os grãos verdes em grãos aromáticos escuros. O calor intenso desenvolve sabores e reduz a acidez natural, resultado em um café pronto para moagem.", img: "./imagens/cafe/4", icon: "fa-mug-hot" },
    { title: "Comercialização", desc: "Depois de moído ou em grão, o café é embalado e segue para cafeterias, mercados e lojas online. Cada etapa, da fazenda ao consumidor, busca manter a identidade de origem do produto.", img: "./imagens/cafe/5", icon: "fa-mug-saucer" }
  ],

  soja: [
    { title: "Plantio", desc: "A soja é semeada em linhas organizadas para otimizar espaço e luz solar. Antes disso, o solo é corrigido com calcário e adubos para fornecer nutrientes essenciais às plantas.", img: "./imagens/soja/1", icon: "fa-seedling" },
    { title: "Proteção", desc: "Durante o cultivo, técnicos monitoram pragas e doenças. Quando necessário, aplicam defensivos de forma direcionada para proteger a lavoura sem causar danos ao meio ambiente.", img: "./imagens/soja/2", icon: "fa-bug" },
    { title: "Colheita", desc: "As máquinas de colheita são ajustadas para colher os grãos no ponto certo de umidade. Isso evita perdas e preserva a qualidade dos grãos antes do armazenamento.", img: "./imagens/soja/3", icon: "fa-tractor" },
    { title: "Processamento", desc: "Depois da colheita, a soja passa por limpeza e separação. O grão pode seguir para extração de óleo ou ser destinado à produção de farelo para ração animal.", img: "./imagens/soja/4", icon: "fa-industry" },
    { title: "Distribuição", desc: "Óleo e farelo são embalados e enviados por transporte rodoviário e ferroviário até indústrias e fábricas de ração, seguindo normas de armazenamento para manter a qualidade.", img: "./imagens/soja/5", icon: "fa-truck" }
  ],

  carne_bovina: [
    { title: "Criação", desc: "O gado de corte é criado em pastagens e suplementos alimentares, seguindo práticas de manejo que visam o bem-estar e o ganho saudável de peso.", img: "./imagens/carne_bovina/1", icon: "fa-cow" },
    { title: "Abate", desc: "Nos frigoríficos, os animais passam por avaliação de qualidade e são abatidos conforme normas sanitárias. O processo busca reduzir o estresse e garantir higiene.", img: "./imagens/carne_bovina/2", icon: "fa-industry" },
    { title: "Corte e Embalagem", desc: "As peças são cortadas segundo padrões de mercado, embaladas a vácuo e armazenadas em câmaras frias para manter características originais até o consumo.", img: "./imagens/carne_bovina/3", icon: "fa-box" },
    { title: "Transporte", desc: "Caminhões refrigerados levam a carne até açougues e supermercados, mantendo temperatura controlada para preservar a qualidade sem aditivos desnecessários.", img: "./imagens/carne_bovina/4", icon: "fa-truck" },
    { title: "Consumo", desc: "O produto é distribuído a açougues, supermercados e restaurantes em todo o país. O consumo per capita de carne bovina no Brasil é de cerca de 37 kg/ano, segundo a ABIEC.", img: "./imagens/carne_bovina/5", icon: "fa-store" }
  ],

  frango: [
    { title: "Criação", desc: "O frango de corte cresce em galpões controlados, com alimentação balanceada para desenvolver de forma uniforme e saudável.", img: "./imagens/frango/1", icon: "fa-egg" },
    { title: "Abate e Resfriamento", desc: "Após a insensibilização, a carcaça é resfriada rapidamente para reduzir a atividade bacteriana. Isso garante segurança alimentar sem processos artificiais.", img: "./imagens/frango/2", icon: "fa-drumstick-bite" },
    { title: "Processamento", desc: "O frango é desossado e cortado em partes, sendo embalado de forma prática para o consumidor. Métodos simples preservam sabor e valor nutricional.", img: "./imagens/frango/3", icon: "fa-industry" },
    { title: "Logística", desc: "Em câmaras frias, as peças são organizadas e enviadas com rastreamento básico para garantir que cheguem em boas condições.", img: "./imagens/frango/4", icon: "fa-truck" },
    { title: "Venda", desc: "O frango orienta consumidores quanto ao preparo, recomendando armazenamento em geladeira ou freezer conforme volume comprado.", img: "./imagens/frango/5", icon: "fa-store" }
  ],

  erva_mate: [
    { title: "Cultivo", desc: "A erva-mate cresce em regiões subtropicais, com sombreamento natural que ajuda a preservar compostos benéficos.", img: "./imagens/erva_mate/1", icon: "fa-seedling" },
    { title: "Colheita", desc: "Folhas maduras são coletadas manualmente para manter qualidade. Em seguida, passam por secagem para evitar mofo e preservar aroma característico.", img: "./imagens/erva_mate/2", icon: "fa-hand-paper" },
    { title: "Beneficiamento", desc: "Após secagem, a erva é triturada e classificada por tamanho. Esse processo define como será utilizada, seja para chimarrão ou chá mate.", img: "./imagens/erva_mate/3", icon: "fa-industry" },
    { title: "Embalagem", desc: "Embalagens com barreira ao ar mantêm o sabor. Cada lote recebe identificação para rastrear origem e data de produção.", img: "./imagens/erva_mate/4", icon: "fa-box" },
    { title: "Distribuição", desc: "A erva-mate segue em caixas ventiladas até distribuidores regionais, garantindo chegada sem alterações no produto.", img: "./imagens/erva_mate/5", icon: "fa-truck" }
  ],

  trigo: [
    { title: "Plantio", desc: "O trigo é semeado em áreas preparadas no outono, aproveitando chuvas para germinação. O solo recebe fertilizantes para garantir desenvolvimento consistente.", img: "./imagens/trigo/1", icon: "fa-wheat-awn" },
    { title: "Colheita", desc: "Combine harvesters percorrem os campos quando o grão atinge ponto de colheita, separando palha e grãos em uma única operação.", img: "./imagens/trigo/2", icon: "fa-tractor" },
    { title: "Moagem", desc: "Nos moinhos, o trigo passa por trituração em rolos até virar farinha. A moagem segue padrões para obter a granulação desejada.", img: "./imagens/trigo/3", icon: "fa-industry" },
    { title: "Empacotamento", desc: "A farinha é acondicionada em sacos resistentes, prontos para uso na panificação e indústria alimentícia.", img: "./imagens/trigo/4", icon: "fa-box" },
    { title: "Distribuição", desc: "Carretas levam a farinha até padarias e fábricas, seguindo rotas que evitam umidade excessiva para manter qualidade.", img: "./imagens/trigo/5", icon: "fa-truck" }
  ],

  milho: [
    { title: "Plantio", desc: "O milho é plantado em linhas com espaçamento definido para favorecer a ventilação e exposição ao sol. O solo recebe nutrientes balanceados antes da semeadura.", img: "./imagens/milho/1", icon: "fa-seedling" },
    { title: "Monitoramento", desc: "Drones e sensores verificam crescimento e detectam pragas logo no início. Ação rápida evita perdas sem uso excessivo de defensivos.", img: "./imagens/milho/2", icon: "fa-magnifying-glass" },
    { title: "Colheita", desc: "Quando os grãos atingem umidade adequada, as colheitadeiras iniciam a colheita. Em seguida, o milho é seco para manter condições ideais de armazenamento.", img: "./imagens/milho/3", icon: "fa-tractor" },
    { title: "Processamento", desc: "O milho pode virar fubá, ração ou ingredientes industriais. Cada uso passa por processamento simples, sem aditivos complexos.", img: "./imagens/milho/4", icon: "fa-industry" },
    { title: "Logística", desc: "Grãos são armazenados em silos e enviados por rodovia ou ferrovia, respeitando padrões básicos de umidade e temperatura.", img: "./imagens/milho/5", icon: "fa-truck" }
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