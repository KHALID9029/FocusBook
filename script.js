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

    if (focusbook == 'On') {
        localStorage.setItem('Focusbook', 'Off');
    }

    else {
        localStorage.setItem('Focusbook', 'On');
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

    if (blurryStart == 'On') {
        localStorage.setItem('Blur', 'Off');
    }

    else {
        localStorage.setItem('Blur', 'On');
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

    if (set == 'On') 
    {
        localStorage.setItem('HideImages', 'Off');
    }

    else 
    {
        localStorage.setItem('HideImages', 'On');
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

    if (set == 'On') 
    {
        localStorage.setItem('HideReels', 'Off');
    }

    else 
    {
        localStorage.setItem('HideReels', 'On');
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

    if (set == 'On') 
    {
        localStorage.setItem('HidePosts', 'Off');
    }

    else 
    {
        localStorage.setItem('HidePosts', 'On');
    }
}




document.addEventListener("DOMContentLoaded", function () {
    setInitialButtonState();
});


function setInitialButtonState() 
{
    let focusbook = localStorage.getItem('Focusbook');

    if(focusbook==null||focusbook==undefined)
    {
        localStorage.setItem('Focusbook', 'Off');
        focusbook = 'Off';
    }

    if (focusbook == 'Off') 
    {
        document.getElementById('focusbookButton').checked = false;
        //document.getElementById('focusbookButton').classList.add('button-on');
    }
    else 
    {
        document.getElementById('focusbookButton').checked = true;
    }


    let blur = localStorage.getItem('Blur');

    if(blur==null||blur==undefined)
    {
        localStorage.setItem('Blur', 'Off');
        blur = 'Off';
    }
    if (blur == 'Off') 
    {
        document.getElementById('blurryStart').checked = false;
    }
    else 
    {
        document.getElementById('blurryStart').checked = true;
    }



    let gender = localStorage.getItem('Gender');

    if(gender==null||gender==undefined)
    {
        localStorage.setItem('Gender','Male');
        gender='Male';
    }
    
    if (gender == 'Male') 
    {
        document.getElementById('male').checked = true;
    }
    else 
    {
        document.getElementById('female').checked = true;
    }
    


    let image= localStorage.getItem('HideImages');

    if(image==null||image==undefined)
    {
        localStorage.setItem('HideImages','Off');
        image='Off';
    }
        
    if (image == 'On') 
    {
        document.getElementById('imagesButton').checked = true;
    }
    else 
    {
        document.getElementById('imagesButton').checked = false;
    }
    


    let reels= localStorage.getItem('HideReels');

    if(reels==null||reels==undefined)
    {   
        localStorage.setItem('HideReels','Off');
        reels='Off';
    }
    
    if (reels == 'On') 
    {
        document.getElementById('reelsButton').checked = true;
    }
    else 
    {
        document.getElementById('reelsButton').checked = false;
    }
    


    let posts= localStorage.getItem('HidePosts');

    if(posts==null||posts==undefined)
    {
        localStorage.setItem('HidePosts','Off');
        posts='Off';
    }
    
    if (posts == 'On') 
    {
        document.getElementById('postsButton').checked = true;
    }
    else 
    {
        document.getElementById('postsButton').checked = false;
    }
   
}