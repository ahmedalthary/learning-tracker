const { User } = require("../Models");

module.exports = {
  async register(req, res) {
    try {
      console.log(`---------------${User}-----------`);
      const user = await User.create(req.body);
      // res.json(user);
      res.send(user.toJSON());
    } catch (err) {
      res.status(400).send({
        message: "This email account is already in use.",
      });
    }
  },
};
