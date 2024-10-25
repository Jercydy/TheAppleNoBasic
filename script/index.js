document.addEventListener('DOMContentLoaded', function() {
    const navbarHtml = `
        <div class="nav-div">
            <img src="./assets/image/Logo+Blank.PNG" class="logo" alt="Logo">
            <div class="nav-content">
                <a href="index.html" class="nav-item">jercydy</a>
                <a href="archive.html" class="nav-item">archive</a>
                <a href="blog.html" class="nav-item">blog</a>
                <a href="merch.html" class="nav-item">merch</a>
                <a href="tip-jar.html" class="nav-item">tip jar</a>
                <a href="about.html" class="nav-item">about</a>
            </div>
        </div>
    `;

    // Insert the navbar at the start of the body
    document.body.insertAdjacentHTML('afterbegin', navbarHtml);
});
