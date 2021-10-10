import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  static getRate: any;

  async getRate(){
    return axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD') 
    .then(res=>{
      localStorage.setItem('BTC',res.data.USD)
      return res.data.USD
    })
  }
  async getMarketPrice(){
    return axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
    .then(res=>{
      return res.data.values
    })
  }
  async getMarketVolume(){
    return axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
    .then(res=>{
      return res.data.values
    })
  }
  constructor() { }
}
