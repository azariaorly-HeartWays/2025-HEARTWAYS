// HeartWays App with simple router
const routes = {
  "home": "/",
  "music": "/pages/music.html",
  "writing": "/pages/writing.html",
  "healing": "/pages/healing.html",
  "art": "/pages/art.html",
  "voice": "/pages/voice.html",
  "gift": "/pages/gift.html",
  "map": "/pages/map.html",
  "capsule": "/pages/capsule.html",
  "about": "/pages/about.html"
};

function navigate(path){
  if(routes[path]){
    window.location.href = routes[path];
  }
}
