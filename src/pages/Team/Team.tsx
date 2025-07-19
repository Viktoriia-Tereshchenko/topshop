export default function Team() {
  return (
    <div>
      <section className="h-screen flex-col flex items-center justify-center text-white text-base leading-loose bg-[url(https://www.ptworkers.com/assets/img/home3.png)] bg-no-repeat bg-center bg-cover">
        <div className="size-full flex justify-start">
          <div className="h-full flex flex-col justify-center gap-10 w-1/4 p-6 border border-white/30 bg-black/50 ml-[20px]">
            <p>
              Welcome to{" "}
              <span className="text-accent font-bold">Team 3</span> —
              This is a team of students studying Web development. We used a
              stack of technologies: React, TypeScript, Tailwind CSS, REST API
              and adhered to the principles of the component approach. The goal
              of the project is to create a modern online store with user
              registration, authorization and a product management system.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
