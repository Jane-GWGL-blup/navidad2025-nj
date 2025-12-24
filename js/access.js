
export function showAccess() {

// ---------------- 🔐 SISTEMA DE ACCESO ---------------- //
const hashCorrecto = "3c2baa6a03bb3c44aaebb6768d826059faf94926d57fc65342d3ba06507b6423";



async function sha256(text){
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const accessScreen = document.getElementById("access-screen");
const accessBtn = document.getElementById("access-btn");
const accessInput = document.getElementById("access-input");
const accessError = document.getElementById("access-error");

accessBtn.addEventListener("click", async () => {
  const value = accessInput.value.trim();
  const hash = await sha256(value);

  if(hash === hashCorrecto){
    accessScreen.style.opacity = "0";
    accessScreen.style.pointerEvents = "none";

    setTimeout(() => {
      accessScreen.style.display = "none";
    }, 600);
  } else {
    accessError.textContent = "Clave incorrecta ❌";
  }
});

}


