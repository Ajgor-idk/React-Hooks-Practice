import React, { useRef } from "react";
import { useOnScreen } from "./useOnScreen";

export function OnScreenComponent() {
  const headerTwoRef = useRef();
  const visible = useOnScreen(headerTwoRef, "-100px");
  return (
    <div>
      <h1>Header</h1>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        repellat voluptatem. Vitae laborum ex voluptatibus mollitia numquam,
        omnis rerum laboriosam porro consequatur suscipit repellendus illum,
        voluptas nostrum obcaecati repellat. Eius recusandae quos optio, ut quod
        sed quasi obcaecati, animi aspernatur explicabo amet ullam fugiat et
        eveniet nesciunt ducimus veritatis? Quidem, numquam qui eligendi
        molestiae reprehenderit impedit assumenda cupiditate porro voluptatibus
        dolor enim officiis minus ratione, est odit sit, temporibus dolores
        rerum nesciunt neque quae odio sed. Suscipit enim tempore asperiores
        voluptatibus sequi eum, perspiciatis ad quaerat nostrum dolor voluptate
        cumque ut consequuntur dolorem distinctio neque aliquam dignissimos
        omnis cum doloremque quos? Maxime harum veritatis, corrupti enim itaque
        perferendis quibusdam? Ratione eos eveniet debitis eius blanditiis animi
        laborum nisi doloremque cupiditate exercitationem iure, voluptates unde
        provident sequi alias ipsam dolorem. Animi dignissimos nulla, dolore
        officiis suscipit odit quo quas. Tenetur consequatur numquam, officia
        est consectetur quidem ad nam facilis vitae, ipsam praesentium nostrum
        porro, culpa incidunt distinctio tempora perspiciatis illum quas
        explicabo error? In consequatur facere harum maxime deleniti totam
        debitis quos mollitia minus, dolores similique aliquam quod voluptatum
        quaerat doloribus hic nulla aliquid sequi! Cumque delectus adipisci
        voluptates distinctio velit pariatur maiores nam. Atque id natus
        asperiores dicta dolor animi sequi debitis, dolorem nulla magni facere
        maiores eligendi, consequuntur inventore quaerat. Natus asperiores,
        maiores odio, numquam ratione iusto cum libero eos exercitationem nam
        nihil quod accusamus aliquam deserunt qui sunt suscipit omnis illum
        quidem corrupti dolore molestias maxime sint? Non obcaecati quae enim.
        Aperiam, ipsa. Culpa facere sed pariatur consequuntur. Quidem, numquam
        qui eligendi molestiae reprehenderit impedit assumenda cupiditate porro
        voluptatibus dolor enim officiis minus ratione, est odit sit, temporibus
        dolores rerum nesciunt neque quae odio sed. Suscipit enim tempore
        asperiores voluptatibus sequi eum, perspiciatis ad quaerat nostrum dolor
        voluptate cumque ut consequuntur dolorem distinctio neque aliquam
        dignissimos omnis cum doloremque quos? Maxime harum veritatis, corrupti
        enim itaque perferendis quibusdam? Ratione eos eveniet debitis eius
        blanditiis animi laborum nisi doloremque cupiditate exercitationem iure,
        voluptates unde provident sequi alias ipsam dolorem. Animi dignissimos
        nulla, dolore officiis suscipit odit quo quas. Tenetur consequatur
        numquam, officia est consectetur quidem ad nam facilis vitae, ipsam
        praesentium nostrum porro, culpa incidunt distinctio tempora
        perspiciatis illum quas explicabo error? In consequatur facere harum
        maxime deleniti totam debitis quos mollitia minus, dolores similique
        aliquam quod voluptatum quaerat doloribus hic nulla aliquid sequi!
        Cumque delectus adipisci voluptates distinctio velit pariatur maiores
        nam. Atque id natus asperiores dicta dolor animi sequi debitis, dolorem
        nulla magni facere maiores eligendi, consequuntur inventore quaerat.
        Natus asperiores, maiores odio, numquam ratione iusto cum libero eos
        exercitationem nam nihil quod accusamus aliquam deserunt qui sunt
        suscipit omnis illum quidem corrupti dolore molestias maxime sint? Non
        obcaecati quae enim. Aperiam, ipsa. Culpa facere sed pariatur
        consequuntur.
      </div>
      <h1 ref={headerTwoRef}>Header 2 {visible && "(Visible)"}</h1>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        repellat voluptatem. Vitae laborum ex voluptatibus mollitia numquam,
        omnis rerum laboriosam porro consequatur suscipit repellendus illum,
        voluptas nostrum obcaecati repellat. Eius recusandae quos optio, ut quod
        sed quasi obcaecati, animi aspernatur explicabo amet ullam fugiat et
        eveniet nesciunt ducimus veritatis? Quidem, numquam qui eligendi
        molestiae reprehenderit impedit assumenda cupiditate porro voluptatibus
        dolor enim officiis minus ratione, est odit sit, temporibus dolores
        rerum nesciunt neque quae odio sed. Suscipit enim tempore asperiores
        voluptatibus sequi eum, perspiciatis ad quaerat nostrum dolor voluptate
        cumque ut consequuntur dolorem distinctio neque aliquam dignissimos
        omnis cum doloremque quos? Maxime harum veritatis, corrupti enim itaque
        perferendis quibusdam? Ratione eos eveniet debitis eius blanditiis animi
        laborum nisi doloremque cupiditate exercitationem iure, voluptates unde
        provident sequi alias ipsam dolorem. Animi dignissimos nulla, dolore
        officiis suscipit odit quo quas. Tenetur consequatur numquam, officia
        est consectetur quidem ad nam facilis vitae, ipsam praesentium nostrum
        porro, culpa incidunt distinctio tempora perspiciatis illum quas
        explicabo error? In consequatur facere harum maxime deleniti totam
        debitis quos mollitia minus, dolores similique aliquam quod voluptatum
        quaerat doloribus hic nulla aliquid sequi! Cumque delectus adipisci
        voluptates distinctio velit pariatur maiores nam. Atque id natus
        asperiores dicta dolor animi sequi debitis, dolorem nulla magni facere
        maiores eligendi, consequuntur inventore quaerat. Natus asperiores,
        maiores odio, numquam ratione iusto cum libero eos exercitationem nam
        nihil quod accusamus aliquam deserunt qui sunt suscipit omnis illum
        quidem corrupti dolore molestias maxime sint? Non obcaecati quae enim.
        Aperiam, ipsa. Culpa facere sed pariatur consequuntur. Quidem, numquam
        qui eligendi molestiae reprehenderit impedit assumenda cupiditate porro
        voluptatibus dolor enim officiis minus ratione, est odit sit, temporibus
        dolores rerum nesciunt neque quae odio sed. Suscipit enim tempore
        asperiores voluptatibus sequi eum, perspiciatis ad quaerat nostrum dolor
        voluptate cumque ut consequuntur dolorem distinctio neque aliquam
        dignissimos omnis cum doloremque quos? Maxime harum veritatis, corrupti
        enim itaque perferendis quibusdam? Ratione eos eveniet debitis eius
        blanditiis animi laborum nisi doloremque cupiditate exercitationem iure,
        voluptates unde provident sequi alias ipsam dolorem. Animi dignissimos
        nulla, dolore officiis suscipit odit quo quas. Tenetur consequatur
        numquam, officia est consectetur quidem ad nam facilis vitae, ipsam
        praesentium nostrum porro, culpa incidunt distinctio tempora
        perspiciatis illum quas explicabo error? In consequatur facere harum
        maxime deleniti totam debitis quos mollitia minus, dolores similique
        aliquam quod voluptatum quaerat doloribus hic nulla aliquid sequi!
        Cumque delectus adipisci voluptates distinctio velit pariatur maiores
        nam. Atque id natus asperiores dicta dolor animi sequi debitis, dolorem
        nulla magni facere maiores eligendi, consequuntur inventore quaerat.
        Natus asperiores, maiores odio, numquam ratione iusto cum libero eos
        exercitationem nam nihil quod accusamus aliquam deserunt qui sunt
        suscipit omnis illum quidem corrupti dolore molestias maxime sint? Non
        obcaecati quae enim. Aperiam, ipsa. Culpa facere sed pariatur
        consequuntur.
      </div>
    </div>
  );
}
