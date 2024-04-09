const appData = [
{
 title: "Jieshuo+",
 description: "What's new: Optimized partial system progress bar prompts and operations. Improved some software touch experience focusing. Enhanced component editing segmentation mode by adding support for single line and double line segmentation. Optimized performance and reduced power consumption. Added an option to enhance application sound effects. Fixed bug with built-in eSpeak adjustment parameters being invalid. The super sound effect can now be downloaded for use in movies and TV shows; the selected application will be affected by this sound effect. Added a function for super sound effects for individual applications. It creates a new sub-folder under the effect folder in the sound effect program and adds sound effects to it, taking effect after re-applying the sound effect. Split movies into segments and assign line numbers for dynamic playback (long press for segment TV design). In the Editor, added a function to increase the display of line numbers for editing (long press the line button for quick switch). Added a quick switch command for auto-reading messages. Added a function to automatically read out message recordings. Fixed bug where pulling down the notification bar caused no sound effect. Added more example word functions for input method keyboards. Increased usage of custom translation engine functions (in advanced settings and voice assistant settings). Optimized content black list rules. Added description of blacklist keyword format. Optimized blacklist settings by increasing direct selection matching mode. Fixed abnormal bug when browsing Facebook list items for reading. Optimized display effects for timer recording function.",
 link: "https://www.mediafire.com/file/3wr2vjahb1cdc6g/Jieshuo%252B.apk"
},
{
 title: "Smart AudioBook Player_v10.7.7",
 description: "What's new: + Fixed situation when Sort button was invisible when one of Folder View modes is enabled. + Added 'Show chapters' to the Settings--Full version settings. If by some reason you don't want to see chapters - you can disable them now. + On some phones running Android 13 or later, the app could not display notifications and the user could not enable notifications. Now, if the app is not showing notifications, you can enable them in: Android Settings--Apps--Smart AudioBook Player--Notifications.",
 link: "https://www.mediafire.com/file/cxfl1hxd2h18mox/Smart+AudioBook+Player-v10.7.7(Premium).apk"
},
{
 title: "Smart Tools_v20.9",
 description: "Smart Tools - All In One is a useful kit of tools with 40+ carpenter construction measure and other tools and utilities. Use device's in-built sensors in all in one tool box app useful like a swiss army knife. Measure tools kit: dB level: Measure the sound dB level and its spectrum; Location (map) with altimeter; Distance meter; Stopwatch; Thermometer; Magnetic field meter (metal detector); Vibration level meter; Luminosity (LUX) level meter; Color sensor; Speedometer; Compass; Battery tester; Network speed test; Drag Racing. Other useful utilities kit: Unit currency and size converter; Calculator; Code scanner: QR code and bar code; Text scanner; NFC scanner; Accelerometer; Time zones; Mirror; Dog whistle; Microphone; Metronome; Pitch tuner; Counter; Random generator; Pedometer; Body mass index; Period tracker; Translator; Notepad.",
 link: "https://www.mediafire.com/file/sglj03dcq20a1tp/Smart+Tools-v20.9(Premium).apk"
},
{
 title: "AudioLab v1.2.22",
 description: "All In One music editor audio converter ringtone maker mp3 cutter voice recorder

AudioLab - The Only Audio Editor App You Will Ever Need

AudioLab - Audio Editor Recorder & Ringtone Maker is the most advanced professional all in one audio editing and recording app which has all the features that you would ever want!
So if you're producing music, a podcast, or just playing around with audio, AudioLab is for you to release your creativity. Free, Easy, Fast!

AudioLab - Audio Editor Recorder & Ringtone Maker offers a wide range of features such as audio trimming, sound maker, music mixer, sound editor, ringtone maker, ringtone creator, song merging, tag editing, convert and compress, voice recording, audio video splitting into clips, reversing, voice changing, text to speech, video to music conversion, karaoke, vocal removal, 3D music, fade, noise and silence filtering, and many more. Best part is that AudioLab comes with an instant preview feature that allows you to monitor every step of your modification, making it stand out from other audio editors.

🎵AudioLab Advance sound editing features🎵

✂️Easy music editing tools✂️
● Easily edit audio and videos all in one place
● Trim, clip, crop, copy, paste, add silence, fade, normalise song clips
● Supports every format( mp3, wav, flac, m4a, aac, ogg and more...",
 link: ""
},
{
 title: "VivaVideo - Video Editor&Maker",
 description: "VivaVideo is a Easy-to-use Video Editor and Pro Video Maker that helps you easily record and show your life.
Amateurs can cut and combine simple and intuitive clips anytime and anywhere, while professionals can have unlimited editing fun with powerful high-end editing functions. 

VivaVideo has all powerful video editing functions: cut videos, merge videos, edit videos with music, edit videos with cool transition effects, add stickers to videos, add text to videos, etc.

",
 link: "https://www.mediafire.com/file/x6g09bto1sfobd7/VivaVideo+v9.15.0+(ViP).apk"
},
{
 title: "Netflix",
 description: "Netflix is the leading subscription service for watching TV episodes and films.

Looking for the most talked-about TV programs and films from the around the world? They’re all on Netflix.

We’ve got award-winning series, films, documentaries and stand-up specials.

What you’ll love about Netflix:

• We add TV programmes and films all the time. Browse new titles or search for your favourites, and stream videos on your device.
• The more you watch, the better Netflix gets at recommending TV shows and movies you’ll love.
• Enjoy a safe watching experience just for children with family-friendly entertainment.
• Preview quick videos of our series and films and get notifications for new episodes and releases.

",
 link: "https://www.mediafire.com/file/bypdv5m8ol5k4ul/Netflix+(PREMIUM)+Update.apk"
},
{
 title: "Filmora - Video Editor & Maker",
 description: "What's new
AI Feature Access Without Logging In: Experience our outstanding AI features without any hassle!
Support for Track Switching: We have now upgraded the ability to easily switch between Picture-in-Picture (PIP) and main tracks, and support dragging clips to switch directly. Take advantage of this new feature to enhance your video editing experience.
Bug Fixes: Enhanced performance and user experience.",
 link: "https://www.mediafire.com/file/cmgn4tkt5o95002/Filmora+v13.2.01+(Stable).apk"
},
{
 title: "mx player",
 link: "https://www.mediafire.com/file/htwe2ax6mhr2s60/MX+Player+v1.83.0+(PREMIUM).apk",
 link: "https://www.mediafire.com/file/pba9o4zxkhsuzmq/MX+Player+v1.83.0+(PREMIUM)+Lite.apk"
}
];

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
                renderApps
(filteredApps);
}
// Initial rendering
        renderApps(appData);

        // Search functionality
        searchInput.addEventListener("input", function () {
            filterApps(this.value);
        });
    });