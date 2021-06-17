const cloudinary = require("cloudinary").v2;
const { Tour, Category } = require("../model/index");
const getCurrentUser = require("../util/currentUser");

module.exports = {
  get: {},
  post: {
    async createTour(req, res, next) {
      const {
        name,
        description,
        category,
        region,
        participants,
        difficultyLevel,
        price,
      } = req.body;

      const imageFile = req.files;
      const categoryId = await Category.findOne({
        attributes: ["id"],
        where: { name: category },
      });

      const currentUserId = (await getCurrentUser(req)).id;

      const tourImage = await cloudinary.uploader.upload(imageFile.image.path);

      const tour = await Tour.create({
        name,
        description,
        region,
        participants,
        difficultyLevel,
        price,
        image: tourImage.url,
        CategoryId: categoryId.dataValues.id,
        creatorId: currentUserId,
      });

      res.send({ tour });
    },
  },
};
