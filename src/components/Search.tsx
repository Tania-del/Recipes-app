import React, { useEffect, useState }  from "react";
import {SearchSvgrepoCom } from "../icons";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { getRecipesBySearchName } from "../store/recipesSlice";


export const Search = () => {
  const [queryValue, setQueryValue] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { query } = useParams()
  
  console.log("🚀 ~ Search ~ query:", query);


  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(e.target.value)
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (queryValue) {
      dispatch(getRecipesBySearchName(queryValue))

      navigate(`/search-results/${queryValue}`);

      setQueryValue('')
    }
  }
  
   useEffect(() => {
     if (query) {
      dispatch(getRecipesBySearchName(query))
    }
  })

  
  return (
    <>
      <form
        action="search"
        className="relative bg-white rounded  md:-ml-36"
        onSubmit={handleSubmit}
      >
        <input
          name="search"
          placeholder="Search recipes..."
          className="bg-white py-2 px-3 rounded pr-10 focus:outline-none focus:border-green focus:ring focus:ring-green w-[164px] focus:w-[215px] md:w-[215px] transition-width duration-500 ease-out font-roboto text-base"
          onChange={handleChange}
          value={queryValue}
        />
        <button className="absolute top-2 right-3 outline-none">
          {<SearchSvgrepoCom />}
        </button>
      </form>
    </>
  );
};

export default Search;
