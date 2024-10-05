import axios from "axios";
// const BASE_URL = "http://localhost:4000/api/v2/";
// const BASE_URL = "https://server.hitechlogistics.io/api/v2/";
const BASE_URL = "";

export const getApiRequestHeader = async () => {
  /**Will get token from reducers */
  const authtoken = JSON.parse((await localStorage.getItem("token")) as any);
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: authtoken ? `Bearer ${authtoken}` : "",
  };
};
let instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
}) as any;

export const updateHeaders = async () => {
  const header = await getApiRequestHeader();
  instance.defaults.headers = header as any;
};

export const request = async ({ method, url, data, headers }: any) => {
  if (headers === undefined) {
    await updateHeaders();
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error: any) {
    return error.response?.data;
  }

  return response?.data;
};

export const get = (url: string, permission_name: string, config: any) => {
  return request({
    method: "get",
    url,
    data: {},
    ...config,
  });
};

export const post = (
  url: string,
  data: any,
  permission_name: string,
  config: any
) => {
  return request({
    method: "post",
    url,
    data,
    ...config,
  });
};

export const patch = (
  url: string,
  data: any,
  permission_name: string,
  config: any
) => {
  return request({
    method: "patch",
    url,
    data,
    ...config,
  });
};


