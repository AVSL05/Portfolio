# 🖼️ Guía para agregar imágenes de tecnologías

## 📁 Ubicación de las imágenes

Coloca tus imágenes de tecnologías en la carpeta:

```
public/images/tech/
```

## 📝 Nombres de archivos recomendados

### Lenguajes de programación:

- `javascript.png` - JavaScript
- `python.png` - Python
- `typescript.png` - TypeScript

### Frontend:

- `react.png` - React
- `html5.png` - HTML5
- `css3.png` - CSS3
- `vue.png` - Vue.js (si usas)

### Backend:

- `nodejs.png` - Node.js
- `express.png` - Express.js (si usas)

### Bases de datos:

- `mongodb.png` - MongoDB
- `mysql.png` - MySQL (si usas)
- `postgresql.png` - PostgreSQL (si usas)

### Herramientas:

- `git.png` - Git
- `docker.png` - Docker (si usas)
- `aws.png` - AWS (si usas)

## 🎨 Especificaciones de imágenes

### Tamaño recomendado:

- **Resolución**: 60x60 píxeles (se ajustará automáticamente)
- **Formato**: PNG o SVG (preferible SVG para mayor calidad)
- **Fondo**: Transparente (recomendado)

### Donde descargar iconos:

1. **DevIcons**: https://devicon.dev/
2. **Simple Icons**: https://simpleicons.org/
3. **Iconify**: https://iconify.design/
4. **Logos oficiales**: De las páginas web oficiales de cada tecnología

## 🔧 Cómo agregar nuevas tecnologías

1. **Agrega la imagen** en `public/images/tech/`
2. **Edita el archivo** `src/sections/About.jsx`
3. **Agrega un nuevo objeto** al array `technologies`:

```javascript
{
  name: 'NombreTecnología',
  image: '/images/tech/nombre-archivo.png',
  category: 'Categoría' // Frontend, Backend, Lenguaje, Base de Datos, Herramientas
}
```

## 🎯 Ejemplo completo:

```javascript
{
  name: 'Docker',
  image: '/images/tech/docker.png',
  category: 'Herramientas'
}
```

## 🔄 Si no tienes la imagen

Si no encuentras una imagen específica, el sistema mostrará automáticamente un placeholder circular con la primera letra del nombre de la tecnología.

## 📱 Responsive

El grid se ajusta automáticamente:

- **Desktop**: 6-8 tecnologías por fila
- **Tablet**: 4-5 tecnologías por fila
- **Mobile**: 2-3 tecnologías por fila
