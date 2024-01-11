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
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;

  strMeasure1: string,
strMeasure2: string,
strMeasure3: string,
strMeasure4: string,
strMeasure5: string,
strMeasure6: string,
strMeasure7: string,
  strMeasure8: string,
  strInstructions: string;
  strSource: string;
  strTags: string;
}


export interface IMeal {
   meal: string,
        video: string,
        mealImg: string,
        area: string,
        category: string,
        ingredient1: string,
        ingredient2: string,
        ingredient3: string,
        ingredient4: string,
        ingredient5: string,
        ingredient6: string,
        ingredient7: string,
        ingredient8: string,

        measure1: string,
        measure2: string,
        measure3: string,
        measure4: string,
        measure5: string,
        measure6: string,
        measure7: string,
            measure8: string,
            instructions: string,
            aticle: string,
        tags?: string,
}