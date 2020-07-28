function doGet(e) {
    return HtmlService
        .createTemplateFromFile('solutions.html')
        .evaluate();
}

function getSolutions() {
    return SpreadsheetApp.openById('1Thjf-4f1pudV2ssoIom0dMQADGXUhxcvQH8Ry1D5CyQ')
        .getSheetByName("SalesEnablementData")
        .getDataRange()
        .getValues();
}