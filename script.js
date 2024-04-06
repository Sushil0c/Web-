document.addEventListener("DOMContentLoaded", function () {
    const appList = document.getElementById("appList");

    // Mock app data
    const mockApps = [
        { title: "App 1", body: "Description for App 1", mediafireLink: "YOUR_MEDIAFIRE_LINK_APP_1" },
        { title: "App 2", body: "Description for App 2", mediafireLink: "YOUR_MEDIAFIRE_LINK_APP_2" },
        { title: "App 3", body: "Description for App 3", mediafireLink: "YOUR_MEDIAFIRE_LINK_APP_3" }
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

        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download from MediaFire";
        downloadButton.classList.add("download-btn");

        // Add event listener to the download button
        downloadButton.addEventListener("click", () => {
            window.open(app.mediafireLink, "_blank"); // Open the MediaFire link in a new tab
        });

        // Toggle visibility of description on app name click
        title.addEventListener("click", () => {
            description.style.display = description.style.display === "block" ? "none" : "block";
            downloadButton.style.display = downloadButton.style.display === "block" ? "none" : "block";
        });

        appElement.appendChild(title);
        appElement.appendChild(description);
        appElement.appendChild(downloadButton);

        appList.appendChild(appElement);
    });
});
