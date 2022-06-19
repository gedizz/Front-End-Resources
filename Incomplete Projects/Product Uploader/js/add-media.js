// Entire popup 
mediaPopup = document.querySelector(".add-media");

// Buttons
const addMediaButton = document.querySelector("#add-media-button");
const uploadTabButton = document.querySelector("#upload-tab-button");
const libraryTabButton = document.querySelector("#library-tab-button");
const exitButton = document.querySelector("#media-exit");
const uploadFilesButton = document.querySelector("#upload-button");

// Tabs
const libraryTab = document.querySelector(".media-library");
const uploadTab = document.querySelector(".upload-files");

// Listens for clicking exit button
exitButton.addEventListener("click", () => {
    mediaPopup.style.display = "none";
});

// Listens for the add media button to display the popup menu
addMediaButton.addEventListener("click", () => {
    mediaPopup.style.display = "flex";
});

// Listens for the upload files tab
uploadTabButton.addEventListener("click", () => {
    uploadTabButton.classList.add("active");
    libraryTabButton.classList.remove("active");
    libraryTab.style.display = "none";
    uploadTab.style.display = "flex";
});


// Listens for the media library tab
libraryTabButton.addEventListener("click", () => {
    libraryTabButton.classList.add("active");
    uploadTabButton.classList.remove("active");
    uploadTab.style.display = "none";
    libraryTab.style.display = "flex";
});


const fileInput = document.querySelector("#fileToUpload");
// Open input when the upload button is clicked 
uploadFilesButton.addEventListener("click", () => {
    fileInput.click();
});

const submitUpload = document.querySelector("#submit-upload")
const uploadForm = document.querySelector("#image-upload");
const uploadQueue = document.querySelector(".upload-queue");
fileInput.addEventListener("input", () => {
    const fileName = document.createElement("p");
    fileName.textContent = fileInput.files[0].name;
    uploadQueue.appendChild(fileName);
    //submitUpload.click();
})
