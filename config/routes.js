const {userRouter,tourRouter,categoryRouter}= require('../routes/index')

module.exports= (app)=>{
    app.use('/users',userRouter);
    app.use('/tours',tourRouter);
    app.use('/categories',categoryRouter);
}