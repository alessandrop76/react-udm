import styles from './MyTitle.module.css';

const MyTitle = () => {
  return (
    <h1 className={styles['my_title']}>MyTitle - Estilização por Componente Modules</h1>
  )
}

export default MyTitle