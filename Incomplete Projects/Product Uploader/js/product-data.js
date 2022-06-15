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

// Gets the selected value of attribute option when add button clicked
const attributeSelector = document.getElementById("attribute-selector");
const attributeButton = document.getElementById("attribute-button");

attributeButton.addEventListener("click", () => {
    // Selected value from select option
    var value = attributeSelector.options[attributeSelector.selectedIndex].value;
    addAttribute(value);
    
});

const attributeSection = document.querySelector(".attributes");
const empty = document.querySelector(".empty");

function addAttribute(value) {
    if (value == 'New Attribute') {
        const newDiv = document.createElement("div");
        newDiv.classList.add("new-attribute");
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.form = "add-attributes";
        newInput.name = "newattribute";
        newInput.placeholder = "New attribute name..."
        newDiv.appendChild(newInput);
        attributeSection.appendChild(newDiv);
    } else {
        let child = attributeSection.querySelector('div[id="' + value + '"]')
        // If child already exists with same ID then don't add a new one
        if (!child) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("new-attribute");
            newDiv.id = value;
            const p = document.createElement("p");
            p.textContent = value;
            newDiv.appendChild(p);
            attributeSection.appendChild(newDiv);
        }
        
    }
    
}





