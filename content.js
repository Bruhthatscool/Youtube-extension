console.log("content.js loaded yay");

// listen for message from popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "modesUpdated") {
    console.log("Modes updated - reloading filters...");

    chrome.storage.local.get("modes", (data) => {
      console.log("modes loaded : ", data.modes);

      // call function to apply modes
      applyModes(data.modes);
    });
  }
});

// for when page is loaded
chrome.storage.local.get("modes", (data) => {
  console.log("modes loaded : ", data.modes);

  // If no modes selected yet, just stop
  if (!data.modes || data.modes.length === 0) {
    console.log("No modes selected.");
    return;
  }

  // call function to apply modes
  applyModes(data.modes);
});

function applyModes(modes) {
  console.log("Applying modes : ", modes);
}
