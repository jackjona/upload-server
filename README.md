# Upload-Server
A simple  upload server that allows users to upload files to a local folder on the server.

## Screeshot:
![Screenshot of website](https://cdn.jsdelivr.net/gh/jackjona123/upload-server@main/public/assets/website.png "Screenshot of website")

## Disclaimer:
This project is **NOT** intended for a production environment.

## Getting Started Locally:
1. Run the command `npm install` or `yarn install` in your terminal.
2. Run the command `npm run start` or `yarn start` to start the node server.
3. Navigate to your server ip at port 8080.
4. Upload files to the site.


## Built Using
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [Multer](https://github.com/expressjs/multer)
---

### Note
* By default, files are saved to the `uploads` folder. 
* The uploaded file will be generated a new filename with **no** file extension.
* You **must** add the correct original file extension (.pdf, .jpg, .zip, .png) to the file.

For example, the default file in the `uploads` folder will be named something like *b492c0129q2l2ie583671pdsk920jdn2* and if the original file was *archive.zip* you would have to add to file extension (.zip in this case) to the filename making it *b492c0129q2l2ie583671pdsk920jdn2.zip*.

---
## To Do:
- [x] ~~Style site~~
- [x] ~~Make site responsive~~
- [ ] Add drag and drop functionality
- [ ] Style file upload success page
- [ ] Make file selector element prettier
