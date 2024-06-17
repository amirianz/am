// head-8
let rangi = document.getElementsByClassName("rangi")
for (let i = 0; i < rangi.length; i++) {
  rangi[i].addEventListener("mouseover", () => {
    rangi[i].style.backgroundImage = "linear-gradient(45deg, var(--red), var(--orange))"
    rangi[i].style.color = "white"
    rangi[i].style.border = "2px solid transparent"
  })
  rangi[i].addEventListener("mouseout", () => {
    rangi[i].style.backgroundImage = "linear-gradient(45deg, white, white)"
    rangi[i].style.color = "black"
    rangi[i].style.border = "2px solid #e5e5e5"
  })
}
//head-6 
let hy = document.getElementsByClassName("boxh-6")
let ty = document.getElementsByClassName("idh-6")
let hel = document.getElementsByClassName("hel")
let helspan = document.getElementsByClassName("helspan")
for (let j = 0; j < hy.length; j++) {
  hy[j].addEventListener("mouseover", () => {
    ty[j].style.opacity = "0"
    ty[j].style.bottom = "5px"
    ty[j].style.visibility = "hidden"
  })
  hy[j].addEventListener("mouseout", () => {
    ty[j].style.opacity = "1"
    ty[j].style.bottom = "-5px"
    ty[j].style.visibility = "visible"
  })
  hy[j].addEventListener("mouseover", () => {
    hel[j].style.opacity = "1"
    hel[j].style.bottom = "97px"
  })
  hy[j].addEventListener("mouseout", () => {
    hel[j].style.opacity = "0"
    hel[j].style.bottom = "80px"
  })
  hel[j].addEventListener("mouseover", () => {
    helspan[j].style.width = "96px"
  })
  hel[j].addEventListener("mouseout", () => {
    helspan[j].style.width = "0px"
  })
}
let i1 = document.getElementsByClassName("i1")
let i2 = document.getElementsByClassName("i2")
let i3 = document.getElementsByClassName("i3")
let balspan1 = document.getElementsByClassName("balspan1")
let balspan2 = document.getElementsByClassName("balspan2")
let balspan3 = document.getElementsByClassName("balspan3")
for (let a = 0; a < i1.length; a++) {
  i1[a].addEventListener("mouseover", () => {
    balspan1[a].style.visibility = "visible"
    balspan1[a].style.opacity = "1"
  })
  i1[a].addEventListener("mouseout", () => {
    balspan1[a].style.visibility = "hidden"
    balspan1[a].style.opacity = "0"
  })
}
for (let b = 0; b < i2.length; b++) {
  i2[b].addEventListener("mouseover", () => {
    balspan2[b].style.visibility = "visible"
    balspan2[b].style.opacity = "1"
  })
  i2[b].addEventListener("mouseout", () => {
    balspan2[b].style.visibility = "hidden"
    balspan2[b].style.opacity = "0"
  })
}
for (let g = 0; g < i1.length; g++) {
  i3[g].addEventListener("mouseover", () => {
    balspan3[g].style.visibility = "visible"
    balspan3[g].style.opacity = "1"
  })
  i3[g].addEventListener("mouseout", () => {
    balspan3[g].style.visibility = "hidden"
    balspan3[g].style.opacity = "0"
  })
}
// h9
let afzoodan = document.getElementsByClassName("afzoodan")
let afzoodiv = document.getElementsByClassName("afzoodiv")
let h9span1 = document.getElementsByClassName("zirh9")
for (let z = 0; z < afzoodan.length; z++) {
  afzoodan[z].addEventListener("mouseover", () => {
    afzoodiv[z].style.bottom = "10px"
    afzoodiv[z].style.opacity = "0"
    afzoodiv[z].style.transitionDelay = "0s"
  })
  afzoodan[z].addEventListener("mouseout", () => {
    afzoodiv[z].style.bottom = "0"
    afzoodiv[z].style.opacity = "1"
    afzoodiv[z].style.transitionDelay = "0.1s"
  })
  afzoodan[z].addEventListener("mouseover", () => {
    h9span1[z].style.opacity = "1"
    h9span1[z].style.bottom = "5px"
  })
  afzoodan[z].addEventListener("mouseout", () => {
    h9span1[z].style.opacity = "0"
    h9span1[z].style.bottom = "0px"
  })
}
// h12
let cart = document.getElementsByClassName("cart-1")
let cart_1_4 = document.getElementsByClassName("cart-1-4")
let leh = document.getElementsByClassName("leh")
let lehspa = document.getElementsByClassName("lehspa")
for (let r = 0; r < cart.length; r++) {
  cart[r].addEventListener("mouseover", () => {
    cart_1_4[r].style.bottom = "10px"
    cart_1_4[r].style.opacity = "0"
  })
  cart[r].addEventListener("mouseout", () => {
    cart_1_4[r].style.bottom = "0px"
    cart_1_4[r].style.opacity = "1"
  })
  cart[r].addEventListener("mouseover", () => {
    leh[r].style.opacity = "1"
    leh[r].style.bottom = "95px"
  })
  cart[r].addEventListener("mouseout", () => {
    leh[r].style.opacity = "0"
    leh[r].style.bottom = "80px"
  })
  leh[r].addEventListener("mouseover", () => {
    lehspa[r].style.width = "96px"
  })
  leh[r].addEventListener("mouseout", () => {
    lehspa[r].style.width = "0px"
  })
}
// h15
let edmatlab = document.getElementsByClassName("edmatlab")
let matspa = document.getElementsByClassName("matspa")
for (let l = 0; l < edmatlab.length; l++) {
  edmatlab[l].addEventListener("mouseover", () => {
    matspa[l].style.opacity = "1"
    matspa[l].style.visibility = "visible"
  })
  edmatlab[l].addEventListener("mouseout", () => {
    matspa[l].style.opacity = "0"
    matspa[l].style.visibility = "hidden"
  })
}
let h15 = document.getElementsByClassName("h15div1-1")
let gerspa1 = document.getElementsByClassName("gerspa1")
let gerspa2 = document.getElementsByClassName("gerspa2")
let gerspa3 = document.getElementsByClassName("gerspa3")
for (let y = 0; y < h15.length; y++) {
  h15[y].addEventListener("mouseover", () => {
    gerspa3[y].style.right = "190px"
    gerspa3[y].style.transitionDelay = "0s"
    gerspa3[y].style.opacity = "1"
    gerspa3[y].style.visibility = "visible"
    gerspa3[y].style.height = "10px"
  })
  h15[y].addEventListener("mouseout", () => {
    gerspa3[y].style.right = "10px"
    gerspa3[y].style.transitionDelay = "0.5s"
    gerspa3[y].style.opacity = "0"
    gerspa3[y].style.visibility = "hidden"
    gerspa3[y].style.height = "0px"
  })
  h15[y].addEventListener("mouseover", () => {
    gerspa2[y].style.right = "170px"
    gerspa2[y].style.transitionDelay = "0.1s"
    gerspa2[y].style.opacity = "1"
    gerspa2[y].style.visibility = "visible"
    gerspa2[y].style.height = "10px"
  })
  h15[y].addEventListener("mouseout", () => {
    gerspa2[y].style.right = "0px"
    gerspa2[y].style.transitionDelay = "0.3s"
    gerspa2[y].style.opacity = "0"
    gerspa2[y].style.visibility = "hidden"
    gerspa2[y].style.height = "0px"
  })
  h15[y].addEventListener("mouseover", () => {
    gerspa1[y].style.right = "150px"
    gerspa1[y].style.opacity = "1"
    gerspa1[y].style.visibility = "visible"
    gerspa1[y].style.height = "10px"
  })
  h15[y].addEventListener("mouseout", () => {
    gerspa1[y].style.right = "-10px"
    gerspa1[y].style.opacity = "0"
    gerspa1[y].style.visibility = "hidden"
    gerspa1[y].style.height = "0px"
  })
}
// h13
let h13btn = document.getElementsByClassName("h13btn")
let zirh13 = document.getElementsByClassName("zirh13")
for (let g = 0; g < h13btn.length; g++) {
  h13btn[g].addEventListener("mouseover", () => {
    zirh13[g].style.right = "50px"
  })
}
// ثبت نام
let karbar = document.getElementsByClassName("karbar")
let sabt = document.getElementsByClassName("sabt")
karbar[0].addEventListener("click", () => {
  if (sabt[0].style.top === "60px") {
    sabt[0].style.top = "63px"
    sabt[0].style.opacity = "0"
    sabt[0].style.visibility = "hidden"
  }
  else {
    sabt[0].style.top = "60px"
    sabt[0].style.opacity = "1"
    sabt[0].style.visibility = "visible"
  }
})
let zabdar = document.getElementsByClassName("zabdar")
zabdar[0].addEventListener("click", () => {
  sabt[0].style.top = "63px"
  sabt[0].style.opacity = "0"
  sabt[0].style.visibility = "hidden"
})
// menu
let menubtn = document.getElementsByClassName("menubtn")
let menu = document.getElementsByClassName("menu")
menubtn[0].addEventListener("mouseover", () => {
  menu[0].style.opacity = "1"
  menu[0].style.top = "60px"
  menu[0].style.visibility = "visible"
})
menubtn[0].addEventListener("mouseout", () => {
  menu[0].style.opacity = "0"
  menu[0].style.top = "63px"
  menu[0].style.visibility = "hidden"
})
menu[0].addEventListener("mouseover", () => {
  menu[0].style.opacity = "1"
  menu[0].style.top = "60px"
  menu[0].style.visibility = "visible"
})
menu[0].addEventListener("mouseout", () => {
  menu[0].style.opacity = "0"
  menu[0].style.visibility = "hidden"
})
// zirmenu-1
let hovemenu = document.getElementsByClassName("hovemenu")
let zirmenu = document.getElementsByClassName("zirmenu")
hovemenu[0].addEventListener("mouseover", () => {
  zirmenu[0].style.opacity = "1"
  zirmenu[0].style.visibility = "visible"
})
hovemenu[0].addEventListener("mouseout", () => {
  zirmenu[0].style.opacity = "0"
  zirmenu[0].style.visibility = "hidden"
})
zirmenu[0].addEventListener("mouseover", () => {
  zirmenu[0].style.opacity = "1"
  zirmenu[0].style.visibility = "visible"
  menu[0].style.opacity = "1"
  menu[0].style.top = "60px"
  menu[0].style.visibility = "visible"
  hovemenu[0].style.backgroundColor = "#f9f9f9c7"
})
zirmenu[0].addEventListener("mouseout", () => {
  zirmenu[0].style.opacity = "0"
  zirmenu[0].style.visibility = "hidden"
  menu[0].style.opacity = "0"
  menu[0].style.top = "63px"
  menu[0].style.visibility = "hidden"
})
// zirmenu-2
let hovemenu2 = document.getElementsByClassName("hovemenu2")
let zirmenu2 = document.getElementsByClassName("zirmenu2")
hovemenu2[0].addEventListener("mouseover", () => {
  zirmenu2[0].style.opacity = "1"
  zirmenu2[0].style.visibility = "visible"
})
hovemenu2[0].addEventListener("mouseout", () => {
  zirmenu2[0].style.opacity = "0"
  zirmenu2[0].style.visibility = "hidden"
})
zirmenu2[0].addEventListener("mouseover", () => {
  zirmenu2[0].style.opacity = "1"
  zirmenu2[0].style.visibility = "visible"
  menu[0].style.opacity = "1"
  menu[0].style.top = "60px"
  menu[0].style.visibility = "visible"
  hovemenu2[0].style.backgroundColor = "#f9f9f9c7"
})
zirmenu2[0].addEventListener("mouseout", () => {
  zirmenu2[0].style.opacity = "0"
  zirmenu2[0].style.visibility = "hidden"
  menu[0].style.opacity = "0"
  menu[0].style.top = "63px"
  menu[0].style.visibility = "hidden"
})
// menufrosh
let menfrosh = document.getElementsByClassName("menfrosh")
let zirfrosh = document.getElementsByClassName("zirfrosh")
menfrosh[0].addEventListener("mouseover", () => {
  zirfrosh[0].style.opacity = "1"
  zirfrosh[0].style.visibility = "visible"
  zirfrosh[0].style.top = "60px"
  menfrosh[0].style.opacity = "0.8"
})
menfrosh[0].addEventListener("mouseout", () => {
  zirfrosh[0].style.opacity = "0"
  zirfrosh[0].style.visibility = "hidden"
  zirfrosh[0].style.top = "63px"
  menfrosh[0].style.opacity = "1"
})
zirfrosh[0].addEventListener("mouseover", () => {
  zirfrosh[0].style.opacity = "1"
  zirfrosh[0].style.visibility = "visible"
  zirfrosh[0].style.top = "60px"
  menfrosh[0].style.opacity = "0.8"
})
zirfrosh[0].addEventListener("mouseout", () => {
  zirfrosh[0].style.opacity = "0"
  zirfrosh[0].style.visibility = "hidden"
  menfrosh[0].style.opacity = "1"
})
// زمان
let counter1 = 60
setInterval(() => {
  counter1--
  document.getElementById("sanieh").innerHTML = counter1
  if (counter1 == 0) {
    counter1 = 60
  }
}, 1000)
let counter2 = 32
setInterval(() => {
  counter2--
  document.getElementById("daghigheh").innerHTML = counter2
}, 60000)
// 
let t1 = document.getElementsByClassName("t1")
t1[0].addEventListener("mouseover", () => {
  t1[0].style.backgroundImage = "linear-gradient(159deg, #ff2200, #ff7200)"
})
t1[0].addEventListener("mouseout", () => {
  t1[0].style.backgroundImage = "linear-gradient(159deg, var(--red), var(--orange))"
})
// pishbt
let pishbt = document.getElementsByClassName("pishbt")
let zirh1 = document.getElementsByClassName("zirh13")
for (let kk = 0; kk < pishbt.length; kk++) {
  pishbt[kk].addEventListener("mouseover", () => {
    zirh1[kk].style.right = "2px"
  })
}
// onkey
let onkey1 = document.getElementsByClassName("onkey1")
let boxonkey1 = document.getElementsByClassName("boxonkey1")
let zirkey = document.getElementsByClassName("zirkey")
for (let d = 0; d < onkey1.length; d++) {
  onkey1[d].addEventListener("click", () => {
    if (boxonkey1[d].style.height != "170px") {
      boxonkey1[d].style.height = "170px"
      zirkey[d].style.opacity = "1"
      zirkey[d].style.visibility = "visible"
      zirkey[d].style.transitionDuration = "0.2s"
      zirkey[d].style.transitionDelay = "0.6s"
    }
    else {
      boxonkey1[d].style.height = "68px"
      zirkey[d].style.opacity = "0"
      zirkey[d].style.visibility = "hidden"
      zirkey[d].style.transitionDuration = "0.1s"
      zirkey[d].style.transitionDelay = "0s"
    }
  })
}
// مرتب سازی
let aslsaz = document.getElementsByClassName("aslsaz")
let sazif = document.getElementsByClassName("sazif")
aslsaz[0].addEventListener("click", () => {
  if (sazif[0].style.opacity != "1") {
    sazif[0].style.opacity = "1"
    sazif[0].style.visibility = "visible"
  }
  else {
    sazif[0].style.opacity = "0"
    sazif[0].style.visibility = "hidden"
  }
})
// 
