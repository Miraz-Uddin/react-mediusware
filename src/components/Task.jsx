import React from "react";

export default function Task({ arr }) {
  return (
    <>
      {arr &&
        arr.length > 0 &&
        arr.map((task, i) => {
          const { name, status } = task || {};
          return (
            <tr key={i}>
              <td scope="col">{name}</td>
              <td scope="col">{status}</td>
            </tr>
          );
        })}
    </>
  );
}
