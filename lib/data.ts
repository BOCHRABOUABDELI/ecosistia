export type AppStatus = "demo-funcional" | "disponible" | "en-desarrollo"

export type Sector =
  | "Salud y Medicina"
  | "Legal y Juridico"
  | "Finanzas y Banca"
  | "Archivos y Documentacion"
  | "Prevencion y Seguridad"
  | "Administracion Publica"
  | "Automatizacion y Bots"
  | "Industria y Mantenimiento"
  | "Forense y Pericial"
  | "Reformas y Construccion"
  | "CRM y Ventas"

export type AppIconName =
  | "ClipboardList"
  | "ShieldCheck"
  | "HeartPulse"
  | "Building2"
  | "TrendingUp"
  | "Scale"
  | "Wrench"
  | "Bot"
  | "FileSearch"
  | "HardHat"
  | "Users"

export interface AppItem {
  slug: string
  name: string
  subtitle: string
  description: string
  status: AppStatus
  sector: Sector
  icon: AppIconName
  iconColor: string
  image: string
  tags: string[]
  features: string[]
  problem: string
  audience: string
  allIntegrations: string[]
  demoUrl?: string
  seoContent: {
    heading: string
    paragraphs: string[]
  }
}

export const sectors: Sector[] = [
  "Salud y Medicina",
  "Legal y Juridico",
  "Finanzas y Banca",
  "Archivos y Documentacion",
  "Prevencion y Seguridad",
  "Administracion Publica",
  "Automatizacion y Bots",
  "Industria y Mantenimiento",
  "Forense y Pericial",
  "Reformas y Construccion",
  "CRM y Ventas",
]

