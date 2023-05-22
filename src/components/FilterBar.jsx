import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import {
  Container,
  Card,
  Row,
  Text,
  Col,
  Checkbox,
  Spacer,
} from "@nextui-org/react";

export const FilterBar = () => {
  const { handleCheckbox } = useContext(PokemonContext);
  const [selected, setSelected] = useState([]);

  const types = [
    grass,
    normal,
    fighting,
    flying,
    poison,
    ground,
    rock,
    bug,
    ghost,
    steel,
    fire,
    water,
    electric,
    psychic,
    ice,
    dragon,
    dark,
    fairy,
    unknow,
    shadow,
  ];

  const abilities = [
    stench,
    drizzle,
    speedBoost,
    battleArmor,
    sturdy,
    damp,
    limber,
    sandVeil,
    statick,
    voltAbsorb,
    waterAbsorb,
    oblivious,
    cloudNine,
    compoundEyes,
    insomnia,
    colorChange,
    immunity,
    flashFire,
    shieldDust,
    ownTempo,
  ];

  {
    /* <div className={`container-filters ${active ? "active" : ""}`}>
      FilterBar
      <div className="filter-by-abilities">
        <span>Habilidades</span>

        <div className="group">
          <input type="checkbox" name="" id="" onChange={handleCheckbox}/>
          <label htmlFor=""> Habilidad</label>
        </div>
      </div>
    </div> */
  }

  return (
    <Container lg={4}>
      <Card css={{ $$cardColor: "rgba(255, 255, 255, .5)" }}>
        <Card.Body
          css={{
            backdropFilter: "blur(10px)",
            background:
              "linear-gradient(100deg, rgba(0,0,0,.2),  rgba(0,0,0,.2))",
            boxShadow: "0 10px 26px 0 rgba(0,0,0,.50)",
          }}
        >
          <Row justify="center" align="center">
            <Col>
              <Text size="$lg" color="warning">
                Filtrar pokemones de Tipo:
              </Text>
              <Checkbox.Group
                color="warning"
                labelColor="warning"
                label="Filtrar pokemones de Tipo:"
                value={selected}
                onChange={setSelected}
              >
              {/*   {types.map((type, index) => (
                  <>
                  <input type="checkbox" key={index}
                    value={type.name}
                    name={type.name} id={type.name} onChange={handleCheckbox}/>
                  <label htmlFor={type.name} key={type.name}>{type.name}</label>
                  </>
                   ))}
 */}
                {/* <Checkbox  size="sm"
                    key={index}
                    value={type.name}
                    name={type.name}
                    onChange={handleCheckbox}                  
                  >
                    {type.name}
                  </Checkbox> */}
              </Checkbox.Group>
              <Spacer y={1} />
              <Text
                size="$md"
                css={{
                  textGradient: "60deg, $yellow600 -20%, $pink600 50%",
                }}
                weight="bold"
              >
                Filtrado por pokemones de Tipo y/o Habilidades:{" "}
                {selected.join(", ")}
              </Text>
            </Col>
          </Row>
          <Row justify="center" align="center">
            <Col>
              <Text size="$lg" color="warning"></Text>
              <Checkbox.Group
                color="warning"
                labelColor="warning"
                label="Filtrar pokemones de Habilidades:"
                value={selected}
                onChange={setSelected}
              >
               {/*  {abilities.map((ability, index) => (
                  <Checkbox
                    key={index}
                    value={ability.name}
                    name={ability.name}
                    onChange={handleCheckbox}
                    aria-label={ability.name}
                  >
                    {ability.name}
                  </Checkbox>
                ))} */}
              </Checkbox.Group>
              <Spacer y={1} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
