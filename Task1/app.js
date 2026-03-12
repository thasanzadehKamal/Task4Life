let panel = document.querySelectorAll(".panel");
panel.forEach(e => {
    e.addEventListener("click", () => {
        panel.forEach(e => e.classList.remove("active"));
        e.classList.add("active")      
    })
})
