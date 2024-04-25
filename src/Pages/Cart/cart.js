import React from "react";
import Header from "../../components/Header";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);

  

  let price = 0;
  let discount = 0;
  let totalAmount= 0

  products.forEach((product) => {
    price += product.price
    discount+=product.discountPercentage;
    totalAmount=price-discount;
  });

  return (
    <div>
      <Header />
      <div>
        <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
          Item added in Cart
        </Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "20px" }}>
          <TableContainer
            component={Paper}
            style={{
              justifyContent: "center",
              display: "flex",
              border: "1px solid black",
            }}
          >
            <Table sx={{ width: "50%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Product Name</TableCell>
                  <TableCell align="center">Brand</TableCell>
                  <TableCell align="center">Discount</TableCell>
                  <TableCell align="center">Price</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={row.thumbnail}
                        width="200px"
                        height="100px"
                      ></img>
                    </TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.brand}</TableCell>
                    <TableCell align="center">{row.discountPercentage}</TableCell>
                    <TableCell align="center">RS:{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ margin: "20px" }}>
          <TableContainer
            component={Paper}
            style={{ border: "1px solid black" }}
          >
            <Table sx={{ width: "500px" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Price Details</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell align="right">{price.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Discount</TableCell>
                  <TableCell align="right">{discount.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total Amount</TableCell>
                  <TableCell align="right">Rs: {totalAmount.toFixed(2)}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
