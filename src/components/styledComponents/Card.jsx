import { Card, Col, Row, Button, Text, Badge } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Card4 = ({
  textTitle,
  subtitle,
  img,
  alt,
  btnInfo,
  weightPokemon,
  heightPokemon,
  id,
  handleClick,
  pokemon,
  view,
  clase
}) => (
  <Card
    css={{ w: "100%", h: "400px", bg: "none" }}
    isPressable
    onClick={handleClick} className="clase"
  >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="warning">
          {subtitle ? `Nº ${subtitle}` : ""}
        </Text>
        <Text h3 color="warning">
          {textTitle ? textTitle : ""}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={img ? img : ""}
        width="100%"
        height="100%"
        objectFit="contain"
        mix-blend-mode="color-burn"
        alt={alt ? alt : ""}
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          {view == "back" ? (
            <Col>
            <Text color="warning" size={16}>
              Tipo:
            </Text>
            {pokemon.types.map((type, index) => (
              <Badge color="secondary" variant="bordered" key={index}>
                {type.type.name}
              </Badge>
            ))}
          </Col>
            
          ) : (
            <Text color="warning" size={16}>
              {`Weigth:  ${weightPokemon}`}
            </Text>
          )}

          {view == "back" ? (
            <Col>
              <Text color="warning" size={16}>
                Habilidades:
              </Text>
              {pokemon.abilities.map((ability, index) => (
              <Badge color="primary" variant="bordered" key={index}>
                {ability.ability.name}
              </Badge>
              ))}
            </Col>
          ) : (
            <Text color="warning" size={16}>
              {`Heigth:  ${heightPokemon}`}
            </Text>
          )}
        </Col>
        {/* {view == "front" ? (
          <Col>
            <Row justify="flex-end">
              <Link to={`/pokemon/${id}`} className="card-pokemon">
                <Button flat auto rounded color="warning">
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    {btnInfo}
                  </Text>
                </Button>
              </Link>
            </Row>
          </Col>
        ) : (
          ""
        )} */}
      </Row>
    </Card.Footer>
  </Card>
);
