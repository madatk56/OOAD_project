const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/routers/index')

const corsOptions =({
	origin:'*',
	optionsSuccessStatus: 200 	
})
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = process.env.port || 3001;

router(app);
app.listen(port,()=>{
    console.log('application is running on port '+port)
})



