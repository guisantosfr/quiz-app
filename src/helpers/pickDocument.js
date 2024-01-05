import * as DocumentPicker from 'expo-document-picker';

export const pickDocumentAsync = async () => {
  let result = await DocumentPicker.getDocumentAsync({
    //.xlsx
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });

  /*
  {"assets": [{"mimeType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "name": "Turma.xlsx", "size": 9231, "uri": "file:///data/user/0/host.exp.exponent/cache/DocumentPicker/382845a1-ab1b-4f81-809e-4865a3d9e92a.xlsx"}], "canceled": false}
  */

  if (!result.canceled) {
    console.log(result);
  } else {
    console.log("You didnt select any document");
  }
}