//Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
//Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, 
//столбцы — латинскими буквами A, B, C, D, E, F, G, H.

let table = document.createElement('table');
for (let i = 0; i < 9; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 9; j++) {
        let td = document.createElement('td');

        if (i % 2 == j % 2 || i == 0 || j == 0) {
            td.className = 'white';
            if (i == 0 && j != 0) { td.innerHTML = String.fromCharCode(64 + j) }
            if (i != 0 && j == 0) { td.innerHTML = i }
            td.classList.add('center');
        } else {
            td.className = 'black';
        }

        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);


