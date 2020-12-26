
function middleware1(req, res, next) { 
    //req.requestTime = Date.now(); 
    new_name=(req.body.name="-oh")
    return new_name
    next() 
}

module.exports = {
    middleware1 : middleware1
}