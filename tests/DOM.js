document.documentElement.innerHTML = '<head></head><body><script src="../math.js"></script><script src="./WebTest.js"></script></body>';

function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    document.body.appendChild(script);
}

loadScript('../math.js')
loadScript('./WebTest.js')