function toggleDown(e) {
    const arrayOfMenuItems = Array.from(e.target.nextElementSibling.children);
    arrayOfMenuItems.forEach((element) => {
        element.classList.remove('hidden');
    });
    e.target.parentNode.classList.remove('up');
};

function toggleUp(e) {
    const arrayOfMenuItems = Array.from(e.target.nextElementSibling.children);
    arrayOfMenuItems.forEach((element) => {
        element.classList.add('hidden');
    });
    e.target.parentNode.classList.add('up');
}

document.getElementById("toggle-down").addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains('up')) {
       toggleDown(e); 
    } else {
        toggleUp(e);
    }
});