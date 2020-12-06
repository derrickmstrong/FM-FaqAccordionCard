let acc = document.getElementsByClassName("accordion");
let arrow = document.getElementsByClassName("arrow-down");

for (let i = 0; i < acc.length; i++) {
    // Toggle active class
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        
    // Toggle panel
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
        arrow[i].style.transform = "rotate(0deg)";
    } else {
        panel.style.display = "block"
        arrow[i].style.transform = 'rotate(180deg)';
    }

    // Transition Panel
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
    })
    
}