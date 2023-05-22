/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className="absolute bottom-0 w-full h-10">
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>
            <span>{new Date().getFullYear()} &copy; </span>
            <span className="text-primary">sykofizz</span>
            {' - '}
            <a
              href="https://github.com/fivehanz"
              target="_blank"
              rel="noreferrer"
              className="link link-accent no-underline"
            >
              Hanz
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
