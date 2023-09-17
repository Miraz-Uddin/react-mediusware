import React from "react";

export default function Contacts({ data }) {
  const { type, dataList } = data || {};
  const { results } = dataList || {};

  if (!dataList || !results || results.length === 0) {
    return (
      <>
        <h5>No Data</h5>
      </>
    );
  }
  return (
    <>
      {results.map((contact) => {
        const { id, phone, country } = contact || {};
        return (
          <div key={id}>
            <button className="btn btn-sm" type="button">
              Contact: {phone} , Country: {country?.name}
            </button>
          </div>
        );
      })}
    </>
  );
}
