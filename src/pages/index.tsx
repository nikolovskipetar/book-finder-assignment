import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import styles from '@/styles/home.module.scss'
import BOOK_DATA from '@/data/books.json'
import DropdownSort from '../components/DropdownSort'
import BookList from '../components/BookList'
import { Book } from '@/interfaces/book'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchType, setSearchType] = useState<string>('title')
  const [books, setBooks] = useState<Book[]>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    return setBooks(BOOK_DATA.filter((book: Book) => book.title.toLowerCase().includes(query.toLowerCase())))
  }

  const onClearSearch = () => {
    setSearchQuery('')
    return onSortBooks(BOOK_DATA)
  }

  const onSortBooks = (array: Book[]) => {
    array.sort((a: Book, b: Book) => a[searchType as keyof Book] > b[searchType as keyof Book] ? 1 : -1)
    return setBooks(array)
  }

  useEffect(() => {
    onSortBooks(!searchQuery && books.length === 0 ? BOOK_DATA : [...books])
  }, [searchType])

  return (
    <main className={styles['main']}>
      <h2 className={styles['main__header']}>
        Book Finder Assignment
      </h2>
      <div className={styles['main__navigation']}>
        <DropdownSort
          onChangeSearchType={setSearchType}
        />
        <SearchBar
          onSearch={handleSearch}
          onClearSearch={onClearSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      {books.length === 0 && searchQuery && (
        <p>No results found for {searchQuery}</p>
      )}
      <BookList books={books}/>
    </main>
  )
}
