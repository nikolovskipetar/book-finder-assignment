import { FC } from 'react'
import styles from './styles.module.scss'
import { Book } from '@/interfaces/book'

interface BookListProps {
  books: Book[]
}

const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <div className={styles['books-list']}>
      {books.map(book => (
        <div key={book.title} className={styles['books-list__item']}>
          <h3 className={styles['books-list__item--title']}>
            {book.title}
          </h3>
          <p className={styles['books-list__item--author']}>
            By: {book.author}
          </p>
          <p className={styles['books-list__item--genre']}>
            Genre: {book.genre}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
