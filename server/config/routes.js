var users = require('../controllers/users.js')
    // passport    = require("passport"),

module.exports = function(app){

    
    //########### USER #######################
    //Register New User
    // app.post('/users', function(req,res){
    //     users.create(req, res);
    // })

    // // contact us
    // app.post('/contact', function(req,res){
    //     contact.contactMail(req, res);
    // })

    // //For Address Finding
    // app.post('/addressConfirmation', function(req, res) {
    //     addrConf.confirmAddr(req, res);
    // })
    // //For Representative Finding
    // app.post('/representatives', function(req, res) {
    //     reps.findReps(req, res);
    // })

    // //Grabbing single user info
    // app.post('/getUserInfo', function(req, res) {
    //     users.getUserInfo(req, res);
    // })
    // app.get('/users/:id',needsAdmin(), function(req, res) {
    //     users.showUserCauses(req, res);
    // })

    // app.post('/changePassword', function(req, res) {
    //     users.changePassword(req, res);
    // })
    // //Updating user in DB
    // app.post('/updateUser',isLoggedIn, function(req, res) {
    //     users.updateUser(req, res);



};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){
        console.log('IS AUTHENTICATED BEEP BOOP');
        console.log(req.user);
        return next();
    }

    // if they aren't redirect them to the home page
    return res.redirect('/');
}
//route middleware for admin verification
// var needsAdmin = function() {
//   return function(req, res, next) {
//     if (req.user && req.user.admin === true){
//         console.log('ADMIN CONFIRMED');
//         console.log('ADMIN CONFIRMED');
//       next();
//     }
//     else {
//       res.send(401, 'Unauthorized');
//     }
//   };
// };
