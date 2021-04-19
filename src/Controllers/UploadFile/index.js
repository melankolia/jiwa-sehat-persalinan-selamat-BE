const { DIRNAME_STORAGE } = require("../../../public/Storage/index");
const { BACKUP_FILE_BERHASIL, BACKUP_FILE_GAGAL } = require("../../Utils/Constants")
const Response = require("../../Utils/Helper/Responses");
const path = require('path');
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  keyFilename: "./src/Utils/Configs/bekelakar-df5d2-d4512c7c425e.json",
  projectId: "bekelakar-df5d2"
});

module.exports = {
    uploadFileToFirebase: (req, res, next, type = "notCron") => {
        const filePath = path.join(DIRNAME_STORAGE, "Data_Responden.xlsx");
        storage.bucket("bekelakar-df5d2.appspot.com").upload(filePath, {
            destination: "backup/Data_Responden.xlsx",
        })
        .then(e => {
            type == "notCron" ? Response.success(res, BACKUP_FILE_BERHASIL) 
            : console.log("Backup Berhasil"); 
        })
        .catch(err => {
            type == "notCron" ? Response.failed(res, BACKUP_FILE_GAGAL, next)
            : console.log("Backup Tidak Berhasil") ;
        })
    }
}