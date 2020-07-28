function doGet(e) {
    return HtmlService
        .createTemplateFromFile('solutions.html')
        .evaluate();
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function getSolutions() {
    var solutions = SpreadsheetApp.openById('1Thjf-4f1pudV2ssoIom0dMQADGXUhxcvQH8Ry1D5CyQ')
        .getSheetByName("SalesEnablementData")
        .getDataRange()
        .getValues();
    solutions.shift();
    solutions.sort(sortFunction);
    return solutions;
}