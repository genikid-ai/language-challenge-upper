const DATA=[
{id:'E08-3',word:'影子',card:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/e08-3-b06cde14.jpg',image:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/e08-3-3196ec3e.jpg'},
{id:'E02-4',word:'葉子',card:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/e02-4-64f1bf0e.jpg',image:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/e02-4-d8b586e9.jpg'},
{id:'E06-3',word:'飲料',card:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/e06-3-97bfe73a.jpg',image:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/e06-3-2efb54dc.jpg'},
{id:'X01-1',word:'挖土機',card:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/x01-1-d6eb187f.jpg',image:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/x01-1-7870b129.jpg'},
{id:'X04-2',word:'圍巾',card:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/x04-2-0a9eb403.jpg',image:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/x04-2-e90fb50a.jpg'},
{id:'X06-2',word:'蚊子',card:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/x06-2-b5089f9e.jpg',image:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/x06-2-2c51d8be.jpg'},
{id:'U01-4',word:'月亮',card:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/u01-4-d62f38f4.jpg',image:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/u01-4-58aa45ac.jpg'},
{id:'U02-2',word:'圓形',card:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/u02-2-fc112f0b.jpg',image:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/u02-2-cb9680c7.jpg'},
{id:'U03-2',word:'白雲',card:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/u03-2-e11c310e.jpg',image:'https://genikid-ai.github.io/imagecard/images/game-folder-kwa4i8/u03-2-a625714a.jpg'}
];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let mode='learn',round=0,current=null,deck=[];
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function show(id){$$('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active')}
function goHome(){show('home');$('#homeBtn').classList.add('hidden');$('#progress').classList.add('hidden')}
function start(selected){mode=selected;round=0;deck=shuffle(DATA).slice(0,5);$('#homeBtn').classList.remove('hidden');$('#progress').classList.remove('hidden');next()}
function next(){if(round>=deck.length){show('finishScreen');$('#progress').textContent='完成！';return}current=deck[round];$('#progress').textContent=`第 ${round+1} / ${deck.length} 題`;$('#rhymeCard').src=current.card;show('cardScreen')}
function displayChoices(){const count=mode==='learn'?1:mode==='practice'?2:3;const others=shuffle(DATA.filter(x=>x.id!==current.id)).slice(0,count-1);const items=shuffle([current,...others]);const box=$('#choices');box.innerHTML='';$('#rhymeReminder').src=current.card;$('#nextBtn').classList.add('hidden');closeModal();$('#choiceInstruction').innerHTML=mode==='learn'?'<span>②</span> 看看圖片，跟著念出語詞':'<span>②</span> 哪一張圖片和卡片的結合韻一樣？';items.forEach(item=>{const b=document.createElement('button');b.className='choice';b.innerHTML=`<img src="${item.image}" alt="${item.word}">`;b.onclick=()=>answer(b,item,mode==='learn');box.appendChild(b)});show('choiceScreen');if(mode==='learn')setTimeout(()=>reveal(box.firstElementChild,current),350)}
function reveal(button,item){if(button.dataset.revealed)return;button.dataset.revealed='true';button.classList.add('correct');if(mode==='learn'){$('#nextBtn').classList.remove('hidden');return}openModal(true)}
function openModal(correct){$('#modalIcon').textContent=correct?'🎉':'💪';$('#modalTitle').textContent=correct?'答對了！':'再想一想！';$('#modalMessage').textContent=correct?'你找到相同的結合韻了！':'看看旁邊的結合韻卡，再試一次。';$('#modalNextBtn').classList.toggle('hidden',!correct);$('#retryBtn').classList.toggle('hidden',correct);$('#resultModal').classList.remove('hidden')}
function closeModal(){$('#resultModal').classList.add('hidden')}
function answer(button,item,isLearn){if(isLearn){reveal(button,item);return}if(item.id===current.id){$$('.choice').forEach(b=>b.disabled=true);reveal(button,item)}else{button.classList.add('wrong');openModal(false)}}
$$('.mode-card').forEach(b=>b.onclick=()=>start(b.dataset.mode));$('#showPictures').onclick=displayChoices;$('#nextBtn').onclick=()=>{round++;next()};$('#modalNextBtn').onclick=()=>{closeModal();round++;next()};$('#retryBtn').onclick=()=>{closeModal();$$('.choice').forEach(b=>b.classList.remove('wrong'))};$('#homeBtn').onclick=goHome;$('#finishHomeBtn').onclick=goHome;$('#againBtn').onclick=()=>start(mode);
