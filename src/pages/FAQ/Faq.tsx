import { useState } from 'react';

export default function FAQPage() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore((prev) => !prev);

  return (
    <div>
      <section className="min-h-screen flex flex-col items-center justify-center text-white text-base leading-loose bg-[url(./assets/bg-footer.png)] bg-no-repeat bg-center bg-cover py-[120px]">
        <div className="size-full flex justify-center">
          {/* Левая часть — вопросы */}
          <div className="h-auto flex flex-col justify-start gap-6 w-2/5 py-20 px-10 mr-[10px] border-r border-gray-400 bg-black/50 rounded-l-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center">❓ Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">How do I join the team?</h3>
                <p className="text-sm">
                  You can apply by filling out our application form. We’ll review and get back to you shortly!
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">What qualifications do I need?</h3>
                <p className="text-sm">
                  We look for passionate individuals with teamwork and creativity. No strict requirements, just
                  dedication!
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Is there a trial period?</h3>
                <p className="text-sm">Yes. We usually start with a 2-week probation to see how things go.</p>
              </div>

              {/* Скрытые вопросы */}
              {showMore && (
                <>
                  <div>
                    <h3 className="font-semibold text-lg">Do I need specific software?</h3>
                    <p className="text-sm">
                      Just basic tools like Discord and access to shared documents. We help you set everything up!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Can I work remotely?</h3>
                    <p className="text-sm">Absolutely. Most of our work is done online, so location isn’t a problem.</p>
                  </div>
                </>
              )}

              {/* Кнопка показать больше */}
              <button onClick={handleToggle} className="text-blue-400 hover:underline text-sm mt-2">
                {showMore ? 'Show less ▲' : 'Show more ▼'}
              </button>
            </div>
          </div>

          {/* Правая часть — дополнительная информация */}
          <div className="h-auto flex flex-col justify-start gap-6 w-2/5 py-20 px-10 ml-[10px] bg-black/50 rounded-r-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center">📋 More Info</h2>

            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>We communicate via Discord, so make sure you’re active there.</li>
              <li>Weekly meetings are held every Sunday at 8PM.</li>
              <li>Feedback is shared regularly to help you improve.</li>
              <li>Fun events and team hangouts are included!</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
