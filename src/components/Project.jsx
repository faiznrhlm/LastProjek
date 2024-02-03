export default class Project{
    id = ""
    strCategory = ""
    strCategoryThumb = ""
    strCategoryDescription = ""
    price = ""


constructor(initializer){
    this.id = initializer.id
    this.strCategory = initializer.strCategory
    this.strCategoryThumb = initializer.strCategoryThumb
    this.strCategoryDescription = initializer.strCategoryDescription
    this.price = initializer.price    
}
}