import { BsGridFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';

interface Props {
    length: number,
}

const Sort = ( {length}: Props ) => {
  return (
    <div className="sort-container"> 
        <BsGridFill />
        <FaList />
        <div>{length} Products found</div>
    </div>
  )
}

export default Sort