const addItems = document.querySelector('.add-items');
const itemslist = document.querySelector('.plates');
const items = [];

function addItem (e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item')).value
    const item = {
        text ,
        done : false
    }
    items.push(item)
    copulatelist(items,itemslist)
    this.reset();
}

function copulatelist(plates = [] , placelists) {
    placelists.innerHTML = plates.map((plate , i) => {
        return `
           <li> 
             <label for = "">${plate.text}</label>
           </li>
        `;
    }).join('');

}
addItems.addEventListener('submit' , addItem)