export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content p-5 bg-slate-100">
      <aside>
        <p className="font-playfair">
          Copyright © {new Date().getFullYear()} - All right reserved by &nbsp;
          <a target="_blank" href="https://github.com/axiomshuvo">
            <span className="font-bold">Pradipta Sarker</span>
          </a>
        </p>
      </aside>
    </footer>
  );
}
