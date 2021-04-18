const Response = require("../../Utils/Helper/Responses");
const Responden = require("../Responden");
const ExcelJS = require("exceljs");
const path = require('path');
const { DIRNAME_STORAGE } = require("../../../public/Storage");
const { SCREENING_QUESTION, PRETEST_QUESTION, POSTTEST_QUESTION, WORKSHEET } = require("../../Utils/Constants");

module.exports = {
    exportExcel: async (req, res, next) => {
        try {
            const pathData = path.join(DIRNAME_STORAGE, 'Data_Responden.xlsx');
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Data Responden');
            const result = await Responden.getAllResponden()

            result.length <= 0 && Response.failed(res, DATA_NOT_FOUND, next);

            // InitiateHeaders
            worksheet.columns = [...WORKSHEET.COLUMN];
            worksheet.getRow(1).eachCell((cell, rowNumbers) => {
                cell.font = {bold: true};
                cell.alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.mergeCells(`${cell.address}:${cell.address[0]}2`)
            });
            
            worksheet.getCell("H1").value = "Screening";
            worksheet.getCell("H1").font = {bold: true};
            worksheet.getCell("H1").alignment = { vertical: 'middle', horizontal: 'center' };
            worksheet.mergeCells("H1:I1");
    
            SCREENING_QUESTION.forEach(e => {
                worksheet.getCell(e[0]).value = e[1]
            })
            worksheet.getCell("J1").value = "Pretest";
            worksheet.getCell("J1").font = {bold: true};
            worksheet.getCell("J1").alignment = { vertical: 'middle', horizontal: 'center' };
            worksheet.mergeCells("J1:W1");
    
            PRETEST_QUESTION.forEach(e => {
                worksheet.getCell(e[0]).value = e[1]
            })
    
            worksheet.getCell("X1").value = "Posttest";
            worksheet.getCell("X1").font = {bold: true};
            worksheet.getCell("X1").alignment = { vertical: 'middle', horizontal: 'center' };
            worksheet.mergeCells("X1:AK1");
    
            POSTTEST_QUESTION.forEach(e => {
                worksheet.getCell(e[0]).value = e[1]
            })

            // Assign Data
            let data = []
            result.forEach(e => {
                data = [...data, [...Object.values(e)]]
            })
            data.length > 0 ? data.forEach(e => {
                worksheet.addRow(e);
            }) : Response.failed(res, DATA_NOT_FOUND, next); 

            // Write Data
            await workbook.xlsx.writeFile(pathData)

            // Send it to Client
            res.download(pathData);
        } catch (error) {
            Response.failed(res, err, next);
        }
    }
};