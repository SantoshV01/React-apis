import React from "react";

function Tours() {
  const data = [
    {
      title: "Bests of new york in 7 days",
      image:
        "https://images.unsplash.com/photo-1506606401543-2e73709cebb4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      price: 1995,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ad maxime voluptatum quae repudiandae cumque laboriosam asperiores! Exercitationem, recusandae soluta. Culpa eius consectetur alias quo! Quas eos exercitationem explicabo veritatis!",
    },
    {
      title: "Bests of london in 7 days",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQ23QiYnixrx6Xe6JfdruS9pq5NjK4q33wA&usqp=CAU",
      price: 2095,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ad maxime voluptatum quae repudiandae cumque laboriosam asperiores! Exercitationem, recusandae soluta. Culpa eius consectetur alias quo! Quas eos exercitationem explicabo veritatis!",
    },
    {
      title: "Bests of paris in 7 days",
      image: "https://cdn.wallpapersafari.com/15/5/RQF2z0.jpg",
      price: 1695,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ad maxime voluptatum quae repudiandae cumque laboriosam asperiores! Exercitationem, recusandae soluta. Culpa eius consectetur alias quo! Quas eos exercitationem explicabo veritatis!",
    },
  ];

  return (
    <div className="Tours">
      <h1>Tours</h1>
      {data.map((data) => (
        <ul>
          <li>title: {data.title}</li>
          <li>price: ${data.price}</li>
          <li>description: {data.description}</li>
          <br />
        </ul>
      ))}
    </div>
  );
}
export default Tours;
