import { logCustomizado } from './log.mjs';
export const handler = async (event) => {

    logCustomizado('event: ' + JSON.stringify(event));
    return {
        statusCode: 200,
        body: `<html><body>Dados da requisicao ${JSON.stringify(event)} </body></html>`,
        headers: {
            "content-type": "text/html"
        }
      };
  };
  