# Pruebas Automatizadas con Playwright y GitHub Actions 🚀


Este proyecto muestra cómo automatizar pruebas sobre un archivo HTML usando **Playwright** y **GitHub Actions**. Las pruebas verifican que ciertos elementos existan en la página y que su contenido sea correcto.
### Web a testear:
![image](https://github.com/user-attachments/assets/9e39bf54-2aa0-43b5-b4d2-24a0aef4ea2e)

------------
## Estructura del Proyecto

- **index.html:** Página web de prueba que contiene un título y un botón.
- **test.js:** Script que utiliza Playwright para:
   - Verificar que el título sea correcto.
   - Comprobar que el botón exista.
- **.github/workflows/test-html.yml:** Configuración del pipeline para ejecutar pruebas automatizadas en GitHub Actions.

## Cómo Funciona
**Playwright:**
   - Automatiza la interacción con el navegador.
   - Valida los elementos en el archivo index.html.

**GitHub Actions:**
   - Ejecuta las pruebas automáticamente cada vez que se realiza un push o un pull request en la rama principal (main).

## Resultados de las Pruebas
- Título correcto:
Verifica que el texto del elemento con id #titulo sea ¡Bienvenido a la prueba!.
- Botón existente:
Comprueba que el elemento con id #boton esté presente en la página

## Tecnologías Utilizadas
- **Playwright:** Para la automatización de pruebas.
- **Node.js:** Para ejecutar el script test.js.
- **GitHub Actions:** Para la integración continua (CI).
- **HTML:** Página de prueba básica (index.html).
  
