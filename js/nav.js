// js/nav.js
// Injects a modern navigation bar into #main-nav

const nav = document.getElementById('main-nav');
if (nav) {
    nav.innerHTML = `
        <ul class="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="articles.html">Articles</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    `;
}
