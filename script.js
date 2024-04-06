document.addEventListener("DOMContentLoaded", function () {
    const appList = document.getElementById("appList");

    // Mock app data
    const mockApps = [
        { 
            title: "Jieshuo+", 
            body: "What's new: Optimized partial system progress bar prompts and operations. Improved some software touch experience focusing. Enhanced component editing segmentation mode by adding support for single line and double line segmentation. Optimized performance and reduced power consumption. Added an option to enhance application sound effects. Fixed bug with built-in eSpeak adjustment parameters being invalid. The super sound effect can now be downloaded for use in movies and TV shows; the selected application will be affected by this sound effect. Added a function for super sound effects for individual applications. It creates a new sub-folder under the effect folder in the sound effect program and adds sound effects to it, taking effect after re-applying the sound effect. Split movies into segments and assign line numbers for dynamic playback (long press for segment TV design). In the Editor, added a function to increase the display of line numbers for editing (long press the line button for quick switch). Added a quick switch command for auto-reading messages. Added a function to automatically read out message recordings. Fixed bug where pulling down the notification bar caused no sound effect. Added more example word functions for input method keyboards. Increased usage of custom translation engine functions (in advanced settings and voice assistant settings). Optimized content black list rules. Added description of blacklist keyword format. Optimized blacklist settings by increasing direct selection matching mode. Fixed abnormal bug when browsing Facebook list items for reading. Optimized display effects for timer recording function.", 
            mediafireLink: "https://www.mediafire.com/file/3wr2vjahb1cdc6g/Jieshuo%252B.apk" 
        },
        { title: "", body: "", mediafireLink: "" },
        { title: "", body: "", mediafireLink: "" }
    ];

    // Iterate through mock app data and display
    mockApps.forEach(app => {
        const appElement = document.createElement("div");
        appElement.classList.add("app");

        const title = document.createElement("h2");
        title.textContent = app.title;

        const description = document.createElement("p");
        const shortDescription = app.body.substring(0, 150); // Display only first 150 characters initially
        description.textContent = shortDescription + "...";
        description.classList.add("description");

        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download from MediaFire";
        downloadButton.classList.add("download-btn");

        // Add event listener to the download button
        downloadButton.addEventListener("click", () => {
            window.open(app.mediafireLink, "_blank"); // Open the MediaFire link in a new tab
        });

        // Container for description and download button
        const contentContainer = document.createElement("div");
        contentContainer.appendChild(description);
        contentContainer.appendChild(downloadButton);
        contentContainer.style.display = "none"; // Hide initially

        // Toggle visibility of full description on title click
        title.addEventListener("click", () => {
            contentContainer.style.display = contentContainer.style.display === "block" ? "none" : "block";
            // Update description text to show full text when expanded
            if (contentContainer.style.display === "block") {
                description.textContent = app.body; // Show full description
            } else {
                // Show short description with "Show More" option
                description.textContent = shortDescription + "...";
            }
        });

        appElement.appendChild(title);
        appElement.appendChild(contentContainer);

        appList.appendChild(appElement);
    });
});
