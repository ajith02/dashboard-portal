import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const exportChartAsPDF = async (elementId, filename = "chart.pdf") => {
  const input = document.getElementById(elementId);
  if (!input) throw new Error("Element not found for PDF export");

  const canvas = await html2canvas(input, {
    scale: 2,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const imgWidth = 190;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
  pdf.save(filename);
};
