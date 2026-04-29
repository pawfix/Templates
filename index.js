async function displayCode(fileName) {

    let code = document.getElementById("code");
    const text = await loadFile(fileName)

    if (!code) {
        code = document.createElement('code')
        code.id = 'code'
        document.querySelector('pre')?.appendChild(code)
    }

    if (fileName.endsWith(".html")) {
        code.className = "language-html"
        console.log("Is HTML")
    } else if (fileName.endsWith(".css")) {
        code.className = "language-css"
        console.log("Is CSS")
    } else if (fileName.endsWith(".js")) {
        code.className = "language-js"
        console.log("Is JS")
    } else if (fileName.endsWith(".ts")) {
        code.className = "language-ts"
        console.log("Is TS")
    } else {
        code.className = "language-html"
    }

    if (code) {
        code.textContent = text;
    }
    Prism.highlightElement(code);
}
async function loadFile(fileName) {
    try {
        const res = await fetch(fileName);
        const text = await res.text();
        return text;
    } catch (error) {
        console.error(error);
        return "Failed to load " + fileName;
    }
}