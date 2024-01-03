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
      <Title title="Choose your favourite" category="category!" />
      <div>
        <ul>
          {categories.map(({ img, id, category }) => (
            <li>
              <Category key={id} img={img} id={id} category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
