type PokemonDataTitleProps = {
  children: React.ReactNode;
};

export const PokemonDataTitle = ({ children }: PokemonDataTitleProps) => {
  return <span className="text-xs font-medium">{children}</span>;
};
