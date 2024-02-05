import React  from "react";
import { Link } from "react-router-dom";
import { ISingleMeal } from "../store/types";
import { useSelector } from "react-redux";
import { selectIsLoadingCategories } from "../store/categoriesSlice";
import { Skeleton } from "@mui/material";
import { Star } from "../icons";

interface Meal extends ISingleMeal {
  className?: string;
}

const SingleMeal = ({ meal, id, img, className }: Meal) => {
  const loading = useSelector(selectIsLoadingCategories);

  return (
    <>
      <div className={`${className ? className : 'bg-pink p-3' } transition ease-out transform hover:scale-103 hover:shadow-4xl duration-200 rounded relative group`}>
        <div className="rounded-t  bg-opacity-15 mb-[-5px] transform scale-99 translate-z-0 rounded-tl-4 rounded-tr-4">
          {loading ? (
            <Skeleton variant="rectangular" width="full" height={200} />
          ) : (
            <Link to={`/recipes/${id}`}>
              {loading ? (
                <Skeleton variant="rectangular" width="full" height={200} />
              ) : (
                <img
                  src={img}
                  alt={img}
                  className="w-full h-full block border-x border-t-[1px] rounded"
                />
              )}
            </Link>
          )}
  
          <Star className="p-0.5 bg-violet rounded-full fill-white absolute top-0 right-0 opacity-0 transition-all duration-200 group-hover:opacity-100" />
        </div>
        <h4 className="text-base capitalize font-bold flex text-center items-center leading-tight justify-center text-white bg-violet rounded-b p-0.3em min-h-14">
          {meal}
        </h4>
      </div>
    </>
  );
};

export default SingleMeal;
