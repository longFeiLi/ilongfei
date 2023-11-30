import { getNotice } from '@/api/market';
import { defineStore } from 'pinia';

export interface IMarketState {
  moyuStr: string;
}

export const useMarket = defineStore('market', {
  state(): IMarketState {
    return {
      moyuStr: ''
    };
  },
  getters: {
    moyu: (state) => {
      console.log(state.moyuStr);
      return state.moyuStr;
    }
  },
  actions: {
    async getMoyuList() {
      try {
        const data = await getNotice();
        console.log(typeof data);
        this.moyuStr = data;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
