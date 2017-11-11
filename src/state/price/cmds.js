import {Cmd} from 'redux-loop';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const request = async () => {
  const response = await global.fetch(
    'https://api.coinmarketcap.com/v1/ticker/bitcoin', {
      headers,
      method: 'GET'
    }
  );

  return {
    ok: response.ok,
    status: response.status,
    data: await response.json()
  };
};

export const priceRequest = success =>
  Cmd.run(
    request, {
      args: [],
      successActionCreator: success
    }
  );
