import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { Grid } from "ag-grid/dist/lib/grid";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private gridOptions: GridOptions;
	public showGrid: boolean;
	public rowData: any[];
	private columnDefs: any[];

	constructor() {
		this.gridOptions = <GridOptions>{
			columnDefs: this.createColumnDefs(),
			rowData: this.createRowData()
		};

		this.showGrid = true;
	}

	// specify the columns
	private createColumnDefs() {
		return [
			{ headerName: "Make", field: "make" },
			{ headerName: "Model", field: "model" },
			{ headerName: "Price", field: "price" }
		];
	}

	// specify the data
	private createRowData() {
		return [
			{ make: "Toyota", model: "Celica", price: 35000 },
			{ make: "Ford", model: "Mondeo", price: 32000 },
			{ make: "Porsche", model: "Boxter", price: 72000 }
		];
	}

}

