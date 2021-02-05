exports.index = async (event) => {
  const name = event.queryStringParameters?.name;

  if (name) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `hello ${name}`,
      }),
    };
  }

  throw new Error();
}
