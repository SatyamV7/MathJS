url = "./src/md/DOCS.md";
$.ajax({
    url: url,
    type: "GET",
    dataType: "text",
    success: function (results) {
        var converter = new showdown.Converter();
        converter.setFlavor('github');
        var html = converter.makeHtml(results);
        document.querySelector('#root').innerHTML = html
    }
});
document.getElementById('toggle').addEventListener('click', () => {
    document.getElementById('blender').classList.toggle('expand');
    document.getElementById('toggle').classList.toggle('module--zIndex');
});