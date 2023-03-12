
import BracketItem from '../models/BracketItem'
import TransactionItem from '../models/TransactionItem'


async function getBracketsData(): Promise<BracketItem> {
  const response = await fetch('https://my-api.com/data');
  const data = await response.json() as BracketItem;
  return data;
}

async function getTransactionsData(): Promise<TransactionItem> {
    const response = await fetch('https://my-api.com/data');
    const data = await response.json() as TransactionItem;
    return data;
  }
  

export default {getBracketsData, getTransactionsData};