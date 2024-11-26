const { chromium } = require('playwright');

(async () => {
    // Inicia el navegador
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Abre el archivo HTML
    await page.goto(`file://${process.cwd()}/index.html`);

    // Verificar que el título sea correcto
    const titulo = await page.textContent('#titulo');
    if (titulo === '¡Bienvenido a la prueba!') {
        console.log('✅ El título es correcto');
    } else {
        console.log('❌ El título es incorrecto');
        process.exit(1); // Salida con error
    }

    // Verificar que el botón exista
    const boton = await page.$('#boton');
    if (boton) {
        console.log('✅ El botón existe');
    } else {
        console.log('❌ El botón no existe');
        process.exit(1); // Salida con error
    }

    await browser.close();
})();
