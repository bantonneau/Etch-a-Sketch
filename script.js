function canvasCreate(a) {
    for (let i = 0; i < a; i++) {
        let rows = document.createElement('div');
        rows.id = 'row' + i;
        rows.className = 'border pad row';
        document.getElementById("container").appendChild(rows);
    }

    let x = 0
    for (let i = 0; i < a; i++) {
        for (let i = 0; i < a; i++) {
            let columns = document.createElement('div');
            columns.id = 'column';
            columns.className = 'border pad column';
            document.getElementById("row" + x).appendChild(columns);
        }
        x++;
    }
    const divs = document.querySelectorAll('.column');
    divs.forEach(el => el.addEventListener('mouseover', event => {
        event.target.classList.add("fill");
        }));
        divs.forEach(el => el.addEventListener('transitionend', event => {
            event.target.classList.remove("fill");
        }));
}
canvasCreate(16)

  res.onclick = () => {
    const myNode = document.getElementById("container");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
    let resNumber = prompt("Enter new resolution")
    canvasCreate(resNumber);
    addListeners();
};