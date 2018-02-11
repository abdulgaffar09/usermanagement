import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  usersFromCSV: any = [];
  csvColumnFieldsMap: any = {};
  csvFields: any = [];
   uploadFile(event: any) {
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

  /**
   * creating map object so that to know which are mandatory fields as per csv files
   * @param mandatoryIndicators
   * @param columnNames
   */
  createCsvMap(mandatoryIndicators, columnNames) {
    let fieldsMap = {};
    if (mandatoryIndicators.length === columnNames.length) {
      columnNames.forEach((element, index) => {
        let mandsRule = mandatoryIndicators[index].split(' ');
        element = element.trim();
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
          eachUser[this.csvFields[index2]] = elementValue;
        });
        usersList.push(eachUser);
      });
      console.log("userList >>><<< ", usersList);
      console.log("jsonstringified >><<<< userList >>><<< ", JSON.stringify(usersList));
      this.usersFromCSV = usersList;
    }
  }
}
