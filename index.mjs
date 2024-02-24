import { logCustomizado } from './log.mjs';
export const handler = async (event) => {

    logCustomizado('Log de execução event: ' + JSON.stringify(event));
    return {
        statusCode: 200,
        body: JSON.stringify(event),
      };
  };
  