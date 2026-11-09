const sets={upper:['ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄔ','ㄕ','ㄖ'],lower:['ㄗ','ㄘ','ㄙ','ㄧ','ㄨ','ㄩ','ㄚ','ㄛ','ㄜ','ㄝ','ㄞ','ㄟ','ㄠ','ㄡ','ㄢ','ㄣ','ㄤ','ㄥ','ㄦ']};
sets.all=[...sets.upper,...sets.lower];
const animals={rabbit:'🐰',bear:'🐻',squirrel:'🐿️',raccoon:'🦝',deer:'🦌',tiger:'🐯'};
const locations=['森林入口','蘑菇小徑','木橋小溪','大樹洞','星光草地'];
const screens=[...document.querySelectorAll('.screen')];
let state={range:'all',character:'rabbit',score:0,queue:[]};
const $=id=>document.getElementById(id);
function show(id){screens.forEach(s=>s.classList.toggle('active',s.id===id));$('homeBtn').classList.toggle('hidden',id==='startScreen');}
function shuffled(list){let a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function prepare(){state.score=0;state.queue=shuffled(sets[state.range]).slice(0,5);$('traveler').textContent=animals[state.character];$('finishAnimal').textContent=animals[state.character];updateGame(false);show('gameScreen');}
function updateGame(animate=true){const n=state.score;const spots=[['14%','27%'],['67%','36%'],['21%','51%'],['69%','67%'],['11%','83%']];$('progressText').textContent=`${n}／5`;$('locationTitle').textContent=locations[Math.min(n,4)];$('zhuyin').textContent=state.queue[n]||'';document.querySelectorAll('#stars i').forEach((s,i)=>s.classList.toggle('on',i<n));document.querySelectorAll('.stop').forEach((s,i)=>s.classList.toggle('done',i<=n));$('traveler').style.left=spots[Math.min(n,4)][0];$('traveler').style.top=spots[Math.min(n,4)][1];if(animate){$('zhuyin').classList.remove('change');void $('zhuyin').offsetWidth;$('zhuyin').classList.add('change');$('traveler').classList.add('cheer');setTimeout(()=>$('traveler').classList.remove('cheer'),600)}}
function finish(){show('finishScreen');const c=$('confetti');c.innerHTML='';for(let i=0;i<36;i++){const p=document.createElement('i');p.style.left=Math.random()*100+'%';p.style.animationDelay=Math.random()*2+'s';p.style.animationDuration=(2+Math.random()*2)+'s';c.appendChild(p)}}
$('startBtn').onclick=()=>show('rangeScreen');
document.querySelectorAll('.range-card').forEach(b=>b.onclick=()=>{state.range=b.dataset.range;show('characterScreen')});
document.querySelectorAll('.character-card').forEach(b=>b.onclick=()=>{state.character=b.dataset.character;prepare()});
$('backToRange').onclick=()=>show('rangeScreen');
$('correctBtn').onclick=()=>{state.score++;if(state.score>=5){setTimeout(finish,350)}else updateGame()};
$('retryBtn').onclick=()=>{const p=document.querySelector('.question-panel');p.classList.remove('retry');void p.offsetWidth;p.classList.add('retry');setTimeout(()=>p.classList.remove('retry'),550)};
$('replayBtn').onclick=prepare;$('changeCharacterBtn').onclick=()=>show('characterScreen');$('finishHomeBtn').onclick=()=>show('rangeScreen');
$('homeBtn').onclick=()=>show('startScreen');
$('fullscreenBtn').onclick=()=>{if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.()};
document.addEventListener('keydown',e=>{if(!$('gameScreen').classList.contains('active'))return;if(e.key==='ArrowRight'||e.key==='Enter')$('correctBtn').click();if(e.key==='ArrowLeft')$('retryBtn').click()});
show('startScreen');
