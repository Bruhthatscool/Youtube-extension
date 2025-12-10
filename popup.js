console.log("oru popup aan ith if u didnt understand yet!");

// get checkboxes in popup
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// when user clicks save button
document.getElementById("saveBtn").addEventListener("click", () => {
  const selected = [];

  checkboxes.forEach((i) => {
    if (i.checked) {
      selected.push(i.value);
    }
  });

  // save to local storage
  chrome.storage.local.set({ modes: selected }, () => {
    console.log("saved modes : ", selected);
  });

  // send message so that content.js updates immediately when popup changes
  chrome.runtime.sendMessage({ action: "modesUpdated", modes: selected });
});
