import axios from 'axios';

const baseURL = 'https://www.ilongfei.cn/';

axios.interceptors.request.use((config) => {
  if (config.headers['Content-Type'] === 'application/json') {
    if (config.data) {
      config.data = JSON.stringify(config.data);
    }
  }
  return config
}, (error) => {
  console.log(error) // for debug
  return Promise.reject(error)
})

axios.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  (error) => {
    console.log('err', error, error.message) // for debug
    return Promise.reject(error)
  }
)

// interface IResponse<T> {
//   code: number;
//   data: T;
//   msg: string;
// }

export interface IFruitItem {
  id: number;
  name: string;
  price: number;
}
interface NResponse {
  code: number;
  data: string;
}
const apiData: any = {
  getSentenceTypelist: 'api/getSentenceTypelist',
  getReptile: 'api/getReptile'
};

export const getFruitList = async () => {
  return [];
};
export const getNotice = async () => {
  const { data } = await axios.get<NResponse>('https://ilongfei.cn/api/dingNoticeLog');
  return data;
};

export const getApi = async (key: string, params: object) => {
  const url = baseURL + apiData[key];
  const { data } = await axios.post<NResponse>(url, params);
  // if (data.code === 0) {
  //   return data.data;
  // }
  return data;
};

