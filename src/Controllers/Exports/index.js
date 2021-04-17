const Response = require("../../Utils/Helper/Responses");
const Responden = require("../Responden");
const ExcelJS = require("exceljs");
const path = require('path');
const { DIRNAME_STORAGE } = require("../../../public/Storage");

module.exports = {
    exportExcel: async (req, res, next) => {
        try {
            const pathData = path.join(DIRNAME_STORAGE, 'users.xlsx');
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Data Responden');
            const result = await Responden.getAllResponden()

            result.length <= 0 && Response.failed(res, DATA_NOT_FOUND, next);

            
            worksheet.columns = [
                {header: 'Inisial Nama', key: 'initialName', width: 13},
                {header: 'Umur', key: 'age', width: 8},
                {header: 'Umur Kandungan', key: 'gestationalAge', width: 15},
                {header: 'Pendidikan', key: 'education', width: 10},
                {header: 'Tingkat Pendapatan', key: 'salaryRange', width: 16},
                {header: 'Total Post-test', key: 'posttest', width: 12},
                {header: 'Total Pre-test', key: 'pretest', width: 12},
            ];
            worksheet.getRow(1).eachCell((cell) => {
                cell.font = {bold: true};
            });
            result.forEach(e => {
                worksheet.addRow(e);
            })
            
            
            await workbook.xlsx.writeFile(pathData)

            res.download(pathData);

            // Response.success(res, { 
            //     nameFile: "users.xls",
            //     urlPath: pathData
            //  });
        } catch (error) {
            Response.failed(res, err, next);
        }
    }
};