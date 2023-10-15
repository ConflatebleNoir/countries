import {useParams} from "react-router-dom";

export const Detail= () => {
    const { name } = useParams();

    return(
        <div>
            Detail {name}
        </div>
    )
}