//localStorage.setItem('Focusbook', 'Off');
//localStorage.setItem('Blur', 'Off');
//localStorage.setItem('Gender','Male');
//localStorage.setItem('HideImages','Off');
//localStorage.setItem('HideReels','Off');
//localStorage.setItem('HidePosts','Off');


document.addEventListener("DOMContentLoaded", function () {
    // This code will execute after the DOMContentLoaded event
    var submitButton = document.getElementById("submitButton");
    if (submitButton) {
        submitButton.addEventListener("click", userName);
    }
    else {
        console.error("Submit button not found.");
    }
});


function userName() {
    document.getElementById('msg').innerHTML = "";
    let name = document.getElementById('name').value;

    if (name == '') {
        document.getElementById('msg').innerHTML = "Please enter your name";
        document.getElementById('msg').style.color = "red";
    }

    else {
        document.getElementById('name').value = "";
        localStorage.setItem('UserName', name);
        document.getElementById('msg').innerHTML = "Welcome " + name;
    }
}



document.addEventListener("DOMContentLoaded", function () {

    var focusbookButton = document.getElementById("focusbookButton");

    if (focusbookButton) {
        focusbookButton.addEventListener("click", focusbook);
    }
    else {
        console.error("focusbookButton not found.");
    }
});


function focusbook() {
    document.getElementById('msg').innerHTML = "";

    let focusbook = localStorage.getItem('Focusbook');

    if (focusbook == 'Off') {
        localStorage.setItem('Focusbook', 'On');
    }

    else {
        localStorage.setItem('Focusbook', 'Off');
    }
}

document.addEventListener("DOMContentLoaded", function () {

    var blurryStartButton = document.getElementById("blurryStart");

    if (blurryStartButton) {
        blurryStartButton.addEventListener("click", blurryStart);
    }
    else {
        console.error("blurryStartButton not found.");
    }
});


function blurryStart() {
    document.getElementById('msg').innerHTML = "";

    let blurryStart = localStorage.getItem('Blur');

    if (blurryStart == 'Off') {
        localStorage.setItem('Blur', 'On');
    }

    else {
        localStorage.setItem('Blur', 'Off');
    }
}


document.addEventListener("DOMContentLoaded", function () {

    var options = document.querySelectorAll('input[type="radio"][name="options"]');

    options.forEach(function (option) 
    {
        option.addEventListener('change', function () 
        {
            var selectedOption = document.querySelector('input[type="radio"][name="options"]:checked').value;
            let gender = localStorage.getItem('Gender');
            

            if (gender == 'Male') 
            {
                localStorage.setItem('Gender', 'Female');
            }

            else 
            {
                localStorage.setItem('Gender', 'Male');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {

    var imagesButton = document.getElementById("imagesButton");

    if (imagesButton) 
    {
        imagesButton.addEventListener("click", images);
    }
    else 
    {
        console.error("Button not found.");
    }
});


function images() 
{
    document.getElementById('msg').innerHTML = "";

    let set = localStorage.getItem('HideImages');

    if (set == 'Off') 
    {
        localStorage.setItem('HideImages', 'On');
    }

    else 
    {
        localStorage.setItem('HideImages', 'Off');
    }
}


document.addEventListener("DOMContentLoaded", function () {

    var Button = document.getElementById("reelsButton");

    if (Button) 
    {
        Button.addEventListener("click", reels);
    }
    else 
    {
        console.error("Button not found.");
    }
});


function reels() 
{
    document.getElementById('msg').innerHTML = "";

    let set = localStorage.getItem('HideReels');

    if (set == 'Off') 
    {
        localStorage.setItem('HideReels', 'On');
    }

    else 
    {
        localStorage.setItem('HideReels', 'Off');
    }
}



document.addEventListener("DOMContentLoaded", function () {

    var Button = document.getElementById("postsButton");

    if (Button) 
    {
        Button.addEventListener("click", posts);
    }
    else 
    {
        console.error("Button not found.");
    }
});


function posts() 
{
    document.getElementById('msg').innerHTML = "";

    let set = localStorage.getItem('HidePosts');

    if (set == 'Off') 
    {
        localStorage.setItem('HidePosts', 'On');
    }

    else 
    {
        localStorage.setItem('HidePosts', 'Off');
    }
}




document.addEventListener("DOMContentLoaded", function () {
    setInitialButtonState();
});


function setInitialButtonState() {
    let focusbook = localStorage.getItem('Focusbook');

    if (focusbook == 'On') {
        document.getElementById('focusbookButton').checked = true;
        //document.getElementById('focusbookButton').classList.add('button-on');
    }
    else {
        document.getElementById('focusbookButton').checked = false;
    }


    let blur = localStorage.getItem('Blur');
    if (blur == 'On') {
        document.getElementById('blurryStart').checked = true;
    }
    else {
        document.getElementById('blurryStart').checked = false;
    }



    let gender = localStorage.getItem('Gender');
    {
        if (gender == 'Male') {
            document.getElementById('male').checked = true;
        }
        else {
            document.getElementById('female').checked = true;
        }
    }


    let image= localStorage.getItem('HideImages');
    {
        if (image == 'On') {
            document.getElementById('imagesButton').checked = true;
        }
        else {
            document.getElementById('imagesButton').checked = false;
        }
    }


    let reels= localStorage.getItem('HideReels');
    {
        if (reels == 'On') {
            document.getElementById('reelsButton').checked = true;
        }
        else {
            document.getElementById('reelsButton').checked = false;
        }
    }


    let posts= localStorage.getItem('HidePosts');
    {
        if (posts == 'On') {
            document.getElementById('postsButton').checked = true;
        }
        else {
            document.getElementById('postsButton').checked = false;
        }
    }
}