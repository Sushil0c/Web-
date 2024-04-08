import { appData } from '.appdata.js';

document.addEventListener("DOMContentLoaded", function () {
    const appList = document.getElementById("appList");
    const searchInput = document.getElementById("searchInput");

    function renderApps(appData) {
        appList.innerHTML = ""; // Clear previous results

        if (appData.length === 0) {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "No matching apps found.";
            appList.appendChild(noResultsMessage);
        } else {
            appData.forEach(app => {
                const appElement = document.createElement("div");
                appElement.classList.add("app");

                const title = document.createElement("p");
                title.textContent = app.title;

                const description = document.createElement("p");
                description.textContent = app.description;
                description.classList.add("description");

                const downloadButton = document.createElement("button");
                downloadButton.textContent = "Download from MediaFire";
                downloadButton.classList.add("download-btn");
                downloadButton.addEventListener("click", () => {
                    window.open(app.link, "_blank");
                });

                title.addEventListener("click", () => {
                    description.style.display = description.style.display === "block" ? "none" : "block";
                    downloadButton.style.display = downloadButton.style.display === "block" ? "none" : "block";
                });

                appElement.appendChild(title);
                appElement.appendChild(description);
                appElement.appendChild(downloadButton);

                appList.appendChild(appElement);
            });
        }
    }

    function filterApps(query) {
        const filteredApps = appData.filter(app => {
            return app.title.toLowerCase().includes(query.toLowerCase()) || app.description.toLowerCase().includes(query.toLowerCase());
        });

        renderApps(filteredApps);
    }

    // Initial rendering
    renderApps(appData);

    // Search functionality
    searchInput.addEventListener("input", function () {
        filterApps(this.value);
    });
});