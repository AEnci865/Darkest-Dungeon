const content = document.getElementById("content");

// Tab buttons
const tabs = {
  "tab-regions": showRegions,
  "tab-bosses": showBosses,
  "tab-runs": showRuns,
  "tab-provisions": showProvisions,
  "tab-classes": showClasses,
  "tab-quirks": showQuirks
};

for (let id in tabs) {
  document.getElementById(id).addEventListener("click", () => {
    setActiveTab(id);
    tabs[id]();
  });
}

function setActiveTab(activeId) {
  Object.keys(tabs).forEach(id => {
    document.getElementById(id).classList.remove("active");
  });
  document.getElementById(activeId).classList.add("active");
}

// Default tab
setActiveTab("tab-regions");
showRegions();

// --- DATA DISPLAY FUNCTIONS ---

function showRegions() {
  content.innerHTML = "";
  for (let region in REGIONS) {
    const sec = document.createElement("section");
    sec.innerHTML = `<h2>${region.toUpperCase()}</h2>`;
    REGIONS[region].teams.forEach(team => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<strong>${team.label}</strong><br>` + 
        Object.entries(team)
          .filter(([k]) => k !== "label")
          .map(([rank, hero]) => {
            return `Rank ${rank}: ${hero.main} (${hero.mS.join(", ")}) / ${hero.sub} (${hero.sS.join(", ")})`;
          }).join("<br>");
      sec.appendChild(div);
    });
    content.appendChild(sec);
  }
}

function showBosses() {
  content.innerHTML = "";
  BOSSES.forEach(boss => {
    const sec = document.createElement("section");
    sec.innerHTML = `<h2>${boss.name} (${boss.region})</h2>
      <p><strong>Tiers:</strong> ${boss.tiers}</p>
      <p><strong>Teams:</strong></p>
      <ul>${boss.teams.map(t => `<li>${t.label}: ${t.heroes}</li>`).join("")}</ul>
      <p><strong>Mechanics:</strong></p>
      <ul>${boss.mechanics.map(m => `<li>${m}</li>`).join("")}</ul>
      <p><strong>Avoid:</strong></p>
      <ul>${boss.avoid.map(a => `<li>${a}</li>`).join("")}</ul>`;
    content.appendChild(sec);
  });
}

function showRuns() {
  content.innerHTML = "";
  DD_RUNS.forEach(run => {
    const sec = document.createElement("section");
    sec.innerHTML = `<h2>${run.name}</h2>
      <p><em>${run.subtitle}</em></p>
      <p><strong>Team:</strong> ${run.team}</p>
      <p>${run.desc}</p>
      <p><strong>Key Tips:</strong></p>
      <ul>${run.key.map(k => `<li>${k}</li>`).join("")}</ul>
      <p><strong>Watch:</strong></p>
      <ul>${run.watch.map(w => `<li>${w}</li>`).join("")}</ul>`;
    content.appendChild(sec);
  });
}

function showProvisions() {
  content.innerHTML = "";
  ["short","medium","long"].forEach(length => {
    const sec = document.createElement("section");
    sec.innerHTML = `<h2>${length.toUpperCase()} (${PROVISIONS[length].rooms})</h2>
      <p>${PROVISIONS[length].note}</p>`;
    for (let region in PROVISIONS[length].regions) {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<strong>${region.toUpperCase()}</strong><br>` +
        PROVISIONS[length].regions[region].map(p => `${p[0]} x${p[1]} - ${p[2]}`).join("<br>");
      sec.appendChild(div);
    }
    content.appendChild(sec);
  });
}

function showClasses() {
  content.innerHTML = "<ul>" + CLASSES.map(c => `<li>${c}</li>`).join("") + "</ul>";
}

function showQuirks() {
  content.innerHTML = "<h2>Positive Quirks</h2><ul>" + 
    POS_QUIRKS.map(q => `<li>${q.name} - ${q.effect}</li>`).join("") + 
    "</ul><h2>Negative Quirks</h2><ul>" + 
    NEG_QUIRKS.map(q => `<li>${q.name} - ${q.effect}</li>`).join("") + "</ul>";
}