const dataContainer = document.querySelector(".data");
const dataChildren = dataContainer.children;

const sidebar = document.querySelector(".sidebar");
const sidebarChildren = sidebar.children;

// Display the first tab in the sidebar of Product Data Section
for (var i = 0; i < sidebarChildren.length; i++) {
    if (sidebarChildren[i].classList.contains("active")) {
        const currentActiveID = sidebarChildren[i].id;
        for (var i = 0; i < dataChildren.length; i++) {
            if (!dataChildren[i].classList.contains(currentActiveID)) {
                dataChildren[i].style.display = "none";
            }
        }
    }
}

// Add event listeners for all of the sidebar links
for (var i = 0; i < sidebarChildren.length; i++) {
    sidebarChildren[i].addEventListener("click", changeSection);
}

// Display proper data section and set active to proper sidebar
function changeSection() {
    this.classList.add("active");
    for (var i = 0; i < sidebarChildren.length; i++) {
        // remove active class from all other sidebar links
        if (sidebarChildren[i] != this) {
            sidebarChildren[i].classList.remove("active");
        }

        // display the desired section
        if (dataChildren[i].classList.contains(this.id)) {
            dataChildren[i].style.display = "flex";
        } else {
            dataChildren[i].style.display = "none";
        }
    }
}



