exports.healthCheck = (req, res) => {
  res.status(200).send({ msg: 'Health Check: Good' });
};
