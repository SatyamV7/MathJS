url = "./src/md/DOCS.md";
fetch(url)
    .then(response => response.text())
    .then(results => {
        const parser = new markDownParser.Parser();
        parser.setFlavor('github');
        const html = parser.makeHtml(results);
        document.querySelector('#root').innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
document.getElementById('toggle').addEventListener('click', () => {
    document.getElementById('blender').classList.toggle('expand');
    document.getElementById('toggle').classList.toggle('module--zIndex');
});
