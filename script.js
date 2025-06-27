const iframe = document.getElementById("shamelaFrame");

iframe.onload = () => {
  try {
    const url = iframe.contentWindow.location.href;
    if (!url.includes("shamela.ws")) {
      alert("শুধুমাত্র shamela.ws ব্রাউজ করা যাবে!");
      iframe.src = "https://shamela.ws";
    }
  } catch (e) {
    console.warn("Cross-origin restriction:", e);
  }
};

function saveCurrentPage() {
  try {
    const url = iframe.contentWindow.location.href;
    localStorage.setItem("savedShamelaPage", url);
    alert("✅ পেইজ সেভ হয়েছে: " + url);
  } catch {
    alert("❌ সেভ করা সম্ভব না (Cross-origin সমস্যা)");
  }
}

function loadSavedPage() {
  const url = localStorage.getItem("savedShamelaPage");
  if (url) iframe.src = url;
  else alert("❗ কোনো সেভ পেইজ পাওয়া যায়নি");
}

async function translateArabicToBangla(text) {
  const resp = await fetch("https://your-server.com/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: `Translate this Arabic to Bengali: ${text}` })
  });
  const data = await resp.json();
  return data.translation || "অনুবাদ পাওয়া যায়নি";
}