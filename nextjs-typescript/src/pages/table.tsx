import React from "react";
import styled from "styled-components";

const tableData = Array(9)
  .fill("")
  .map((_, index) => ({
    name: `이름${index}`,
    contents: index,
  }));

const TableContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 16px;
  width: 420px;
`;

type TableItemProps = {
  index?: number;
  isFirstLine: boolean; // border-top: 1;
  isFirstItem: boolean; // border-left: 1;
};

const TableItem = styled.div<TableItemProps>`
  padding: 8px;
  border: 2px solid #f19066;
  border-top: ${(props) => (props.isFirstLine ? 1 : 0)};
  border-left: ${(props) => (props.isFirstItem ? 1 : 0)};
`;

const Table = () => {
  const checkIsFirstLine = (index: number, array?: typeof tableData) => {
    // const totalCount = tableData.length;
    if (index < 3) {
      return true;
    }
    return false;
  };
  const checkIsFirstItem = (index: number) => {
    if (index % 4 === 3) {
      return true;
    }
    return false;
  };
  return (
    <main>
      <TableContainer>
        <TableItem isFirstLine isFirstItem>
          전체
        </TableItem>
        {tableData.map((item, index, array) => (
          <TableItem
            key={index}
            isFirstLine={checkIsFirstLine(index)}
            isFirstItem={checkIsFirstItem(index)}
          >
            <h4>{item.name}</h4>
            <p>{item.contents}</p>
          </TableItem>
        ))}
      </TableContainer>
    </main>
  );
};

export default Table;
