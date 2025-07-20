import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import logo from "../../assets/avafooter.png"; // путь к файлу с логотипом

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-5 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 text-sm">
          {/* Секция с логотипом и контактами */}
          <div className="flex flex-col items-start space-y-4 mt-3">
            <img src={logo} alt="Logo" className="w-24 h-auto" />
            <div className="text-neutral-500 text- leading-relaxed">
              <p>Deutschland Berlin 10100</p>
              <p>Phone: +123 456 7890</p>
              <p>Email: TopShop@company.com</p>
            </div>
          </div>

          {/* Основной блок колонок */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
            <div>
              <h2 className="text-white font-semibold mb-2">Company</h2>
              <ul>
                <li>
                  <NavLink
                    to={ROUTES.ABOUT}
                    className="hover:underline hover:text-white text-neutral-500"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <a href="/team" className="hover:underline hover:text-white text-neutral-500">
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:underline hover:text-white text-neutral-500"
                  >
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white font-semibold mb-2">Help</h2>
              <ul>
                <li>
                  <a href="/faq" className="hover:underline hover:text-white text-neutral-500">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="hover:underline hover:text-white text-neutral-500"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:underline hover:text-white text-neutral-500"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white font-semibold mb-2">Subscribe</h2>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 rounded bg-gray-800 text-white mb-2"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-10 text-xs">
          &copy; {new Date().getFullYear()} TEAM_3 Site
        </p>
      </footer>
    </div>
  );
}
