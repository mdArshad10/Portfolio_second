import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function pageLoader() {
  const paragraphs = document.querySelectorAll("#loader>p");

  const tl = gsap.timeline();

  paragraphs.forEach((char, i) => {
    const text = new SplitType(char, { type: "chars" });

    tl.from(
      text.chars,
      {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.022,
      },
      "<"
    );

    tl.to(
      text.chars,
      {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.022,
      },
      "<1"
    );
  });

  tl.to("#loader", {
    y: "-100vh",
    duration: 2,
    zIndex: 0,
  });
}

function textRevelEffect() {
  const paragraphs = document.querySelector(".reveal-type");
  console.log(paragraphs);
    const text = new SplitType(paragraphs, { type: "chars" });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: ".char",
        start: "top 80%",
        end: "top 20%",
        markers: true,
        scrub: 3,
      },
      opacity: 0.2,
      stagger: 0.1,
    });
  
}

function descriptionChanges() {
  let app = document.querySelector(".text-changer");

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(3000)
    .typeString("A Software engineer")
    .pauseFor(1000)
    .deleteAll()
    .typeString("A Web Developer")
    .pauseFor(1000)
    .deleteAll()
    .typeString("A Problem solver")
    .pauseFor(1000)
    .deleteAll()
    .typeString("A fast learner")
    .pauseFor(1000)
    .start();
}

pageLoader();
textRevelEffect();

descriptionChanges();
