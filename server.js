const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

app.post('/uploads', (req, res) => {
    try {
        if (req.files === null) {
            return res.status(400).json({ message: "No file uploaded" })
        }
        const file = req.files.file;
        file.mv(`${__dirname}/client/public/uploads/${file.name}`)

        res.status(200).json({ filename: file.name, filepath: `/uploads/${file.name}` });
    } catch (error) {
        console.log('server', error)
    }
})

app.listen(5000, () => {
    console.log('listening')
})