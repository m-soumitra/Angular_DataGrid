import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import { DataService } from './data.service';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  providers: [DataService]
})
export class DataGridComponent implements OnInit {

  public tableWidget: any;

  public selectedName: string = ""
  private _accuralGridData = [];
  private _totalRows: number;

  constructor(private _dataServices: DataService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initDatatable()
  }

  private initDatatable(): void {
    this._dataServices.fetchGridData()
      .subscribe((response) => {
        if (response.statusCd != 500) {
          this._accuralGridData = <AccuralGrid[]>response.results;
          this._totalRows = this._accuralGridData.length;
        }
      });
    //   debugger
    let tempId: any = $('#accuralTable');
    this.tableWidget = tempId.DataTable({
      select: true,
      pagingType: "full_numbers"
    });
  }

  private reInitDatatable(): void {

    if (this.tableWidget) {
      this.tableWidget.destroy()
      this.tableWidget = null
    }
    setTimeout(() => this.initDatatable(), 0)
  }

  public selectRow(index: number, row: any) {
    this.selectedName = "row#" + index + " " + row.name
  }

}

export interface AccuralGrid {
  vendor: string;
  vl: string;
  rebate: string;
  rt: string;
  po: number;
  item: string;
  receiptDate: Date;
  vaInvoice: string;
}