
// Mobile menu
(function(){var m=document.getElementById('mmenu'),o=document.getElementById('mnavOpen'),c=document.getElementById('mnavClose');
if(!m||!o)return;
o.addEventListener('click',function(){m.classList.add('open');o.setAttribute('aria-expanded','true');});
c.addEventListener('click',function(){m.classList.remove('open');o.setAttribute('aria-expanded','false');});
m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');});});
})();
// Collection filters + sort
(function(){var grid=document.getElementById('shopgrid');if(!grid)return;
var cards=[].slice.call(grid.querySelectorAll('.card'));
var lang='',fmt='',sort='featured',empty=document.getElementById('noMatch');
function apply(){var vis=cards.filter(function(c){
  var okL=!lang||(c.getAttribute('data-lang')||'').split(' ').indexOf(lang)>-1;
  var okF=!fmt||c.getAttribute('data-format')===fmt;return okL&&okF;});
  var sorted=vis.slice();
  if(sort==='low')sorted.sort(function(a,b){return parseFloat(a.getAttribute('data-price'))-parseFloat(b.getAttribute('data-price'));});
  if(sort==='high')sorted.sort(function(a,b){return parseFloat(b.getAttribute('data-price'))-parseFloat(a.getAttribute('data-price'));});
  cards.forEach(function(c){c.style.display='none';});
  sorted.forEach(function(c){c.style.display='';grid.appendChild(c);});
  if(empty)empty.style.display=vis.length?'none':'';
}
function bind(attr,setter){document.querySelectorAll('[data-'+attr+']').forEach(function(b){
  b.addEventListener('click',function(){document.querySelectorAll('[data-'+attr+']').forEach(function(x){x.setAttribute('aria-pressed','false');});
  b.setAttribute('aria-pressed','true');setter(b.getAttribute('data-'+attr));apply();});});}
bind('flang',function(v){lang=v;});bind('ffmt',function(v){fmt=v;});
var sel=document.getElementById('fsort');if(sel)sel.addEventListener('change',function(){sort=sel.value;apply();});
})();
// Product gallery
(function(){var main=document.querySelector('.galmain');if(!main)return;
var slides=[].slice.call(main.querySelectorAll('img'));
var btns=[].slice.call(document.querySelectorAll('.gthumbs button'));
btns.forEach(function(b,i){b.addEventListener('click',function(){
  slides.forEach(function(s,j){s.classList.toggle('on',i===j);});
  btns.forEach(function(x,j){x.setAttribute('aria-pressed',i===j?'true':'false');});});});
})();
// Language pair selector (product pages with several editions)
(function(){var field=document.getElementById('langsel');if(!field)return;
var buy=document.getElementById('buyBtn'),help=document.getElementById('buyHelp');
var names={en:'English',nl:'Dutch',fr:'French',de:'German'};
field.querySelectorAll('button[data-url]').forEach(function(b){b.addEventListener('click',function(){
  field.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed','false');});
  b.setAttribute('aria-pressed','true');var lang=b.getAttribute('data-lang');
  buy.href=b.getAttribute('data-url');buy.textContent='Buy on Etsy: Arabic + '+names[lang];
  help.textContent=b.getAttribute('data-help');});});
})();
// Mailto form composers (wholesale, free printable, creators)
function mailtoForm(formId,subject,fields){var f=document.getElementById(formId);if(!f)return;
f.addEventListener('submit',function(e){e.preventDefault();var lines=[];
fields.forEach(function(id){var el=document.getElementById(id);if(el&&el.value)lines.push(el.getAttribute('data-label')+': '+el.value);});
window.location.href='mailto:diasporalifestyleshop@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n'));});}
mailtoForm('wholesaleForm','Wholesale enquiry',['wName','wEmail','wOrg','wProducts','wCountry','wMsg']);
mailtoForm('freeForm','Free good deeds chart',['fEmail']);
mailtoForm('freeFormHome','Free good deeds chart',['fhEmail']);
