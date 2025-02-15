var pig = document.getElementById("pig")
var pig_emoji = "🐷"
pig.onclick = function(){
    if(!pig.innerHTML.includes(pig_emoji)){
        pig.innerHTML = pig.innerHTML + pig_emoji
    } else {
        pig.innerHTML = "pig"
    }
}

var butt = document.getElementById("butterfly")
var butt_emoji = "🦋"
butt.onclick = function(){
    if(!butt.innerHTML.includes(butt_emoji)){
        butt.innerHTML = butt.innerHTML + butt_emoji
    } else {
        butt.innerHTML = "butterfly"
    }
}

var bee = document.getElementById("bee")
var bee_emoji = "🐝"
bee.onclick = function(){
    if(!bee.innerHTML.includes(bee_emoji)){
        bee.innerHTML = bee.innerHTML + bee_emoji
    } else {
        bee.innerHTML = "bee"
    }
}
