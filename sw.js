const CACHE='grow-with-me-v3';
const kinds=['sprout','blossom','cactus'];
const growth=kinds.flatMap(kind=>Array.from({length:5},(_,i)=>`./assets/characters/${kind}/growth/${i}.png`));
const moods=kinds.flatMap(kind=>['happy','sad','surprised','angry','sleepy','excited','confused'].map(state=>`./assets/characters/${kind}/moods/${state}.png`));
const poses=kinds.flatMap(kind=>['idle','talking','moving_with_wind','walking','jumping','looking_around'].map(state=>`./assets/characters/${kind}/poses/${state}.png`));
const SHELL=['./','./index.html','./css/styles.css','./css/theme.css','./js/storage.js','./js/characters.js','./js/app.js','./assets/assets.js','./assets/scenes/greenhouse-morning.jpg','./manifest.webmanifest','./assets/icons/icon.svg',...growth,...moods,...poses];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html'))));
});
