const dataChildren = document.querySelector(".data").children;
const sidebarChildren = document.querySelector(".sidebar").children;

// Display the first tab in the sidebar of Product Data Section
for (var i = 0; i < sidebarChildren.length; i++) {
    if (sidebarChildren[i].classList.contains("active")) {
        const currentActiveID = sidebarChildren[i].id; // ID of sidebar a tag with current active class
        for (var i = 0; i < dataChildren.length; i++) {
            // Class name of data section matches the ID of the correlating sidebar a tag
            if (!dataChildren[i].classList.contains(currentActiveID)) {
                dataChildren[i].style.display = "none";
            }
        }
    }
}


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


attributeButton.addEventListener("click", () => {
    // Selected value from select option
    var value = attributeSelector.options[attributeSelector.selectedIndex].value;
    addAttribute(value);
        
});



const attributeSection = document.querySelector(".attributes");
const empty = document.querySelector(".empty");

numNewAttributes = 0;
// Appends attribute child to attribute-add div
function addAttribute(value) {
    // Create new attributes
    if (value == 'New Attribute') {
        const newDiv = document.createElement("div"); // new attribute div
        newDiv.classList.add("new-attribute");

        const exitButton = document.createElement("a"); // exit button
        exitButton.textContent = "X";
        exitButton.classList.add("exit");

        const newInput = document.createElement("input"); //new attribute input form
        newInput.type = "text";
        newInput.setAttribute("form", "add-attributes");
        newInput.name = numNewAttributes; // input name increments everytime one is added
        numNewAttributes++;
        newInput.placeholder = "New attribute name..."

        newDiv.appendChild(newInput);
        newDiv.appendChild(exitButton);
        attributeSection.appendChild(newDiv); // add the new div with its children to attributeSection

         // Exit buttons for attributes
        exitButton.addEventListener("click", () => {
            attributeSection.removeChild(newDiv);
        });

    // Attributes that already exists
    } else {
        let child = attributeSection.querySelector('div[id="' + value + '"]')
        // If child already exists with same ID then don't add a new one
        if (!child) { 
            const newDiv = document.createElement("div"); // new div
            const p = document.createElement("p");        // attribute name
            const exitButton = document.createElement("a"); // exit button

            newDiv.classList.add("new-attribute");
            newDiv.id = value; // the id of the new div is equal to value 

            exitButton.textContent = "X";
            exitButton.classList.add("exit");
        
            p.textContent = value; // Dropdown selected value
           
            newDiv.appendChild(p);
            newDiv.appendChild(exitButton);
            attributeSection.appendChild(newDiv);

            // Exit buttons for attribute sections
            exitButton.addEventListener("click", () => {
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
const publishButton = document.querySelector("#publish");
publishButton.addEventListener("click", attributesToArray);
const productForm = document.querySelector("#product");
const displayedAttributes = attributeSection.children;

function attributesToArray() {
    const attributeValueArray = [];
    for (var i = 0; i < displayedAttributes.length; i++) {
        // child of attribute section is a div and isn't the one already marked up
        if (displayedAttributes[i].id != "attribute-add" && displayedAttributes[i].nodeName == "DIV") {
            const divChildren = displayedAttributes[i].children; 
            for (var j = 0; j < divChildren.length; j++) {
                // Attribute was predefined and is <p> so append the textContent
                if (divChildren[j].nodeName == "P") {
                    attributeValueArray.push(divChildren[j].textContent);
                // Attribute is new and is an input so append the value
                } else if (divChildren[j].nodeName != "A" && divChildren[j].nodeName == "INPUT") {
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
    
    // Submit the form to index.php since we've now run our JS prior
    productForm.submit();

}












