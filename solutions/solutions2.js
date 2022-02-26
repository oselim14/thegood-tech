const flavors = window.iceCreamFlavors;


function createUl(flavors) {
    let list = document.querySelector('ul')
    list.append(
    ...flavors.map((flavor) => {
        const li = document.createElement('li');
        li.textContent = flavor;
        return li;
    }));
}
createUl(flavors);