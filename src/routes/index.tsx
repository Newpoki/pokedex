import { Pokemons } from "@/pokemons/pokemons";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Pokemons,
});
