const data = {
  leite: [
    { 
      title: "Plantio",
      desc: "O leite começa com o cultivo das pastagens onde as vacas se alimentam.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-seedling"
    },
    { 
      title: "Colheita",
      desc: "As vacas são ordenhadas diariamente para colher o leite fresco.",
      img: "https://images.unsplash.com/photo-1564501048609-37b6ebf81a22?auto=format&fit=crop&w=400&q=60",
      icon: "fa-cow"
    },
    { 
      title: "Transporte",
      desc: "O leite é transportado em caminhões refrigerados até as indústrias.",
      img: "https://images.unsplash.com/photo-1587145907985-4e7db4a16820?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck"
    },
    { 
      title: "Mercado",
      desc: "Os produtos lácteos chegam aos supermercados e feiras para venda.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      icon: "fa-store"
    },
    { 
      title: "Consumo",
      desc: "O leite e derivados são consumidos pela população nas cidades.",
      img: "https://images.unsplash.com/photo-1510626176961-4b9c0d4af50a?auto=format&fit=crop&w=400&q=60",
      icon: "fa-cart-shopping"
    }
  ],
  cafe: [
    { 
      title: "Plantio",
      desc: "O café é plantado em regiões específicas do Paraná, com clima ideal.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
      icon: "fa-seedling"
    },
    { 
      title: "Colheita",
      desc: "A colheita do café é feita manualmente para garantir a qualidade.",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=60",
      icon: "fa-mug-hot"
    },
    { 
      title: "Transporte",
      desc: "Os grãos são transportados para torrefação e embalagem.",
      img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck"
    },
    { 
      title: "Mercado",
      desc: "O café embalado chega aos pontos de venda para o consumidor final.",
      img: "https://images.unsplash.com/photo-1486308510493-cb51a4b8f4ca?auto=format&fit=crop&w=400&q=60",
      icon: "fa-store"
    },
    { 
      title: "Consumo",
      desc: "O café é consumido nas cidades, em casas, cafés e restaurantes.",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=60",
      icon: "fa-mug-saucer"
    }
  ],
  soja: [
    { 
      title: "Plantio",
      desc: "A soja é plantada em extensas áreas de produção mecanizada.",
      img: "https://images.unsplash.com/photo-1622531581600-30b5e9c9e726?auto=format&fit=crop&w=400&q=60",
      icon: "fa-seedling"
    },
    { 
      title: "Colheita",
      desc: "Máquinas modernas colhem a soja no tempo certo da safra.",
      img: "https://images.unsplash.com/photo-1623265184215-d02c6593ee3b?auto=format&fit=crop&w=400&q=60",
      icon: "fa-combine-harvester"
    },
    { 
      title: "Transporte",
      desc: "A soja colhida é levada até as indústrias de processamento.",
      img: "https://images.unsplash.com/photo-1608462345039-7ec2a65c4d90?auto=format&fit=crop&w=400&q=60",
      icon: "fa-truck"
    },
    { 
      title: "Mercado",
      desc: "Parte da soja é exportada, outra parte é comercializada internamente.",
      img: "https://images.unsplash.com/photo-1567752886642-7b69f4c5c1ff?auto=format&fit=crop&w=400&q=60",
      icon: "fa-earth-americas"
    },
    { 
      title: "Consumo",
      desc: "Óleo, ração e outros produtos derivados são utilizados por consumidores e indústrias.",
      img: "https://images.unsplash.com/photo-1631943405653-60bdf1ac6b52?auto=format&fit=crop&w=400&q=60",
      icon: "fa-industry"
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