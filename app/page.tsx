import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound, CircuitBoard, BrainCircuit, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex justify-center py-6 border-b border-border">
        <div className="w-16 h-16 border-4 border-blue-500 rounded-full bg-slate-900 overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(0,153,255,0.2)]">
          <Image
            src="/logo/SafeCore.png"
            alt="SafeCore Logo"
            width={120}
            height={120}
            priority
            className="object-contain"
          />
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-20 md:py-32 bg-background border-b border-border">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-3">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl/none text-foreground max-w-225">
                  Tvoj <span className="text-primary">digitálny kľúč</span> k
                  profesionálnej kariére v SBS
                </h1>
                <p className="mx-auto max-w-175 text-muted-foreground md:text-xl">
                  Pripravte svojich zamestnancov na skúšky typu S a P. Spravujte
                  vzdelávanie vašej bezpečnostnej služby efektívne a moderne.
                </p>
              </div>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-primary text-white gap-3 rounded-full text-lg px-8 py-7 hover:bg-primary/90 hover:scale-105 transition-all"
                >
                  Spustiť Dashboard <ArrowRight size={22} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <InfoCard
                icon={<BrainCircuit className="text-primary" size={36} />}
                title="Inteligentné učenie"
                desc="Algoritmus generuje testy tak, aby ste sa zbytočne neopakovali."
              />
              <InfoCard
                icon={<CircuitBoard className="text-primary" size={36} />}
                title="Kompletná databáza"
                desc="400+ otázok pre typ S a P. Vždy aktuálne."
              />
              <InfoCard
                icon={<KeyRound className="text-primary" size={36} />}
                title="Prístup pre firmy"
                desc="Sledujte progres svojich zamestnancov v reálnom čase."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border bg-card">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 SafeCore Academy. All rights reserved. S.R.O.
          </p>
        </div>
      </footer>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-center gap-4">
        {icon}
        <CardTitle className="text-2xl font-bold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  );
}
