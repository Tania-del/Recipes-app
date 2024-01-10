import React, { FC } from "react";

interface ITitle {
  categoryId?: string | undefined;
}

const Title: FC<ITitle> = ({ categoryId }) => {
  return (
    <div className="bg-violet p-2">
      {categoryId ? (
        <h1 className="text-center text-white text-[18px] font-bold">
          Choose a recipe from&nbsp;
          {<span className="text-green">{categoryId}</span>}&nbsp;category!
        </h1>
      ) : (
        <h1 className="text-center text-white text-[18px] font-bold">
          Choose your favourite&nbsp;
          <span className="text-green">category!</span>
        </h1>
      )}
    </div>
  );
};

export default Title;
