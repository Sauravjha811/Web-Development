var arr = [
    {
        dp: "https://images.unsplash.com/photo-1528812969535-4bcefc071532?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974",
        story:"https://images.unsplash.com/photo-1600209142000-aa256622e64a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1964"
    },
    {
        dp: "https://images.unsplash.com/photo-1598346762291-aee88549193f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
        story:"https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&w=600"
    },
    {
        dp:"https://images.unsplash.com/photo-1580827929620-e1a34bc162fd?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&w=600",
        story:"https://images.unsplash.com/photo-1687712399095-894383b7d20a?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGVyJTIwcG91bmR8ZW58MHx8MHx8fDA%3D&w=600"
    },
    {
        dp:"https://images.unsplash.com/photo-1536663558620-64fa6221c4db?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&w=600",
        story:"https://images.unsplash.com/photo-1665943632169-3434c5d26df0?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1970"
    },
    {
        dp:"https://images.unsplash.com/photo-1576159166600-ba38cb4b8bff?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
        story:"https://images.unsplash.com/photo-1573499543190-16a56108711a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
    }
]
var story = document.querySelector("#story");
var clutter = "";
arr.forEach((elem, idx) => {
    clutter += `<div class="story1">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

story.innerHTML = clutter;

story.addEventListener("click", function(dets) {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    }, 2000);
})