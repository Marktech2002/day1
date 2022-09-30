const addItems = document.querySelector('.add-items');
const itemslist = document.querySelector('.plates');
const items = [];
  
function addItem (e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value ;
    const item = {
        text ,
        done : false
    };
    items.push(item);
    pulatelists(items , itemslist)
    this.reset();
    console.log(this.undefined);
}

function pulatelists(plates = [] , platelists) {
   platelists.innerHTML = plates.map((plate,i) => {
      return `  
      <li>
        <input type="checkbox" data-index=${i} id=item${i} />
        <label for ="item${i}">${plate.text}</label>
      </li>
      `
   }).join('');
}

addItems.addEventListener('submit' , addItem);