function toggleDiv() {
  const myDiv = document.getElementById("hidden-settings");
  myDiv.style.display = myDiv.style.display === "none" ? "block" : "none";
}

function toggleOptions() {
  const options = document.querySelector(".options");
  options.style.display = options.style.display === "none" ? "block" : "none";
}

function selectOption(option) {
  document.querySelector(".selected-option").textContent = option;
  document.querySelector(".options").style.display = "none";
}

const testDiv = document.getElementById("listanime");

const listanimebox = [
  {
    listimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx164212-xjkAkp6SKaCZ.jpg",
    listname: "Girls Band Cry",
    listscore: "9",
    listprogress: "4/13",
    listtype: "TV",
  },
  {
    listimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153288-tD2OmKy5CJab.jpg",
    listname: "Kaijuu 8-gou",
    listscore: "9",
    listprogress: "4/12",
    listtype: "TV",
  },
  {
    listimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166873-JC56ExYSC2YB.jpg",
    listname: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
    listscore: "9",
    listprogress: "4/12",
    listtype: "TV",
  },
  {
    listimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx155657-qZo0UNx6rEN0.jpg",
    listname: "Shuumatsu Train Doko e Iku?",
    listscore: "9",
    listprogress: "5/12",
    listtype: "TV",
  },
  {
    listimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163078-kIhCmQARcoOD.jpg",
    listname: "Yoru no Kurage wa Oyogenai",
    listscore: "9",
    listprogress: "4/12",
    listtype: "TV",
  },
  {
    listimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx160090-EHP57CniSa7I.jpg",
    listname: "Kaii to Otome to Kamikakushi",
    listscore: "8",
    listprogress: "3/12",
    listtype: "TV",
  },
  {
    listimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158417-2jUaUdiGBZQ8.jpg",
    listname: "Sentai Daishikkaku",
    listscore: "8",
    listprogress: "4/12",
    listtype: "TV",
  },
  {
    listimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166910-pdgLmHMLdzUR.jpg",
    listname: "The Fable",
    listscore: "8",
    listprogress: "4/25",
    listtype: "TV",
  },
];
for (listanime of listanimebox) {
  testDiv.innerHTML += `
  <div class="list-anime">
                <div class="single-anime">
                  <div class="single-img-box">
                    <div class="threepoint" onclick="toggleDiv()">
                      <span class="material-symbols-outlined"> more_horiz </span>
                    </div>
                    <img class="single-img" src="${listanime.listimg}" alt="img" />
                  </div>
                  <div class="single-name">${listanime.listname}</div>
                  <div class="single-score">${listanime.listscore}</div>
                  <div class="single-progress">${listanime.listprogress}</div>
                  <div class="single-type">${listanime.listtype}</div>
                </div>
              </div>
  `;
}
