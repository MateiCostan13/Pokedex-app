import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image } from 'react-bootstrap';
import { ProgressBar, Badge } from 'react-bootstrap';

type Props ={
   pokemon: Pokemon;
}


export default function PokemonComponent(props : Props) {
   const {pokemon} = props;
    const getBarVariant = (value: number | undefined) => {
    if (!value) return 'secondary';
    if (value >= 70) return 'success';
    if (value >= 50) return 'warning';
    return 'danger';
    };

   return (
       <Container>
           <Row className="justify-content-md-center">
               <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
           </Row>
           <Row>
               <Col>
                   <Image src={pokemon.mainImage} thumbnail />
               </Col>
               <Col>
                    <h4>Properties</h4>
                    <ul className="list-group">
                    <li className="list-group-item">
                        Attack: {pokemon?.attack}
                        <ProgressBar
                        className="mt-1"
                        now={pokemon?.attack}
                        max={100}
                        label={`${pokemon?.attack}`}
                        variant={getBarVariant(pokemon?.attack)}
                        />
                    </li>
                    <li className="list-group-item">
                        Defense: {pokemon?.defense}
                        <ProgressBar
                        className="mt-1"
                        now={pokemon?.defense}
                        max={100}
                        label={`${pokemon?.defense}`}
                        variant={getBarVariant(pokemon?.defense)}
                        />
                    </li>
                    <li className="list-group-item">
                        Speed: {pokemon?.speed}
                        <ProgressBar
                        className="mt-1"
                        now={pokemon?.speed}
                        max={100}
                        label={`${pokemon?.speed}`}
                        variant={getBarVariant(pokemon?.speed)}
                        />
                    </li>
                    <li className="list-group-item">
                        Health Points: {pokemon?.healthPoints}
                        <ProgressBar
                        className="mt-1"
                        now={pokemon?.healthPoints}
                        max={100}
                        label={`${pokemon?.healthPoints}`}
                        variant={getBarVariant(pokemon?.healthPoints)}
                        />
                    </li>
                    <li className="list-group-item">
                        Type:
                        <div className="mt-1">
                        {pokemon?.pokemonType.map((type, index) => (
                            <Badge bg="info" className="me-2" key={index}>
                            {type}
                            </Badge>
                        ))}
                        </div>
                    </li>
                    <li className="list-group-item">
                        Evolution:
                        {pokemon?.evolution ? (
                        <Badge bg="success" className="ms-2">{pokemon.evolution}</Badge>
                        ) : (
                        <span className="ms-2 text-muted">None</span>
                        )}
                    </li>
                    <li className="list-group-item">
                        Devolution:
                        {pokemon?.devolution ? (
                        <Badge bg="danger" className="ms-2">{pokemon.devolution}</Badge>
                        ) : (
                        <span className="ms-2 text-muted">None</span>
                        )}
                    </li>
                    </ul>
                </Col>
           </Row>
       </Container>
   );
}
