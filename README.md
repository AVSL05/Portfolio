# Portfolio Personal

Un portfolio personal moderno y minimalista construido con React y Vite, diseñado para mostrar proyectos y experiencia profesional de manera elegante.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y minimalista con animaciones suaves
- **Responsive**: Adaptado para todos los dispositivos (móvil, tablet, desktop)
- **Modo Oscuro**: Soporte automático para modo oscuro/claro según preferencias del sistema
- **Rendimiento Optimizado**: Construido con Vite para carga rápida
- **Componentes Modulares**: Estructura de código organizada y reutilizable

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos modernos con variables CSS y flexbox/grid
- **JavaScript ES6+** - Características modernas de JavaScript

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── Header.jsx     # Navegación principal
│   └── Footer.jsx     # Pie de página
├── sections/          # Secciones principales
│   ├── Hero.jsx       # Sección hero/presentación
│   ├── About.jsx      # Sobre mí
│   ├── Experience.jsx # Experiencia profesional
│   ├── Projects.jsx   # Portfolio de proyectos
│   └── Contact.jsx    # Formulario de contacto
├── App.jsx           # Componente principal
├── App.css           # Estilos del componente principal
├── index.css         # Estilos globales y variables CSS
└── main.jsx          # Punto de entrada de la aplicación
```

## 🎨 Secciones Incluidas

1. **Hero/Presentación**: Introducción impactante con animación de código
2. **Sobre mí**: Descripción personal y habilidades técnicas con barras de progreso
3. **Experiencia**: Timeline de experiencia profesional
4. **Proyectos**: Showcase de proyectos destacados y otros trabajos
5. **Contacto**: Formulario de contacto funcional e información de contacto

## 🚀 Instalación y Uso

1. **Clonar el repositorio** (si aplica):

   ```bash
   git clone [url-del-repositorio]
   cd portfolio
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**:

   ```bash
   npm run dev
   ```

   El sitio estará disponible en `http://localhost:5173/`

4. **Construir para producción**:

   ```bash
   npm run build
   ```

5. **Vista previa de la build**:
   ```bash
   npm run preview
   ```

## ✏️ Personalización

Para personalizar el portfolio con tu información:

1. **Información personal**: Edita los textos en cada componente de sección
2. **Colores**: Modifica las variables CSS en `src/index.css`
3. **Proyectos**: Actualiza el array de proyectos en `src/sections/Projects.jsx`
4. **Experiencia**: Modifica el array de experiencias en `src/sections/Experience.jsx`
5. **Habilidades**: Actualiza las habilidades en `src/sections/About.jsx`
6. **Contacto**: Cambia la información de contacto en `src/sections/Contact.jsx`

## 📱 Responsive Design

El portfolio está optimizado para:

- **Desktop**: 1280px+
- **Tablet**: 768px - 1279px
- **Mobile**: Hasta 767px

## 🎯 Próximas Mejoras

- [ ] Integración con CMS headless para contenido dinámico
- [ ] Análisis con Google Analytics
- [ ] Optimización SEO avanzada
- [ ] Modo offline con Service Workers
- [ ] Integración con APIs de redes sociales

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

Desarrollado con ❤️ por [Tu Nombre]+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
