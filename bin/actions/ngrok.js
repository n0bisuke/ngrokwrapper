const ngrok = require('ngrok');

const main = async (params) => {
    try {

        const url = await ngrok.connect(params.port);
        return {
            url: url,
            port: params.port
        }

    } catch (error) {
        console.log(error);
    }

}

module.exports = main;