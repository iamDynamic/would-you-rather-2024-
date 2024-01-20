function getParameter(x) {
  params = window.location.href.split("?")[1].split("&");
  for (i = 0; i < params.length; i++) {
    // ["id","example"]
    e = params[i].split("=");
    if (e[0] == x) {
      return e[1];
    }
  }
}
var id = getParameter("id")

const data = {
  "qustions and answers": {

    Q1: {
      "Q1": "stay inside all your life",// 53%
      "Score": "",
      "Q2": "stay outside for ever life", // 47%
    },
    Q2: {
      "Q1": "have 10 wishes ", //83%
      "score": "",
      "Q2": "give people wishes", //%17
    },
    Q3: {
      "Q1": "only to sing ", //71%
      "score": "",
      "Q2": "only to dance", //%29
    },
    Q4: {
      "Q1": "be smart but all people hates you ", //48%
      "score": "",
      "Q2": "be stupid but all people loves you ", //%52
    },
    Q5: {
      "Q1": "be funny but not cool ", //61%
      "score": "",
      "Q2": "be cool but not funny ", //%29
    },
    Q6: {
      "Q1": "have 1 billion dollar ", //34%
      "score": "",
      "Q2": "get 1 penny and double it every day ", //66%
    },
    Q7: {
      "Q1": "have more time ", //42%
      "score": "",
      "Q2": "have more money", //%58
    },
    Q8: {
      "Q1": "be a doctor ", //50%
      "score": "",
      "Q2": "be a lawyer", //%50
    },
    Q9: {
      "Q1": "alway summer ", //46%
      "score": "",
      "Q2": "alway winter", //%54
    },
    Q10: {
      "Q1": "only eat friut ", //73%
      "score": "",
      "Q2": "eat only  vegtables", //%27
    },
    Q11: {
      "Q1": "take screen shot whith as3ad ", //50
      "score": "",
      "Q2": "or joudi", //50
    },
    Q12:{
      "Q1":"eat 300 doughnuts <br> in 4 hours for 500$",// 69 %
       
      "Q2":"drink a cup of sour milk for 50$", // 31%
    },
    Q13:{
      "Q1":"Be able to survive any injury or fall",// 76 %
       
      "Q2":"Be able to pull out any Acme Corporation product out of your pocket", // 24%
    },
  },
}
var k = data[id]
var body = document.querySelector("body")
var q1 = document.getElementById("q1")
var q2 = document.getElementById("q2")

