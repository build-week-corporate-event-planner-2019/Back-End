module.exports = {
  restricted,
};

function restricted(req, res, next) {
  next();
}
