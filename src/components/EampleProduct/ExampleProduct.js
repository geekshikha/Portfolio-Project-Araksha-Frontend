import React from "react";
import { Container } from "../../globalStyles";
import {
  ClientSection,
  ClientColumn,
  ClientText,
  ClientTitle,
  ClientRow,
  ClientWrapper,
  ClientImage,
  ClientTextWrapper,
} from "./ExampleProductStyles";

import { ProductsData } from "./DataExample";

const ExampleProduct = () => {
  return (
    <ClientSection id="clients">
      <Container>
        <ClientTextWrapper>
          <ClientTitle>Our Products</ClientTitle>
          <ClientText>Our products make our client's life easier.</ClientText>
        </ClientTextWrapper>

        <ClientRow>
          {ProductsData.map((clients, clientsIndex) => (
            <ClientColumn key={clientsIndex}>
              {clients.map((el, index) => (
                <ClientWrapper key={index}>
                  <ClientImage src={`./images/products/${el.name}.jpg`} />
                </ClientWrapper>
              ))}
            </ClientColumn>
          ))}
        </ClientRow>
      </Container>
    </ClientSection>
  );
};

export default ExampleProduct;
