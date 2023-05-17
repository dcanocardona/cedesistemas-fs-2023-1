import { Link } from "react-router-dom"
import { WearItemContainer, WearItemImage } from "./styles"

export const WearItem = ({_id, image, name, target, gender}) => {

  return (
    <Link to={`/wear-detail/${_id}`}>
      <WearItemContainer>
        <WearItemImage>
          <div>
            <img src={image} alt=""/>
          </div>
        </WearItemImage>
        <h3>{name}</h3>
        <h5>{target} / {gender}</h5>

      </WearItemContainer>
    </Link>
  )
}



