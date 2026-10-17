import type { Metadata } from "next";
import Cabecera from "@/components/Cabecera";
import Pie from "@/components/Pie";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cañuelas Rugby Club — Rugby y Hockey",
    template: "%s — Cañuelas Rugby Club",
  },
  description:
    "Cañuelas Rugby Club: rugby y hockey de pueblo. Escuelita desde los 5 años, dos canchas propias y el tercer tiempo como institución. Anotate para jugar.",
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
