import styles from './header.module.scss';
const Header = () => {
  const board = [];

  for (let i = 0; i < 42; i++) {
    board.push(<div className={styles.Circle} key={i}></div>);
  }

  return (
    <div className={styles.backLayer}>
      <div className={styles.header}>{board}</div>
    </div>
  );
};

export default Header;
