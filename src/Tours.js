import React from "react";

function Tours() {
  const data = [
    {
      title: "Bests of new york in 7 days",
      image: "",
      price: 1995,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ad maxime voluptatum quae repudiandae cumque laboriosam asperiores! Exercitationem, recusandae soluta. Culpa eius consectetur alias quo! Quas eos exercitationem explicabo veritatis!",
    },
    {
      title: "Bests of london in 7 days",
      image: "",
      price: 2095,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ad maxime voluptatum quae repudiandae cumque laboriosam asperiores! Exercitationem, recusandae soluta. Culpa eius consectetur alias quo! Quas eos exercitationem explicabo veritatis!",
    },
    {
      title: "Bests of paris in 7 days",
      image: "",
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
