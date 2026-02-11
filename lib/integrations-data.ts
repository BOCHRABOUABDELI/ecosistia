export type IntegrationCategory =
  | "Comunicacion"
  | "Productividad"
  | "Inteligencia Artificial"
  | "Comercio"
  | "Marketing"
  | "Ventas y CRM"
  | "Soporte"
  | "Finanzas y Banca"
  | "Recursos Humanos"
  | "Contenido y Archivos"
  | "Desarrollo y Web"
  | "Bases de Datos"
  | "Business Intelligence"
  | "IoT y Operaciones"

export interface Integration {
  name: string
  slug: string
  description: string
  category: IntegrationCategory
  logo: string
  popular?: boolean
  premium?: boolean
  beta?: boolean
  recentlyLaunched?: boolean
}

const l = (file: string) => `/integrations/${file}`

export const allIntegrations: Integration[] = [
  // Comunicacion
  { name: "WhatsApp", slug: "whatsapp", description: "Envia y recibe mensajes automaticos a traves de WhatsApp Business API.", category: "Comunicacion", logo: l("whatsapp.svg"), popular: true },
  { name: "Gmail", slug: "gmail", description: "Automatiza lectura, envio y clasificacion de emails con Gmail.", category: "Comunicacion", logo: l("gmail.svg"), popular: true },
  { name: "Slack", slug: "slack", description: "Envia notificaciones, crea canales y automatiza flujos en Slack.", category: "Comunicacion", logo: l("slack.svg"), popular: true },
  { name: "Microsoft Teams", slug: "microsoftteams", description: "Integra flujos de trabajo y notificaciones con Microsoft Teams.", category: "Comunicacion", logo: l("microsoft-teams.svg"), popular: true },
  { name: "Zoom", slug: "zoom", description: "Programa y gestiona reuniones de Zoom automaticamente.", category: "Comunicacion", logo: l("zoom.svg") },
  { name: "Discord", slug: "discord", description: "Automatiza mensajes, bots y notificaciones en servidores Discord.", category: "Comunicacion", logo: l("discord.svg") },
  { name: "Twilio", slug: "twilio", description: "Envia SMS, llamadas y mensajes de voz automatizados.", category: "Comunicacion", logo: l("twilio.svg"), premium: true },

  // Productividad
  { name: "Google Calendar", slug: "googlecalendar", description: "Crea, modifica y sincroniza eventos automaticamente.", category: "Productividad", logo: l("google-calendar.svg"), popular: true },
  { name: "Google Drive", slug: "googledrive", description: "Sube, organiza y comparte archivos en Google Drive.", category: "Productividad", logo: l("google-drive.svg"), popular: true },
  { name: "Notion", slug: "notion", description: "Crea y actualiza paginas, bases de datos y wikis en Notion.", category: "Productividad", logo: l("notion.svg"), popular: true },
  { name: "Airtable", slug: "airtable", description: "Conecta bases de datos flexibles tipo hoja de calculo con IA.", category: "Productividad", logo: l("airtable.svg") },
  { name: "Trello", slug: "trello", description: "Automatiza tarjetas, listas y flujos de trabajo en Trello.", category: "Productividad", logo: l("trello.svg") },
  { name: "Asana", slug: "asana", description: "Gestiona proyectos y tareas con automatizaciones inteligentes.", category: "Productividad", logo: l("asana.svg") },
  { name: "Jira", slug: "jira", description: "Crea issues, sincroniza sprints y automatiza flujos en Jira.", category: "Productividad", logo: l("jira.svg") },
  { name: "Microsoft Excel", slug: "microsoftexcel", description: "Lee, escribe y transforma datos en hojas de calculo Excel.", category: "Productividad", logo: l("microsoftexcel.svg"), popular: true },
  { name: "Google Sheets", slug: "googlesheets", description: "Sincroniza datos entre tu app y hojas de calculo de Google.", category: "Productividad", logo: l("google-sheets.svg"), popular: true },
  { name: "Monday.com", slug: "monday", description: "Gestiona proyectos con automatizaciones y tableros visuales.", category: "Productividad", logo: l("monday.svg") },
  { name: "ClickUp", slug: "clickup", description: "Plataforma todo-en-uno para gestion de proyectos y tareas.", category: "Productividad", logo: l("clickup.svg") },
  { name: "Todoist", slug: "todoist", description: "Crea y gestiona tareas automaticamente desde tu aplicacion.", category: "Productividad", logo: l("todoist.svg") },
  { name: "Calendly", slug: "calendly", description: "Automatiza la programacion de citas y reuniones.", category: "Productividad", logo: l("calendly.svg") },

  // Contenido y Archivos
  { name: "Dropbox", slug: "dropbox", description: "Almacena y sincroniza archivos en Dropbox de forma automatica.", category: "Contenido y Archivos", logo: l("dropbox.svg") },
  { name: "OneDrive", slug: "onedrive", description: "Gestiona archivos y carpetas en Microsoft OneDrive.", category: "Contenido y Archivos", logo: l("onedrive.svg") },
  { name: "Box", slug: "box", description: "Almacenamiento seguro en la nube con automatizacion de flujos.", category: "Contenido y Archivos", logo: l("box.svg") },

  // Inteligencia Artificial
  { name: "OpenAI", slug: "openai", description: "Integra GPT, DALL-E y Whisper para generar texto, imagenes y audio.", category: "Inteligencia Artificial", logo: l("openai.svg"), popular: true },
  { name: "Google Cloud AI", slug: "googlecloud", description: "Usa los modelos de Google Cloud para analisis y generacion de contenido.", category: "Inteligencia Artificial", logo: l("googlecloud.svg"), recentlyLaunched: true },
  { name: "Hugging Face", slug: "huggingface", description: "Accede a miles de modelos de ML para NLP, vision y mas.", category: "Inteligencia Artificial", logo: l("huggingface.svg") },
  { name: "TensorFlow", slug: "tensorflow", description: "Framework de machine learning para modelos personalizados.", category: "Inteligencia Artificial", logo: l("tensorflow.svg") },
  { name: "Amazon Web Services", slug: "aws", description: "Servicios de IA y ML con Amazon Bedrock, Rekognition y mas.", category: "Inteligencia Artificial", logo: l("amazonwebservices.svg"), premium: true },
  { name: "Microsoft Azure AI", slug: "microsoftazure", description: "Servicios cognitivos y modelos de IA con Azure.", category: "Inteligencia Artificial", logo: l("microsoftazure.svg"), premium: true },

  // Comercio
  { name: "Shopify", slug: "shopify", description: "Sincroniza productos, pedidos e inventario con tu tienda Shopify.", category: "Comercio", logo: l("shopify.svg"), popular: true },
  { name: "WooCommerce", slug: "woocommerce", description: "Conecta tu tienda WooCommerce para gestionar pedidos con IA.", category: "Comercio", logo: l("woocommerce.svg") },
  { name: "Magento", slug: "magento", description: "Integra catalogo y pedidos con tu tienda Magento.", category: "Comercio", logo: l("magento.svg") },
  { name: "Stripe", slug: "stripe", description: "Procesa pagos, suscripciones y facturacion automatica.", category: "Comercio", logo: l("stripe.svg"), popular: true },
  { name: "PayPal", slug: "paypal", description: "Integra pagos y cobros automatizados con PayPal.", category: "Comercio", logo: l("paypal.svg") },
  { name: "Square", slug: "square", description: "Procesa pagos presenciales y online con Square.", category: "Comercio", logo: l("square.svg") },

  // Marketing
  { name: "Mailchimp", slug: "mailchimp", description: "Automatiza campanas de email marketing y segmentacion.", category: "Marketing", logo: l("mailchimp.svg"), popular: true },
  { name: "SendGrid", slug: "sendgrid", description: "Envia emails transaccionales y de marketing a escala.", category: "Marketing", logo: l("sendgrid.svg") },
  { name: "ActiveCampaign", slug: "activecampaign", description: "Automatizacion avanzada de email y CRM.", category: "Marketing", logo: l("activecampaign.svg"), premium: true },
  { name: "Semrush", slug: "semrush", description: "Analisis SEO, keywords y competencia para tu estrategia digital.", category: "Marketing", logo: l("semrush.svg") },
  { name: "Google Analytics", slug: "googleanalytics", description: "Extrae datos de trafico y conversiones automaticamente.", category: "Marketing", logo: l("googleanalytics.svg") },
  { name: "Meta Ads", slug: "metaads", description: "Automatiza campanas en Facebook e Instagram Ads.", category: "Marketing", logo: l("metaads.svg") },
  { name: "Google Ads", slug: "googleads", description: "Gestiona campanas publicitarias y reportes de rendimiento.", category: "Marketing", logo: l("googleads.svg") },
  { name: "Hootsuite", slug: "hootsuite", description: "Programa y publica contenido en multiples redes sociales.", category: "Marketing", logo: l("hootsuite.svg") },
  { name: "Buffer", slug: "buffer", description: "Planifica y publica contenido en redes sociales.", category: "Marketing", logo: l("buffer.svg") },

  // Ventas y CRM
  { name: "HubSpot", slug: "hubspot", description: "Sincroniza contactos, deals y automatiza seguimiento comercial.", category: "Ventas y CRM", logo: l("hubspot.svg"), popular: true },
  { name: "Salesforce", slug: "salesforce", description: "Integra tu CRM Salesforce con flujos automatizados por IA.", category: "Ventas y CRM", logo: l("salesforce.svg"), popular: true },
  { name: "Pipedrive", slug: "pipedrive", description: "Gestiona tu pipeline de ventas con automatizaciones inteligentes.", category: "Ventas y CRM", logo: l("pipedrive.svg") },
  { name: "Freshsales", slug: "freshsales", description: "CRM inteligente con scoring de leads y automatizacion.", category: "Ventas y CRM", logo: l("freshsales.svg") },
  { name: "Zoho CRM", slug: "zohocrm", description: "Automatiza procesos de ventas y gestion de clientes en Zoho.", category: "Ventas y CRM", logo: l("zohocrm.svg") },

  // Soporte
  { name: "Zendesk", slug: "zendesk", description: "Automatiza tickets, respuestas y flujos de atencion al cliente.", category: "Soporte", logo: l("zendesk.svg"), popular: true },
  { name: "Intercom", slug: "intercom", description: "Chat en vivo y bots de soporte con integracion IA.", category: "Soporte", logo: l("intercom.svg"), premium: true },
  { name: "Freshdesk", slug: "freshdesk", description: "Gestiona tickets de soporte con automatizacion y IA.", category: "Soporte", logo: l("freshdesk.svg") },
  { name: "ServiceNow", slug: "servicenow", description: "Plataforma ITSM para gestion de servicios empresariales.", category: "Soporte", logo: l("servicenow.svg"), premium: true },

  // Recursos Humanos
  { name: "BambooHR", slug: "bamboohr", description: "Automatiza procesos de RRHH: onboarding, ausencias y evaluaciones.", category: "Recursos Humanos", logo: l("bamboohr.svg") },
  { name: "Workday", slug: "workday", description: "Integra gestion de talento y nominas con tu aplicacion.", category: "Recursos Humanos", logo: l("workday.svg"), premium: true },
  { name: "Gusto", slug: "gusto", description: "Gestion de nominas y beneficios para equipos.", category: "Recursos Humanos", logo: l("gusto.svg") },
  { name: "ADP", slug: "adp", description: "Soluciones de RRHH, nominas y gestion de talento.", category: "Recursos Humanos", logo: l("adp.svg"), premium: true },

  // Desarrollo y Web
  { name: "WordPress", slug: "wordpress", description: "Conecta tu sitio WordPress para publicar contenido con IA.", category: "Desarrollo y Web", logo: l("wordpress.svg") },
  { name: "Webflow", slug: "webflow", description: "Integra tu sitio Webflow con flujos automatizados.", category: "Desarrollo y Web", logo: l("webflow.svg") },
  { name: "Wix", slug: "wix", description: "Conecta formularios y contenido de tu sitio Wix.", category: "Desarrollo y Web", logo: l("wix.svg") },
  { name: "React", slug: "react", description: "Componentes y librerias para aplicaciones React.", category: "Desarrollo y Web", logo: l("react.svg") },
  { name: "Firebase", slug: "firebase", description: "Base de datos en tiempo real y autenticacion con Firebase.", category: "Desarrollo y Web", logo: l("firebase.svg") },
  { name: "Webhooks / API REST", slug: "webhooks", description: "Conecta cualquier sistema via webhooks o API REST personalizada.", category: "Desarrollo y Web", logo: l("webhooks-api.png"), popular: true },

  // Bases de Datos
  { name: "PostgreSQL", slug: "postgresql", description: "Conecta y automatiza consultas en bases de datos PostgreSQL.", category: "Bases de Datos", logo: l("postgresql.svg"), popular: true },
  { name: "MySQL", slug: "mysql", description: "Integra y automatiza flujos con bases de datos MySQL.", category: "Bases de Datos", logo: l("mysql.svg") },
  { name: "MongoDB", slug: "mongodb", description: "Conecta colecciones MongoDB con tu aplicacion.", category: "Bases de Datos", logo: l("mongodb.svg") },
  { name: "Redis", slug: "redis", description: "Cache y almacenamiento en memoria para alto rendimiento.", category: "Bases de Datos", logo: l("redis.svg") },
  { name: "Elasticsearch", slug: "elasticsearch", description: "Motor de busqueda distribuido para analisis de datos.", category: "Bases de Datos", logo: l("elasticsearch.svg") },
  { name: "Snowflake", slug: "snowflake", description: "Data warehouse en la nube para analisis a escala.", category: "Bases de Datos", logo: l("snowflake.svg"), premium: true },

  // Business Intelligence
  { name: "Power BI", slug: "powerbi", description: "Conecta dashboards y reportes de Microsoft Power BI.", category: "Business Intelligence", logo: l("powerbi.svg") },
  { name: "Tableau", slug: "tableau", description: "Integra visualizaciones y datos de Tableau en tu app.", category: "Business Intelligence", logo: l("tableau.svg"), premium: true },
  { name: "Looker", slug: "looker", description: "Conecta datos y dashboards de Google Looker.", category: "Business Intelligence", logo: l("looker.svg") },
  { name: "Google Data Studio", slug: "googledata", description: "Reportes y dashboards conectados con Google Data.", category: "Business Intelligence", logo: l("googledata.svg") },

  // IoT y Operaciones
  { name: "AWS IoT", slug: "awsiot", description: "Conecta dispositivos IoT con Amazon Web Services.", category: "IoT y Operaciones", logo: l("amazonwebservices.svg"), premium: true },
]

export const categories: IntegrationCategory[] = [
  "Comunicacion",
  "Productividad",
  "Inteligencia Artificial",
  "Comercio",
  "Marketing",
  "Ventas y CRM",
  "Soporte",
  "Finanzas y Banca",
  "Recursos Humanos",
  "Contenido y Archivos",
  "Desarrollo y Web",
  "Bases de Datos",
  "Business Intelligence",
  "IoT y Operaciones",
]

export type SortOption = "popular" | "name" | "premium" | "beta" | "recent"
