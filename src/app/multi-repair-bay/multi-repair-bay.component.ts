import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-multi-repair-bay',
  templateUrl: './multi-repair-bay.component.html',
  styleUrls: ['./multi-repair-bay.component.css']
})
export class MultiRepairBayComponent implements OnInit {
  public repairBayConfigForm: FormGroup;
  scrollableCols: any[] = [];
  frozenCols: any[] = [];
  repairBayCounts: SelectItem[] = [];
  tempCount: any = 1;
  bayItemArray: SelectItem[] = [];

  constructor(
    private formBuilder: FormBuilder) {
    this.repairBayConfigng sForm = this.formBuilder.group({
      tableRowArray: this.formBuilder.array([
        this.createTableRow(),
        this.createTableRow()
      ])
    });
    this.createForm();
  }

  ngOnInit(): void {
    this.repairBayCounts = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
      { label: '7', value: 7 },
      { label: '8', value: 8 },
      { label: '9', value: 9 },
      { label: '10', value: 10 },
      { label: '11', value: 11 },
      { label: '12', value: 12 }
    ];

    this.bayItemArray = [
      { label: 'Repair Bay1', value: 1 },
      { label: 'Repair Bay2', value: 2 },
      { label: 'Repair Bay3', value: 3 },
      { label: 'Repair Bay4', value: 4 },
      { label: 'Repair Bay5', value: 5 },
      { label: 'Repair Bay6', value: 6 },
      { label: 'Repair Bay7', value: 7 },
      { label: 'Repair Bay8', value: 8 },
      { label: 'Repair Bay9', value: 9 },
      { label: 'Repair Bay10', value: 10 },
      { label: 'Repair Bay11', value: 11 },
      { label: 'Repair Bay12', value: 12 },
      { label: 'Repair Bay13', value: 13 },
      { label: 'Repair Bay14', value: 14 },
      { label: 'Repair Bay15', value: 15 },
      { label: 'Repair Bay16', value: 16 }
    ];


    this.scrollableCols = [
      { field: 'bay1', header: 'Bay 1', bayType: 'bay' },
      { field: 'bay2', header: 'Bay 2', bayType: 'bay' },
      { field: 'bay3', header: 'Bay 3', bayType: 'bay' },
      { field: 'bay4', header: 'Bay 4', bayType: 'bay' },
      { field: 'bay5', header: 'Bay 5', bayType: 'bay' },
      { field: 'bay6', header: 'Bay 6', bayType: 'bay' },
      { field: 'bay7', header: 'Bay 7', bayType: 'bay' },
      { field: 'bay8', header: 'Bay 8', bayType: 'bay' },
      { field: 'bay9', header: 'Bay 9', bayType: 'bay' },
      { field: 'bay10', header: 'Bay 10', bayType: 'bay' },
      { field: 'bay11', header: 'Bay 11', bayType: 'bay' },
      { field: 'bay12', header: 'Bay 12', bayType: 'bay' }
    ];
    this.frozenCols = [
      { field: 'editor', header: '' },
      { field: 'isLive', header: 'Is Live' },
      { field: 'andonName', header: 'Andon Name' },
      { field: 'bayCount', header: '# of Bays' }
    ];
  }

  get tableRowArray(): FormArray {
    return this.repairBayConfigForm.get('tableRowArray') as FormArray;
  }

  addNewRow(): void {
    this.tableRowArray.push(this.createTableRow());
  }

  onDeleteRow(rowIndex: number): void {
    this.tableRowArray.removeAt(rowIndex);
  }

  /**
   * Initializes the Form & by default adds an empty row to the PRIMENG TABLE
   */
  private createForm(): void {
    this.repairBayConfigForm = this.formBuilder.group({
      tableRowArray: this.formBuilder.array([
        this.createTableRow(),
        this.createTableRow()
      ])
    });
  }

  /**
   * Returns the FormGroup as a Table Row
   */
  private createTableRow(): FormGroup {
    this.tempCount = this.tempCount + 1;
    return this.formBuilder.group({
      bayId: 1347,
      editor: null,
      isLive: new FormControl({ value: true }),
      andonName: new FormControl('Andon ' + this.tempCount, { validators: [] }),
      bayCount: new FormControl(2, { validators: [] }),
      bayItemControlsArray: this.formBuilder.array([
        new FormControl(1342),
        new FormControl(1342)
      ])
    });
  }

  bayItemControlsArray(index: number): FormArray {
    return this.tableRowArray.at(index).get('bayItemControlsArray') as FormArray;
  }

  updateBayItemControlsArray(bayIndex: number, bayCount: number) {
    var diff = this.bayItemControlsArray(bayIndex).length - bayCount;
    if (diff > 0) {
      var lastIndex = this.bayItemControlsArray(bayIndex).length - 1;
      while (diff > 0) {
        this.bayItemControlsArray(bayIndex).removeAt(lastIndex);
        lastIndex -= 1;
        diff -= 1;
      }
    }
    else if (diff < 0) {
      while (diff < 0) {
        this.bayItemControlsArray(bayIndex).push(new FormControl(null));
        diff += 1;
      }
    }
  }

  trackByFunction = (index: any, item: { controls: { andonName: { value: any; }; }; }) => {
    return item.controls.andonName.value // O index
  }

  getRepairBayName = (index: any) => {
    return this.bayItemArray.filter((e) => { return e.value == index })[0].label;
  }
}
