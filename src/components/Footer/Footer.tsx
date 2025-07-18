export default function Footer() {
  return (
    <div>
      <footer className="bg-neutral-900 text-white py-10 px-4">
        <div className="max-w-7x1 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h2 className="text-white font-semibold mb-2">Компания</h2>
            <ul>
              <li>
                <a href="/about" className="hover:underline text-neutral-500">
                  О нас
                </a>
              </li>
              <li>
                <a href="/team" className="hover:underline text-neutral-500">
                  Команда
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline text-neutral-500">
                  Карьера
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">Помощь</h2>
            <ul>
              <li>
                <a href="/faq" className="hover:underline text-neutral-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="hover:underline text-neutral-500">
                  Поддержка
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-neutral-500">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-semibold mb-2">Подпишитесь</h2>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded bg-gray-800 text-neutral-500 mb-2"
              />
              <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white">
                Подписаться
              </button>
            </form>
          </div>
        </div>
        <p className="text-center text-neutral-500 mt-10 text-xs">
          &copy; {new Date().getFullYear()} TEAM_3 Site
        </p>
      </footer>
    </div>
  );
}
