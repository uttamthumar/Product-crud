import React, { useEffect, useState } from "react";
import { Button, FormControl, FormLabel, Modal } from "react-bootstrap";

export default function ProductModal({
  show,
  hide,
  singleProductData,
  productList,
  setProductList,
}) {
  const [product, setProduct] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setProduct(singleProductData);
  }, [singleProductData]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    setEdit(true);
  };

  const handleClick = () => {
    const indexToUpdate = productList.findIndex((obj) => obj.id === product.id);
    if (indexToUpdate !== -1) {
      hide();
      const updatedProductList = [...productList];
      updatedProductList[indexToUpdate] = {
        ...product,
        id: productList[indexToUpdate].id,
      };
      setProductList(updatedProductList);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title className="font-bold fs-5">Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLabel>Product-Title</FormLabel>
          <FormControl
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
