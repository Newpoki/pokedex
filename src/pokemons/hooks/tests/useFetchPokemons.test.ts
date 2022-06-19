import { act, renderHook, waitFor } from "@testing-library/react";
import { mockedPokemons } from "../../../mocks/data/pokemons/pokemons";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { server } from "../../../mocks/server";
import { useFetchPokemons } from "../useFetchPokemons";

describe("useFetchPokemons", () => {
  describe("API call was a success", () => {
    describe('hooks didn"t fetch data yet', () => {
      it("should fetch first page, and when calling fetch next page, call the second page", async () => {
        const { result } = renderHook(() => useFetchPokemons(), { wrapper: createMockWrapper() });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        const actual = result.current.data;
        const expected = mockedPokemons.default.infiniteQueryHookData;

        server.use(mockedPokemons.secondPage.handler());

        expect(actual).toEqual(expected);

        await act(async () => {
          await result.current.fetchNextPage();
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        const secondPageActual = result.current.data;
        const secondPageExpected = mockedPokemons.secondPage.infiniteQueryHookData;

        expect(secondPageActual).toEqual(secondPageExpected);
      });
    });
  });
});
