const logo = document.getElementById('logo');
const sideMenu = document.getElementById('side-menu');
logo.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

const typedTitleText = "Productos";
const typedTitleElement = document.getElementById("typed-title");
let titleIndex = 0;
function typeTitle() {
  if (titleIndex < typedTitleText.length) {
    typedTitleElement.textContent += typedTitleText.charAt(titleIndex);
    titleIndex++;
    setTimeout(typeTitle, 150);
  } else {
    typedTitleElement.style.borderRight = "none";
  }
}
window.addEventListener("load", typeTitle);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

let modalWasOpen = false;
const modal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalDetails = document.getElementById('modalDetails');
const modalProductVideo = document.getElementById('modalProductVideo');
const body = document.body;

const products = document.querySelectorAll('.producto');
products.forEach(product => {
  product.addEventListener('click', function() {
    const name = product.getAttribute('data-name');
    const videoSrc = product.getAttribute('data-video');
    
    if (name.toLowerCase().includes("kamino")) {
      modalDetails.innerHTML = `
          <h2>KAMINO y KAMINO FOR RETAIL</h2>
          <br>
          <h3>¿QUIERES PROBARLA? ¡ELIGE EL TUYO</h3>
          <br><br>
          <h4>KAMINO</h4>
          <p><strong>Script de agente – Guión Ideal para centralitas</strong></p>
          <p>El script de atención al cliente y soporte es una herramienta fácil de usar y editar para adaptarse a su área de soporte. Cree tickets de forma rápida y sencilla de forma totalmente automatizada y dinámica, sin perder ningún tipo de información, ya que cada recorrido del script queda registrado en el sistema, permitiéndole obtener indicadores clave de rendimiento y otras métricas importantes en tiempo real. Con este software, su servicio de atención al cliente alcanzará sin duda otro nivel. Póngase en contacto con nosotros y solicite una demostración, ¡se sorprenderá!</p>
          <br>
          <h4>KAMINO FOR RETAIL</h4>
          <p><strong>Script de agente – Guión Ideal para Ventas asistidas y cruzadas</strong></p>
          <p>El guión de venta asistida y venta cruzada es una herramienta fácil de usar, editar e integrar con su catálogo de productos. Ayude a sus vendedores a vender más y mejor, a la vez que ayuda a sus clientes a encontrar los mejores productos para sus necesidades. Kamino para Retail incluye un componente de gamificación, conseguido a través de un simulador de ventas por comisiones, que facilita y estimula una sana competitividad entre los vendedores. Con este software, su servicio venderá más y mejor, y tendrá una visión clara del análisis de sus KPI para predecir el mejor camino hacia el éxito. Póngase en contacto con nosotros y solicite una demostración ahora.</p>
          <br>
          <button class="open-form-inside" onclick="abrirFormularioDesdeModal()">¿Quieres probarla?</button>
      `;
    } else if (name.toLowerCase().includes("athena")) {
      modalDetails.innerHTML = `
          <h2>ATHENA - Asistente Virtual Inteligente</h2>
          <br>
          <h3>¿QUIERES PROBARLA? ¡VIVE UNA EXPERIENCIA DIGITAL AVANZADA!</h3>
          <br><br>
          <h4>ATHENA</h4>
          <p><strong>Asistente Virtual para Empresas</strong></p>
          <p>Athena es una asistente virtual basada en inteligencia artificial diseñada para ayudar a las empresas a automatizar la atención al cliente, mejorar la eficiencia operativa y reducir costos. Con Athena, los usuarios pueden interactuar de forma natural y obtener respuestas rápidas a preguntas frecuentes, gestionar citas y reservas, y recibir recomendaciones personalizadas. Además, Athena se adapta a las necesidades de cada empresa y está disponible las 24 horas del día, 7 días a la semana.</p>
          <br>
          <h4>Athena para Soporte al Cliente</h4>
          <p><strong>Asistencia instantánea – Guía proactiva para clientes</strong></p>
          <p>Además de su capacidad de atender consultas generales, Athena está equipada con herramientas avanzadas de análisis para detectar problemas recurrentes y ofrecer soluciones automáticas de manera proactiva. Esto le permite a las empresas reducir la carga de trabajo del equipo de soporte mientras mejora la experiencia del cliente.</p>
          <br>
          <button class="open-form-inside" onclick="abrirFormularioDesdeModal()">¿Quieres probarla?</button>
      `;
    } else if (name.toLowerCase().includes("orion")) {
      modalDetails.innerHTML = `
          <h2>ORION - Sistema de Análisis Avanzado</h2>
          <br>
          <h3>¿QUIERES PROBARLO? ¡TRANSFORMA TUS DATOS EN INFORMACIÓN VALIOSA!</h3>
          <br><br>
          <h4>ORION</h4>
          <p><strong>Sistema de análisis de datos para empresas</strong></p>
          <p>Orion es una plataforma de análisis de datos diseñada para ayudar a las empresas a tomar decisiones basadas en datos. Con su capacidad de integrar y analizar grandes volúmenes de datos, Orion proporciona información en tiempo real que permite a las empresas optimizar sus operaciones, reducir costos y mejorar la toma de decisiones estratégicas. Además, Orion ofrece informes detallados, paneles interactivos y visualizaciones intuitivas que hacen que los datos sean fáciles de interpretar.</p>
          <br>
          <h4>Orion para Inteligencia Empresarial</h4>
          <p><strong>Visualización avanzada de datos y predicción de tendencias</strong></p>
          <p>Orion no solo proporciona informes, sino que también utiliza algoritmos de predicción para anticipar tendencias de mercado y comportamiento del consumidor. Esto permite a las empresas planificar con anticipación y tomar decisiones proactivas que mejoren su competitividad.</p>
          <br>
          <button class="open-form-inside" onclick="abrirFormularioDesdeModal()">¿Quieres probarlo?</button>
      `;
    } else if (name.toLowerCase().includes("helix")) {
      modalDetails.innerHTML = `
          <h2>HELIX - Plataforma de Automación de Procesos</h2>
          <br>
          <h3>¿QUIERES PROBARLA? ¡REVOLUCIONA TU EMPRESA AHORA!</h3>
          <br><br>
          <h4>HELIX</h4>
          <p><strong>Automatización de procesos empresariales</strong></p>
          <p>Helix es una plataforma de automatización diseñada para simplificar y agilizar los procesos internos de las empresas. Con Helix, puedes automatizar tareas repetitivas, como la gestión de correos electrónicos, la programación de citas, la facturación y mucho más. Esto reduce el tiempo que el personal dedica a tareas administrativas, lo que les permite centrarse en actividades de mayor valor estratégico.</p>
          <br>
          <h4>Helix para Optimización de Recursos</h4>
          <p><strong>Automatización de procesos comerciales y administrativos</strong></p>
          <p>Helix integra herramientas de análisis y reportes que permiten a las empresas medir el impacto de la automatización en la productividad. Con su interfaz amigable, las empresas pueden configurar flujos de trabajo personalizados que se adapten a sus necesidades específicas, optimizando la eficiencia de cada área del negocio.</p>
          <br>
          <button class="open-form-inside" onclick="abrirFormularioDesdeModal()">¿Quieres probarla?</button>
      `;
    } else if (name.toLowerCase().includes("nova")) {
      modalDetails.innerHTML = `
          <h2>NOVA - Plataforma de Innovación Empresarial</h2>
          <br>
          <h3>¿QUIERES PROBARLA? ¡INNOVA Y LIDERA EL MERCADO!</h3>
          <br><br>
          <h4>NOVA</h4>
          <p><strong>Plataforma para la creación de nuevos productos y servicios</strong></p>
          <p>Nova es una plataforma de innovación empresarial que permite a las organizaciones crear nuevos productos y servicios de manera rápida y eficiente. Con herramientas de colaboración en línea, análisis de tendencias de mercado y simulaciones de producto, Nova permite a las empresas reducir el tiempo de desarrollo y minimizar los riesgos asociados con la innovación.</p>
          <br>
          <h4>Nova para Startups</h4>
          <p><strong>Transformación digital y optimización de procesos creativos</strong></p>
          <p>Nova está especialmente diseñada para startups que buscan un enfoque ágil y flexible para el desarrollo de sus productos. Ofrece herramientas para realizar pruebas de concepto, iteraciones rápidas y validación de ideas de mercado.</p>
          <br>
          <button class="open-form-inside" onclick="abrirFormularioDesdeModal()">¿Quieres probarla?</button>
      `;
    } else if (name.toLowerCase().includes("vortex")) {
      modalDetails.innerHTML = `
          <h2>VORTEX - Plataforma de Seguridad Cibernética</h2>
          <br>
          <h3>¿QUIERES PROBARLA? ¡PROTEGE TU NEGOCIO AHORA!</h3>
          <br><br>
          <h4>VORTEX</h4>
          <p><strong>Plataforma integral de seguridad cibernética</strong></p>
          <p>Vortex es una plataforma avanzada de seguridad cibernética que protege a las empresas contra amenazas digitales. Con funcionalidades como la detección de intrusiones, análisis de vulnerabilidades y monitoreo en tiempo real, Vortex garantiza que los datos sensibles de la empresa estén seguros. Además, Vortex ofrece herramientas de formación y simulación de ataques cibernéticos para educar a los empleados en mejores prácticas de seguridad.</p>
          <br>
          <h4>Vortex para Empresas</h4>
          <p><strong>Defensa proactiva contra ataques cibernéticos</strong></p>
          <p>Vortex proporciona análisis predictivo que identifica posibles brechas de seguridad antes de que ocurran, permitiendo a las empresas tomar medidas preventivas. También integra herramientas de respuesta ante incidentes que ayudan a las empresas a mitigar los daños en caso de un ataque.</p>
          <br>
          <button class="open-form-inside" onclick="abrirFormularioDesdeModal()">¿Quieres probarla?</button>
      `;
    } else if (name.toLowerCase().includes("quantum")) {
      modalDetails.innerHTML = `
          <h2>QUANTUM - Inteligencia Predictiva</h2>
          <br>
          <h3>¿QUIERES PROBARLA? ¡ANTICIPA EL FUTURO AHORA!</h3>
          <br><br>
          <h4>QUANTUM</h4>
          <p><strong>Solución de inteligencia predictiva para empresas</strong></p>
          <p>Quantum es una plataforma avanzada de inteligencia predictiva que utiliza algoritmos de aprendizaje automático para predecir tendencias y comportamientos futuros. Con Quantum, las empresas pueden anticipar cambios en el mercado, adaptarse a las demandas de los clientes y tomar decisiones estratégicas informadas basadas en datos predictivos.</p>
          <br>
          <h4>Quantum para Estrategias de Negocios</h4>
          <p><strong>Optimización de la toma de decisiones y análisis predictivo</strong></p>
          <p>Quantum analiza grandes volúmenes de datos históricos para identificar patrones y prever el comportamiento futuro de los consumidores, ayudando a las empresas a diseñar estrategias comerciales más efectivas. Además, ofrece herramientas de simulación para probar diferentes escenarios y evaluar los posibles resultados.</p>
          <br>
          <button class="open-form-inside" onclick="abrirFormularioDesdeModal()">¿Quieres probarla?</button>
      `;
    } else if (name.toLowerCase().includes("eclipse")) {
      modalDetails.innerHTML = `
          <h2>ECLIPSE - Gestión Integral</h2>
          <br>
          <h3>¿QUIERES PROBARLA? ¡OPTIMIZA TU NEGOCIO AHORA!</h3>
          <br><br>
          <h4>ECLIPSE</h4>
          <p><strong>Plataforma de gestión empresarial todo-en-uno</strong></p>
          <p>Eclipse es una plataforma de gestión integral que conecta todos los aspectos operativos de una empresa, desde la administración de recursos humanos hasta la gestión de inventarios y la contabilidad. Con Eclipse, las empresas pueden automatizar y optimizar procesos, mejorar la eficiencia operativa y obtener informes en tiempo real.</p>
          <br>
          <h4>Eclipse para Empresas</h4>
          <p><strong>Gestión eficiente de recursos y operaciones</strong></p>
          <p>Eclipse ofrece un panel centralizado que permite a los administradores gestionar todos los aspectos del negocio de manera sencilla. Además, la plataforma cuenta con integración con sistemas externos, lo que facilita la sincronización de datos y mejora la toma de decisiones.</p>
          <br>
          <button class="open-form-inside" onclick="abrirFormularioDesdeModal()">¿Quieres probarla?</button>
      `;
    }
    
    modalProductVideo.querySelector('source').src = videoSrc;
    modalProductVideo.load();
    modal.classList.add('open');
    body.style.overflow = 'hidden';
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('open');
  body.style.overflow = '';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    body.style.overflow = '';
  }
});

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 150) {
      section.classList.add('visible');
    }
  });
});


const overlayForm = document.getElementById("overlay-form");
function mostrarFormulario() {
  if (modal.classList.contains('open')) {
    modalWasOpen = true;
    modal.classList.remove('open');
  } else {
    modalWasOpen = false;
  }
  overlayForm.classList.add("open");
}

function abrirFormularioDesdeModal() {
  modalWasOpen = true;
  modal.classList.remove("open");
  overlayForm.classList.add("open");
}

function fecharFormulario() {
  overlayForm.classList.remove("open");
  if (modalWasOpen) {
    setTimeout(() => {
      modal.classList.add("open");
    }, 0);
  }
}

const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselContainer = document.getElementById('productsCarousel');

carouselPrev.addEventListener('click', () => {
carouselContainer.scrollBy({
left: -300, 
behavior: 'smooth'
});
});


carouselNext.addEventListener('click', () => {
carouselContainer.scrollBy({
left: 300, 
behavior: 'smooth'
});
});
