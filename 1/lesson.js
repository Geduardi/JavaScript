"use strict"

const map = {
	mapSource: document.querySelector('.chessMap'),
	renderMap() {
		const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
		const cols = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0];
		for (let row = 0; row < rows.length; row++) {
			const tr = document.createElement('tr');
			this.mapSource.appendChild(tr);
			for (let col = 0; col < cols.length; col++) {
				const td = document.createElement('td');
				tr.appendChild(td);
				if (rows[row] === 0 && cols[col] !== 0) {
					td.insertAdjacentHTML('afterbegin', cols[col]);
				} else if (rows[row] !== 0 && cols[col] === 0) {
					td.insertAdjacentHTML('afterbegin', rows[row]);
				}
				if (this.isBlack(row, col)) {
					td.style.backgroundColor = 'gray';
				}
			}
		}
	},

	isBlack(row, col) {
		if (row === 0 || col === 0 || row === 9 || col === 9) {
			return false;
		}
		return (row + col) % 2 === 1;
	}
}

map.renderMap();