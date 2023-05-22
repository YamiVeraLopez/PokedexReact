import { Link } from "react-router-dom";
import {
  Navbar,
  Text,
  Dropdown,
  Input,
  Image,
  Button,
} from "@nextui-org/react";
import { Layout } from "./Layout.jsx";
import { Filter, Search } from "react-iconly";
import { colors } from "./theme.js";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext.jsx";

export default function HeaderApp({onSubmit, valueSearch, onChange }) {

  const {setActive, active} = useContext(PokemonContext);

  return (
    <Layout  w="100vw">
      <Navbar isBordered variant="sticky">
        <Navbar.Brand css={{ mr: "$4" }}>
          <Link to="/" className="logo">    
          <Image
            src="./logoPokemon.png"
            alt="Logo de la pokedex"
            width={90}
            height={90}
            objectFit="contain"
          />
        </Link>
          
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
             <form onSubmit={onSubmit}>
              <Input
              clearable
              /* contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              } */
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--right": {
                  h: "100%",
                  mr: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Buscar por nombre..."
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onChange}
              type="search"
              status="warning"
              contentRight={
                <Button shadow color="warning" auto size="sm" type="send">
                 <Search set="light" primaryColor={colors.purple} size={18} />
                </Button>
              }
            />
             </form>
            
          </Navbar.Item>
        </Navbar.Content>
        
      </Navbar>
      
    </Layout>
  );
}
