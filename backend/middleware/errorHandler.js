const errorHandler = (err, req, res, next) => {
	console.error(err.stack);

	let statusCode = 500;
	let message = 'Internal Server Error';

	// Handle Mongoose validation errors
	if (err.name === 'ValidationError') {
	  statusCode = 400;
	  message = err.message;
	}

	if (err.name === 'CastError') {
	  statusCode = 400;
	  message = 'Resource not found.';
	}

	res.status(statusCode).json({ success: false, message });
  };

  module.exports = errorHandler;
