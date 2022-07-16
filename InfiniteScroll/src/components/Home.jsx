import { useEffect, useState } from "react";
export const Home = () => {
  const [Data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {      
        getData();
  }, [page,Data]);

  function scrollToend() {
    setPage(page + 1);
  }

  async function getData() {
    const data = await fetch(
      `http://localhost:8080/data?_page=${page}&_limit=5`
    ).then((d) => d.json());
    setData([...Data, ...data]);
  }

  window.onscroll = function getScroll() {
      scrollToend();
  };

  return (
    <div>
      {Data.length > 0 &&
        Data.map((e, i) => (
          <div key={i} style={{ height: "300px",margin:"2%"}}>
            <h3>{e.name}</h3>
            <img height={"70%"} src={e.image_url} alt="" />
            <p>
              {" "}
              <strong>Price : {e.price}</strong>
            </p>
          </div>
        ))}
    </div>
  );
};
