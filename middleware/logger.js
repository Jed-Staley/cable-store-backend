function logger(req, res, next) {
  console.log(`NEW REQUEST\n
    METHOD: ${req.method}\n
    PATH: ${req.path}\n
    TIME: ${req.requestTime}\n
    QUERY: ${JSON.stringify(req.query)}\n
     `);
  next();
}

module.exports = logger;