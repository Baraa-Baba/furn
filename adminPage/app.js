'use strict';
const fs = require('fs');
const express = require('express');
const multer = require('multer')
const path = require("path");
const app = express();
app.listen(5000, () => {
    console.log('admin page ready at http://localhost:5000')
})
app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.use(express.static("."));



const upload = multer({
    dest: "/uploads"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});


app.post(
    "/products",
    upload.single("image" /* name attribute of <file> element in your form */),
    (req, res) => {

        console.log(req.body)
        console.log(req.body.image)
        // print it
        const randomNum = Math.random()
        var product = {
            id: 10,
            title: req.body.title,
            quantity: 1,
            imageUrl: `/static/images/products/p${randomNum}${path.extname(req.file.originalname).toLowerCase()}`,
            orignalPrice: parseInt(req.body.orignalPrice),
            discount: parseInt(req.body.discountPrice),
            sale: req.body.discountPrice > 0 ? true : false,
            bg: 'bg-1',
            isincart: false,
            isvisible: true,
            isvisibleinCart: true
        }
        const tempPath = req.file.path;
        const targetPath = path.join(__dirname,
            `../public/static/images/products/p${randomNum}${path.extname(req.file.originalname).toLowerCase()}`);

        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);


            res.render('products', { title: 'products', imgurl: '../uploads/image.png' })
        });
        changeJson('../products.json', product)
    }

);

app.post(
    "/blogs",
    upload.single("image" /* name attribute of <file> element in your form */),
    (req, res) => {

        console.log(req.body)
        console.log(req.body.image)
        // print it
        const randomNum = Math.random()
        var blog = {
            id: 1,
            title: req.body.title,
            author: req.body.author,
            date: req.body.date,
            isvisible: true,
            imageUrl: `/static/images/blogs/b${randomNum}${path.extname(req.file.originalname).toLowerCase()}`,
            description: req.body.description
        }
        const tempPath = req.file.path;
        const targetPath = path.join(__dirname, `../public/static/images/blogs/b${randomNum}${path.extname(req.file.originalname).toLowerCase()}`);

        if (true) {
            fs.rename(tempPath, targetPath, err => {
                if (err) return handleError(err, res);


                res.render('blogs', { title: 'blogs', imgurl: '../uploads/image.png' })
            });
        }
        changeJson('../blogs.json', blog)
    }

);






app.get('/', (req, res) => {
    res.redirect('products');
});
app.get('/products', (req, res) => {
    res.render('products', { title: 'products', imgurl: '../uploads/image.png' });
});
app.get('/blogs', (req, res) => {
    res.render('blogs', { title: 'blogs' });
});
function changeJson(filename, NewThing) {
    function readJsonFile(file) {
        let bufferData = fs.readFileSync(file)
        let stData = bufferData.toString()
        let data = JSON.parse(stData)
        return data
    }
    var dataRead = readJsonFile(filename)
    NewThing.id = dataRead.length + 1
    var newProductsArray = [...dataRead, NewThing]


    let data = JSON.stringify(newProductsArray, null, 2);

    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

    console.log('This is after the write call');
}