const flavors = window.iceCreamFlavors;


function createUl(flavors) {
    let list = document.querySelector('ul')
    list.append(
        flavors.forEach(function(flavor) {
            const li = document.createElement('li');
            li.innerHTML = flavor;
            list.appendChild(li)
        }));
}
createUl(flavors);