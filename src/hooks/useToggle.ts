import { useCallback, useState } from "react"

export const useToggle = (): [boolean, () => void] => {
    const [toggled, setToggle] = useState(false);

    const toggle = useCallback(() => {
        setToggle((prev) => !prev)
    }, []);
    
    return [toggled, toggle]
}