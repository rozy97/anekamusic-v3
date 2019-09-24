const formResponse = {
  success: (res, status, response, data) => {
    const success = {
      status: status,
      data: data,
      response: response
    };
    res.json(success);
  }
};

module.exports = formResponse;
