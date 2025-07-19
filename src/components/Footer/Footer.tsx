export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h2 className="text-white font-semibold mb-2">Компания</h2>
            <ul>
              <li>
                <a href="/about" className="hover:underline text-gray-400">
                  О нас
                </a>
              </li>
              <li>
                <a href="/team" className="hover:underline text-gray-400">
                  Команда
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline text-gray-400">
                  Карьера
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">Помощь</h2>
            <ul>
              <li>
                <a href="/faq" className="hover:underline text-gray-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="hover:underline text-gray-400">
                  Поддержка
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-gray-400">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">Подпишитесь</h2>
            <form className="flex flex-col">
              <input type="email" placeholder="Email" className="p-2 rounded bg-gray-800 text-white mb-2" />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Подписаться</button>
            </form>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-10 text-xs">&copy; {new Date().getFullYear()} TEAM_3 Site</p>
      </footer>
    </div>
  );
}
