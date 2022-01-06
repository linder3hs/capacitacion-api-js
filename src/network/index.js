// Este archivo va a servir para poder manejar las respuestas
// success
// error

// recibe, req, ok, status, data
// req: req que se recibe del controller
// ok : true
// status : 200
// data : []

export const success = ({ res, ok = true, status = 200, body }) => {
  return res.status(status).json({
    ok,
    status,
    body,
  });
};

export const error = ({ res, ok = false, status = 500, body }) => {
  return res.status(status).json({
    ok,
    status,
    body,
  });
};
