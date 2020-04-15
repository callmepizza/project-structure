const { createLogger, format, transports } = require('../../libs');


module.exports = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    format.colorize(),
  ),
  transports: [
    new transports.Console({
      timestamp: true,
      colorize: true,
      level: 'info',
    }),
    new transports.File({
      filename: './dev/loggs/winston/error.log',
      level: 'error',
    }),
    new transports.File({ filename: './dev/loggs/winston/combined.log' }),
  ],
});
