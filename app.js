// Darkest Dungeon Estate Guide - App Logic

function createList(items) {
  const ul = document.createElement('ul');
  items.forEach(i => {
    const li = document.createElement('li');
    li.textContent = i;
    ul.appendChild(li);
  });
  return ul;
}

// Render Regions & Teams
function renderRegions() {
  const container = document.getElementById('regions-container');
  for (const region in REGIONS) {
    const regionDiv = document.createElement('div');
    regionDiv.classList.add('team');
    const title = document.createElement('h3');
    title.textContent = region.toUpperCase();
    regionDiv.appendChild(title);

    REGIONS[region].teams.forEach(team => {
      const t = document.createElement('div');
      const lbl = document.createElement('label');
      lbl.textContent = team.label;
      t.appendChild(lbl);

      for (let pos = 4; pos >= 1; pos--) {
        if (team[pos]) {
          const hero = document.createElement('p');
          hero.textContent = `${team[pos].main} (${team[pos].mS.join(', ')}) | ${team[pos].sub} (${team[pos].sS.join(', ')})`;
          t.appendChild(hero);
        }
      }

      regionDiv.appendChild(t);
    });

    container.appendChild(regionDiv);
  }
}

// Render Bosses
function renderBosses() {
  const container = document.getElementById('bosses-container');
  BOSSES.forEach(b => {
    const div = document.createElement('div');
    div.classList.add('boss');

    const name = document.createElement('h3');
    name.textContent = `${b.name} - ${b.region}`;
    div.appendChild(name);

    div.appendChild(createList(b.mechanics));
    div.appendChild(createList(b.avoid));

    container.appendChild(div);
  });
}

// Render Dungeon Runs
function renderRuns() {
  const container = document.getElementById('runs-container');
  DD_RUNS.forEach(r => {
    const div = document.createElement('div');
    div.classList.add('run');

    const name = document.createElement('h3');
    name.textContent = r.name;
    div.appendChild(name);

    const subtitle = document.createElement('p');
    subtitle.textContent = r.subtitle;
    div.appendChild(subtitle);

    div.appendChild(createList(r.key));
    div.appendChild(createList(r.watch));

    container.appendChild(div);
  });
}

// Render Provisions
function renderProvisions() {
  const container = document.getElementById('provisions-container');
  for (const tier in PROVISIONS) {
    const tierDiv = document.createElement('div');
    tierDiv.classList.add('provision');

    const h3 = document.createElement('h3');
    h3.textContent = `${tier.toUpperCase()} (${PROVISIONS[tier].rooms})`;
    tierDiv.appendChild(h3);

    const note = document.createElement('p');
    note.textContent = PROVISIONS[tier].note;
    tierDiv.appendChild(note);

    for (const region in PROVISIONS[tier].regions) {
      const regionList = document.createElement('div');
      const rTitle = document.createElement('h4');
      rTitle.textContent = region.toUpperCase();
      regionList.appendChild(rTitle);

      PROVISIONS[tier].regions[region].forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item[0]} x${item[1]} - ${item[2]}`;
        regionList.appendChild(li);
      });

      tierDiv.appendChild(regionList);
    }

    container.appendChild(tierDiv);
  }
}

// Initialize App
function init() {
  renderRegions();
  renderBosses();
  renderRuns();
  renderProvisions();
}

document.addEventListener('DOMContentLoaded', init);