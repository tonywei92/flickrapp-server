const { NODE_ENV } = process.env.NODE_ENV;
const ErrorHandler = (err, req, res) => {
  // eslint-disable-next-line no-console
  console.error(err);
  if (NODE_ENV === 'production') {
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: err.message, stack: err.stack });
  }
};

module.exports = ErrorHandler;
