import { jsPDF } from "jspdf";

var Downloader = function (userInfo){
    const doc = new jsPDF();
    var space = 10;
    doc.setFont('Arial');
    for (const x in userInfo){
        if (space + 10 % 290 === 0){
            space = 10;
            doc.addPage();
        }
        doc.text(x, 10, space);
        space += 10;
        doc.text("    - " + userInfo[x], 10, space);
        space += 10;
        if (space % 290 === 0){
            space = 10;
            doc.addPage();
        }
    }
    doc.save(userInfo.FULL_NAME + ".pdf");
    return doc;
}

export default Downloader;