import styled from "styled-components";

import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--color-ui-base)',
            color: 'var(--color-text)',
            borderRadius: 'var(--radii)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
            cursor: 'pointer',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--color-text)',
            backgroundColor: state.isSelected
                ? 'var(--color-bg)'
                : 'var(--color-ui-base)',
        }),
    },
})`
  width: 100%;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;
  
  & input {
    padding-left: 0.25rem;
  }
  
  & > div[id] {
    background-color: var(--color-ui-base);
  }
  
  & > * {
    box-shadow: var(--shadow);
  }
  
  & * {
    color: var(--color-text) !important;
  }
  
  @media (min-width: 767px) {
    width: 300px;
  }
`;