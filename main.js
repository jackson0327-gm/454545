
// =======================
// 打字機
// =======================
const text = "Turning Logic into Reality ⚡";
let i = 0;

function typing() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

// =======================
// Projects data
// =======================
const projects = [
  {
    name: "AI Skill Analyzer",
    description: "A simple web tool that analyzes user input.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed"
  },
  {
    name: "Portfolio Website",
    description: "Personal responsive website.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed"
  }
];

// =======================
// Projects render（安全版）
// =======================
function renderProjects() {
  const container = document.getElementById("project-list");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p>${p.tech.join(", ")}</p>
      <p>Status: ${p.status}</p>
    `;

    fragment.appendChild(div);
  });

  container.appendChild(fragment);
}

// =======================
// Skills animation（安全版）
// =======================
function animateSkills() {
  document.querySelectorAll(".fill").forEach(el => {
    if (el.dataset.width) {
      el.style.width = el.dataset.width;
    }
  });
}

// =======================
// 初始化（重點）
// =======================
document.addEventListener("DOMContentLoaded", () => {
  typing();
  renderProjects();
  animateSkills();
});