import React, { ChangeEvent, useState } from "react";
import Papa from "papaparse";
import styled from "styled-components";
import Table from "../components/Table";

const Wrapper = styled.div`
  padding: 20px;
`;

/**
 * Functional component to display the components of the hompage
 * @returns
 */
const Homepage: React.FC = () => {
  const [csvFile, setCsvFile] = useState<File | any>({});
  const [csvFileValue, setCsvFileValue] = useState<File | any>({});

  /**
   * Uses papaparse packe to parse csv file into a json file for readability
   * and updates the state
   */
  const importCSV = () => {
    Papa.parse(csvFileValue, {
      complete: (results: { data: Array<Array<string>> }) => {
        setCsvFile(results.data);
      },
    });
  };

  return (
    <Wrapper>
      <div>
        <input
          type="file"
          name="file"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) return setCsvFileValue(e.target.files[0]);
          }}
        />
        <button onClick={() => importCSV()}>Upload CSV</button>

        {csvFile.length > 0 && <Table data={csvFile} />}
      </div>
    </Wrapper>
  );
};

export default Homepage;
