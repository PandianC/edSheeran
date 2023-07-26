import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const ReturnListItems = props => {
  const {list, onClickDel} = props
  const {id, imageUrl, name, genre, duration} = list

  const onClickDelete = () => {
    onClickDel(id)
  }
  return (
    <li>
      <div>
        <img src={imageUrl} alt={name} />
        <h1>{name}</h1>
        <p>{genre}</p>
        <p>{duration}</p>
        <button data-testid="delete" type="button" onClick={onClickDelete}>
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default ReturnListItems
