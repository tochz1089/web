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
    "Las Cañas Rugby Club: rugby y hockey en Cañuelas desde 1985. Canchas en Carlos Pellegrini y Santa Cruz, escuelita, juveniles y superior afiliado a la URBA. Anotate para jugar.",
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
