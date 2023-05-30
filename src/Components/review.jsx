import { useParams } from "react-router-dom"

export default function Review (){
const {review_id} = useParams()
    return(
        <>
       Page for {review_id}
        </>
    )
}