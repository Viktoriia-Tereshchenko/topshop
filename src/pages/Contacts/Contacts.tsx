import facebook from '/src/assets/facebook.png';
import instagram from '/src/assets/instagram.png';
import twitter from '/src/assets/twitter.png';
import linkedin from '/src/assets/linkedin.png';
export default function Contacts() {
  return (
    <div>
      <section className="h-screen flex flex-col items-center justify-center text-white text-base leading-loose bg-[url(./assets/bg-footer.png)] bg-no-repeat bg-center bg-cover">
        {/* Горизонтальный бордер */}
        <div className="w-full flex justify-center">
          <div className="w-[600px] p-10 border-t border-b border-white/30 bg-black/50 flex flex-col items-center gap-6 rounded-lg">
            <h2 className="text-xl font-semibold text-center">📱 Contact Us</h2>

            <p className="text-sm text-center">Stay connected with us on social media!</p>

            {/* Иконки в один ряд */}
            <div className="flex justify-between items-center w-full max-w-[600px]">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src={instagram} alt="Instagram" className="w-25 h-25" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src={facebook} alt="Facebook" className="w-25 h-25" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src={twitter} alt="Twitter" className="w-25 h-25" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src={linkedin} alt="LinkedIn" className="w-25 h-25" />
              </a>
            </div>

            <p className="text-xs text-gray-300 text-center">We're active 24/7 — DM us anytime 🌐</p>
          </div>
        </div>
      </section>
    </div>
  );
}
