const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
const port = process.env.port || 3000;

const publicPath = path.join(__dirname,"../public");
app.use(express.static(publicPath));



app.set("view engine",'hbs');
const viewDirectory= path.join(__dirname,"../template/views");
app.set('views',viewDirectory);

const partialsPath = path.join(__dirname,"../template/partials");
hbs.registerPartials(partialsPath);

app.get('/',(req,res)=>{
    res.render("index",{
        mainTitle:"Dental Care",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti hic ipsam sequi consectetur soluta aut tenetur laborum dolorum odio! Repellendus porro reprehenderit quasi recusandae aspernatur quod nihil odio rerum.",
        imgBanner1 : "images/banner1.png",
        imgBanner2 : "images/banner2.png",
        secSectionTitle:"Welcome To DentCare",
        secSectionDesc:"Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. ata Vestibulum maximus lacinia massa non porttitor. of Pellentesque vehicula est a lorem gravida bibendum.in Proin tristique diam ut urna pharetra, ac rhoncus elit elementum. Proin vitae purus ultrices, dignissim tur mattis eros.",
        thrSecTitle: "Our Services",
        thrSecDesc:`Tracks along the Hawaiian-Emperor chain formed over the same hot spot in the Pacific and why are their chemical compositions so different knew this was.`,
    })
})

app.get('/about',(req,res)=>{
    res.render("about",{
        mainTitle:"ABOUT US",
        link1:"Home ",
        link2:" About Us",
        imgBannerAbout : "images/about.png",
        secSectionTitle:"Welcome To DentCare",
        secSectionDesc:"Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. ata Vestibulum maximus lacinia massa non porttitor. of Pellentesque vehicula est a lorem gravida bibendum.in Proin tristique diam ut urna pharetra, ac rhoncus elit elementum. Proin vitae purus ultrices, dignissim tur mattis eros.",
    })
})

app.get('/services',(req,res)=>{
    res.render("services",{
        mainTitle:"Services",
        link1:"Home ",
        link2:" Services",
        imgBannerAbout : "images/about.png",
        thrSecTitle: "Our Services",
        thrSecDesc:`Tracks along the Hawaiian-Emperor chain formed over the same hot spot in the Pacific and why are their chemical compositions so different knew this was.`,
        service1:"images/service1.png",
        service2:"images/service2.png",
        service3:"images/service3.png",
        service4:"images/service4.png",
        service5:"images/service5.png",
    })

})

app.get('/contact',(req,res)=>{
    res.render("contact",{
        mainTitle:"Contact Us",
        link1:"Home ",
        link2:" Contact Us",
        imgBannerAbout : "images/about.png",
        contactImg:"images/contact.jpg",
    })

})












app.listen(port);