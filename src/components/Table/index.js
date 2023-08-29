import React from "react";

export default function Table({ cats }) {
  console.log(cats);
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>tags</th>
          <th>owner</th>
        </tr>
      </thead>
      {cats.map((cat) => {
        return (
          <tbody>
            <tr>
              <td>{cat._id}</td>
                <td>{cat.tags.map((tag)=>
                  <span>{tag}</span>
                )}</td>
              <td>{cat.owner !== "null" ? cat.owner : "unknowed"}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
