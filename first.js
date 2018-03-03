const fs = require('fs');

export const hello = async (event, context, callback) => {
  try {
    const result = await readFileAsync();
    callback(null, {
      message: result,
      event,
    });
  } catch(e) {
    callback(e);
  }
};


const readFileAsync = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./test', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
}
