const express = require ('express');
const path = require ('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//app.listen(3005,()=>console.log('servidor corriendo en puerto 3005'))
app.listen(process.env.PORT || 3000, function(){console.log("servidor corriendo");})

app.get('/', (req, res)=>{res.sendFile(path.resolve(__dirname, './views/home.html'));
});


