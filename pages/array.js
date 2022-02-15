import React, { useContext, useState } from "react";

import InfoContext from "../components/InfoContext";

const InfoArray = (props) => {
  const { entries } = useContext(InfoContext);
  console.log(entries);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{entries[0].nom}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{entries[0].prénom}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>blabla</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>blabla</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>blabla</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>blabla</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoArray;
