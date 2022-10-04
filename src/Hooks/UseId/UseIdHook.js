import React from "react";
import { EmailForm } from "./EmailForm";

export function UseIdHook() {
  return (
    <>
      <EmailForm />
      <article style={{ marginBlock: "1rem" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        quia perspiciatis dicta atque? Minima neque beatae, est ullam velit ex
        sit deserunt voluptatibus. Dolorem quidem quod eligendi quas praesentium
        ea, ipsa iste beatae porro, amet voluptatum cupiditate voluptate officia
        expedita quae quibusdam obcaecati. Aperiam labore minus ducimus? Odio,
        aperiam animi!
      </article>
      <EmailForm />
    </>
  );
}
