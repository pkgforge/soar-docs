(function () {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js";
    script.async = true;
    script.onload = function () {
        mermaid.initialize({
            startOnLoad: false,
            theme: "dark",
            themeVariables: {
                darkMode: true,
                background: "#0d1117",
                primaryColor: "#161b22",
                primaryTextColor: "#e6edf3",
                primaryBorderColor: "#30363d",
                lineColor: "#58a6ff",
                secondaryColor: "#1c2128",
                tertiaryColor: "#0d1117",
                noteBkgColor: "#161b22",
                noteTextColor: "#e6edf3",
                noteBorderColor: "#30363d",
                textColor: "#e6edf3",
                mainBkg: "#161b22",
                nodeBorder: "#30363d",
                clusterBkg: "#1c2128",
                clusterBorder: "#30363d",
                titleColor: "#e6edf3",
                edgeLabelBackground: "#161b22",
            },
        });
        mermaid.run();
    };
    document.head.appendChild(script);
})();
