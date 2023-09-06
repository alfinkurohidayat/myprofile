import express from 'express';
const app = express();
import expressLayouts from 'express-ejs-layouts'; 


app.set('view engine','ejs')
 

app.use(expressLayouts);


app.use(express.static('public'))



app.get('/#home', (req,res) => {
   res.render('index', {
    layout : "layout/main-layout",
    title : "alfin"
   })
})


app.get('/#resume', (req,res) => {
  res.render('index', {
   layout : "layout/main-layout",
   title : "alfin"
  })
})


app.use('/', (req,res) => {
  res.render('index', {
   layout : "layout/main-layout",
   title : "alfin"
  })
})




app.listen(3100, function() {
  console.log('Server sedang mendengarkan pada port 3100');
});



