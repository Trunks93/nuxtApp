export const useCategoriesTools = () => {

  const getComplementary = (category:string)=>{

    const categories = ["women's clothing","electronics","jewelery","men's clothing"]
    switch (category) {
      case categories[0]:
        return categories[2]
      break;
      case categories[1]:
        return categories[3]
      break;
      case categories[2]:
        return categories[0]
      break;
      case categories[3]:
        return categories[1]
      break;
    }

  }
  return {
    getComplementary
  }
}
