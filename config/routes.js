const userRouter = require('../routes/user')

module.exports= (app)=>{
    app.use('/us',userRouter);
}