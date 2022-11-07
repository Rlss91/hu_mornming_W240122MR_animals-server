const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_KEY,
      { expiresIn: "30d" },
      (err, token) => {
        /*
            if jwt cant create token it will fail the promise and will pass the error
            else it will pass the token
        */
        if (err) reject(err);
        else resolve(token);
      }
    );
  });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_KEY, (err, dataFromToken) => {
      /*
                if error then fail the promise and send the error
                else send dataFromToken
            */
      if (err) reject(err);
      else resolve(dataFromToken);
    });
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
