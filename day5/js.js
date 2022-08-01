const panels = document.querySelectorAll('.panel')

function toogleOpen() {
    this.classList.toggle('open');
}


function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

panels.forEach(panel => panel.addEventListener('click' , toogleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))