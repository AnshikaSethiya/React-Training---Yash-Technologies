import React, { useEffect, useState } from "react";
import { addToCart, getAllProduct, getProductByCategory } from "../../API/api";
import {
  Badge,
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Select,
  Spin,
  Typography,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("az");
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    (params?.categoryId
      ? getProductByCategory(params.categoryId)
      : getAllProduct()
    ).then((res) => {
      setItems(res.products);
      setLoading(false);
    });
  }, [params]);

  const AddProductToCart = (element) => {
    setLoading(true);
    addToCart(element.id).then((res) => {
      message.success(`${element.title} has been added to cart successfully!!`);
      setLoading(false);
    });
  };

  if (loading) {
    return <Spin spinning />;
  }
  return (
    <div className="productsContainer">
      <div>
        <Typography.Text>View Items Sorted By: </Typography.Text>
        <Select onChange={(value) => {
            setSortOrder(value)
        }}
        defaultValue={"az"}
        options={[
            {
                label:"Alphabetically a-z",
                value:"az"
            },
            {
                label:"Alphabetically z-a",
                value:"za"
            },
            {
                label:"Price Low to High",
                value:"lowHigh"
            },
            {
                label:"Price High to Low",
                value:"highLow"
            }
        ]}>
        </Select>
      </div>
        <List
          dataSource={items}
          grid={{ column: 3 }}
          renderItem={(product, index) => (
            <List.Item>
              <Badge.Ribbon
                className="ItemCardBadge"
                text={`${product.discountPercentage}% Off`}
                color="pink"
              >
                <Card
                  className="ItemCard"
                  title={product.title}
                  key={index}
                  cover={
                    <Image className="itemCardImage" src={product.thumbnail} />
                  }
                  actions={[
                    <Rate disabled allowHalf value={product.rating} />,
                    <Button
                      loading={loading}
                      icon={<ShoppingCartOutlined />}
                      onClick={() => {
                        AddProductToCart(product);
                      }}
                      type="link"
                    >
                      Add To Cart
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={
                      <Typography.Paragraph>
                        Price : ${product.price}
                        {"  "}
                        <Typography.Text delete type="danger">
                          ${" "}
                          {parseFloat(
                            product.price +
                              (product.price * product.discountPercentage) / 100
                          ).toFixed(2)}
                        </Typography.Text>
                      </Typography.Paragraph>
                    }
                    description={
                      <Typography.Paragraph
                        ellipsis={{ expandable: true, rows: 2, symbol: "more" }}
                      >
                        {product.description}
                      </Typography.Paragraph>
                    }
                  ></Card.Meta>
                </Card>
              </Badge.Ribbon>
            </List.Item>
          )}
        ></List>
    </div>
  );
};

export default Products;
