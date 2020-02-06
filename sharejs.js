function copyLink() {
    var locationInput = document.createElement('input');
    var locationText = window.location.href;

    document.body.appendChild(locationInput);
    locationInput.value = locationText;
    locationInput.select();
    document.execCommand('copy');
    document.body.removeChild(locationInput);

    document.getElementById("copy-text").innerHTML = "Link copied";
    setTimeout(function(){ document.getElementById("copy-text").innerHTML = "Copy Link"; }, 2000);
}

function showDropDown() {
    var shareList = document.getElementById("ddlist");
    var shareButton = document.getElementById("shareButton");
    shareList.classList.add("show");
    shareButton.setAttribute("aria-expanded", "true");
}

function hideDropDown() {
    var shareList = document.getElementById("ddlist");
    var shareButton = document.getElementById("shareButton");
    shareList.classList.remove("show");
    shareButton.setAttribute("aria-expanded", "false");
}

function toggleDropDown() {
    var shareList = document.getElementById("ddlist");
    var shareButton = document.getElementById("shareButton");
    var expanded = shareButton.getAttribute("aria-expanded");

    shareList.classList.toggle("show");

    if (expanded == "true") {
        expanded = "false"
    } else {
        expanded = "true"
    }

    shareButton.setAttribute("aria-expanded", expanded);
}

function onTouch(e) {
    e.preventDefault();
    if (navigator.share) {
        navigator.share({ title: document.title, url: window.location.href });
    } else {
        toggleDropDown();
    }
}
