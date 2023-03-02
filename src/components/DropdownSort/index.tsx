import { FC } from 'react'
import styles from './styles.module.scss'

interface DropdownSortProps {
  onChangeSearchType: (query: string) => void
}

const DropdownSort: FC<DropdownSortProps> = ({ onChangeSearchType }) => {

  return (
    <select
      className={styles['dropdown-sort']}
      onChange={(e) => onChangeSearchType(e.target.value)}
    >
      <option value="title">Alphabetically by Title</option>
      <option value="author">Alphabetically by Author Name</option>
      <option value="genre">Alphabetically by Genre</option>
    </select>
  )
}

export default DropdownSort
