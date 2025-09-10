


(function() {
  // Try to find an iframe with a PDF src
  const iframe = document.querySelector('iframe[src*=".pdf"]');
  if (iframe && iframe.src) {
    // Redirect the tab to the PDF URL
    window.location.replace(iframe.src);
    return;
  }

  // Fallback: previous logic for other PDF cases
  function isPDFEmbedded() {
    const pdfSelectors = [
      'embed[type="application/pdf"]',
      'object[type="application/pdf"]',
      'embed[src*=".pdf"]',
      'object[data*=".pdf"]'
    ];
    return pdfSelectors.some(sel => document.querySelector(sel));
  }

  function showFullscreenPrompt() {
    const prompt = document.createElement("div");
    prompt.style.position = "fixed";
    prompt.style.top = "10px";
    prompt.style.right = "10px";
    prompt.style.zIndex = "9999";
    prompt.style.background = "#222";
    prompt.style.color = "#fff";
    prompt.style.padding = "12px 18px";
    prompt.style.borderRadius = "8px";
    prompt.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    prompt.style.cursor = "pointer";
    prompt.textContent = "Click here to enter fullscreen";
    prompt.onclick = () => {
      document.documentElement.requestFullscreen();
      prompt.remove();
    };
    document.body.appendChild(prompt);
  }

  async function tryFullscreen() {
    try {
      await document.documentElement.requestFullscreen();
      setTimeout(() => {
        if (!document.fullscreenElement) {
          showFullscreenPrompt();
        }
      }, 500);
    } catch (e) {
      showFullscreenPrompt();
    }
  }

  if (
    document.contentType === "application/pdf" ||
    window.location.href.endsWith(".pdf") ||
    isPDFEmbedded()
  ) {
    tryFullscreen();
  }
})();


// test1 = "https://learn.canterbury.ac.nz/mod/resource/view.php?id=4325097"
// test2 = "https://learn.canterbury.ac.nz/mod/resource/view.php?id=4375320"
// test3 = "https://learn.canterbury.ac.nz/mod/resource/view.php?id=4362657"

// <pdf-viewer id="viewer" style="--vertical-scrollbar-width: 15px; --horizontal-scrollbar-width: 0px;"></pdf-viewer>


