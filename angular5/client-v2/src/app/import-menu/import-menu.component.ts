import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-import-menu',
  templateUrl: './import-menu.component.html',
  styleUrls: ['./import-menu.component.css']
})
export class ImportMenuComponent implements OnInit {
  usersFromCSV: any = [];
  csvColumnFieldsMap: any = {};
  csvFields: any = [];
  constructor(private modalService: NgbModal,private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  uploadFile(event: any) {
  if(event.length>0 ){
  let csv: string = event[1]['files']['file'];
        let allTextLines = csv.split(/\r|\n|\r/);
        let allLines = csv.split('\n');
        let mandatoryIndicators = allTextLines[0].split(',');
        let columnNames = allTextLines[1].split(',');
        this.createCsvMap(mandatoryIndicators, columnNames);
        //let csvTableData = allTextLines[3..<csvTableData.length-1];
        this.formUsersJsonData(allTextLines);

  } else {

      let fileReader: FileReader = new FileReader();
            fileReader.readAsText(event['target']['files'][0]);
            fileReader.onload = (e) => {
              let csv: string = fileReader.result;
              let allTextLines = csv.split(/\r|\n|\r/);
              let allLines = csv.split('\n');
              let mandatoryIndicators = allLines[0].split(',');
              let columnNames = allLines[1].split(',');
              this.csvFields = columnNames;
              this.createCsvMap(mandatoryIndicators, columnNames);
              //let csvTableData = allLines[3..<csvTableData.length-1];
              this.formUsersJsonData(allLines);
            }

    }
  }

  /**
   * creating map object so that to know which are mandatory fields as per csv files
   * @param mandatoryIndicators
   * @param columnNames
   */
  createCsvMap(mandatoryIndicators, columnNames) {
    let fieldsMap = {};
    this.csvFields = [];
    if (mandatoryIndicators.length === columnNames.length) {
      columnNames.forEach((element, index) => {
        let mandsRule = mandatoryIndicators[index].split(' ');
        element = element.trim();
        this.csvFields.push(element);

        fieldsMap[element] = {};
        if (mandsRule[0].toLowerCase() === 'mandatory') {
          fieldsMap[element]['isMandatory'] = true;
        } else {
          fieldsMap[element]['isMandatory'] = false;
          fieldsMap[element][mandsRule[0].toLowerCase()] = true;
        }
      });
    }
    this.csvColumnFieldsMap = fieldsMap;
  }

  /**
   * reads the lines from 3rd line. Because first two lines are dedicated for the fields
   * description and field or column names.
   * @param allLines
   */
  formUsersJsonData(allLines: any) {
    let dataLines = allLines.slice(2, allLines.length);
    let usersList = [];
    if (dataLines) {
      console.log("dataLines", dataLines);
      dataLines.forEach((element, index) => {
        let valuesFromEle = element.trim().split(',');
        let eachUser = {};
        valuesFromEle.forEach((elementValue, index2) => {
          if(elementValue && elementValue != ""){
            eachUser[this.csvFields[index2]] = elementValue;
          }

        });
        if(eachUser){
          usersList.push(eachUser);
        }

      });
      console.log("userList >>><<< ", usersList);
      console.log("jsonstringified >><<<< userList >>><<< ", JSON.stringify(usersList));
      this.usersFromCSV = usersList;
    }
  }
  onUploadError(event: any){
    this.activeModal.dismiss(event['target']['error ']);
  }
  close(){
    this.activeModal.dismiss("closed");

  }
  submit(){
    this.activeModal.close(this.usersFromCSV);
  }
}
