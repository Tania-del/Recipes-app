import React, { useEffect } from "react";
import Title from "./Title";
import {
  getCategories,
  selectCategories,
  selectErrorCategories,
  selectIsLoadingCategories,
} from "../store/categoriesSlice";
import { useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import Category from "./Category";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories } = useSelector(selectCategories);
  const loading = useSelector(selectIsLoadingCategories);
  const error = useSelector(selectErrorCategories);
  
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  

  
  return (
    <section className="max-w-[1140px] mt-0 mr-auto mb-0 ml-auto">
      <Title />
      {categories.length > 0 &&
        <ul className="grid gap-2 grid-cols-auto pb-8 overflow-x-hidden lg:overflow-x-visible">
          {categories.map(({ img, id, category }) => (
            <motion.li
              key={id}
              className="p-[15px] bg-pink rounded cursor-pointer transition ease-out transform hover:scale-103 hover:shadow-4xl duration-200"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              {loading ? (
                <Skeleton variant="rectangular" width="full" height={200} />
              ) : (
                <Category key={id} img={img} id={id} category={category} />
              )}
            </motion.li>
          ))}
      </ul>
        }
        {error && <p className="m-3">Cannot display categories...</p>}
    </section>
  );
};

export default Categories;
