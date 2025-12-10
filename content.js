console.log("content.js loaded yay");

chrome.storage.local.get("modes", (data) => {
  console.log("modes loaded : ", data.modes);

  // If no modes selected yet, just stop
  if (!data.modes || data.modes.length === 0) {
    console.log("No modes selected.");
    return;
  }
});
