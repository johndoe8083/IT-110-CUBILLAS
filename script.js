let likes = 0;

const count = document.getElementById("count");
const likeBtn = document.getElementById("likeBtn");
const resetBtn = document.getElementById("resetBtn");
const darkToggle = document.getElementById("darkToggle");
const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");
const sendBtn = document.getElementById("sendBtn");
const nameInput = document.getElementById("nameInput");
const msgInput = document.getElementById("msgInput");
const status = document.getElementById("status");

likeBtn.addEventListener("click", () => {
  likes++;
  count.textContent = likes;
});

resetBtn.addEventListener("click", () => {
  likes = 0;
  count.textContent = likes;
});

darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", darkToggle.checked);
});

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    pages.forEach(p => {
      p.hidden = p.id !== link.dataset.page;
    });
  });
});

sendBtn.addEventListener("click", () => {
  if (nameInput.value.trim() === "" || msgInput.value.trim() === "") {
    status.textContent = "Please fill in both fields.";
    return;
  }
  status.textContent = "Thanks, " + nameInput.value.trim() + "! Message sent.";
  nameInput.value = "";
  msgInput.value = "";
});