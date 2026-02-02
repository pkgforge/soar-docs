(function () {
    var main = document.querySelector(".content main");
    if (
        !main ||
        main.querySelector(".landing-hero") ||
        main.querySelector(".page-404")
    )
        return;

    var headings = main.querySelectorAll("h2[id], h3[id]");
    if (headings.length < 2) return;

    // Build TOC
    var nav = document.createElement("nav");
    nav.className = "page-toc";
    nav.setAttribute("aria-label", "On this page");

    var title = document.createElement("div");
    title.className = "page-toc-title";
    title.textContent = "On this page";
    nav.appendChild(title);

    var list = document.createElement("ul");

    headings.forEach(function (h) {
        var li = document.createElement("li");
        if (h.tagName === "H3") li.className = "toc-indent";
        var a = document.createElement("a");
        a.href = "#" + h.id;
        var headerLink = h.querySelector("a.header");
        a.textContent = (headerLink || h).textContent.trim();
        li.appendChild(a);
        list.appendChild(li);
    });

    nav.appendChild(list);
    document.querySelector(".page-wrapper").appendChild(nav);

    // Scroll spy
    var links = list.querySelectorAll("a");
    var headingArr = Array.prototype.slice.call(headings);
    var ticking = false;

    function updateActive() {
        var scrollPos = window.scrollY + 120;
        var current = null;

        for (var i = 0; i < headingArr.length; i++) {
            if (headingArr[i].offsetTop <= scrollPos) {
                current = headingArr[i];
            }
        }

        links.forEach(function (l) {
            l.classList.remove("active");
        });
        if (current) {
            var link = list.querySelector('a[href="#' + current.id + '"]');
            if (link) link.classList.add("active");
        }
        ticking = false;
    }

    window.addEventListener(
        "scroll",
        function () {
            if (!ticking) {
                requestAnimationFrame(updateActive);
                ticking = true;
            }
        },
        { passive: true },
    );
    updateActive();
})();

// Close search modal when clicking the backdrop
(function () {
    var wrapper = document.getElementById("mdbook-search-wrapper");
    if (!wrapper) return;

    wrapper.addEventListener("click", function (e) {
        if (e.target === wrapper) {
            wrapper.classList.add("hidden");
            var icon = document.getElementById("mdbook-search-toggle");
            if (icon) icon.setAttribute("aria-expanded", "false");
        }
    });
})();
