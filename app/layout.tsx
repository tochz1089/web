import type { Metadata } from "next";
import Cabecera from "@/components/Cabecera";
import Pie from "@/components/Pie";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Las Cañas Rugby Club — Rugby y Hockey",
    template: "%s — Las Cañas Rugby Club",
  },
  description:
    "Sitio de Las Cañas Rugby Club: rugby y hockey en Cañuelas. Fixture, horarios, fotos y cómo inscribirte.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Cabecera />
        {children}
        <Pie />
      </body>
    </html>
  );
}
