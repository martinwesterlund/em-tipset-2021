import { useEffect, useState, useContext } from "react";
import context from "../context/context";
import Router from "next/router";
import Header from "../components/Header";

const regler = () => {
  const { user, setUser, setIsLoading } = useContext(context);

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <Header></Header>

      <div className="w-screen min-h-screen bg-stripe pt-32 p-6 flex flex-col items-center">
        <div className="h-full w-full fixed top-0 left-0 bg-gradient-to-tl from-black opacity-20"></div>
        <h1>REGLER</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, iure
          nihil reprehenderit quaerat vitae odio tenetur eligendi unde eos est
          quae vero aut dolorum illum, id laudantium fugiat cumque quia commodi?
          Explicabo quas, repellat ab blanditiis ea modi fuga provident
          asperiores eaque laboriosam, nemo quo. Voluptate sint quo adipisci?
          Fuga corrupti velit, fugiat beatae possimus enim eveniet repellendus.
          Ducimus eius id ut blanditiis quisquam similique officia quas
          corporis, laudantium alias! Animi molestiae repellendus nobis iste.
          Reprehenderit cupiditate culpa minus recusandae eaque repellat,
          provident ea voluptas minima, suscipit voluptates debitis, facilis
          cum? Neque nostrum in quos asperiores reprehenderit reiciendis
          necessitatibus. Expedita totam nihil ex iure tenetur quas officiis
          repellendus atque ea sint quasi debitis nostrum saepe dignissimos, id,
          deleniti repellat necessitatibus numquam quod alias impedit tempora
          exercitationem error optio. Ad dolorum, nesciunt dolores est suscipit
          neque nihil assumenda. Illo iure doloribus repellendus, hic ut
          mollitia delectus qui dignissimos ducimus reiciendis amet obcaecati,
          ex dolor earum blanditiis? Neque repellat nisi totam delectus enim
          sequi voluptatum sed qui! Doloremque, similique recusandae! Blanditiis
          minima quia, dolorem modi repudiandae, inventore excepturi quod ullam
          omnis nam sunt voluptates. Nihil necessitatibus obcaecati cupiditate,
          hic, deleniti quis odit facere provident adipisci esse ducimus.
          Laboriosam laborum error libero modi praesentium molestias odio maxime
          aliquam, id aliquid aspernatur similique rem sint odit! Aliquid
          deleniti non sapiente qui minima doloribus dolorum eveniet consectetur
          nemo porro. Autem dolores illo tempora? Perferendis recusandae modi
          excepturi blanditiis ea est culpa placeat animi cum veritatis iure
          sapiente quis iusto possimus vel quos, nobis illum unde velit
          assumenda aliquid. Repudiandae obcaecati, vel voluptatem ea iste
          tempore minima, blanditiis asperiores qui, laboriosam autem voluptatum
          provident alias veniam consequuntur eaque. Eligendi ipsam facere
          tempora iusto? Hic iure, totam distinctio laudantium aperiam omnis
          quas suscipit autem sit rerum beatae, nesciunt repellendus impedit
          officiis id accusamus cum a vitae veritatis.
        </p>
      </div>
    </>
  );
};

export default regler;
