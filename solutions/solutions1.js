const flavors = window.iceCreamFlavors;


function createUl(array) {
    let list = document.querySelector('ul')
    for (let i=0; i < array.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
}
createUl(flavors);