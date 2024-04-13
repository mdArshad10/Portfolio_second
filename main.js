import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect/dist/core";
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
  // Split text into words and characters
  const text = new SplitType(".reveal-type", { types: "words, chars" });

  // Animate characters into view with a stagger effect
  gsap.from(".char", {
    scrollTrigger: {
      trigger: ".char",
      start: "bottom 20%",
      end: "top 80%",
      // markers: true,
      scrub: 4,
    },
    opacity: 0.2,
    stagger: 0.2,
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
