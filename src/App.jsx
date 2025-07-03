import Main from "./main/Main";
import Head2 from "./head-2/Head2";
import Head1 from "./head1/Head1";
import Brands from "./brands/Brands";
import Products from "products/Products";
import { Divider } from "@mui/material";


function App() {
  return (
    <div >

      <Head1 />
      <Head2 />
      <Main />
      <Brands />
      <Products title="New Arrivals" />
      <Divider sx={{ my: 5 }} orientation="horizontal" variant="middle" flexItem />
      <Products title="Top Sellers" />
    </div>
  );
}

export default App;
