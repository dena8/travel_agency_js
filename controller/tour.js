const cloudinary = require("cloudinary").v2;
const { Tour, Category } = require("../model/index");
const getCurrentUser = require("../util/currentUser");

module.exports = {
  get: {
    async all(req, res) {
      const tours = await Tour.findAll({
        include: [{ model: Category, as: "category" }],
      });
      res.send(tours);
    },
    async tourById(req, res) {
      const id = req.params.id;
      const tour = await Tour.findOne({
        where: { id },
        include: [{ model: Category, as: "category" }],
      });
      res.send(tour);
    },
  },
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

      // disabled cloudinary while testing
      //  const tourImage = await cloudinary.uploader.upload(imageFile.image.path);
      const tourImage = {};
      tourImage.url =
        "https://www.voubs.bg/original/photo/270/Beautiful+nature_1d45a6ee858ebe41a190c539a8835234.jpg";

      const tour = await Tour.create({
        name,
        description,
        region,
        participants,
        difficultyLevel,
        price,
        image: tourImage.url,
        startDate: Date.now(),
        categoryId: categoryId.dataValues.id,
        creatorId: currentUserId,
      });

      res.send({ tour });
    },
  },
  delete: {
    async tourById(req, res) {
      const id = req.params.id;
      const del = await Tour.destroy({ where: { id } });
      res.send({ massage: "deleted" });
    },
  },
};
