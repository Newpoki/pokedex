import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import LeftArrowIcon from "@/assets/icons/left-arrow.svg";
import { pokemonQueryOptions } from "@/pokemon/pokemon-query-options";
import { getPokemonFirstTypeName } from "@/pokemon/utils/get-pokemon-first-type";
import { getPokemonSprite } from "@/pokemon/utils/get-pokemon-sprite";
import { getPokemonDisplayedId } from "@/pokemon/utils/get-pokemon-displayed-id";
import { TypeChip } from "@/type/type-chip";
import CirclePattern from "@/assets/patterns/circle-pattern.svg";
import FiveRowsDotPattern from "@/assets/patterns/five-rows-dot-pattern.svg";

const RouteComponent = () => {
  const params = Route.useParams();

  const { data: pokemon } = useSuspenseQuery(pokemonQueryOptions(params.name));

  const firstPokemonType = getPokemonFirstTypeName(pokemon.types);
  const pokemonSprite = getPokemonSprite(pokemon.sprites);
  const pokemonId = getPokemonDisplayedId(pokemon.id);

  return (
    <div
      className="flex flex-1 flex-col"
      style={{
        // TODO: create utils to get bgcolor and color according to type
        backgroundColor: `hsl(var(--bgcolor-${firstPokemonType}))`,
      }}
    >
      <header className="relative overflow-hidden px-10 pb-11 pt-10">
        <h1
          className="absolute left-1/2 top-6 -translate-x-1/2 text-[100px] font-bold uppercase leading-[119.34px] text-[transparent]"
          style={{
            WebkitTextStroke: "2px white",
            // -220 ensure the very bottom of the text is completly invisible while top is still visible
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 -220%, transparent)",
          }}
        >
          {pokemon.displayName}
        </h1>

        <div className="relative">
          <Link to="/" className="mb-8 inline-flex text-white">
            <LeftArrowIcon className="h-6 w-6" />
          </Link>

          <section className="flex items-center gap-6">
            <div className="relative h-[125px] w-[125px]">
              <img
                src={pokemonSprite}
                className="relative z-10 h-full w-full"
              />

              <CirclePattern className="absolute inset-0 h-full w-full" />
            </div>

            <div>
              <h3 className="font-bold text-number">{pokemonId}</h3>
              <h2 className="mb-1 text-lg text-white">{pokemon.displayName}</h2>
              <ul className="flex items-center gap-1">
                {pokemon.types.map((type) => {
                  const typeName = type.type.name;

                  return (
                    <li key={typeName}>
                      <TypeChip name={typeName} />
                    </li>
                  );
                })}
              </ul>

              <FiveRowsDotPattern className="absolute -right-10 bottom-0 translate-y-[50%]" />
            </div>
          </section>
        </div>
      </header>

      <div className="flex flex-1 flex-col">
        <nav className="flex items-center justify-between px-10 py-4">
          <span>About</span>
          <span>Stats</span>
          <span>Evolution</span>
        </nav>

        <div className="flex-1 rounded-t-[30px] bg-white p-10">
          <p>blabla</p>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/pokemon/$name")({
  loader: (options) =>
    options.context.queryClient.ensureQueryData(
      pokemonQueryOptions(options.params.name),
    ),
  component: RouteComponent,
});
