    const textInput = document.getElementById('text-input');
    const convertButton = document.getElementById('convert-button');
    const voiceSelect = document.getElementById('voice-select');

    convertButton.addEventListener('click', async () => {
      const text = textInput.value;

      if (text.trim() === '') {
        alert('Please enter some text to convert.');
        return;
      }

      const apiKey = 'e296c0ba461459ffa38b58619b7a30c1';
      const voiceId = voiceSelect.value;
      const url = `https://api.elevenlabs.io/speech`;

      const data = {
        text,
        voice: voiceId,
      };

      try {
        convertButton.textContent = 'Generating Audio...';
        convertButton.disabled = true; // Disable button while processing

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const audioData = await response.blob();
        const audioUrl = URL.createObjectURL(audioData);
        const audioElement = new Audio(audioUrl);

        audioElement.onloadedmetadata = () => {
          convertButton.textContent = 'Play Audio';
          convertButton.disabled = false;
        };

        audioElement.play();
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
        convertButton.textContent = 'Convert to Audio';
        convertButton.disabled = false;
      }
    });
