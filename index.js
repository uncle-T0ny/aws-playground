exports.handler = async (event) => {
  // Your function logic here

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow all origins
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({ message: "Hello, World!" })
  };
  return response;
};