import { FC, ReactElement, useEffect, useState } from "react";
import { Table, TableTh, TableTd, Card, CardHeader, CardBody, CardFooter, ImageLogo, Title, Price, Category } from "./styled";

//Detect view based on screensize
const detectMob = () => {
  return ((window.innerWidth <= 800) && (window.innerHeight <= 600));
}

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(date))
}

interface PurchaseItem {
  id: number,
  location: string,
  purchaseDate: string,
  category: string,
  description: string,
  price: number,
  name: string
}

const URL = 'https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json'

export const Purchase: FC = (): ReactElement => {

  const [purchases, setPurchase] = useState<PurchaseItem[]>([])

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(URL)
          .then(response => response.json())
          .then(data => setPurchase([...data]));
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, [])

  //card view
  const displayCard = () => {
    return purchases.map((purchase, idx) => {
      return (
        <Card data-test="card-view" key={idx}>
          <CardHeader>
            <ImageLogo view="mobile" src={purchase.location} alt="Logo" />
            <Title>{purchase.name}</Title>
            <Price>{purchase.price}</Price>
          </CardHeader>
          <CardBody>
            <p>{purchase.description}</p>
          </CardBody>
          <CardFooter>
            <div>Purchase Date</div>
            <div>{formatDate(purchase.purchaseDate)}</div>
          </CardFooter>
        </Card>
      )
    })
  }

  //Table view
  const displayTable = () => {
    return (
      <Table cellSpacing={0}>
        <thead>
          <tr>
            <TableTh>Name</TableTh>
            <TableTh>Location</TableTh>
            <TableTh>Purchase date</TableTh>
            <TableTh>Category</TableTh>
            <TableTh>Description</TableTh>
            <TableTh>Price</TableTh>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase, idx) => {
            return (<tr key={idx}>
              <TableTd>{purchase.name}</TableTd>
              <TableTd><ImageLogo view={"desktop"} src={purchase.location} alt="Logo" /></TableTd>
              <TableTd>{formatDate(purchase.purchaseDate)}</TableTd>
              <TableTd><Category>{purchase.category}</Category></TableTd>
              <TableTd>{purchase.description}</TableTd>
              <TableTd>{purchase.price}</TableTd>
            </tr>)
          })}
        </tbody>
      </Table>
    )
  }

  return (
    <>
      <h2>Purchases</h2>
      {!detectMob() ? displayTable() : displayCard()}
    </>
  )
};

