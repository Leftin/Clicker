function onload(){
x = 0
b = 0.1
c = 10
BaseCost = 10
Multiplier = 1.7
clicks = 0
xp = document.getElementById("leftx")
bp = document.getElementById("leftb")
xpp = document.getElementById("text1")
bpp = document.getElementById("text2")
cpp = document.getElementById("text3")
clicksp = document.getElementById("text4")
achiv = document.getElementById("text5")
newgame = document.getElementById("newgame")

xp.textContent = "x + b"
bp.textContent = "b + 1(Price: c)" 

clicksp.textContent = "clicks = " + String(clicks)
xpp.textContent = "x = " + String(x)
bpp.textContent = "b = " + String(b)
cpp.textContent = "c = " + String(c)


bp.onclick = () => {
    if (x >= c) {
        b+=0.1
        b=Number(b.toFixed(1))
        x=x-c
        x=Number(x.toFixed(1))
        c=Math.round(BaseCost*Math.pow(Multiplier, b))
    }
    clicks++
    clicksp.textContent = "clicks = " + String(clicks)
    xpp.textContent = "x = " + String(x)
    bpp.textContent = "b = " + String(b)
    cpp.textContent = "c = " + String(c)
    xp.textContent = "x + b"
    bp.textContent = "b + 1(Price: c)" 
}

xp.onclick = () => {
    achiv.style.display = "none"
    x += b
    x=Number(x.toFixed(1))
    clicks++
    clicksp.textContent = "clicks = " + String(clicks)
    xpp.textContent = "x = " + String(x)
    bpp.textContent = "b = " + String(b)
    cpp.textContent = "c = " + String(c)
    xp.textContent = "x + b"
    bp.textContent = "b + 1(Price: c)" 
}
newgame.onclick = () => {
    console.log("Hello World")
    x = 0
    b = 1
    c = 10
    clicks = 0
    clicksp.textContent = "clicks = " + String(clicks)
    xpp.textContent = "x = " + String(x)
    bpp.textContent = "b = " + String(b)
    cpp.textContent = "c = " + String(c)
}
}