<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home</title>
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

<nav class="navbar">
  <a href="index.html">Home</a>
  <a href="pages/about.html">About</a>
  <a href="pages/skills.html">Skills</a>
  <a href="pages/projects.html">Projects</a>
</nav>

<div class="container">
  <h1 class="title" id="typing"></h1>
  <p>這個網站用來展示我的學習歷程、技能與專案作品。</p>
</div>

<script src="js/main.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About</title>
  <link rel="stylesheet" href="../css/style.css">
</head>

<body>

<nav class="navbar">
  <a href="../index.html">Home</a>
  <a href="about.html">About</a>
  <a href="skills.html">Skills</a>
  <a href="projects.html">Projects</a>
</nav>

<div class="container">
  <h1>About Me</h1>

  <div class="card">
    <p>電機系學生</p>
    <p>目標：未來前往日本工作 🇯🇵</p>
  </div>

  <h2>Courses</h2>

  <div class="card">
    <p><b>Digital Logic Design</b></p>
    <p>布林代數與數位電路設計</p>
  </div>

  <div class="card">
    <p><b>Calculus</b></p>
    <p>極限、微分、積分基礎</p>
  </div>

</div>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Projects</title>
  <link rel="stylesheet" href="../css/style.css">
</head>

<body>

<nav class="navbar">
  <a href="../index.html">Home</a>
  <a href="about.html">About</a>
  <a href="skills.html">Skills</a>
  <a href="projects.html">Projects</a>
</nav>

<div class="container">
  <h1>Projects</h1>

  <div id="project-list"></div>
</div>

<script src="../js/main.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Skills</title>
  <link rel="stylesheet" href="../css/style.css">
</head>

<body>

<nav class="navbar">
  <a href="../index.html">Home</a>
  <a href="about.html">About</a>
  <a href="skills.html">Skills</a>
  <a href="projects.html">Projects</a>
</nav>

<div class="container">
  <h1>Skills</h1>

  <div class="card">
    <p>C / C++</p>
    <div class="bar"><div class="fill" data-width="80%"></div></div>

    <p>Digital Logic</p>
    <div class="bar"><div class="fill" data-width="85%"></div></div>

    <p>English</p>
    <div class="bar"><div class="fill" data-width="60%"></div></div>

    <p>Japanese</p>
    <div class="bar"><div class="fill" data-width="40%"></div></div>
  </div>
</div>

<script src="../js/main.js"></script>
</body>
</html>



body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.container {
  text-align: center;
  margin-top: 80px;
}

.title {
  font-size: 40px;
}

.card {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 15px;
  width: 300px;
  margin: 20px auto;
  backdrop-filter: blur(10px);
}

.fade-in {
  animation: fade 2s;
}

@keyframes fade {
  from {opacity: 0;}
  to {opacity: 1;}
}

.bar {
  background: rgba(255,255,255,0.2);
  border-radius: 10px;
  overflow: hidden;
}

.fill {
  height: 10px;
  width: 0;
  background: #00c6ff;
  transition: 2s;
}

/* ===== FIXED FLIP CARD ===== */
.project {
  perspective: 1000px;
  position: relative;
  height: 150px;
}

.project .front,
.project .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
}

.project .back {
  transform: rotateY(180deg);
}

.project:hover .front {
  transform: rotateY(180deg);
}

.project:hover .back {
  transform: rotateY(360deg);
}

/* =======================
   通識課加分優化
======================= */

/* 讓排版更乾淨 */
.container {
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
}

/* navbar 更穩定 */
.navbar {
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 20px;
  flex-wrap: wrap;
}

/* 卡片更一致 */
.card {
  background: rgba(255,255,255,0.08);
  padding: 20px;
  border-radius: 12px;
  margin: 15px auto;
  max-width: 500px;
}

/* 技能條更平滑 */
.fill {
  height: 10px;
  width: 0;
  background: #00c6ff;
  transition: width 1.5s ease;
}

/* hover 小互動（加分但不過頭） */
.card:hover {
  transform: translateY(-3px);
  transition: 0.3s;
}



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
