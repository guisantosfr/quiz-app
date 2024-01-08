import { getDocumentAsync } from 'expo-document-picker';
import { readAsStringAsync } from 'expo-file-system';
import { read, utils } from 'xlsx';

export const pickDocumentAsync = async () => {
  let result = await getDocumentAsync({
    //.xlsx
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });

  /*
  {"assets":
    [
      {
      "mimeType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "name": "Turma.xlsx",
      "size": 9231,
      "uri": "file:///data/user/0/host.exp.exponent/cache/DocumentPicker/382845a1-ab1b-4f81-809e-4865a3d9e92a.xlsx"
    }
  ],
      "canceled": false
    }
  */

  if (!result.canceled) {
    const temp = await readAsStringAsync(result.assets[0].uri, {
      encoding: 'base64'
    });

    const workbook = read(temp, { type: 'base64' });

    const wsName = workbook.SheetNames[0];
    const ws = workbook.Sheets[wsName];

    //Array de objetos
    const data = utils.sheet_to_json(ws);

    //Array de arrays
    //const data = utils.sheet_to_json(ws, { header: 1 });

    console.log(data);
  }

}