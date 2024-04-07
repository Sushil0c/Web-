document.addEventListener("DOMContentLoaded", function () {            
const appList = document.getElementById("appList");            
if (appList) {                
const mockApps = [                    
{                         
title: "Jieshuo+",                         
body: "What's new: Optimized partial system progress bar prompts and operations. Improved some software touch experience focusing. Enhanced component editing segmentation mode by adding support for single line and double line segmentation. Optimized performance and reduced power consumption. Added an option to enhance application sound effects. Fixed bug with built-in eSpeak adjustment parameters being invalid. The super sound effect can now be downloaded for use in movies and TV shows; the selected application will be affected by this sound effect. Added a function for super sound effects for individual applications. It creates a new sub-folder under the effect folder in the sound effect program and adds sound effects to it, taking effect after re-applying the sound effect. Split movies into segments and assign line numbers for dynamic playback (long press for segment TV design). In the Editor, added a function to increase the display of line numbers for editing (long press the line button for quick switch). Added a quick switch command for auto-reading messages. Added a function to automatically read out message recordings. Fixed bug where pulling down the notification bar caused no sound effect. Added more example word functions for input method keyboards. Increased usage of custom translation engine functions (in advanced settings and voice assistant settings). Optimized content black list rules. Added description of blacklist keyword format. Optimized blacklist settings by increasing direct selection matching mode. Fixed abnormal bug when browsing Facebook list items for reading. Optimized display effects for timer recording function.",                         
mediafireLink: "https://www.mediafire.com/file/3wr2vjahb1cdc6g/Jieshuo%252B.apk"                     
}                
];
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
                    downloadButton.addEventListener("click", () => {
                        window.open(app.mediafireLink, "_blank");                    
});
                    title.addEventListener("click", () => {
                        description.style.display = description.style.display === "block" ? "none" : "block";
                        downloadButton.style.display = downloadButton.style.display === "block" ? "none" : "block";                    
});