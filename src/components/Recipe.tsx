import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import {
  addToFavorites,
  getRecipeById,
  removeFromFavorites,
  selectErrorRecipes,
  selectFavoritesRecipes,
  selectIsLoadingRecipes,
  selectSelectedRecipe,
} from "../store/recipesSlice";
import { useSelector } from "react-redux";
import LinkOrButton from "./LinkOrButton";
import { IIngredient, IMeal } from "../store/types";
import Header from "./Header";
import Ingredient from "./Ingredient";
import Underline from "./Underline";
import { replaceYoutubeLink } from "../utils/replaceYouTubeLink";
import { ArrowDown, ArrowUp, List, View } from "../icons";
import BackButton from "./BackButton";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";
import { useToggle } from "../hooks/useToggle";
import SvgHeart from "../icons/Heart";


type NavigationButtons = {
  title: string;
  link: string;
  icon: ReactNode;
};

type ActionButtons = {
  title: string;
  icon: ReactNode;
  className: string;
  type: "link" | "button";
  onClick?: () => void;
  reversedTitle?: string;
  reversedIcon?: ReactNode;
  is?: boolean;
  withInstructions?: boolean;
  isVisible?: boolean;
};

const SingleRecipe = () => {
  const { recipeId } = useParams();
  const dispatch = useAppDispatch();
  const recipe = useSelector(selectSelectedRecipe);
  const loading = useSelector(selectIsLoadingRecipes);
  const error = useSelector(selectErrorRecipes);
  const navigate = useNavigate();
  const {
    mealImg,
    meal,
    category,
    video = "/",
    area,
    ingredients = [],
    article = "",
    instructions,
  } = recipe ?? {};
  const slicedEngredients: IIngredient[] = ingredients?.slice(0, 8);
  const youTubeLink = replaceYoutubeLink(video);
  const navigationBtns: NavigationButtons[] = [
    { title: "Video", link: video, icon: <View /> },
    { title: "Article", link: article, icon: <View /> },
  ];
  const [toggled, toggle] = useToggle();
  const favorites = useSelector(selectFavoritesRecipes);
  const [addedFavorite, setAddedFavorite] = useState<boolean>(favorites.some((meal) => meal.id === recipe?.id));

  const handleFavoriteClick = () => {    
    if (addedFavorite) {
      setAddedFavorite(false)
      dispatch(removeFromFavorites(recipe?.id as string))
    } else {
      setAddedFavorite(true); 
      dispatch(addToFavorites(recipe as IMeal))
    }
  }

  useEffect(() => {
    setAddedFavorite(favorites.some((meal) => meal.id === recipe?.id))
  }, [favorites, recipe?.id]);



  const actionBtns: ActionButtons[] = [
    {
      title: "Show instructions",
      reversedTitle: "Hide instructions",
      type: "button",
      icon: <ArrowDown />,
      reversedIcon: <ArrowUp />,
      className: "flex items-center gap-2 justify-center bg-dirtyBlue border-2 border-dirtyBlue cursor-pointer w-full rounded p-1 text-clearWhite tracking-tight actionBtns hover:actionBtns",
      onClick: toggle,
      is: toggled,
      withInstructions: true,
      isVisible: true,
    },
    {
      title: "Add to favorites",
      type: 'button',
      icon: <SvgHeart filled="false" width={17.91} height={17.91} />,
      reversedIcon: <SvgHeart filled="true" width={17.91} height={17.91} />,
      reversedTitle: 'Remove from favorites',
      onClick: () => handleFavoriteClick(),
      className: `flex items-center gap-2 justify-center border-2 cursor-pointer w-full rounded p-1 text-clearWhite tracking-tight actionBtns hover:actionBtns ${addedFavorite ? 'bg-darkGreen  border-darkGreen' : 'bg-red border-red'}`,
      is: addedFavorite,
      isVisible: true,
    },
    {
      title: "Show all favourites",
      type: 'link',
      icon: <List />,
      onClick: () => navigate('/favorites'),
      className: `flex items-center gap-2 justify-center bg-dirtyBlue border-2 border-dirtyBlue cursor-pointer w-full rounded p-1 text-clearWhite tracking-tight actionBtns hover:actionBtns animated-fadeIn`,
      isVisible: favorites.length > 0,
    },
  ].filter((el) => el.isVisible ) as ActionButtons[];


  useEffect(() => {
    if (recipeId) {
      dispatch(getRecipeById(recipeId));
    }
  }, [recipeId, dispatch]);

  

  return (
    <>
      <Header />
      <main className="max-w-[1140px] pb-4 mr-auto ml-auto h-full">
        {loading && (
          <Skeleton variant="rectangular" width="full" height={200}></Skeleton>
        )}
        {loading ||
          (recipe && (
            <motion.article className="mx-2 my-1 flex flex-col md:grid md:grid-cols-columns gap-4 md:grid-rows-rows ">
              <div className="grid-rows-1 ">
                <img
                  src={mealImg}
                  alt={meal}
                  title={meal}
                className="w-full h-full block object-cover border border-solid border-1 border-violet rounded shadow-recipe"
                
                />
              </div>

              <div className="border border-solid border-1 border-violet rounded bg-clearWhite shadow-2xl p-3 gridArea">
                <div className="flex justify-between mt-1">
                  <h2 className="text-2xl font-bold">{meal}</h2>
                  <LinkOrButton
                    type="button"
                    className="bg-violet text-green hover:text-white px-2.5 py-1 rounded text-sm tracking-wide max-h-7 transition-all duration-500 ease-out"
                    onClick={() => navigate(`/category/${category}`)}
                  >
                    {category}
                  </LinkOrButton>
                </div>
                <p className="my-1 text-sm">{area}</p>
                <Underline className="w-full h-[1px] mx-auto my-2 bg-lightGray" />
                <h4 className="bg-violet text-white text-center py-1 mb-2 font-roboto tracking-wide">
                  Ingredients&nbsp;
                  <span className="text-green">{`(${slicedEngredients.length})`}</span>
                  :
                </h4>

                <ul className="grid grid-cols-ingrCol w-full m-0 p-0 gap-1.5 ">
                  {slicedEngredients.map(({ ingredient, measure }, index) => (
                    
                    <Ingredient
                      ingredient={ingredient}
                      measure={measure}
                      index={index}
                      key={ingredient}
                    />
                  ))}
                </ul>
                <Underline className="w-full h-[1px] mx-auto my-2 bg-lightGray" />

                {actionBtns.map(
                  ({ title, onClick, reversedTitle, icon, reversedIcon, className, is, withInstructions }, index, { length }) => (
                    <>
                          <React.Fragment key={index}>
                  <LinkOrButton onClick={onClick} className={className}>
                      {is ? (
                        <>
                          {reversedTitle}
                              {reversedIcon}
                        </> 
                      ) : (
                        <>
                               {title}
                          {icon}
                        </>
                        )}
                      </LinkOrButton>
                          </React.Fragment>

                      {is && withInstructions ? <p className="bg-grayRgba rounded px-2 py-4 whitespace-pre-wrap leading-6 transform transition-all animated-fadeIn ">{instructions}</p> : ''}
                      {length - 1 !== index && <Underline className="w-full h-[1px] mx-1 my-2 bg-lightGray" />}
                        </>
                  )
                )}

              </div>

              {youTubeLink && (
                <div className="h-[332px]">
                  <iframe
                    src={youTubeLink}
                    frameBorder="0"
                    title={`${meal} youtube video`}
                    allow="encrypted-media"
                    allowFullScreen
                    className="w-full h-full border border-1 border-solid border-violet shadow-recipe "
                  ></iframe>
                </div>
              )}

              <div className="flex flex-row gap-2  pb-5">
                {navigationBtns.map(({ link, title, icon }, index) => (
                  <LinkOrButton
                    type="link"
                    to={link}
                    className="bg-violet text-green hover:text-white px-2.5 py-2 rounded text-sm tracking-wide max-h-7 transition-all duration-500 ease-out flex items-center "
                    key={index}
                  >
                    {title}
                    &nbsp;
                    {icon}
                  </LinkOrButton>
                ))}
              </div>
            </motion.article>
          ))}
        {error && !loading && <p className="m-3">No recipe to display!</p>}
        {!loading && <BackButton />} 
      </main>
    </>
  );
};

export default SingleRecipe;
