export class base {

  protected mainPath;

  protected runtimeConfig ;

  constructor(baseUrl?:string){
      this.runtimeConfig= useRuntimeConfig();
      this.mainPath = this.runtimeConfig.public.PATH_API;
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