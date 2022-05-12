import React, { useCallback, useState } from "react";
import styled from "styled-components";
import startCase from "lodash/startCase";
import arrows from "../assets/images/arrows.png";

type Props = {
  data: Array<Array<string>>;
};

export const Wrapper = styled.div`
  padding: 20px;

  > table {
    border: 1px solid #eeeeee;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
    margin: 0 auto;
    padding: 20px;
  }
`;

const TableHead = styled.thead`
  display: block;

  > tr > th {
    width: 150px;

    > div {
      display: inline;
      padding-left: 10px;

      > img {
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
    }
  }
`;

const TableBody = styled.tbody`
  height: 500px;
  overflow: scroll;
  display: block;
  margin-top: 10px;

  > tr > td {
    width: 150px;
    padding-left: 10px;
  }
`;

/**
 * Functional component to display uploaded csv table
 * @param Props
 * @returns
 */
const Table: React.FC<Props> = ({ data }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [orderedData, setOrderedData] = useState<Array<Array<string>>>(data);

  /**
   * Removes the first index containing the headers and
   * sorts through the csv data depending on the column index
   * to display data in asc or desc order
   */
  const sortColumn = useCallback(
    (order: string, column: number) => {
      const sortData = data
        .filter((_, index) => index !== 0)
        .sort((a, b) => {
          if (a[column] < b[column]) {
            return order === "asc" ? -1 : 1;
          }
          if (a[column] > b[column]) {
            return order === "asc" ? 1 : -1;
          }
          return 0;
        });

      return setOrderedData(sortData);
    },
    [data]
  );

  return (
    <Wrapper>
      <table>
        <TableHead>
          <tr>
            {data[0].map((header, index) => {
              if (header.length > 0)
                return (
                  <th key={index}>
                    {startCase(header)}
                    <div
                      className="sortButton"
                      onClick={() => {
                        if (sortOrder === "asc") {
                          setSortOrder("desc");
                          return sortColumn("asc", index);
                        }
                        setSortOrder("asc");
                        return sortColumn("desc", index);
                      }}
                    >
                      <img src={arrows} alt="arrows" />
                    </div>
                  </th>
                );
            })}
          </tr>
        </TableHead>
        <TableBody>
          {orderedData.map((body, index) => {
            if (index !== 0) {
              return (
                <tr key={index}>
                  {body.map((detail, detailIndex) => {
                    if (detail.length > 0)
                      return <td key={detailIndex}>{detail}</td>;
                  })}
                </tr>
              );
            }
          })}
        </TableBody>
      </table>
    </Wrapper>
  );
};

export default Table;
