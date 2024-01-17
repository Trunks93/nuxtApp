export class base {

  protected mainPath;

  constructor(){
    this.mainPath = 'https://fakestoreapi.com';
  }

  async get(url,headers): any[]{
    const { data: items } = await useFetch(`${this.mainPath}/${url}`);
    return items.value;
  }

  async post(url,headers,body){
      const { data: responseData } = await useFetch(`${this.mainPath}/${url}`,
        {
          method: 'post',
          headers,
          body,
        }
      );
    return responseData;
  }

}