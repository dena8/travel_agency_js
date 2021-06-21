const { Tour, User } = require("../model/index");
const customError = require("../error/custom_error");
const getCurrentUser = require("../util/currentUser");
module.exports = {
  get: {
    async checkIfTourIsAdded(req, res) {},
  },
  post: {
    async addTourToCart(req, res, next) {
      const tour = await Tour.findOne({ where: { id: req.params.id } });
      if (tour.participants < 1) {
        throw new customError("No vacant place", 401);
      }
      const user = await getCurrentUser(req);
      await user.addCart(tour);
      res.send(user);
    },
  },
  put: {
    async removeFromCart(req, res) {      
      const tourId = req.query.tourId; 
      const user = await getCurrentUser(req);     
      const tour = await Tour.findOne({ where: { id: tourId } });

      await user.removeCart(tour);

      res.send(user);
    },
  },
};