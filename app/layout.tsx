import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google"; // Importamos a Epilogue
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

// 1. Definição da fonte (ajuste conforme a fonte do seu projeto)
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // Exemplo: inclua apenas os pesos que você realmente usa
  variable: "--font-epilogue", // Isso permite que você use a fonte via variável CSS do Tailwind
});

// 2. Metadados (Importante para SEO)
export const metadata: Metadata = {
  title: "Braincore Audiovisual | Produção, Criação e Edição de Vídeos",
  description:
    "Site oficial da Braincore, especializada em soluções completas de audiovisual: desde a criação de conteúdo e filmagens até a edição e pós-produção profissional para marcas e empresas.",
};

// 3. O Componente Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* 3. Aplique a classe da fonte ao body (ou html) */}
      <body className={`${epilogue.className} ${epilogue.variable}`}>
        <Nav />
        {children}
        <Toaster theme="dark" position="top-right" richColors />
        <Footer />
      </body>
    </html>
  );
}
