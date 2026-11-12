const BASE='https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/';
const d=(group,id,word,card,image)=>({group,id,word,card:BASE+card,image:BASE+image,family:id.split('-')[0]});
const DATA=[
  d('ㄧ','E08-3','影子','e08-3-b06cde14.jpg','e08-3-3196ec3e.jpg'),
  d('ㄧ','E08-4','硬幣','e08-4-7c8e08c5.jpg','e08-4-10872aac.jpg'),
  d('ㄧ','E01-1','小鴨子','e01-1-117b9843.jpg','e01-1-20fe8830.jpg'),
  d('ㄧ','E01-2','刷牙','e01-2-59ac08d6.jpg','e01-2-66a1b5a0.jpg'),
  d('ㄧ','E01-4','驚訝','e01-4-d3234c18.jpg','e01-4-6a1bc83c.jpg'),
  d('ㄧ','E02-2','爺爺','e02-2-d9d3d462.jpg','e02-2-3f50e290.jpg'),
  d('ㄧ','E02-3','野餐','e02-3-f8da79c1.jpg','e02-3-7634c443.jpg'),
  d('ㄧ','E02-4','葉子','e02-4-64f1bf0e.jpg','e02-4-d8b586e9.jpg'),
  d('ㄧ','E03-2','搖搖馬','e03-2-398264aa.jpg','e03-2-5d4d6546.jpg'),
  d('ㄧ','E03-4','鑰匙','e03-4-d58f6540.jpg','e03-4-3e256be1.jpg'),
  d('ㄧ','E04-1','優勝','e04-1-6d256408.jpg','e04-1-c184f132.jpg'),
  d('ㄧ','E04-2','游泳','e04-2-5539a8cd.jpg','e04-2-02c8dc59.jpg'),
  d('ㄧ','E04-3','朋友','e04-3-b0ffab20.jpg','e04-3-626cb7f2.jpg'),
  d('ㄧ','E04-4','柚子','e04-4-f09b80ff.jpg','e04-4-d8c70670.jpg'),
  d('ㄧ','E05-1','煙火','e05-1-396b1c7b.jpg','e05-1-4d7ce291.jpg'),
  d('ㄧ','E05-2','顏色','e05-2-9150f4fe.jpg','e05-2-26e566eb.jpg'),
  d('ㄧ','E05-3','眼鏡','e05-3-df3ab9b1.jpg','e05-3-44ec955f.jpg'),
  d('ㄧ','E05-4','燕子','e05-4-94319aa8.jpg','e05-4-1bf60652.jpg'),
  d('ㄧ','E06-1','音樂','e06-1-98016731.jpg','e06-1-bc6fe2e2.jpg'),
  d('ㄧ','E06-2','銀牌','e06-2-d2f8c5f8.jpg','e06-2-a7522b3f.jpg'),
  d('ㄧ','E06-3','飲料','e06-3-97bfe73a.jpg','e06-3-2efb54dc.jpg'),
  d('ㄧ','E06-4','印章','e06-4-f9b5b563.jpg','e06-4-d4862699.jpg'),
  d('ㄧ','E07-2','太陽','e07-2-e8381fc8.jpg','e07-2-e5504f5f.jpg'),
  d('ㄧ','E07-3','養魚','e07-3-1da8ff70.jpg','e07-3-5fd11738.jpg'),
  d('ㄧ','E07-4','可愛模樣','e07-4-e83a2be2.jpg','e07-4-280e80d5.jpg'),
  d('ㄧ','E08-1','櫻桃','e08-1-45f0170a.jpg','e08-1-74ae8d71.jpg'),
  d('ㄧ','E08-2','螢火蟲','e08-2-0b773313.jpg','e08-2-4a3ca893.jpg'),
  d('ㄨ','X06-4','問號','x06-4-233de453.jpg','x06-4-de573db3.jpg'),
  d('ㄨ','X07-2','國王','x07-2-9948f3a0.jpg','x07-2-997e1dbd.jpg'),
  d('ㄨ','X07-3','網球','x07-3-e492bef9.jpg','x07-3-b810f9ee.jpg'),
  d('ㄨ','X07-4','望遠鏡','x07-4-375ac54b.jpg','x07-4-37066098.jpg'),
  d('ㄨ','X08-1','小蜜蜂嗡嗡嗡','x08-1-b58f93f4.jpg','x08-1-c4277a34.jpg'),
  d('ㄨ','X01-1','挖土機','x01-1-d6eb187f.jpg','x01-1-7870b129.jpg'),
  d('ㄨ','X01-2','娃娃','x01-2-47ac02e2.jpg','x01-2-b0e7cb99.jpg'),
  d('ㄨ','X01-3','瓦斯爐','x01-3-54be8b1e.jpg','x01-3-fd38377f.jpg'),
  d('ㄨ','X01-4','襪子','x01-4-60d70e08.jpg','x01-4-e9e4b1b9.jpg'),
  d('ㄨ','X02-1','鳥窩','x02-1-1ab857ba.jpg','x02-1-c8de7682.jpg'),
  d('ㄨ','X02-3','我','x02-3-906f7197.jpg','x02-3-d7aa6a73.jpg'),
  d('ㄨ','X02-4','握手','x02-4-246257fd.jpg','x02-4-b6917d15.jpg'),
  d('ㄨ','X03-1','歪斜','x03-1-1f01ce55.jpg','x03-1-53a5b376.jpg'),
  d('ㄨ','X03-4','外套','x03-4-91b28ee4.jpg','x03-4-f21d5288.jpg'),
  d('ㄨ','X04-2','圍巾','x04-2-0a9eb403.jpg','x04-2-e90fb50a.jpg'),
  d('ㄨ','X04-3','尾巴','x04-3-c42f3264.jpg','x04-3-e619b380.jpg'),
  d('ㄨ','X04-4','餵食','x04-4-6a2167c1.jpg','x04-4-439171b5.jpg'),
  d('ㄨ','X05-1','臺灣','x05-1-9557c31e.jpg','x05-1-9eff757e.jpg'),
  d('ㄨ','X05-2','玩具','x05-2-0aeaad38.jpg','x05-2-2f1c17f2.jpg'),
  d('ㄨ','X05-3','碗','x05-3-fb94aa79.jpg','x05-3-626ac786.jpg'),
  d('ㄨ','X05-4','萬花筒','x05-4-08e9388b.jpg','x05-4-29e36789.jpg'),
  d('ㄨ','X06-1','溫度計','x06-1-731f3d76.jpg','x06-1-c88ae639.jpg'),
  d('ㄨ','X06-2','蚊子','x06-2-b5089f9e.jpg','x06-2-2c51d8be.jpg'),
  d('ㄩ','U01-1','約定','u01-1-6541f6f5.jpg','u01-1-c7891f2d.jpg'),
  d('ㄩ','U01-4','月亮','u01-4-d62f38f4.jpg','u01-4-58aa45ac.jpg'),
  d('ㄩ','U02-2','圓形','u02-2-fc112f0b.jpg','u02-2-cb9680c7.jpg'),
  d('ㄩ','U02-3','遙遠','u02-3-bcf7ad28.jpg','u02-3-ea008631.jpg'),
  d('ㄩ','U02-4','醫院','u02-4-6e071038.jpg','u02-4-8b7c74ac.jpg'),
  d('ㄩ','U03-1','頭暈','u03-1-04bf350f.jpg','u03-1-7042689e.jpg'),
  d('ㄩ','U03-2','白雲','u03-2-e11c310e.jpg','u03-2-a625714a.jpg'),
  d('ㄩ','U03-4','運動','u03-4-0099e0ec.jpg','u03-4-55f81927.jpg'),
  d('ㄩ','U04-3','游泳圈','u04-3-42b95347.jpg','u04-3-f58b7151.jpg'),
  d('ㄩ','U04-4','用力','u04-4-07651f66.jpg','u04-4-5593aa68.jpg')
];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};
let mode='learn',round=0,current=null,deck=[],selectedGroups=new Set(['ㄧ','ㄨ','ㄩ']),questionCount=10;
function show(id){$$('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active')}
function closeModal(){$('#resultModal').classList.add('hidden')}
function goHome(){closeModal();show('home');$('#homeBtn').classList.add('hidden');$('#progress').classList.add('hidden')}
function openSettings(selected){mode=selected;$('#settingsTitle').textContent={learn:'學習模式設定',practice:'練習模式設定',challenge:'挑戰模式設定'}[mode];$('#homeBtn').classList.remove('hidden');$('#progress').classList.add('hidden');show('settingsScreen')}
function selectedPool(){return DATA.filter(x=>selectedGroups.has(x.group))}
function seenKey(){return `combined-rhyme-seen-${mode}`}
function buildDeck(){const pool=selectedPool();let seen=[];try{seen=JSON.parse(localStorage.getItem(seenKey())||'[]')}catch{}const seenSet=new Set(seen);let unseen=pool.filter(x=>!seenSet.has(x.id));if(!unseen.length){unseen=[...pool];localStorage.removeItem(seenKey())}const ordered=[...shuffle(unseen),...shuffle(pool.filter(x=>seenSet.has(x.id)))];const wanted=questionCount==='all'?pool.length:Math.min(Number(questionCount),pool.length);return ordered.slice(0,wanted)}
function start(){round=0;deck=buildDeck();$('#progress').classList.remove('hidden');preloadDeck();next()}
function markSeen(item){let seen=[];try{seen=JSON.parse(localStorage.getItem(seenKey())||'[]')}catch{}if(!seen.includes(item.id)){seen.push(item.id);localStorage.setItem(seenKey(),JSON.stringify(seen))}}
function next(){closeModal();if(round>=deck.length){show('finishScreen');$('#progress').textContent='完成！';return}current=deck[round];markSeen(current);$('#progress').textContent=`第 ${round+1} / ${deck.length} 題`;setImage($('#rhymeCard'),current.card,'結合韻卡片');show('cardScreen')}
function setImage(img,src,alt){img.classList.remove('image-error');img.alt=alt;img.onerror=()=>{img.classList.add('image-error');img.alt=`圖片暫時無法載入：${alt}`};img.src=src}
function preloadDeck(){deck.slice(0,8).forEach(item=>[item.card,item.image].forEach(src=>{const img=new Image();img.src=src}))}
function distractors(count){const preferred=DATA.filter(x=>x.id!==current.id&&x.family!==current.family);const chosen=shuffle(preferred).slice(0,count);if(chosen.length<count)chosen.push(...shuffle(DATA.filter(x=>x.id!==current.id&&!chosen.some(y=>y.id===x.id))).slice(0,count-chosen.length));return chosen}
function displayChoices(){const count=mode==='learn'?1:mode==='practice'?2:3;const items=shuffle([current,...distractors(count-1)]);const box=$('#choices');box.innerHTML='';setImage($('#rhymeReminder'),current.card,'本題結合韻卡片');$('#nextBtn').classList.add('hidden');closeModal();$('#choiceInstruction').innerHTML=mode==='learn'?'<span>②</span> 看看圖片，跟著念出語詞':'<span>②</span> 哪一張圖片和卡片的結合韻一樣？';items.forEach(item=>{const b=document.createElement('button');b.className='choice';const img=document.createElement('img');setImage(img,item.image,item.word);b.appendChild(img);b.onclick=()=>answer(b,item);box.appendChild(b)});show('choiceScreen');if(mode==='learn')reveal(box.firstElementChild)}
function reveal(button){if(button.dataset.revealed)return;button.dataset.revealed='true';button.classList.add('correct');if(mode==='learn'){$('#nextBtn').classList.remove('hidden');return}openModal(true)}
function openModal(correct){$('#modalIcon').textContent=correct?'🎉':'💪';$('#modalTitle').textContent=correct?'答對了！':'再想一想！';$('#modalMessage').textContent=correct?'你找到相同的結合韻了！':'看看旁邊的結合韻卡，再試一次。';$('#modalNextBtn').classList.toggle('hidden',!correct);$('#retryBtn').classList.toggle('hidden',correct);$('#resultModal').classList.remove('hidden')}
function answer(button,item){if(mode==='learn'){reveal(button);return}if(item.id===current.id){$$('.choice').forEach(b=>b.disabled=true);reveal(button)}else{button.classList.add('wrong');openModal(false)}}
$$('.mode-card').forEach(b=>b.onclick=()=>openSettings(b.dataset.mode));
$$('.toggle-chip').forEach(b=>b.onclick=()=>{const g=b.dataset.group;if(selectedGroups.has(g)&&selectedGroups.size===1)return;selectedGroups.has(g)?selectedGroups.delete(g):selectedGroups.add(g);b.classList.toggle('selected',selectedGroups.has(g))});
$$('.count-chip').forEach(b=>b.onclick=()=>{$$('.count-chip').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');questionCount=b.dataset.count});
$('#settingsBackBtn').onclick=goHome;$('#startGameBtn').onclick=start;$('#showPictures').onclick=displayChoices;$('#nextBtn').onclick=()=>{round++;next()};$('#modalNextBtn').onclick=()=>{round++;next()};$('#retryBtn').onclick=()=>{closeModal();$$('.choice').forEach(b=>b.classList.remove('wrong'))};$('#homeBtn').onclick=goHome;$('#finishHomeBtn').onclick=goHome;$('#againBtn').onclick=()=>{round=0;deck=buildDeck();preloadDeck();next()};
const fullscreenBtn=$('#fullscreenBtn');
function isFullscreen(){return Boolean(document.fullscreenElement||document.webkitFullscreenElement)}
function syncFullscreenButton(){const active=isFullscreen();fullscreenBtn.setAttribute('aria-pressed',String(active));fullscreenBtn.setAttribute('aria-label',active?'退出全螢幕':'進入全螢幕');fullscreenBtn.querySelector('.fullscreen-label').textContent=active?'退出全螢幕':'全螢幕'}
async function toggleFullscreen(){try{if(isFullscreen()){const exit=document.exitFullscreen||document.webkitExitFullscreen;if(exit)await exit.call(document)}else{const enter=document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen;if(enter)await enter.call(document.documentElement)}}catch(error){console.warn('無法切換全螢幕',error)}syncFullscreenButton()}
fullscreenBtn.onclick=toggleFullscreen;document.addEventListener('fullscreenchange',syncFullscreenButton);document.addEventListener('webkitfullscreenchange',syncFullscreenButton);syncFullscreenButton();
