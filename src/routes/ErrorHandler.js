const { NODE_ENV } = process.env;
const ErrorHandler = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  if (NODE_ENV === 'production') {
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: err.message, stack: err.stack });
  }
};

module.exports = ErrorHandler;
