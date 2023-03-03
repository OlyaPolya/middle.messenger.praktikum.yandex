enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Options = {
  method: METHODS;
  data?: any;
  headers?: any;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

function queryStringify(data: any) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  const res = keys.reduce(
    (result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
    '?'
  );
  return res;
}

class HTTPTransport {
  get = (
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.GET });

  post = (
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.POST });

  put = (
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.PUT });

  delete = (
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.DELETE });

  request = (url: string, options: Options): Promise<XMLHttpRequest> => {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

// new HTTPTransport().get('https://chats', {title: 'Мой чат'});
export default HTTPTransport;
