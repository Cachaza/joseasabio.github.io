# Proyecto Radios Antiguas

## Descripción General
Este proyecto es una página web estática personal dedicada a las radios antiguas (especialmente de válvulas), equipos de audio, electrónica y restauración de este tipo de dispositivos. El sitio sirve como un portal donde el autor comparte recursos valiosos con la comunidad de aficionados y técnicos, ofreciendo acceso directo a esquemas, manuales, libros y mostrando ejemplos de sus proyectos de restauración. 

También funciona como un medio para que el autor se comunique con su audiencia, ofreciendo ayuda basada en sus conocimientos, vendiendo equipos y componentes, y compartiendo sus experiencias personales en la restauración.

## Estructura del Sitio Web y Archivos
El proyecto está construido mediante archivos HTML estáticos interconectados y una hoja de estilos compartida.

### Archivos Principales
* `index.html`: La página principal que actúa como índice, conteniendo la navegación principal hacia todas las subsecciones del sitio web. Incluye también notas importantes del autor.
* `! misestilos.css`: El archivo que contiene las reglas de estilo CSS para el aspecto visual de la página web.

### Páginas de Contenido (Secciones)
* **Restauraciones:** `za ejemplo.html` (Radios) y `zb ejemplo au.html` (Audio) muestran los trabajos realizados por el autor.
* **Venta:** `zj venta.html` lista equipos, instrumentos y repuestos disponibles para la venta.
* **Biblioteca y Descargas:** 
  * `z1 dir Books Audio.html` y `z2 dir Books Elec.html` permiten descargar libros de audio y electrónica respectivamente.
  * También existen versiones automáticas o bases como `z1 dir Books Audio FROM DirList&P.htm` derivadas posiblemente de un script de indexación de directorios (DirList&Print).
* **Esquemas:** `z4 dir Sch's.html` contiene el acceso a los miles de esquemas de radios disponibles en la colección ("Sch's" se refiere a Schematics).
* **Varios:**
  * `ze mapa.html`: Información de contacto.
  * `zd links.html`: Enlaces externos a web relacionadas.
  * `zg notas.html`: Generalidades y notas diversas.
  * `zf informaciones.html`: Documentos, herramientas y otras utilidades que el autor ha considerado útiles.

### Directorios
* **Recursos Gráficos:** `dibujo/` y `foto/` almacenan las imágenes, GIFs y fotografías que se muestran en el sitio web (recursos visuales para la interfaz y galerías de restauración).
* **Material Descargable:** `Books Audio/` y `Books Elec/` son las carpetas base donde se alojan los archivos de libros para descarga. `00 Varios Sueltos/` contiene documentos PDF sueltos como "Herramientas y mas.pdf".
* **Desarrollo:** `.vscode/` (configuración del editor de código) y `_notes/` (notas de desarrollo).

## Tecnologías
* **Frontend:** HTML Clásico/HTML5, CSS puro.
* **Interactividad:** Scripts elementales de JavaScript embebido en HTML (por ejemplo, para mostrar dinámicamente la última fecha de modificación en el index).
