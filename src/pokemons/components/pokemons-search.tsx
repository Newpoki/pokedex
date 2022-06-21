import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MagnifyIcon } from "../../icons/magnify-grey.svg";
import { theme } from "../../theme";

type PokemonsSearchProps = {
  className?: string;
};

export const PokemonsSearch = ({ className }: PokemonsSearchProps) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (!!value.length) {
        navigate(`/pokemon/${value.toLowerCase()}`);
      }
    },
    [navigate, value]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Root className={className}>
        <StyledMagnifyIcon />
        <Input
          name="pokemonName"
          onChange={handleChange}
          value={value}
          placeholder="What Pokémon are you looking for ?"
        />
      </Root>
    </form>
  );
};

const Root = styled.div`
  background-color: ${theme.colors.background.defaultInput};
  border-radius: 10px;
  padding: ${theme.spacings.xxxl}px ${theme.spacings.xxl}px;
  align-items: center;
  display: flex;
`;

const StyledMagnifyIcon = styled(MagnifyIcon)`
  margin-right: ${theme.spacings.s}px;
  width: 16px;
  height: 16px;
`;

const Input = styled.input`
  color: ${theme.colors.text.grey};
  font-size: 16px;
  font-weight: 400;
  border: 0;
  outline: none;
  background-color: transparent;
  width: 100%;
`;
