console.log("hi this is main.js");

let app = document.querySelector(".text-changer");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .typeString("software engineer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("A Web Developer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Problem solver")
  .pauseFor(1000)
  .deleteAll()
  .typeString("A fast learner")
  .pauseFor(1000)

  .start();
