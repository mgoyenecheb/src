
import Category from '../models/CategoryItem'
import Sport from '../models/SportItem'

async function getCategoryData(): Promise<Category> {
  const response = await fetch('https://my-api.com/data');
  const data = await response.json() as Category;
  return data;
}

async function getSportsData(): Promise<Sport> {
  const response = await fetch('https://my-api.com/data');
  const data = await response.json() as Sport;
  return data;
}

export default { getCategoryData, getSportsData};
