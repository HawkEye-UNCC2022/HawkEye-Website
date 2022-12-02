import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Downloader = ({ rootElement, downloadFileName }) => {

    const downloadFileDocument = () => {
        const input = document.getElementById(rootElement)
        const inputHeight = input.clientHeight * 0.5;
        const inputWidth = input.scrollWidth * 0.5;
        let pdf = new jsPDF('p', 'pt', 'a4');
        let height = pdf.internal.pageSize.height;
        let pageHeightInPixels = inputHeight;
        let pages = pageHeightInPixels / height;

        console.log(pageHeightInPixels + ',' + height)

        const roundOff = Number(pages.toString().split('.')[1].substring(0, 1));
        const pageNo = (roundOff > 0 ? pages + 1 : pages);
        let pageCount = pages < 1 ? 1 : Math.trunc(pageNo);

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');        

        // origin       
         for (let i = 1; i <= pageCount ; i++) {
              let pdfStartingHeight = height * (i - 1);
              pdf.addImage(imgData, 'PNG', 0, -pdfStartingHeight, inputWidth, inputHeight, );
              if (i < pageCount) {
                  pdf.addPage();
              }
            }
            pdf.save('download.pdf');
        })
    }

    return <button type="button" className="btn btn-success" onClick={downloadFileDocument}>Export PDF</button>
}

export default Downloader;