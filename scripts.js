let coll = document.getElementsByClassName("collapsible");
// let i;

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
    }else{
        content.style.display = "block";
    }
    });
}