/*
 * @copyright 2024 Denzel Navarro
 * @license Apache-2.0
 */

const Footer = () => {
  return (
    <footer className="bg-slate-950 mt-10 mb-4 py-4 text-center text-zinc-400">
      <div className="container mx-auto reveal-up">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Denzel Navarro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;