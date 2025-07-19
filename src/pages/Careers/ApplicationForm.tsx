export default function ApplicationForm() {
  return (
    <div>
      <section className="h-screen flex flex-col items-center justify-center text-white text-base leading-loose bg-[url(https://www.ptworkers.com/assets/img/home3.png)] bg-no-repeat bg-center bg-cover">
        <div className="size-full flex justify-start">
          <div className="h-auto flex flex-col justify-center gap-6 w-1/4 p-6 ml-[20px] border border-gray-400 bg-black/40 rounded-l-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center">Welcome to our team!</h2>

            <h2 className="text-xl font-semibold text-center">Application Request</h2>

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
                placeholder="Message"
                className="p-2 rounded bg-gray-800 text-white border border-gray-500 resize-none focus:outline-none focus:ring focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}