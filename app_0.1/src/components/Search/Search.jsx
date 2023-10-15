import styled from "styled-components";
import {IoSearchOutline} from 'react-icons/io5'

const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;
  transition: .3s ease;

  &:hover {
    box-shadow: var(--shadow-scale);
  }

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 300px;
  }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: "Search for a country",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--color-ui-base);
  color: var(--color-text);
`;

export const Search = ({search, setSearch}) => {
    return (
        <InputContainer>
            <IoSearchOutline size="14px"/>
            <Input onChange={(e) => setSearch(e.target.value)} value={search}></Input>
        </InputContainer>
    )
}