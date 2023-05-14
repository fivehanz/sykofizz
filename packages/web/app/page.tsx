import styles from './page.module.scss';

export default async function Index() {
  return (
    <div className={styles.page}>
      <h2>
        welcome to <span>sykofizz</span>
      </h2>
    </div>
  );
}
