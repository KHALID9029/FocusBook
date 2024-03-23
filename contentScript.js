let shouldInjnect = localStorage.getItem('Focusbook');
let shouldReplce = localStorage.getItem('Blur');
const inject = function () {
    const elem = document.createElement('div');
    elem.className = 'ourImage';
    elem.innerHTML = 'This is an Injected element';
    document.body.insertBefore(elem, document.body.firstChild);
}

const Replace = function () {
    const item = document.getElementsByTagName("img");
    const elem = document.createElement('div');
    elem.className = 'ourImage';
    elem.innerHTML = 'This is replaced ';
    for (let i = 0; i < item.length; i++) {
        item[i].replaceWith(elem);
    }
}
inject();
Replace();
if (shouldInjnect=='On') {
    console.log("Inject")
}
else    console.log("Not inject")
if (shouldReplce) {
    console.log("Replace")

}
else    console.log("Not replace")
