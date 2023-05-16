import styles from './page.module.css';

export default async function Index() {
  return (
    <div className={styles.page}>
      <h2 className="text-4xl font-bold ">
        welcome to <span className="text-accent">sykofizz</span>
      </h2>
    </div>
  );
}