export const apps: AppItem[] = [
  {
    slug: "archivo-historico",
    name: "Archivo Historico",
    subtitle: "Digitalizacion inteligente y gestion documental avanzada",
    description:
      "Plataforma a medida para modernizar la gestion del archivo historico, con enfoque en automatizacion y preservacion digital.",
    status: "demo-funcional",
    demoUrl: "https://courageous-lokum-e2303c.netlify.app/",
    sector: "Archivos y Documentacion",
    icon: "ClipboardList",
    iconColor: "bg-emerald-500",
    image: "/apps/archivo-historico.jpg",
    tags: ["OCR Avanzado", "Machine Learning", "Procesamiento de Lenguaje Natural", "Document AI"],
    features: [
      "OCR avanzado para texto manuscrito y lenguas antiguas",
      "Clasificacion automatica y deteccion de duplicados",
      "Indexacion semantica de contenidos historicos",
      "Busqueda inteligente por contexto y epoca",
      "Exportacion a formatos estandar de archivistica",
    ],
    problem:
      "Los archivos historicos enfrentan deterioro fisico, dificultad de acceso y riesgo de perdida de informacion valiosa al no estar digitalizados correctamente.",
    audience:
      "Instituciones publicas, universidades, museos, bibliotecas y entidades con fondos documentales historicos.",
    allIntegrations: ["OCR Avanzado", "Machine Learning", "Procesamiento de Lenguaje Natural", "Document AI"],
    seoContent: {
      heading: "Software de digitalizacion de archivos historicos con inteligencia artificial",
      paragraphs: [
        "La digitalizacion de archivos historicos es uno de los mayores retos para instituciones publicas, universidades, museos y bibliotecas. Los fondos documentales historicos sufren deterioro fisico progresivo y, sin una estrategia de preservacion digital, se arriesga la perdida irreversible de informacion de alto valor cultural, academico y patrimonial. La tecnologia OCR tradicional no es suficiente para documentos manuscritos, lenguas antiguas o soportes degradados.",
        "Nuestra plataforma de gestion de archivos historicos con IA utiliza modelos de reconocimiento optico de caracteres (OCR) avanzado combinados con procesamiento de lenguaje natural (NLP) para transcribir, clasificar e indexar automaticamente documentos de cualquier epoca y formato. El sistema detecta duplicados, organiza fondos por contexto historico y permite busquedas semanticas que van mas alla de las palabras clave tradicionales.",
        "Ecosistia ha desarrollado este software de digitalizacion documental para instituciones que gestionan miles o millones de documentos fisicos. El resultado es un archivo digital accesible, organizado y consultable en segundos, con exportacion a formatos estandar de archivistica como EAD, Dublin Core y METS. Todo por un precio cerrado de 899 EUR, con entrega del prototipo funcional en 5 dias.",
        "Si tu institucion necesita digitalizar fondos historicos, automatizar la catalogacion documental o crear un repositorio digital accesible al publico, Ecosistia es la solucion de inteligencia artificial mas asequible y especializada del mercado. Solicita una consulta gratuita y te mostramos como podemos adaptar esta tecnologia a tu caso particular.",
      ],
    },
  },
  {
    slug: "gestion-riesgos-laborales",
    name: "Gestion de Riesgos Laborales",
    subtitle: "Automatizacion documental para cumplimiento normativo en PRL",
    description:
      "Plataforma para consultoras de PRL y empresas multisede que necesitan organizar documentacion y cumplir requerimientos legales.",
    status: "demo-funcional",
    demoUrl: "https://rad-souffle-ddfc8b.netlify.app/",
    sector: "Prevencion y Seguridad",
    icon: "ShieldCheck",
    iconColor: "bg-emerald-500",
    image: "/apps/gestion-riesgos-laborales.jpg",
    tags: ["Document AI", "Automated Compliance", "Alert Systems", "Risk Assessment"],
    features: [
      "Gestion de multiples empresas y centros",
      "Procesamiento automatico con IA",
      "Control de caducidades y renovaciones",
      "Generacion automatica de informes normativos",
      "Alertas inteligentes de cumplimiento",
    ],
    problem:
      "Las empresas multisede luchan con el control documental de PRL, arriesgando sanciones y poniendo en peligro la seguridad de los trabajadores.",
    audience:
      "Consultoras de prevencion de riesgos laborales, empresas multisede, departamentos de RRHH y seguridad laboral.",
    allIntegrations: ["Document AI", "Automated Compliance", "Alert Systems", "Risk Assessment"],
    seoContent: {
      heading: "Software de prevencion de riesgos laborales con inteligencia artificial",
      paragraphs: [
        "La gestion de la prevencion de riesgos laborales (PRL) en empresas multisede es un desafio constante. La normativa exige tener al dia evaluaciones de riesgos, planes de emergencia, certificados de formacion y documentacion especifica para cada centro de trabajo. Un solo documento caducado puede suponer sanciones de miles de euros y, lo que es mas grave, poner en riesgo la seguridad de los trabajadores.",
        "Nuestra plataforma de gestion de PRL con IA automatiza el ciclo completo de la documentacion preventiva. El sistema procesa automaticamente los documentos entrantes, extrae la informacion relevante mediante inteligencia artificial, detecta caducidades y envia alertas inteligentes antes de que se produzcan incumplimientos. Ademas, genera informes normativos automaticos listos para inspeccion.",
        "Este software de prevencion de riesgos laborales esta disenado para consultoras de PRL que gestionan decenas o cientos de empresas, asi como para departamentos de RRHH y seguridad laboral de companias multisede. La IA clasifica, organiza y monitoriza toda la documentacion de cada centro de trabajo de forma centralizada, reduciendo hasta un 70% el tiempo dedicado a tareas administrativas.",
        "Ecosistia desarrolla esta solucion de cumplimiento normativo automatizado por un precio cerrado de 899 EUR. Si tu consultora de PRL pierde horas en gestion documental o tu empresa necesita un sistema centralizado de control de riesgos laborales, solicita una demo gratuita y descubre como la inteligencia artificial puede transformar tu operativa preventiva.",
      ],
    },
  },
  {
    slug: "triaje-urgencias",
    name: "Sistema de Triaje para Urgencias",
    subtitle: "Clasificacion automatizada de pacientes con asistencia por IA",
    description:
      "Sistema para mejorar eficiencia en urgencias con flujos diferenciados para pacientes, enfermeria, medicos y administradores.",
    status: "demo-funcional",
    demoUrl: "https://eloquent-alpaca-feddc0.netlify.app/",
    sector: "Salud y Medicina",
    icon: "HeartPulse",
    iconColor: "bg-rose-500",
    image: "/apps/triaje-urgencias.jpg",
    tags: ["Medical AI", "Speech Recognition", "Predictive Analytics", "Clinical NLP"],
    features: [
      "Transcripcion automatica de entrevistas",
      "Asistente IA para sugerencias medicas",
      "Clasificacion por niveles de urgencia",
      "Panel en tiempo real para enfermeria y medicos",
      "Historial clinico integrado con IA",
    ],
    problem:
      "Los servicios de urgencias sufren tiempos de espera excesivos y errores de clasificacion que afectan la atencion al paciente.",
    audience:
      "Hospitales, clinicas de urgencias, centros de salud y servicios de emergencia sanitaria.",
    allIntegrations: ["Medical AI", "Speech Recognition", "Predictive Analytics", "Clinical NLP"],
    seoContent: {
      heading: "Sistema de triaje inteligente para urgencias hospitalarias con IA",
      paragraphs: [
        "Los servicios de urgencias hospitalarias atienden miles de pacientes al mes bajo presion extrema. Los errores en la clasificacion del triaje pueden provocar retrasos criticos en la atencion de pacientes graves o saturar recursos con casos de baja prioridad. El triaje manual, basado exclusivamente en la experiencia del personal, es inconsistente y dificil de escalar en momentos de alta demanda.",
        "Nuestro sistema de triaje con inteligencia artificial asiste al personal sanitario en la clasificacion de pacientes mediante transcripcion automatica de entrevistas clinicas, analisis de sintomas con NLP clinico y sugerencias de nivel de urgencia basadas en modelos predictivos entrenados con datos medicos reales. El sistema no sustituye al profesional: le proporciona una segunda opinion inteligente en tiempo real.",
        "La plataforma incluye paneles diferenciados para pacientes, enfermeria, medicos y administradores, con actualizacion en tiempo real del estado de la sala de urgencias. El historial clinico se integra automaticamente, reduciendo la duplicacion de datos y acelerando la toma de decisiones. Los hospitales que implementan sistemas de triaje con IA reportan mejoras de hasta un 35% en los tiempos de clasificacion.",
        "Ecosistia ha desarrollado esta solucion de IA para hospitales y centros de urgencias por un precio cerrado de 899 EUR. Si tu servicio de urgencias necesita mejorar la eficiencia del triaje, reducir errores de clasificacion o monitorizar la sala en tiempo real, contacta con nosotros para una demostracion gratuita del sistema.",
      ],
    },
  },
  {
    slug: "gestion-penitenciaria",
    name: "Sistema de Gestion Penitenciaria",
    subtitle: "Plataforma inteligente para administracion de centros penitenciarios",
    description:
      "Solucion avanzada para optimizar gestion de instituciones penitenciarias con enfoque en seguridad y reinsercion.",
    status: "demo-funcional",
    demoUrl: "https://rad-cannoli-070883.netlify.app/",
    sector: "Administracion Publica",
    icon: "Building2",
    iconColor: "bg-foreground",
    image: "/apps/gestion-penitenciaria.jpg",
    tags: ["Predictive Analytics", "Risk Assessment", "Behavioral Analysis", "Security AI"],
    features: [
      "Analisis predictivo y recomendaciones IA",
      "Perfilado de internos y evaluacion de riesgo",
      "Gestion de programas de reinsercion",
      "Control de accesos y seguridad inteligente",
      "Informes automaticos para autoridades",
    ],
    problem:
      "La gestion de centros penitenciarios requiere coordinar seguridad, reinsercion y administracion con recursos limitados y alta complejidad.",
    audience:
      "Instituciones penitenciarias, administraciones publicas de justicia y organismos de reinsercion social.",
    allIntegrations: ["Predictive Analytics", "Risk Assessment", "Behavioral Analysis", "Security AI"],
    seoContent: {
      heading: "Software de gestion penitenciaria con inteligencia artificial",
      paragraphs: [
        "La administracion de centros penitenciarios es una de las tareas mas complejas de la administracion publica. Coordinar la seguridad, la reinsercion social, la gestion de programas formativos y el control de accesos con recursos limitados requiere herramientas que vayan mas alla de las hojas de calculo y los sistemas legacy de hace decadas.",
        "Nuestro sistema de gestion penitenciaria con IA integra analisis predictivo para evaluar el riesgo de cada interno, deteccion de patrones de comportamiento, gestion automatizada de programas de reinsercion y generacion de informes para autoridades judiciales y penitenciarias. La inteligencia artificial no toma decisiones por los profesionales, sino que les proporciona datos objetivos y tendencias para mejorar la toma de decisiones.",
        "La plataforma permite perfilar internos de forma individualizada, hacer seguimiento de su evolucion, planificar actividades de reinsercion y controlar accesos de forma inteligente. Los centros que implementan sistemas de gestion con IA mejoran la eficiencia administrativa y pueden dedicar mas recursos a lo verdaderamente importante: la reinsercion y la seguridad.",
        "Ecosistia desarrolla soluciones de inteligencia artificial para la administracion publica por un precio cerrado de 899 EUR. Si tu institucion penitenciaria necesita modernizar su gestion, mejorar la evaluacion de riesgos o automatizar la generacion de informes, solicita una consulta gratuita y te mostramos como podemos ayudarte.",
      ],
    },
  },
  {
    slug: "gestion-hipotecaria",
    name: "Plataforma de Gestion Hipotecaria",
    subtitle: "Digitalizacion integral del proceso hipotecario con IA",
    description:
      "Aplicacion para profesionales hipotecarios con gestion centralizada del ciclo completo de tramitacion.",
    status: "demo-funcional",
    demoUrl: "https://funny-syrniki-b1bae1.netlify.app/",
    sector: "Finanzas y Banca",
    icon: "TrendingUp",
    iconColor: "bg-emerald-500",
    image: "/apps/gestion-hipotecaria.jpg",
    tags: ["Financial AI", "Risk Analysis", "Automated Calculations", "Document Processing"],
    features: [
      "Analisis de viabilidad con IA en tiempo real",
      "Recomendacion automatica del banco optimo",
      "Gestion documental del expediente completo",
      "Seguimiento de estado de tramitaciones",
      "Calculadora inteligente de condiciones",
    ],
    problem:
      "Los profesionales hipotecarios manejan procesos complejos con multiples bancos, documentos y plazos que generan errores y retrasos.",
    audience:
      "Intermediarios financieros, brokers hipotecarios, asesores bancarios y entidades financieras.",
    allIntegrations: ["Financial AI", "Risk Analysis", "Automated Calculations", "Document Processing"],
    seoContent: {
      heading: "Plataforma de gestion hipotecaria con inteligencia artificial para brokers y asesores",
      paragraphs: [
        "El proceso hipotecario es uno de los mas complejos del sector financiero. Los intermediarios hipotecarios y brokers deben gestionar simultaneamente decenas de expedientes, comparar condiciones de multiples bancos, recopilar documentacion de clientes y cumplir plazos estrictos. Un error o un retraso puede significar la perdida de la operacion y del cliente.",
        "Nuestra plataforma de gestion hipotecaria con IA centraliza todo el ciclo de tramitacion: desde el primer contacto con el cliente hasta la firma ante notario. La inteligencia artificial analiza la viabilidad de cada operacion en tiempo real, recomienda automaticamente el banco con mejores condiciones para cada perfil y gestiona toda la documentacion del expediente con extraccion automatica de datos.",
        "El sistema incluye calculadoras inteligentes de condiciones, seguimiento del estado de cada tramitacion, alertas de plazos y un panel de control con metricas de conversion y productividad. Los brokers hipotecarios que utilizan herramientas de IA reportan un aumento de hasta un 40% en el numero de operaciones cerradas al mes, gracias a la eliminacion de tareas manuales repetitivas.",
        "Ecosistia desarrolla esta solucion de fintech con IA por un precio cerrado de 899 EUR. Si eres intermediario financiero, broker hipotecario o asesor bancario y quieres digitalizar tu operativa, solicita una demostracion gratuita y descubre como la inteligencia artificial puede multiplicar tu productividad.",
      ],
    },
  },
  {
    slug: "gestion-despachos",
    name: "Plataforma de Gestion de Despachos",
    subtitle: "Administracion juridica integral con IA legal",
    description:
      "Aplicacion para modernizar gestion de despachos juridicos con automatizacion documental y analisis legal asistido por IA.",
    status: "demo-funcional",
    demoUrl: "https://golden-druid-2181e0.netlify.app/",
    sector: "Legal y Juridico",
    icon: "Scale",
    iconColor: "bg-foreground",
    image: "/apps/gestion-despachos.jpg",
    tags: ["Legal AI", "Document Classification", "Contract Analysis", "NLP"],
    features: [
      "Clasificador automatico de documentos",
      "Analisis de contratos y deteccion de problemas",
      "Gestion de expedientes y plazos",
      "Busqueda jurisprudencial con IA",
      "Generacion automatica de escritos",
    ],
    problem:
      "Los despachos juridicos pierden horas en gestion administrativa, busqueda de jurisprudencia y revision manual de documentos.",
    audience:
      "Despachos de abogados, asesorias juridicas, departamentos legales de empresas y notarias.",
    allIntegrations: ["Legal AI", "Document Classification", "Contract Analysis", "NLP"],
    seoContent: {
      heading: "Software de gestion de despachos de abogados con inteligencia artificial",
      paragraphs: [
        "Los despachos de abogados y asesorias juridicas dedican entre el 30% y el 50% de su tiempo a tareas administrativas: busqueda de jurisprudencia, revision manual de contratos, gestion de plazos procesales y redaccion de escritos repetitivos. Este tiempo no facturable reduce la rentabilidad del despacho y limita la capacidad de captar nuevos clientes.",
        "Nuestra plataforma de gestion juridica con IA automatiza las tareas que mas tiempo consumen. El clasificador automatico de documentos organiza toda la documentacion entrante por tipo, cliente y expediente. El analizador de contratos detecta clausulas problematicas, incoherencias y riesgos legales en segundos. La busqueda jurisprudencial con IA encuentra sentencias relevantes utilizando comprension semantica, no solo coincidencia de palabras clave.",
        "El sistema tambien incluye gestion completa de expedientes con alertas de plazos procesales, generacion automatica de escritos basada en plantillas inteligentes y un panel de productividad que muestra metricas clave del despacho. Los despachos que implementan tecnologia de IA legal reportan una reduccion de hasta un 60% en el tiempo dedicado a tareas administrativas.",
        "Ecosistia es la opcion mas asequible para que tu despacho de abogados acceda a la inteligencia artificial. Por un precio cerrado de 899 EUR desarrollamos una plataforma adaptada a tu practica juridica. Si quieres automatizar la gestion documental, acelerar la busqueda juridica o mejorar el control de expedientes, solicita una consulta gratuita.",
      ],
    },
  },
  {
    slug: "gestion-sat-hidraer",
    name: "Sistema Inteligente de Gestion SAT",
    subtitle: "Plataforma inteligente para servicios de asistencia tecnica industrial",
    description:
      "Plataforma inteligente para gestionar servicios tecnicos, avisos, partes de trabajo, tecnicos, clientes y mantenimiento, con automatizacion y apoyo de IA.",
    status: "demo-funcional",
    demoUrl: "https://hidraer-sat-ai-maint-4zrp.bolt.host/",
    sector: "Industria y Mantenimiento",
    icon: "Wrench",
    iconColor: "bg-sky-600",
    image: "/apps/gestion-sat-hidraer.jpg",
    tags: ["Predictive Maintenance", "IoT Integration", "Workflow Automation", "Field Service AI"],
    features: [
      "Gestion completa de avisos y partes de trabajo",
      "Planificacion y asignacion de tecnicos",
      "IA para clasificar y priorizar incidencias",
      "Panel de control para responsables de SAT",
      "Uso en oficina y en movilidad por tecnicos en campo",
    ],
    problem:
      "Las empresas industriales gestionan avisos y partes de forma manual y desordenada, con errores en asignacion, falta de trazabilidad y tiempos de respuesta lentos.",
    audience:
      "Empresas industriales con servicio tecnico propio, fabricantes de maquinaria, empresas de mantenimiento industrial e instalaciones tecnicas.",
    allIntegrations: ["Predictive Maintenance", "IoT Integration", "Workflow Automation", "Field Service AI"],
    seoContent: {
      heading: "Software de gestion SAT y mantenimiento industrial con inteligencia artificial",
      paragraphs: [
        "Las empresas industriales con servicio de asistencia tecnica (SAT) gestionan cientos de avisos, partes de trabajo e intervenciones cada mes. Hacerlo con hojas de calculo, WhatsApp o sistemas obsoletos genera errores de asignacion, perdida de trazabilidad, tiempos de respuesta lentos y tecnicos que no tienen acceso a la informacion que necesitan en campo.",
        "Nuestra plataforma inteligente de gestion SAT digitaliza todo el ciclo de servicio tecnico: recepcion de avisos, clasificacion y priorizacion con IA, asignacion automatica de tecnicos segun disponibilidad y ubicacion, generacion de partes de trabajo digitales y cierre de intervenciones con firma electronica. Todo accesible desde oficina y desde el movil del tecnico en campo.",
        "La inteligencia artificial del sistema clasifica automaticamente las incidencias por tipo y urgencia, sugiere el tecnico mas adecuado para cada aviso y detecta patrones que permiten anticipar averias recurrentes (mantenimiento predictivo). El panel de control muestra en tiempo real el estado de todos los avisos, la carga de trabajo de cada tecnico y metricas de eficiencia del servicio.",
        "Ecosistia desarrolla este software de gestion de servicio tecnico por un precio cerrado de 899 EUR, con entrega funcional en 2-12 semanas. Si tu empresa industrial necesita digitalizar la gestion del SAT, mejorar los tiempos de respuesta o dar herramientas moviles a tus tecnicos de campo, solicita una demostracion gratuita.",
      ],
    },
  },
  {
    slug: "valeria-asistente-ia",
    name: "ValerIA - Asistente Inteligente",
    subtitle: "Asistente con inteligencia artificial para automatizar tu empresa",
    description:
      "ValerIA es una aplicacion de inteligencia artificial disenada para convertirse en el asistente digital de tu empresa. Permite automatizar tareas repetitivas, responder preguntas de clientes o empleados, analizar documentos, generar contenido y apoyar la toma de decisiones en el dia a dia del negocio.",
    status: "demo-funcional",
    demoUrl: "https://www.valer4ia.com/wp-content/ValeriaApp/1_0_1/index.html?1",
    sector: "Automatizacion y Bots",
    icon: "Bot",
    iconColor: "bg-accent",
    image: "/apps/valeria-asistente.jpg",
    tags: ["Asistente IA", "Chatbot Empresarial", "NLP", "Automatizacion", "LLM"],
    features: [
      "Asistente conversacional con IA para empresa",
      "Respuesta automatica a consultas de clientes o empleados",
      "Generacion y resumen de textos y documentos",
      "Busqueda inteligente de informacion interna",
      "Apoyo a tareas administrativas y operativas",
      "Analisis de informacion y ayuda en la toma de decisiones",
      "Configuracion por roles y tipos de usuario",
      "Personalizacion segun el negocio y el sector",
      "Integracion con CRMs, ERPs, bases de datos y herramientas internas",
      "Escalable desde chatbot simple hasta asistente avanzado conectado a procesos",
    ],
    problem:
      "Las empresas pierden horas buscando informacion, respondiendo consultas repetitivas y realizando tareas administrativas manuales. Sin un asistente inteligente, el conocimiento queda disperso y los equipos no aprovechan el potencial de la IA en su operativa diaria.",
    audience:
      "Empresas que quieren un asistente con IA propio, equipos de atencion al cliente, departamentos administrativos y comerciales, y negocios con mucha documentacion o procesos repetitivos que buscan integrar IA sin proyectos complejos.",
    allIntegrations: ["Asistente IA", "NLP", "LLM", "CRM Integration", "ERP Integration", "Knowledge Base", "Workflow Automation"],
    seoContent: {
      heading: "Asistente virtual con inteligencia artificial para empresas",
      paragraphs: [
        "Las empresas modernas generan y consumen enormes cantidades de informacion cada dia. Los equipos pierden horas buscando datos en emails, documentos, CRMs y sistemas internos. Las consultas repetitivas de clientes y empleados saturan al personal de soporte. Las tareas administrativas manuales restan tiempo a lo que realmente importa: hacer crecer el negocio. Sin un sistema centralizado e inteligente, el conocimiento de la empresa queda fragmentado y desaprovechado.",
        "Nuestro asistente con inteligencia artificial centraliza y automatiza las interacciones mas frecuentes de tu empresa. Funciona como una herramienta inteligente que entiende el contexto de tu negocio, responde consultas de clientes y empleados de forma autonoma, genera y resume documentos, busca informacion en tus sistemas internos y apoya la toma de decisiones con datos en tiempo real. Todo desde una unica interfaz conversacional accesible para cualquier miembro del equipo.",
        "La plataforma se adapta a cada caso de uso: atencion al cliente 24/7, soporte interno para empleados, gestion de informacion corporativa, ayuda comercial con propuestas automaticas, analisis de datos para direccion y automatizacion de procesos operativos. El sistema aprende del contexto de tu negocio y se conecta con tus herramientas actuales: CRM, ERP, bases de datos, Google Workspace, Microsoft 365, Slack, WhatsApp y muchas mas.",
        "Gracias a su arquitectura modular, la plataforma puede desplegarse como un simple asistente de preguntas frecuentes o como un sistema empresarial avanzado conectado a flujos de trabajo, bases de conocimiento y sistemas de gestion. Las empresas que implementan asistentes con IA reportan una reduccion de hasta un 50% en el tiempo dedicado a consultas internas y una mejora significativa en la satisfaccion del cliente.",
        "Este asistente es el producto insignia de Ecosistia y esta disponible como plataforma lista para usar o como desarrollo a medida por 899 EUR. Si tu empresa quiere un asistente virtual inteligente que realmente entienda tu negocio y automatice lo que mas tiempo consume, solicita una demostracion gratuita y descubre como puede transformar tu operativa.",
      ],
    },
  },
  {
    slug: "asistente-forense-ia",
    name: "Asistente Forense con IA",
    subtitle: "Analisis y documentacion de casos forenses, legales y periciales con inteligencia artificial",
    description:
      "Plataforma con inteligencia artificial para analizar documentacion, organizar evidencias y apoyar la elaboracion de informes forenses, legales y periciales. Permite centralizar toda la informacion de un caso y utilizar IA para busqueda de datos clave, deteccion de patrones y generacion de borradores de informes.",
    status: "demo-funcional",
    demoUrl: "https://jolly-daifuku-ee7612.netlify.app/",
    sector: "Forense y Pericial",
    icon: "FileSearch",
    iconColor: "bg-primary",
    image: "/apps/asistente-forense.jpg",
    tags: ["Forensic AI", "Document Analysis", "Evidence Management", "NLP", "Report Generation"],
    features: [
      "Gestion integral de casos y expedientes forenses",
      "Carga y organizacion de documentos y evidencias",
      "Clasificacion automatica por tipo, fecha, relevancia o fuente",
      "Busqueda inteligente dentro de toda la documentacion del caso",
      "Resumen automatico de documentos largos con IA",
      "Extraccion de informacion clave de grandes volumenes de datos",
      "Deteccion de patrones e incoherencias en la documentacion",
      "Generacion de borradores de informes forenses y periciales",
      "Historial y trazabilidad completa de cambios y fuentes",
      "Gestion de notas, observaciones y comentarios por caso",
      "Control de acceso por roles: peritos, abogados, auditores",
      "Integracion con sistemas de gestion documental y repositorios",
    ],
    problem:
      "Los profesionales forenses, peritos y equipos legales dedican cientos de horas a revisar documentacion, organizar evidencias y redactar informes de forma manual. La informacion queda dispersa en multiples sistemas, se pierde trazabilidad de las fuentes y la calidad de los informes depende de procesos repetitivos y propensos a errores.",
    audience:
      "Peritos y consultores forenses, despachos de abogados, departamentos legales y de compliance, auditorias y consultoras, equipos de investigacion interna y empresas que realizan analisis documentales complejos.",
    allIntegrations: ["Forensic AI", "Document Analysis", "NLP", "Evidence Management", "Report Generation", "Knowledge Base"],
    seoContent: {
      heading: "Software de analisis forense con inteligencia artificial para peritos, abogados y auditores",
      paragraphs: [
        "El trabajo forense, pericial y de investigacion legal implica gestionar enormes volumenes de documentacion bajo presion de tiempo y con exigencia de maxima precision. Los profesionales del ambito forense y legal dedican entre el 40% y el 60% de su tiempo a tareas de revision manual de documentos, organizacion de evidencias, busqueda de informacion relevante y redaccion de informes. Estos procesos, realizados sin herramientas adecuadas, son lentos, propensos a errores y dificilmente escalables.",
        "El Asistente Forense con IA de Ecosistia es una plataforma disenada para transformar la forma en que se gestionan los casos forenses, periciales y de investigacion. El sistema permite centralizar toda la documentacion de un caso en un unico entorno seguro y utilizar inteligencia artificial para analizar contenidos, clasificar evidencias automaticamente, detectar patrones y relaciones entre documentos, resumir textos largos y generar borradores de informes periciales y forenses con estructura profesional.",
        "La plataforma se adapta a multiples tipos de uso profesional: peritajes judiciales, auditorias financieras y corporativas, investigaciones internas de compliance, preparacion de demandas y defensas legales, analisis forense digital y due diligence. Cada caso mantiene trazabilidad completa de fuentes, versiones de documentos, notas y observaciones, garantizando la integridad probatoria y la cadena de custodia documental.",
        "El motor de busqueda inteligente del sistema va mas alla de las coincidencias por palabras clave: utiliza comprension semantica para encontrar informacion relevante incluso cuando se utilizan terminos diferentes. La funcion de deteccion de patrones identifica incoherencias, duplicidades y relaciones no evidentes entre documentos, lo que acelera significativamente el analisis y mejora la calidad de las conclusiones del profesional.",
        "Ecosistia desarrolla este software de analisis forense con IA por un precio cerrado de 899 EUR, con entrega funcional en 2-12 semanas. Si eres perito, abogado, auditor o investigador y necesitas una herramienta que te permita gestionar casos complejos con mayor velocidad, organizacion y precision, solicita una demostracion gratuita y descubre como la inteligencia artificial puede revolucionar tu practica profesional.",
      ],
    },
  },
  {
    slug: "reformaslux-gestion-comercial",
    name: "ReformasLux - Gestion Comercial",
    subtitle: "Plataforma inteligente de gestion comercial para empresas de reformas",
    description:
      "ReformasLux es una plataforma todo-en-uno disenada para empresas de reformas que necesitan profesionalizar y escalar su gestion comercial. Centraliza el ciclo de vida del cliente: desde la captacion del lead hasta el cobro final y la liquidacion de comisiones a partners. La inteligencia artificial apoya con scoring de leads, deteccion de riesgos en cobros, priorizacion de oportunidades y auditoria de oportunidades perdidas.",
    status: "demo-funcional",
    demoUrl: "https://aplicaci-n-de-gesti-bwwg.bolt.host/",
    sector: "Reformas y Construccion",
    icon: "HardHat",
    iconColor: "bg-amber-500",
    image: "/apps/reformaslux.jpg",
    tags: ["CRM con IA", "Lead Scoring", "Pipeline Kanban", "Comisiones", "Cobros", "Auditoria IA"],
    features: [
      "Gestion de leads con scoring e IA para priorizar oportunidades",
      "Pipeline tipo Kanban con seguimiento de oportunidades",
      "Creacion, envio y seguimiento de presupuestos",
      "Control de cobros: senales, hitos y pagos finales",
      "Deteccion de riesgo de impago con IA",
      "Gestion de partners y empresas colaboradoras",
      "Calculo automatico y liquidacion de comisiones por proyecto y periodo",
      "Auditoria con IA: revision de oportunidades perdidas y deteccion de incoherencias",
      "Scripts de auditoria para llamadas de seguimiento comercial",
      "Dashboard con metricas de ventas, cobros, comisiones y rendimiento",
      "Gestion de usuarios y roles: administrador, comercial, auditor, partner",
      "Configuracion de empresa, plantillas, identidad visual y ajustes de IA",
    ],
    problem:
      "Las empresas de reformas pierden negocio por desorganizacion en la gestion de leads y clientes, falta de control sobre presupuestos y oportunidades, errores en el calculo de comisiones a partners, dificultad para hacer seguimiento de cobros y riesgo de impagos, y nula visibilidad real sobre el estado del negocio.",
    audience:
      "Empresas de reformas y construccion, empresas de rehabilitacion y obra nueva, negocios que trabajan con partners o colaboradores, equipos comerciales del sector reformas y empresas que quieren profesionalizar su gestion comercial con tecnologia e IA.",
    allIntegrations: ["CRM AI", "Lead Scoring", "Pipeline Management", "Commission Automation", "Risk Detection", "Audit AI"],
    seoContent: {
      heading: "CRM con inteligencia artificial para empresas de reformas y construccion",
      paragraphs: [
        "El sector de las reformas y la construccion tiene un problema estructural: la gestion comercial se hace a mano, con hojas de calculo, notas en el movil y WhatsApp. Los leads se pierden, los presupuestos no se hacen seguimiento, los cobros se retrasan y las comisiones a partners se calculan con errores. El resultado es perdida de negocio, baja rentabilidad y falta total de control sobre lo que realmente esta pasando en la empresa.",
        "ReformasLux es una plataforma de gestion comercial con inteligencia artificial disenada especificamente para empresas de reformas. Centraliza todo el ciclo de vida del cliente en una unica herramienta: captacion y cualificacion de leads con scoring por IA, seguimiento de oportunidades en un pipeline visual tipo Kanban, creacion y envio de presupuestos, control de cobros por hitos, calculo automatico de comisiones a partners y liquidaciones por periodos. Todo con dashboards en tiempo real que muestran exactamente como va el negocio.",
        "La inteligencia artificial de ReformasLux no es decorativa: el sistema analiza cada lead y le asigna una puntuacion de probabilidad de cierre, prioriza las oportunidades con mayor valor, detecta riesgos de impago en los proyectos en curso y audita automaticamente las oportunidades perdidas buscando contradicciones, errores de gestion y patrones de mejora. Incluso genera scripts de auditoria para que los comerciales realicen llamadas de seguimiento mas efectivas.",
        "La plataforma incluye gestion completa de partners y colaboradores, con configuracion de porcentajes de comision por partner, calculo automatico por proyecto y liquidaciones por periodos. El sistema de roles permite que administradores, comerciales, auditores y los propios partners accedan solo a la informacion que les corresponde. Las empresas de reformas que implementan CRMs con IA reportan un aumento de hasta un 45% en la tasa de conversion de leads a proyectos cerrados.",
        "Ecosistia ha desarrollado ReformasLux como una solucion llave en mano por un precio cerrado de 899 EUR, totalmente personalizable por empresa y sector. Si tu empresa de reformas quiere dejar de perder negocio, profesionalizar su gestion comercial y tener visibilidad real sobre ventas, cobros y comisiones, solicita una demostracion gratuita y descubre como la inteligencia artificial puede transformar tu forma de trabajar.",
      ],
    },
  },
  {
    slug: "smartcrm-ia-nativa",
    name: "SmartCRM - CRM con IA Nativa",
    subtitle: "CRM SaaS multi-tenant con inteligencia artificial integrada en cada funcionalidad",
    description:
      "SmartCRM es una plataforma CRM completa con inteligencia artificial integrada nativamente en cada componente: gestion de contactos, cuentas, leads con scoring, pipeline Kanban, inbox omnicanal, automatizaciones sin codigo, forecast avanzado y analítica predictiva. Arquitectura multi-tenant con aislamiento de datos por empresa.",
    status: "demo-funcional",
    demoUrl: "https://crm-saas-con-ia-nati-lrdh.bolt.host/",
    sector: "CRM y Ventas",
    icon: "Users",
    iconColor: "bg-sky-600",
    image: "/apps/smartcrm.jpg",
    tags: ["CRM con IA", "Multi-Tenant SaaS", "Lead Scoring", "Pipeline Kanban", "Inbox Omnicanal", "Forecast"],
    features: [
      "Dashboard inteligente con metricas clave y deals en riesgo",
      "Gestion de contactos 360 con resumen IA y siguiente mejor accion",
      "Gestion de cuentas con analisis de oportunidades por IA",
      "Lead scoring automatico con puntuacion predictiva de 0 a 100",
      "Pipeline de deals tipo Kanban con Deal Doctor y predicciones de cierre",
      "Inbox omnicanal unificado: email, WhatsApp, SMS y chat web",
      "Automatizaciones sin codigo con constructor visual de flujos",
      "Agenda inteligente con optimizacion de horarios por IA",
      "Analitica avanzada con forecast por escenarios y deteccion de anomalias",
      "Arquitectura multi-tenant con aislamiento completo de datos",
      "Gestion de usuarios y roles: administrador, comercial, auditor, observador",
      "Configuracion por empresa: branding, moneda, idioma, limites de IA por plan",
    ],
    problem:
      "Las empresas usan CRMs genericos que no integran IA de forma nativa, lo que obliga a usar herramientas externas desconectadas. Los equipos comerciales pierden tiempo en tareas manuales, no tienen predicciones fiables de cierre, la comunicacion esta dispersa entre canales y la direccion no tiene visibilidad real sobre el forecast ni sobre los deals en riesgo.",
    audience:
      "Empresas B2B de cualquier sector que necesitan un CRM moderno con IA integrada, equipos comerciales que buscan automatizar su operativa, directores de ventas que necesitan forecast fiable y analítica predictiva, y empresas SaaS que quieren gestionar multiples clientes desde una unica plataforma multi-tenant.",
    allIntegrations: ["CRM AI", "Lead Scoring", "Pipeline Management", "Omnichannel Inbox", "Forecast AI", "Workflow Automation", "Multi-Tenant"],
    seoContent: {
      heading: "CRM SaaS con inteligencia artificial nativa para equipos de ventas",
      paragraphs: [
        "Los equipos comerciales de hoy necesitan mucho mas que un CRM para almacenar contactos. Necesitan una plataforma que les diga a quien llamar primero, que deal esta en riesgo, que responder a cada cliente y como va a cerrar el trimestre. Los CRMs tradicionales no ofrecen estas capacidades y obligan a integrar herramientas externas de IA que no estan conectadas con los datos reales del pipeline, generando silos de informacion y decisiones basadas en intuicion en lugar de datos.",
        "SmartCRM es un CRM SaaS con inteligencia artificial integrada nativamente en cada funcionalidad. No es un modulo de IA anadido: la inteligencia artificial esta presente en cada vista y cada accion. En contactos, la IA genera resumenes 360 y sugiere la siguiente mejor accion. En el pipeline, el Deal Doctor analiza cada oportunidad y predice la probabilidad de cierre. En el inbox omnicanal, la IA redacta borradores automaticos y analiza el sentimiento de cada conversacion. En analitica, los modelos predictivos generan forecast por escenarios y detectan anomalias en tiempo real.",
        "La plataforma incluye un constructor visual de automatizaciones sin codigo que permite crear flujos complejos (por ejemplo: cuando un lead no responde en 3 dias, enviar seguimiento por WhatsApp y notificar al comercial). El sistema de lead scoring asigna automaticamente una puntuacion de 0 a 100 a cada lead basandose en su comportamiento, datos demograficos y probabilidad real de conversion, priorizando las oportunidades con mayor valor para el equipo.",
        "SmartCRM esta disenado con arquitectura multi-tenant, lo que significa que cada empresa tiene sus propios datos, configuraciones, branding, moneda e idioma completamente aislados. El sistema soporta roles granulares (administrador, comercial, observador) y limites de uso de IA configurables por plan. Todo esto permite que una unica instalacion sirva a multiples clientes con total seguridad y personalizacion.",
        "Ecosistia desarrolla SmartCRM como solucion llave en mano por un precio cerrado de 899 EUR. Si tu empresa necesita un CRM con inteligencia artificial real que ayude a tu equipo a vender mas y mejor, con predicciones fiables, inbox unificado y automatizaciones inteligentes, solicita una demostracion gratuita y descubre como la IA nativa puede transformar tu proceso comercial.",
      ],
    },
  },
]


