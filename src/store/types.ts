export interface IFetchedCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}
export interface ICategory {
  id: string;
  category: string;
  img: string;
}

export interface IFetchedMeals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface ISingleMeal {
  id: string;
  meal: string;
  img: string;
}

export interface IFetchedMeal {
  strMeal: string;
  strYoutube: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;

   strInstructions: string;
  strSource: string;
  strTags: string;
}


export interface IIngredient  {
  ingredient: string;
  measure: string;
}

export interface IMeal {
   meal: string,
        video: string,
        mealImg: string,
        area: string,
  category: string,
  ingredients: IIngredient[],
  //       measure1: string,
  //       measure2: string,
  //       measure3: string,
  //       measure4: string,
  //       measure5: string,
  //       measure6: string,
  //       measure7: string,
  // measure8: string,
  
            instructions: string,
            article: string,
        tags?: string,
}