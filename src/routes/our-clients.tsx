import { createFileRoute } from "@tanstack/react-router";
import Clients from "@/components/Clients";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/our-clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — VISO" },
      {
        name: "description",
        content:
          "From oil & gas titans to mega projects — the names we've designed security spines for.",
      },
    ],
  }),
  component: () => (
    <main className="min-h-screen bg-toon">
      <SiteHeader />
      <div className="pt-10" />
      <Clients />
      <SiteFooter />
    </main>
  ),
});
