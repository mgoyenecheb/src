
import SliderItem from '../models/SliderItem'
async function getSliderData(): Promise<SliderItem> {
  const response = await fetch('https://my-api.com/data');
  const data = await response.json() as SliderItem;
  return data;
}

export default getSliderData;
