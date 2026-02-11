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

export type AppIconName =
  | "ClipboardList"
  | "ShieldCheck"
  | "HeartPulse"
  | "Building2"
  | "TrendingUp"
  | "Scale"
  | "Wrench"

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
  },
]


