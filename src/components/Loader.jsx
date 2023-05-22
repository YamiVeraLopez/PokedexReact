import { LeapFrog } from "@uiball/loaders";
import { Row, Container } from "@nextui-org/react";

export const Loader = () => {
  return (
    <>
      <Container fluid>
        <Row justify="center" align="center">
          <LeapFrog size={40} speed={2.5} color="#F5A524" />;
        </Row>
      </Container>
    </>
  );
};
