import DevelopersList from '../../components/DevelopersList/DevelopersList';

export default function AboutPage() {
  return (
    <div>
      <section className="h-screen flex-col flex items-end justify-center text-3xl text-white bg-[url(/about-img-6.webp)] bg-no-repeat bg-center bg-cover">
        <div className="size-full flex justify-end  bg-main/40">
          <div className="h-full flex flex-col justify-center gap-10 w-1/2">
            <p>
              Welcome to <span className="text-accent font-bold">Top</span>
              <span className="text-main/90 font-bold">Shop</span> —your one-stop online store! We offer carefully
              selected products at the best prices and care about your convenience.
            </p>
            <p>We offer everything from electronics to accessories, and placing an order takes just a few clicks.</p>
          </div>
        </div>
      </section>
      <section className="h-screen flex-col flex items-end justify-center text-3xl text-accent bg-[url(/home-img-9.jpg)] bg-no-repeat bg-center bg-cover"></section>
      <section className="flex py-28 text-2xl">
        <div className="flex flex-col gap-6 w-1/2">
          <p>This project is the result of a joint effort by a team of students studying web development.</p>
          <p>
            We utilized a technology stack consisting of React, TypeScript, Tailwind CSS, and REST API, adhering to the
            principles of a component-based approach.
          </p>
          <p>
            The goal of the project is to create a modern online store with user registration, authorization, and a
            product management system.
          </p>
        </div>
        <div className="w-1/2 bg-[url(/img-31.png)] bg-no-repeat bg-center bg-size-[100% 100%]"></div>
      </section>
      <section className="flex flex-col text-2xl">
        <DevelopersList />
      </section>
    </div>
  );
}
