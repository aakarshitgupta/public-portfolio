let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        // Find all .lang elements inside the hovered .box
        let langs = box.querySelectorAll(".lang");
        langs.forEach(lang => {
            lang.classList.add("hover"); // Add the 'hover' class to each .lang
        });
    });

    box.addEventListener("mouseout", () => {
        // Remove the 'hover' class when mouse leaves the .box
        let langs = box.querySelectorAll(".lang");
        langs.forEach(lang => {
            lang.classList.remove("hover"); // Remove the 'hover' class from each .lang
        });
    });
});
