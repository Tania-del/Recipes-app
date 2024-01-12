import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return {
    back,
  };
};
