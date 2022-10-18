for (let i = 0; i < 17; i++) {
    let rows = document.createElement('div');
    rows.id = 'row' + i;
    rows.className = 'border pad row';
    document.getElementById("container").appendChild(rows);
}

let x = 0
for (let i = 0; i < 17; i++) {
    for (let i = 0; i < 17; i++) {
        let columns = document.createElement('div');
        columns.id = 'column';
        columns.className = 'border pad column';
        document.getElementById("row" + x).appendChild(columns);
    }
    x++;
}

const divs = document.querySelectorAll('.column');

divs.forEach(el => el.addEventListener('click', event => {
  event.target.style.backgroundColor = "black";
  console.log(event.target.getAttribute("data-el"));
}));