
module.exports = {
  generateToken: async (req, res) => {
    try {
      const { grant_type } = req.body;
      return res.json({
        status: true,
        data: { grant_type }
      });
    } catch (err) {
      return res.json({
        status: false,
        message: 'Internal Server Error.'
      });
    }
  }
};
