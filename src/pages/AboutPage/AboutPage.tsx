export default function AboutPage() {
  return (
    <div>
      <section className="h-screen flex-col flex items-end justify-center text-3xl text-white bg-[url(/about-img-6.webp)] bg-no-repeat bg-center bg-cover">
        <div className="size-full flex justify-end  bg-main/40">
          <div className="h-full flex flex-col justify-center gap-10 w-1/2">
            <p>
              Добро пожаловать в <span className="text-accent font-bold">Top</span>
              <span className="text-main/90 font-bold">Shop</span> — ваш универсальный онлайн-магазин! Мы предлагаем
              тщательно отобранные товары по лучшим ценам и заботимся о вашем удобстве.
            </p>
            <p>У нас вы найдёте всё — от электроники до аксессуаров, а оформление заказа занимает всего пару кликов.</p>
          </div>
        </div>
      </section>
      <section className="h-screen flex-col flex items-end justify-center text-3xl text-accent bg-[url(/home-img-9.jpg)] bg-no-repeat bg-center bg-cover"></section>
      <section className="flex py-20 text-2xl">
        <div className="flex flex-col gap-6 w-1/2">
          <p>Этот проект — результат совместной работы команды студентов, проходящих обучение по Web-разработке.</p>
          <p>
            Мы использовали стек технологий: React, TypeScript, Tailwind CSS, REST API и придерживались принципов
            компонентного подхода.
          </p>
          <p>
            Цель проекта — создать современный интернет-магазин с регистрацией пользователей, авторизацией и системой
            управления товарами.
          </p>
        </div>
        <div className="w-1/2 bg-[url(/img-31.png)] bg-no-repeat bg-center bg-cover"></div>
      </section>
      <section>
        <h2 className="text-center text-3xl"> Команда проекта:</h2>
        <ul></ul>
      </section>
    </div>
  );
}
