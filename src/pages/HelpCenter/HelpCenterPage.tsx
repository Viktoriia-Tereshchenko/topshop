export default function HelpCenterPage() {
  return (
    <div>
      <section className="h-screen flex flex-col items-center justify-center text-white text-base leading-loose bg-[url(./assets/bg-footer.png)] bg-no-repeat bg-center bg-cover">
        <div className="size-full flex justify-center">
          <div className="h-auto flex flex-col justify-center gap-6 w-1/4 p-6 border border-gray-400 bg-black/40 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center">🛠 Help Center</h2>

            <h2 className="text-xl font-semibold text-center">Need assistance?</h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 rounded bg-gray-800 text-white border border-gray-500 focus:outline-none focus:ring focus:ring-accent"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded bg-gray-800 text-white border border-gray-500 focus:outline-none focus:ring focus:ring-accent"
              />
              <textarea
                rows={4}
                placeholder="Describe your issue..."
                className="p-2 rounded bg-gray-800 text-white border border-gray-500 resize-none focus:outline-none focus:ring focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}