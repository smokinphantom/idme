import styled from 'styled-components';

export const Table = styled.table`
  margin: auto; 
  border: 1px solid black;
  border-radius: 4px;
`;

export const TableTh = styled.th`
  border-bottom: 1px solid black;
  padding: 2px 0px;
`;

export const TableTd = styled.td`
  padding: 2rem;
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 10px auto;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  font-size: 14px;
  color: grey;
`;

export const CardFooter = styled.div`
  font-size: 16px;
  color: black;
`;

export const Title = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: black;
`;

export const ImageLogo = styled.img<{ view: string }>`
  width: ${(props) => (props.view === "mobile" ? '40px' : '50px')};
  height: ${(props) => (props.view === "mobile" ? '40px' : '50px')};
  ${(props) => (props.view === "mobile" && 'margin-right: 12px')};
  ${(props) => (props.view === "mobile" && 'border-radius: 50%')};
`;

export const Category = styled.div`
  border: 1px solid black;
`



