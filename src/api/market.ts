import Axios from 'axios';

interface IResponse<T> {
  code: number;
  data: T;
  msg: string;
}

export interface IFruitItem {
  id: number;
  name: string;
  price: number;
}
interface NResponse {
  code: number;
  text: string;
}

export const getFruitList = async () => {
  const { data } = await Axios.get<IResponse<IFruitItem[]>>('/justTest/getFruitList');
  if (data.code === 0) {
    return data.data;
  }
  return [];
};
export const getNotice = async () => {
  const { data } = await Axios.get<NResponse>('https://www.ilongfei.cn/api/dingNotice/test');
  if (data.code === 0) {
    return data.text;
  }
  return '';
};

