const testDivanime = document.getElementById("anime-box");
const testDiv = document.getElementById("activity-box");
const testDivcharacters = document.getElementById("characters-box");

const animebox = [
  {
    aniimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-OBj8AZKPvnV9.png",
  },
  {
    aniimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx120377-GdoVPT4ZVxJn.jpg",
  },
  {
    aniimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142984-nv2MWVWZ1yYH.jpg",
  },
  {
    aniimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21776-TUzyt2Y6jKmU.png",
  },
  {
    aniimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132405-qP7FQYGmNI3d.jpg",
  },
  {
    aniimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153152-eX8hkP9VmnRF.jpg",
  },
  {
    aniimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140999-8nRYAPkywhbl.jpg",
  },
  {
    aniimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-cJUNqCqzuApc.png",
  },
  {
    aniimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5680-Hw0SQuKGa9kl.png",
  },
  {
    aniimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145139-rRimpHGWLhym.png",
  },
];

for (ani of animebox) {
  testDivanime.innerHTML += `
      
          <div class="anime-box">
                <img class="anime-img" src="${ani.aniimg}" alt="img">

          </div> 
      
        `;
}

const activitybox = [
  {
    img_src: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158898-O3egiBNkxLQO.png",
    activityname: "Adrian",
    desc: "Watched episode 5 of Yozakura-san Chi no Daisakusen",
    miniimg_src: "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6292397-rZ6qqYS2pys4.png",
  },
  {
    img_src: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170890-me6a8u2b36M4.jpg",
    activityname: "Adrian2",
    desc: "Watched episode 4 of THE NEW GATE",
    miniimg_src: "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6292397-rZ6qqYS2pys4.png",
  },
  {
    img_src: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153288-tD2OmKy5CJab.jpg",
    activityname: "Adrian3",
    desc: "Watched episode 4 of Kaijuu 8-gou",
    miniimg_src: "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6292397-rZ6qqYS2pys4.png",
  },
  {
    img_src: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156822-Jzo2ITWgm4kM.jpg",
    activityname: "Adrian4",
    desc: "Watched episode 5 of Tensei Shitara Slime Datta Ken 3rd Season",
    miniimg_src: "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6292397-rZ6qqYS2pys4.png",
  },
  {
    img_src: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6956-Nxs7H25yHLNS.jpg",
    activityname: "Adrian5",
    desc: "Watched episode 8 - 11 of WORKING!!",
    miniimg_src: "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6292397-rZ6qqYS2pys4.png",
  },
];

for (activity of activitybox) {
  testDiv.innerHTML += `
    <div class="activity-box">
            <div class="activity-img-box">
              <img class="activity-img" src="${activity.img_src}" alt="img">
            </div>
            <div class="activity-inf">
              <div class="activity-name">${activity.activityname}</div>
              <div class="activity-text">
                <p>${activity.desc}</p>
              </div>
            </div>
            <div class="activity-inf-right">
              <div class="like-box">
                <button onclick="like('${activity.activityname}', 'likeCount-${activity.activityname}')" class="like-button">
                  <i class="material-symbols-outlined">favorite</i>
               </button>
                <span class="likeCount" id="likeCount-${activity.activityname}">0</span>
              </div>
            </div>
          </div>
    `;
}

const charactersbox = [
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b174190-Yl9xcIc5VTtI.jpg",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b207168-5yke9SeJWTCw.jpg",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b121956-5FbIbcd6gAZW.png",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/n7089-URQPMAn9I03h.jpg",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b264529-BvEusZnJLD2Y.png",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b257562-ocQOdbSMVKJv.png",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b266041-1HKgjJGP2MmM.png",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b261674-a8tJYvtzqWgC.png",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b19565-7gMiEAm7NGNK.png",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b80243-RzxE51iUU5eq.png",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b162248-57Xgk6EmwKRQ.png",
  },
  {
    charimg: "https://s4.anilist.co/file/anilistcdn/character/large/b136837-3WR22FYet8Hv.jpg",
  },
];

for (char of charactersbox) {
  testDivcharacters.innerHTML += `
    
        <div class="characters-box">
              <img class="characters-img" src="${char.charimg}" alt="img">
        </div> 
    
      `;
}

const likedList = [];

function like(anime, likeCountId) {
  const index = likedList.indexOf(anime);
  console.log(index);
  if (index === -1) {
    likedList.push(anime);
  } else {
    likedList.splice(index, 1);
  }

  console.log(likedList);

  const likeCount = document.getElementById(likeCountId);
  likeCount.textContent = likedList.includes(anime) ? parseInt(likeCount.textContent) + 1 : parseInt(likeCount.textContent) - 1;
}

document.getElementById("likeButton").addEventListener("click", like);
