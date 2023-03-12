
import HistoryItem from '../models/HistoryItem'
import Pool from '../models/PoolItem'
import SportItem from '../models/SportItem'

async function getHistoryData(): Promise<HistoryItem> {
  const response = await fetch('https://my-api.com/data');
  const data = await response.json() as HistoryItem;
  return data;
}

async function getPoolData(): Promise<Pool> {
  const response = await fetch('https://my-api.com/data');
  const data = await response.json() as Pool;
  return data;
}

async function getSportData(): Promise<SportItem> {
  const response = await fetch('https://my-api.com/data');
  const data = await response.json() as SportItem;
  return data;
}

export default {getHistoryData, getPoolData, getSportData};
