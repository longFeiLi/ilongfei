import { getFruitList, IFruitItem, getNotice } from '@/api/market';
import { defineStore } from 'pinia';

export interface IMarketState {
  fruitList: IFruitItem[];
  moyuStr: string;
}

export const useMarket = defineStore('market', {
  state(): IMarketState {
    return {
      fruitList: [],
      moyuStr: ''
    };
  },
  actions: {
    async getList() {
      try {
        const data = await getFruitList();
        this.fruitList = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getMoyuList() {
      try {
        const data = await getNotice();
        this.moyuStr = data;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
