function doPost(e) {
  try {
    const dados = JSON.parse(e.postData.contents);
    const aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Inscricoes");

    aba.appendRow([
      new Date(),
      dados.nome,
      dados.telefone,
      dados.presente
    ]);

    return ContentService.createTextOutput("OK");
  } catch (err) {
    return ContentService.createTextOutput("ERRO: " + err);
  }
}