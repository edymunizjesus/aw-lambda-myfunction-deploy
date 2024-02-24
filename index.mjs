import { logCustomizado } from './log.mjs';
export const handler = async (event) => {

    logCustomizado('event: ' + JSON.stringify(event));
    return {
        statusCode: 200,
        body: JSON.stringify(event),
      };
  };
  