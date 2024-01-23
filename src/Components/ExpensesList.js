import React, { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import "./ExpenseList.css";

const ExpensesList = () => {
  const [csvData, setCsvData] = useState([]);

  const handleCSVFile = (data) => {
    // Check if the first row contains numeric values
    const hasNumericHeaders = data[0].some(value => !isNaN(value));

    // If the first row contains numeric values, skip it
    setCsvData(hasNumericHeaders ? data.slice(1) : data);
  };

  useEffect(() => {
    // Additional logic or API calls can be performed here after csvData has been updated
  }, [csvData]);

  return (
    <div>
      <CSVReader onFileLoaded={handleCSVFile} />

      {csvData.length > 0 && (
        <table>
          <thead>
            <tr>
              {/* Render column names in table header */}
              {Object.keys(csvData[0]).map((columnName, index) => (
                <th key={index}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Render list items in table rows */}
            {csvData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpensesList;
