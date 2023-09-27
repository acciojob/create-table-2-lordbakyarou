function createTable() {
    //Write your code here

	let rows = prompt("Input number of rows");
	let columns = prompt("Input number of columns");

	const table = document.getElementById("myTable");
	

	for(let i =0;i<rows;i++){
		const tr = document.createElement("tr");
		for(let j = 0;j<columns;j++){
			const td = document.createElement("td");
			td.innerText = `Row-${i} Column-${j}`
			tr.appendChild(td);
		}

		table.appendChild(tr);
	}
}
