import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const integrations = [
  { name: "WhatsApp", file: "whatsapp.svg" },
  { name: "Google Calendar", file: "google-calendar.svg" },
  { name: "Gmail", file: "gmail.svg" },
  { name: "Google Drive", file: "google-drive.svg" },
  { name: "Slack", file: "slack.svg" },
  { name: "Microsoft Teams", file: "microsoft-teams.svg" },
  { name: "Excel", file: "microsoftexcel.svg" },
  { name: "Notion", file: "notion.svg" },
  { name: "Trello", file: "trello.svg" },
  { name: "HubSpot", file: "hubspot.svg" },
  { name: "Salesforce", file: "salesforce.svg" },
  { name: "Stripe", file: "stripe.svg" },
  { name: "Shopify", file: "shopify.svg" },
  { name: "OpenAI", file: "openai.svg" },
  { name: "PostgreSQL", file: "postgresql.svg" },
  { name: "Zapier", file: "zapier.svg" },
  { name: "Jira", file: "jira.svg" },
  { name: "Mailchimp", file: "mailchimp.svg" },
  { name: "Zendesk", file: "zendesk.svg" },
  { name: "Google Sheets", file: "google-sheets.svg" },
  { name: "WordPress", file: "wordpress.svg" },
]

export function IntegrationsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Ecosistema
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Conectamos tu aplicacion con las herramientas que ya usas
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Integramos tu app con mas de 60 plataformas para que los datos fluyan
            entre sistemas sin intervencion manual. CRMs, ERPs, herramientas de comunicacion,
            bases de datos y mucho mas.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-7">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 py-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-accent/20"
            >
              <img
                src={`/integrations/${item.file}`}
                alt={item.name}
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9 object-contain"
              />
              <span className="text-[11px] font-medium text-muted-foreground text-center leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/integraciones">
              Ver todas las integraciones
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
