document.getElementById('toggleCSS').addEventListener('click', function() {
    // Toggle CSS classes or styles here
    var linkElement = document.getElementsByTagName('link')[1];
    if (linkElement.href.includes('beybuilder.css')) {
        linkElement.href = 'alternate.css'; // Switch to alternate CSS
    } else if (linkElement.href.includes('bootstrap.css')){
        linkElement.href = 'bootstrap.css'; // Stay on Bootstrap CSS
    }
    else  {
        linkElement.href = 'beybuilder.css'; // Switch back to main CSS
    }
});