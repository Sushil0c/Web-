document.addEventListener("DOMContentLoaded", function () {
    const appList = document.getElementById("appList");

    // Mock app data
    const mockApps = [
        { title: "App 1", body: "Description for App 1" },
        { title: "App 2", body: "Description for App 2" },
        { title: "App 3", body: "Description for App 3" }
    ];

    // Iterate through mock app data and display
    mockApps.forEach(app => {
        const appElement = document.createElement("div");
        appElement.classList.add("app");

        const title = document.createElement("h2");
        title.textContent = app.title;

        const description = document.createElement("p");
        description.textContent = app.body;
        description.classList.add("description");

        const downloadLink = document.createElement("a");
        downloadLink.textContent = "Download";
        downloadLink.href = `./apps/${app.title}/${app.title}.zip`; // Construct the path dynamically
        downloadLink.classList.add("download-btn");
        downloadLink.setAttribute("download", `${app.title}.zip`);

        // Toggle visibility of description and download link on app name click
        title.addEventListener("click", () => {
            description.style.display = description.style.display === "block" ? "none" : "block";
            downloadLink.style.display = downloadLink.style.display === "block" ? "none" : "block";
        });

        appElement.appendChild(title);
        appElement.appendChild(description);
        appElement.appendChild(downloadLink);

        appList.appendChild(appElement);
    });
});