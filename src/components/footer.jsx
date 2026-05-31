const Footer = () => {
  return (
    <footer className="bg-slate-900 text-green-100 border-t border-green-800 mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo + Description */}
          <div className="text-center md:text-left">

            <h1 className="text-xl font-bold text-green-400">
              <span>&lt;</span>
              PassOP
              <span> /&gt;</span>
            </h1>

            <p className="text-sm text-white mt-3 max-w-md">
              Your secure password manager built to keep your credentials safe,
              organized, and accessible anytime.
            </p>

          </div>

        </div>

        {/* Divider (OUTSIDE top section) */}
        <div className="border-t border-green-800 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">

          <p>© 2026 PassOP. All rights reserved.</p>

        <div className="flex gap-4">

  <a href="#" className="hover:scale-110 transition">
    <img className="w-5" src="/instagram.png" alt="GitHub" />
  </a>

  <a href="#" className="hover:scale-110 transition">
    <img className="w-5" src="/linkedin.png" alt="LinkedIn" />
  </a>

  <a href="#" className="hover:scale-110 transition">
    <img className="w-5" src="/twitter.png" alt="Twitter" />
  </a>

</div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;