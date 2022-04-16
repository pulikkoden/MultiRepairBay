import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-multi-repair-bay-config',
  templateUrl: './multi-repair-bay-config.component.html',
  styleUrls: ['./multi-repair-bay-config.component.css']
})
export class MultiRepairBayConfigComponent implements OnInit {
  private repairBayConfigForm: FormGroup;
  scrollableCols: any[];
  frozenCols: any[];
  repairBayCounts: SelectItem[] = [];
  tempCount: any = 1;
  bayItemArray: SelectItem[] = [];

  constructor(
    private formBuilder: FormBuilder) {
    this.repairBayConfigForm = this.formBuilder.group({
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
      { label: "Bay 1", value:1  },
      { label: "Bay 2", value:2  },
      { label: "Bay 3", value:3  },
      { label: "Bay 4", value:4  }
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

  trackByFunction = (index, item) => {
    return item.controls.andonName.value // O index
  }

  getRepairBayName = (index) => {
    return this.bayItemArray.filter((e) => { return e.value == index })[0].label;
  }
}
