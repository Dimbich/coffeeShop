export default class CoffeServise {
  getResourse = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/db.json`);
    if (!res.ok) {
        throw new Error(`Ошибка при получении данных. Сервер вернул ответ ${res.status}`);
    } else {
       return await res.json();
    }
  }

  getAllItems = async (type) => {
    const res = await this.getResourse();
    const result = res[type];
   return result;        
  }

  getItem = async (name, type) => {
    const res = await this.getAllItems(type);
    const [result] = res.filter( item => item.name === name);
    return result;  
  }
}

