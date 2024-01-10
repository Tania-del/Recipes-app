import React, { useEffect } from "react";
import Title from "./Title";
import { getCategories, selectCategories } from "../store/categoriesSlice";
import { useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import Category from "./Category";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories } = useSelector(selectCategories);

  console.log(
    "🚀 ~ file: Categories.tsx:11 ~ Categories ~ categories:",
    categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  
  return (
    <section>
      <Title />
        <ul className="grid gap-2 grid-cols-auto pb-8 overflow-x-hidden lg:overflow-x-visible">
          {categories.map(({ img, id, category }) => (
            <li className="p-[15px] bg-pink rounded cursor-pointer transition ease-out transform hover:scale-103 hover:shadow-4xl duration-200">
              <Category key={id} img={img} id={id} category={category} />
            </li>
          ))}
        </ul>
    </section>
  );
};

export default Categories;
