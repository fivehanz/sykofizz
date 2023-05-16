import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>
            Copyright &copy; {new Date().getFullYear()} -{' '}
            <a
              href="https://github.com/fivehanz"
              target="_blank"
              rel="noreferrer"
              className="link link-primary"
            >
              Haniel
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
