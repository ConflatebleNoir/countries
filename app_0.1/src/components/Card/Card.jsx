import styled from "styled-components";
import {Link} from "react-router-dom"

const Wrapper = styled(Link)`
  border-radius: var(--radii);
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  transition: .3s ease;
  text-decoration: none;
  color: var(--color-text);

  &:hover {
    transform: scale(1.1);
  }
`;

const CardImage = styled.img`
  display: flex;
  width: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
  height: 150px;
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: var(--fz-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fz-sm);
  line-height: 1.5;
  font-weight: var(--fw-regular);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Card = ({img, name, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick} to={`/detail/${name.toLowerCase()}`}>
            <CardImage src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info
                        ? info.map((element) => (
                            <CardListItem key={element.title}>
                                <b>{element.title}:</b> {element.description}
                            </CardListItem>
                        ))
                        : (<span>No countries</span>)}
                </CardList>
            </CardBody>
        </Wrapper>
    );
};