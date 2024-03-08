import React, { useEffect, useState } from "react";
import { getAllProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Image,
  Table,
} from "react-bootstrap";
import ProductModal from "../modal/productModal";

export default function Products() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [singleProductData, setSingleProductData] = useState();
  const [allProducts, setAllProducts] = useState([]);
  const [prev, setPrev] = useState([]);
  console.log("all", allProducts?.length);
  const [productSearch, setProductSearch] = useState("");
  const productList = useSelector((state) => state.productData.products);

  const dispatch = useDispatch();

  const editHandler = (product) => {
    setSingleProductData(product);
    setIsOpenModal(true);
  };

  // const filterLoop = allProducts
  //   ?.filter((item) => item.id % 2 === 0)
  //   ?.slice(0, 200);

  const handleClose = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    const filterLoop = productList
      ?.filter((item) => item.id % 2 === 0)
      ?.slice(0, 200);
    setAllProducts(filterLoop);
  }, [productList ]);

  const handleDelete = (id) => {
    const filterData = allProducts.filter((product) => product.id !== id);
    setAllProducts(filterData);
  };

  const handleSearch = (e) => {
    setPrev(allProducts);
    if (productSearch.length !== 0) {
      let searchFilter = allProducts?.filter((product) =>
        product.title
          .toLowerCase()
          .includes(
            productSearch.toLowerCase() 
          ))
          setProductSearch("")
      setAllProducts(searchFilter);
    } else {
      setAllProducts(prev);
    }
  };

  return (
    <div>
      <Container className="my-5 product__table">
        <div className="d-flex align-item-center w-full my-3">
          <FormLabel className="font-bold fs-5 mx-3">
            Enter Product Search :{" "}
          </FormLabel>
          <div className="position-relative">
            <FormControl
              type="text"
              value={productSearch}
              className="w-auto py-2 pe-5"
              onChange={(e) => setProductSearch(e.target.value)}
            />
            <Button
              variant="danger ms-3 rounded px-3 py-1 ms-1 position-absolute end-0 rounded-pill top-0 mt-1 me-1 ms-5"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
        <Table striped bordered hover>
          <thead className="product__table">
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody className="product__table">
            {allProducts?.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <Image src={item.thumbnailUrl} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <Button
                      onClick={() => editHandler(item)}
                      className="rounded-pill"
                      variant="secondary"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      className="rounded-pill mx-2"
                      variant="warning"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      {isOpenModal && (
        <ProductModal
          hide={handleClose}
          show={isOpenModal}
          singleProductData={singleProductData}
          productList={allProducts}
          setProductList={setAllProducts}
        />
      )}
    </div>
  );
}
