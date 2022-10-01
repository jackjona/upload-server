const express = require("express")
const path = require("path")
const multer = require("multer")
const app = express()

    
// View Engine Setup
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

// Make the public directory accessible for favicons and css
app.use(express.static(__dirname + '/public'));
    
// var upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it
    
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
  
        // Uploads is the Upload_folder_name
        cb(null, "uploads")
    },

    /*
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now()+".jpg")
    }
    */
  })
       
// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 1 * 1000 * 1000;
    
var upload = multer({ 
    storage: storage,
    /*
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb){
    
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
  
        var extname = filetypes.test(path.extname(
                    file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
      
        cb("Error: File upload only supports the "
                + "following filetypes - " + filetypes);
      } 
  */

// myfile is the name of file attribute
}).single("myfile");       
  
app.get("/",function(req,res){
    res.render("UploadPage");
    /*
    // Data Logging Below

    const useragent = req.header('user-agent');;
    console.log(useragent); // useragent address of the user

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip); // ip address of the user
   */
})
    
app.post("/uploadFile",function (req, res, next) {
        
    // Error MiddleWare for multer file upload, so if any
    // error occurs, the Fule would not be uploaded!
    upload(req,res,function(err) {
  
        if(err) {
  
            // ERROR occurred (here it can be occurred due
            // to uploading Fule of size greater than
            // 1MB or uploading different file type)
            res.send(err)
        }
        else {
  
            // SUCCESS, Fule successfully uploaded
            res.send("Success, File Uploaded!")
            console.log("[Status] A file was successfully uploaded to the server.")
        }
    })
})
    
// Take any port number of your choice which
// is not taken by any other process
app.listen(8080,function(error) {
    if(error) throw error
        console.log("[Initialize] Server created successfully on PORT 8080")
})