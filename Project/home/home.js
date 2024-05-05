const testDivAiring = document.getElementById("airing-box");
const testDiv = document.getElementById("activity-box");

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
            <img class="activity-img" src="${activity.img_src}" alt="animeimg">
          </div>
          <div class="activity-inf">
            <div class="activity-name">${activity.activityname}</div>
            <div class="activity-text">
              <p>${activity.desc}</p>
            </div>
            <div class="activity-img-box-mini"> <img class="activity-img-mini" src="${activity.miniimg_src}" alt="profileimg"></div>
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

const airingbox = [
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166873-JC56ExYSC2YB.jpg",
    airep: "Ep 5",
    airtime: "45m",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx155657-qZo0UNx6rEN0.jpg",
    airep: "Ep 6",
    airtime: "1d ",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139518-GZWYKM8Kg1S2.png",
    airep: "Ep 18",
    airtime: "2d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170130-tvhn13WYQ2qM.jpg",
    airep: "Ep 6",
    airtime: "3d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156415-zwP9deA786S1.jpg",
    airep: "Ep 6",
    airtime: "3d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169417-izsfKg0hasRd.png",
    airep: "Ep 6",
    airtime: "4d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145728-YUKXjN2E81Pq.jpg",
    airep: "Ep 4",
    airtime: "4d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx155890-1dhQgpT8wYkF.jpg",
    airep: "Ep 10",
    airtime: "5d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174653-OsnK4BuENjUT.jpg",
    airep: "Ep 6",
    airtime: "5d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163270-oxwgbe43Cpog.jpg",
    airep: "Ep 8",
    airtime: "5d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156023-cY4NC8gCcAg7.jpg",
    airep: "Ep 3",
    airtime: "6d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156822-Jzo2ITWgm4kM.jpg",
    airep: "Ep 6",
    airtime: "6d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153288-tD2OmKy5CJab.jpg",
    airep: "Ep 9",
    airtime: "6d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166910-pdgLmHMLdzUR.jpg",
    airep: "Ep 10",
    airtime: "7d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163078-kIhCmQARcoOD.jpg",
    airep: "Ep 2",
    airtime: "7d",
  },
  {
    airimg: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170890-me6a8u2b36M4.jpg",
    airep: "Ep 5",
    airtime: "7d",
  },
];

for (air of airingbox) {
  testDivAiring.innerHTML += `
    
        <div class="airing-box">
              <img class="airing-img" src="${air.airimg}" alt="animeimg">
          <div class="airing-text-box">
            <div class="airing-text-ep">${air.airep}</div>
            <div class="airing-text-time">${air.airtime}</div>
          </div>
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
