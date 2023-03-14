const landModel = require('../models/lands.model')


exports.indexPageRender = (req, res, next) => res.render('index')

exports.loginPageRender = (req, res, next) => res.render('login', { layout: 'auth'})

exports.signupPageRender = (req, res, next) => res.render('signup', { layout: 'auth'})

exports.dashboardPageRender = (req, res, next) => res.render('client_home', { layout: false })

exports.registerLandPageRender = (req, res, next) => res.render('register_land', { layout: false })

exports.registeredLandsList = (req,res,next) =>{
    console.log(req.headers.cookie)
    res.render('registered_lands_list', {layout: false})
}

exports.adminSignupPageRender = (req, res, next) => res.render('admin_signup', { layout: 'auth'})

exports.adminDashboardPageRender = (req, res, next) => res.render('admin_home', { layout: false})

exports.postedLands = async (req, res, next) =>{
    let land_list
    
    try{
        land_list = await landModel.getPostedLands()
    }catch(e){
        console.log(e)
    }

    console.log(land_list)

    res.render('admin_posted_lands', { layout : false, all_lands: land_list })
} 