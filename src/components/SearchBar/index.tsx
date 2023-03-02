import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './style.module.scss'

interface SearchBarProps {
  onSearch: (query: string) => void,
  onClearSearch: () => void
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, onClearSearch }) => {
  const [query, setQuery] = useState('')

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(query)
  }

  const handleClearSearch = () => {
    setQuery('')
    onClearSearch()
  }

  return (
    <form className={styles['search-bar']} onSubmit={handleSearchSubmit}>
      <input
        className={styles['search-bar__input']}
        placeholder="Search..."
        value={query}
        onChange={handleSearchChange}
      />
      <button
        type="submit"
        className={styles['search-bar__button']}
      >
        Search <i className="fas fa-search"/>
      </button>

      {query && (
        <button
          className={styles['search-bar__button']}
          onClick={handleClearSearch}
        >
          Clear
        </button>
      )}
    </form>
  )
}

export default SearchBar
