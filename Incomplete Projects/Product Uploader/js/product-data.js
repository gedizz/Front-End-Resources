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
const attributeButton = document.getElementById("attribute-add-button");

if (attributeButton) {
    attributeButton.addEventListener("click", () => {
        // Selected value from select option
        var value = attributeSelector.options[attributeSelector.selectedIndex].value;
        addAttribute(value);
        
    });
}


const attributeSection = document.querySelector(".attributes");
const empty = document.querySelector(".empty");

numNewAttributes = 0;
// Appends attribute child to attribute-add div
function addAttribute(value) {
    // Create new attributes
    if (value == 'New Attribute') {
        const newDiv = document.createElement("div");
        newDiv.classList.add("new-attribute");

        const exitButton = document.createElement("a");
        exitButton.textContent = "X";
        exitButton.classList.add("exit");

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.setAttribute("form", "add-attributes");
        newInput.name = numNewAttributes;
        numNewAttributes++;
        newInput.placeholder = "New attribute name..."

        newDiv.appendChild(newInput);
        newDiv.appendChild(exitButton);
        attributeSection.appendChild(newDiv);

         // Exit buttons for attributes
         exitButton.addEventListener("click", () => {
            console.log("Exit clicked");
            attributeSection.removeChild(newDiv);
    
        });
    // Attributes that already exists
    } else {
        let child = attributeSection.querySelector('div[id="' + value + '"]')
        // If child already exists with same ID then don't add a new one
        if (!child) {
            const newDiv = document.createElement("div");
            const p = document.createElement("p");
            const exitButton = document.createElement("a");

            newDiv.classList.add("new-attribute");
            newDiv.id = value;

            exitButton.textContent = "X";
            exitButton.classList.add("exit");
        
            p.textContent = value;
           
            newDiv.appendChild(p);
            newDiv.appendChild(exitButton);
            attributeSection.appendChild(newDiv);

            // Exit buttons for attribute sections
            exitButton.addEventListener("click", () => {
                console.log("Exit clicked");
                attributeSection.removeChild(newDiv);
        
            });
        }
        
    }
    
}

/*
===Attribute Saving===
On Publish:
    - Javascript recognizes click and creates an array of attribute values
    - PHP accepts the array and serializes to send to DB

*/
const arrayPosted = ["1", "2", "3"];
const publishButton = document.querySelector("#publish");
publishButton.addEventListener("click", attributesToArray);
const productForm = document.querySelector("#product");
const displayedAttributes = attributeSection.children;

function attributesToArray() {
    const attributeValueArray = [];
    console.log(displayedAttributes.length);
    for (var i = 0; i < displayedAttributes.length; i++) {
        if (displayedAttributes[i].id != "attribute-add" && displayedAttributes[i].nodeName == "DIV") {
            const divChildren = displayedAttributes[i].children;
            console.log("Attribute child");
            for (var j = 0; j < divChildren.length; j++) {
                // Attribute was predefined and is <p> so append the textContent
                if (divChildren[j].nodeName == "P") {
                    //console.log("IF: " + divChildren[j].textContent);
                    attributeValueArray.push(divChildren[j].textContent);
                // Attribute is new and is an input so append the value
                } else if (divChildren[j].nodeName != "A" && divChildren[j].nodeName == "INPUT") {
                    //console.log("ELSE: " + divChildren[j].value);
                    attributeValueArray.push(divChildren[j].value);
                }
            }
        }
    } 
    // if exists only update
    let existingInputArray = attributeSection.querySelector('input[id="array-to-post"]')
    if (!existingInputArray) {
        const newInputArray = document.createElement("input");
        newInputArray.type = "hidden";
        newInputArray.setAttribute("form", "product");
        newInputArray.name = "attributes";
        newInputArray.id = "array-to-post"
        // Formats the array to be able to post to PHP
        var serializedArray = JSON.stringify(attributeValueArray);
        newInputArray.value = serializedArray;
        attributeSection.appendChild(newInputArray);
    } else {
        const newInputArray = existingInputArray;
       // Formats the array to be able to post to PHP
        var serializedArray = JSON.stringify(attributeValueArray);
        newInputArray.value = serializedArray;
        attributeSection.appendChild(newInputArray);
    }
    

    productForm.submit();
    console.log(attributeValueArray);

}












