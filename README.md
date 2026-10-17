# Las Cañas Rugby Club — web

Sitio del club en **Next.js 14 + TypeScript**, con App Router, componentes servidor y cliente, datos tipados y hoja de estilos compartida.

## Cómo abrirlo

```bash
cd canuelas-rugby
npm install        # una vez
npm run dev        # http://localhost:3000
```

Para compilar para producción: `npm run build` y después `npm start`.
Cuando se suba al hosting propio, la Home vive en `/` y las inscripciones en `/inscripciones`, tal como se pidió.

## Estructura

```
canuelas-rugby/
├─ app/
│  ├─ layout.tsx            cabecera + pie + metadatos globales
│  ├─ page.tsx              Home: portada, paneles, resultados, cartelera, plantel, galería
│  ├─ inscripciones/
│  │  └─ page.tsx           mini web de inscripción (pasos + formulario)
│  ├─ icon.svg              favicon (escudo cuadernado)
│  └─ globals.css           estilos del sitio completo
├─ components/
│  ├─ Cabecera.tsx          navegación (cliente: menú de celular con estado)
│  ├─ Pie.tsx
│  ├─ Escudo.tsx            escudo SVG de la marca
│  └─ FormularioInscripcion.tsx (cliente: validación + confirmación)
└─ lib/
   └─ datos.ts              resultados, fixture, horarios y plantel (TS tipado)
```

## Identidad

- **Colores:** Bocha `#E9EBE1`, Tinta `#14301F`, Cancha `#2E5B3A`, Barro `#6B543C`, Amarillo marca `#F5CF0A`, Cal `#F7F5EC`.
- **Tipografía:** Anybody (titulares y números) + Bricolage Grotesque (texto).
- **Marca:** escudo de cuatro cuadrantes verde y amarillo (SVG provisorio; se reemplaza por el escudo real cuando llegue).

## Cambios de contenido

Los resultados, el fixture, los horarios y el plantel se editan en `lib/datos.ts` — las páginas los leen de ahí. Las fotos genéricas (Wikimedia Commons) se cambian por las reales del club reemplazando las `src` correspondientes.
