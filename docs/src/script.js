url = "https://mtsoss.github.io/MathJS/src/md/DOCS.md";
fetch(url)
    .then(response => response.text())
    .then(results => {
        var converter = new showdown.Converter();
        converter.setFlavor('github');
        var html = converter.makeHtml(results);
        document.querySelector('#root').innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
document.getElementById('toggle').addEventListener('click', () => {
    document.getElementById('blender').classList.toggle('expand');
    document.getElementById('toggle').classList.toggle('module--zIndex');
});