gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.reveal').forEach((el,i)=>gsap.to(el,{opacity:1,y:0,duration:.9,delay:(i%3)*.08,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
gsap.from('.hero-copy > *',{opacity:0,y:30,stagger:.1,duration:1,ease:'power3.out',delay:.2});
gsap.from('.hero-photo',{opacity:0,scale:.82,rotation:-4,duration:1.2,ease:'back.out(1.3)',delay:.45});
gsap.from('.hero-card',{opacity:0,y:40,rotation:0,stagger:.16,duration:.85,ease:'back.out(1.4)',delay:.8});
gsap.to('.hero-photo',{yPercent:8,rotation:7,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.to('.hero-sticker',{rotation:28,y:-25,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.to('.contact-circle',{rotation:10,ease:'none',scrollTrigger:{trigger:'.contact',start:'top bottom',end:'bottom top',scrub:1}});
const immersive=document.querySelector('.feature-immersive');
if(immersive){immersive.addEventListener('mousemove',event=>{const rect=immersive.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;gsap.to('.immersive-image img',{x:x*18,y:y*12,duration:.7,ease:'power2.out'});});immersive.addEventListener('mouseleave',()=>{gsap.to('.immersive-image img',{x:0,y:0,duration:.8});});}
window.addEventListener('scroll',()=>document.querySelector('.site-header').classList.toggle('scrolled',scrollY>30),{passive:true});
window.addEventListener('mousemove',e=>{const c=document.querySelector('.cursor-paw');c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'},{passive:true});
