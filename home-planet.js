

const eyestimeline = gsap.timeline({
    repeat: -1
})

const eyeballs = document.querySelectorAll("path#ball, path#ball_2,path#ball_3,path#ball_4,path#ball_5,path#ball_6")
eyestimeline
  .set(eyeballs,{y:0})
  .to(eyeballs,{y:7, duration: 0.25, delay: 2, stagger: 0.25})
  .to(eyeballs,{y:0})

  const hattimeline = gsap.timeline({
      repeat:-1,
      repeatDelay: 4
  })

  const hatlist = document.querySelectorAll("g#frame,g#hair,g#cover,g#face,g#eye" )
      hattimeline
      .set(hatlist,{y:0})
      .to(hatlist,{y:-50,opacity: 1, duration: 0.25, delay: 1})
      .to(hatlist,{y:0, opacity: 0, duration: 0.5,delay: 0.1})
    