// level 1
if (id === "7c497825-7d5f-461c-8a96-0eeb347a2d66") {
  console.log("Your Id Is : " + id)
  q1.innerHTML = data["qustions and answers"].Q1.Q1
  q2.innerHTML = data["qustions and answers"].Q1.Q2
  q1.addEventListener("click", () => {
    q1.innerHTML = `${q1.innerHTML = data["qustions and answers"].Q1.Q1} <br> 53% `
    q2.innerHTML = `${q2.innerHTML = data["qustions and answers"].Q1.Q2} <br> 47%`
    setTimeout(() => {
      location.href = `/play.html?id=8c13de8e-42c6-4b87-9d3b-43995ae23d14`
    }, 4000)
  })
  q2.addEventListener("click", () => {
    q1.innerHTML = `${q1.innerHTML = data["qustions and answers"].Q1.Q1} <br> 53% `
    q2.innerHTML = `${q2.innerHTML = data["qustions and answers"].Q1.Q2} <br> 47%`
    setTimeout(() => {
      location.href = `/play.html?id=8c13de8e-42c6-4b87-9d3b-43995ae23d14`
    }, 6000)
  })

}
// level 2
if (id === "8c13de8e-42c6-4b87-9d3b-43995ae23d14") {
  q1.innerHTML = data["qustions and answers"].Q2.Q1
  q2.innerHTML = data["qustions and answers"].Q2.Q2
  q1.addEventListener("click", () => {
    q1.innerHTML = `${q1.innerHTML = data["qustions and answers"].Q2.Q1} <br> 83% `
    q2.innerHTML = `${q2.innerHTML = data["qustions and answers"].Q2.Q2} <br> 17%`
    setTimeout(() => {
      location.href = `/play.html?id=048f40d6-B94f-4715-9390-A6335a0aa00e`
    }, 6000)
  })
  q2.addEventListener("click", () => {
    q1.innerHTML = `${q1.innerHTML = data["qustions and answers"].Q2.Q1} <br> 83% `
    q2.innerHTML = `${q2.innerHTML = data["qustions and answers"].Q2.Q2} <br>  17%`
    setTimeout(() => {
      location.href = `/play.html?id=048f40d6-B94f-4715-9390-A6335a0aa00e`
    }, 6000)
  })

  console.log("Your Id Is : " + id)
}
//  level 3
if (id === "048f40d6-B94f-4715-9390-A6335a0aa00e") {
  q1.innerHTML = data["qustions and answers"].Q3.Q1
  q2.innerHTML = data["qustions and answers"].Q3.Q2
  q1.addEventListener("click", () => {
    q1.innerHTML = `${q1.innerHTML = data["qustions and answers"].Q3.Q1} <br> 71% `
    q2.innerHTML = `${q2.innerHTML = data["qustions and answers"].Q3.Q2} <br> 29%`
    setTimeout(() => {
      location.href = `/play.html?id=7411d3e8-E911-4801-8feb-Ff6cbd7b5955`
    }, 6000)
  })
  q2.addEventListener("click", () => {
    q1.innerHTML = `${q1.innerHTML = data["qustions and answers"].Q3.Q1} <br> 71% `
    q2.innerHTML = `${q2.innerHTML = data["qustions and answers"].Q3.Q2} <br>  29%`
    setTimeout(() => {
      location.href = `/play.html?id=7411d3e8-E911-4801-8feb-Ff6cbd7b5955`
    }, 6000)
  })

  console.log("Your Id Is : " + id)
}
// level 4
if (id === "7411d3e8-E911-4801-8feb-Ff6cbd7b5955") {
  q1.innerHTML = data["qustions and answers"].Q4.Q1
  q2.innerHTML = data["qustions and answers"].Q4.Q2
  q1.addEventListener("click", () => {
    q1.innerHTML = `${q1.innerHTML = data["qustions and answers"].Q4.Q1} <br> 48% `
    q2.innerHTML = `${q2.innerHTML = data["qustions and answers"].Q4.Q2} <br> 52%`
    setTimeout(() => {
      location.href = `/play.html?id=8fd3881e-A172-48ca-Bfb4-80b5d04079d3`
    }, 6000)
  })
  q2.addEventListener("click", () => {
    q1.innerHTML = `${q1.innerHTML = data["qustions and answers"].Q4.Q1} <br> 48% `
    q2.innerHTML = `${q2.innerHTML = data["qustions and answers"].Q4.Q2} <br> 52%`
    setTimeout(() => {
      location.href = `/play.html?id=8fd3881e-A172-48ca-Bfb4-80b5d04079d3`
    }, 6000)
  })

  console.log("Your Id Is : " + id)
}
// level 5
if (id === "8fd3881e-A172-48ca-Bfb4-80b5d04079d3") {
  q1.innerHTML = data["qustions and answers"].Q5.Q1
  q2.innerHTML = data["qustions and answers"].Q5.Q2
  q1.addEventListener("click", () => {
    q1.innerHTML = `${q1.innerHTML = data["qustions and answers"].Q5.Q1} <br> 61% `
    q2.innerHTML = `${q2.innerHTML = data["qustions and answers"].Q5.Q2} <br> 29%`
    setTimeout(() => {
      location.href = "/play.html?id=D522fa3c-0b0e-48e1-B2f6-4ac0b2c642a6"
    }, 6000)
  })
  q2.addEventListener("click", () => {
    q1.innerHTML = `${q1.innerHTML = data["qustions and answers"].Q5.Q1} <br> 61% `
    q2.innerHTML = `${q2.innerHTML = data["qustions and answers"].Q5.Q2} <br> 29%`
    setTimeout(() => {
      location.href`/play.html?id=D522fa3c-0b0e-48e1-B2f6-4ac0b2c642a6`
    }, 6000)
  })

  console.log("Your Id Is : " + id)
}
// level 6
if (id === "D522fa3c-0b0e-48e1-B2f6-4ac0b2c642a6") {
  q1.innerHTML = data["qustions and answers"].Q6.Q1
  q2.innerHTML = data["qustions and answers"].Q6.Q2
  q1.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q6.Q2} <br> 34%`
    q2.innerHTML = `${data["qustions and answers"].Q6.Q2} <br> 66%`
    setTimeout(() => {
      location.href = `/play.html?id=00193d96-8ad2-48eb-9a5b-Df5a5083f101`
    }, 6000)
  })
  q2.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q6.Q2} <br> 34%`
    q2.innerHTML = `${data["qustions and answers"].Q6.Q2} <br> 66%`
    setTimeout(() => {
      location.href = `/play.html?id=00193d96-8ad2-48eb-9a5b-Df5a5083f101`
    }, 6000)
  })
}
// level 7
if (id === "00193d96-8ad2-48eb-9a5b-Df5a5083f101") {
  q1.innerHTML = data["qustions and answers"].Q7.Q1
  q2.innerHTML = data["qustions and answers"].Q7.Q2
  q1.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q7.Q2} <br> 42%`
    q2.innerHTML = `${data["qustions and answers"].Q7.Q2} <br> 58%`
    setTimeout(() => {
      location.href = `/play.html?id=6444df10-Bc2c-4492-8cbf-108af4359167`
    }, 6000)
  })
  q2.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q7.Q2} <br> 42%`
    q2.innerHTML = `${data["qustions and answers"].Q7.Q2} <br> 58%`
    setTimeout(() => {
      location.href = `/play.html?id=6444df10-Bc2c-4492-8cbf-108af4359167`
    }, 6000)
  })
}
//  level 8
if (id === "6444df10-Bc2c-4492-8cbf-108af4359167") {
  q1.innerHTML = data["qustions and answers"].Q8.Q1
  q2.innerHTML = data["qustions and answers"].Q8.Q2
  q1.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q8.Q2} <br> 50%`
    q2.innerHTML = `${data["qustions and answers"].Q8.Q2} <br> 50%`
    setTimeout(() => {
      location.href = `/play.html?id=014e851b-B1bb-4322-A636-9049467de21e`
    }, 6000)
  })
  q2.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q8.Q2} <br> 50%`
    q2.innerHTML = `${data["qustions and answers"].Q8.Q2} <br> 50%`
    setTimeout(() => {
      location.href = `/play.html?id=014e851b-B1bb-4322-A636-9049467de21e`
    }, 6000)
  })
}
//  level 9
if (id === "014e851b-B1bb-4322-A636-9049467de21e") {
  q1.innerHTML = data["qustions and answers"].Q9.Q1
  q2.innerHTML = data["qustions and answers"].Q9.Q2
  q1.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q9.Q1} <br> 46%`
    q2.innerHTML = `${data["qustions and answers"].Q9.Q2} <br> 54%`
    setTimeout(() => {
      location.href = `/play.html?id=807cca39-0ae8-4820-999f-Fad1cd08646e`
    }, 6000)
  })
  q2.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q9.Q1} <br> 46%`
    q2.innerHTML = `${data["qustions and answers"].Q9.Q2} <br> 54%`
    setTimeout(() => {
      location.href = `/play.html?id=807cca39-0ae8-4820-999f-Fad1cd08646e`
    }, 6000)
  })
}
// level 10
if (id === "807cca39-0ae8-4820-999f-Fad1cd08646e") {
  q1.innerHTML = data["qustions and answers"].Q10.Q1
  q2.innerHTML = data["qustions and answers"].Q10.Q2
  q1.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q10.Q1} <br> 73%`
    q2.innerHTML = `${data["qustions and answers"].Q10.Q2} <br> 27%`
    setTimeout(() => {
      location.href = `/play.html?id=Fae3d7ab-Cb8b-4f13-873a-74c2c11de514`
    }, 6000)
  })
  q2.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q10.Q1} <br> 73%`
    q2.innerHTML = `${data["qustions and answers"].Q10.Q2} <br> 27%`
    setTimeout(() => {
      location.href = `/play.html?id=Fae3d7ab-Cb8b-4f13-873a-74c2c11de514`
    }, 6000)
  })
}
// level 11
if (id === "Fae3d7ab-Cb8b-4f13-873a-74c2c11de514") {
  q1.innerHTML = data["qustions and answers"].Q11.Q1
  q2.innerHTML = data["qustions and answers"].Q11.Q2
  q1.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q11.Q1} <br> 50%`
    q2.innerHTML = `${data["qustions and answers"].Q11.Q2} <br> 50%`
    setTimeout(() => {
      location.href = `/play.html?id=2a5c3fad-463f-4bc2-8e21-484a43ad77a5`
    }, 6000)
  })
  q2.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q11.Q1} <br> 50%`
    q2.innerHTML = `${data["qustions and answers"].Q11.Q2} <br> 50%`
    setTimeout(() => {
      location.href = `/play.html?id=2a5c3fad-463f-4bc2-8e21-484a43ad77a5`
    }, 6000)
  })
}
// level 12
if (id === "2a5c3fad-463f-4bc2-8e21-484a43ad77a5") {
  q1.innerHTML = data["qustions and answers"].Q12.Q1
  q2.innerHTML = data["qustions and answers"].Q12.Q2
  q1.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q12.Q1} <br> 69%`
    q2.innerHTML = `${data["qustions and answers"].Q12.Q2} <br> 31%`
    setTimeout(() => {
      location.href = `/play.html?id=2e37a444-902a-4a7b-89e1-9d903eba471`
    }, 6000)
  })
  q2.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q12.Q1} <br> 69%`
    q2.innerHTML = `${data["qustions and answers"].Q12.Q2} <br> 31%`
    setTimeout(() => {
      location.href = `/play.html?id=2e37a444-902a-4a7b-89e1-9d903eba471`
    }, 6000)
  })
}
// level 13
if (id === "2e37a444-902a-4a7b-89e1-9d903eba471e") {
  q1.innerHTML = data["qustions and answers"].Q13.Q1
  q2.innerHTML = data["qustions and answers"].Q13.Q2
  q1.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q13.Q1} <br> 76%`
    q2.innerHTML = `${data["qustions and answers"].Q13.Q2} <br> 24%`
    setTimeout(() => {
      location.href = `/play.html?id=C3eb65e1-321c-4a1a-Ba74-56915e4218d1`
    }, 6000)
  })
  q2.addEventListener('click', () => {
    q1.innerHTML = `${data["qustions and answers"].Q13.Q1} <br> 76%`
    q2.innerHTML = `${data["qustions and answers"].Q13.Q2} <br> 24%`
    setTimeout(() => {
      location.href = `/play.html?id=C3eb65e1-321c-4a1a-Ba74-56915e4218d1`
    }, 6000)
  })
}
if(id === "C3eb65e1-321c-4a1a-Ba74-56915e4218d1"){
    body.innerHTML = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Congratulations finsh</title>
    <link rel="shortcut icon" href="/image/would you rather images.png" type="image/x-icon">
</head>
<style>
    *{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
    nav{
        background-color: #262626;
        color: #fff;
        padding: 100px;
        text-align: center;
        text-transform: capitalize;
        font-size: 50px;
    }
    div{
        text-transform:capitalize ;
        text-align: center;
        margin-top: 200px;
        font-size: 30px;
    }
</style>
<body>
    
<nav>
    <h1>Congratulations</h1>
</nav>


<div>
    Congratulations here are the finish of this game <br>
    if you need to play more games go to <a href="https://all-project-apps.vercel.app/">more games</a>
    <br>
    if you need to restart the game   <a href="./index.html">press here</a>
</div>

</body>
</html>
    `
}


