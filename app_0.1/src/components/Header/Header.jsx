import styled from "styled-components";
import {useState, useEffect} from "react";
import {IoMoon, IoMoonOutline} from 'react-icons/io5'

import {Container} from "../Container/Container";
import {Link} from "react-router-dom";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link)`
  color: var(--color-text);
  font-size: var(--fz-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const Switcher = styled.div`
  color: var(--color-text);
  font-size: var(--fz-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const Header = () => {
    const [theme, setTheme] = useState('light');

    const themeToggle = () => setTheme((theme === 'light'
        ? 'dark'
        : 'light'))

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                        <Title to="/">Where is the world?</Title>
                    <Switcher onClick={themeToggle}>
                        {theme === 'light'
                            ? (
                                <IoMoonOutline size="14px"/>
                            )
                            : (
                                <IoMoon size="14px"/>
                            )}
                        {' '}
                        <span style={{marginLeft: '0.75rem'}}>
                              {theme} theme
                    </span>
                    </Switcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}