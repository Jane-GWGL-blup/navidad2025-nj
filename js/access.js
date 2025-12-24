export function showAccess() {

const screen = document.getElementById("access-screen");
const btn = document.getElementById("access-btn");
const input = document.getElementById("access-input");
const error = document.getElementById("access-error");

btn.addEventListener("click", async () => {
  const value = input.value.trim();

  const res = await fetch("/api/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: value })
  });

  if (res.ok) {
    screen.style.opacity = "0";
    setTimeout(() => screen.remove(), 500);
  } else {
    error.textContent = "Clave incorrecta ❌";
  }
});

}



