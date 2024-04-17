function loco()
{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

// This enables the scroller function so that video will play as scrolling down

gsap.to("#page1>video",{
  scrollTrigger:{
    trigger:'#page1>video',
    start:'2% top',
    end:'bottom top',
    scroller:'#main'
  },
  onStart:()=>{ /* <-- This will play the video as the gsap hits which means as scroller touches the bottom of page1 */
    document.querySelector("#page1>video").play()
  }
})

// This will pin or fix the page1

gsap.to("#page1",{
  scrollTrigger:{
    trigger:'#page1',
    start:'top top',
    end:'bottom top',
    scroller:'#main',
    pin:true
  }
})

// This will fade the text after scrolling down page1 and as the video stops

gsap.to("#page1-bottom",{
  scrollTrigger:{
    trigger:'video',
    start:'5% top',
    end:'bottom top',
    scroller:'#main',
  },
  opacity:0
})


// Timeline adjusted to page2 so that the heading animates to above

var tl=gsap.timeline({
  scrollTrigger:{
    trigger:'#page2',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true
  }
})

tl.to("#page2>h1",{
  top:'-50%'
})


// Timeline adjusted to page3 so that the heading animates to above

var tl1=gsap.timeline({
  scrollTrigger:{
    trigger:'#page3',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true
  }
})

tl1.to("#page3>h1",{
  top:'-50%'
})


// Timeline adjusted to page4 so that the heading animates to above

var tl1=gsap.timeline({
  scrollTrigger:{
    trigger:'#page4',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true
  }
})

tl1.to("#page4>h1",{
  top:'-50%'
})


// Timeline adjusted to page5 so that the heading animates to above

var tl1=gsap.timeline({
  scrollTrigger:{
    trigger:'#page5',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true
  }
})

tl1.to("#page5>h1",{
  top:'-50%'
})


// Timeline adjusted to page7 so that the heading animates to above

var tl1=gsap.timeline({
  scrollTrigger:{
    trigger:'#page7',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true
  }
})

tl1.to("#page7>#page7-center",{
  top:'-50%'
})


// Timeline adjusted to page9 so that the heading animates to above

var tl1=gsap.timeline({
  scrollTrigger:{
    trigger:'#page9',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true
  }
})

tl1.to("#page9>#page9-center",{
  top:'-50%'
})


// Timeline adjusted to page11 so that the heading animates to above

var tl1=gsap.timeline({
  scrollTrigger:{
    trigger:'#page11',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true
  }
})

tl1.to("#page11>#page11-center",{
  top:'-50%'
})


// Timeline adjusted to page13 so that the heading animates to above

var tl1=gsap.timeline({
  scrollTrigger:{
    trigger:'#page13',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true
  }
})

tl1.to("#page13>#page13-center",{
  top:'-50%'
})