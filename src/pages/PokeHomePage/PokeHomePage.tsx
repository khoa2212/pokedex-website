import { useEffect, useState } from "react";
import { getPokeBaseUrls, getPokeById } from "../../apis/PokeApis";
import PokeCard, { PokeCardProps } from "../../components/PokeCard/PokeCard";
import Loading from "../../components/Loading/Loading";

const PokeHomePage = (): JSX.Element => {
  const [pokes, setPokes] = useState<PokeCardProps[]>([]);
  const [limit, setLimit] = useState<number>(20);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const pokeBaseUrls: any = await getPokeBaseUrls(limit);

      const promisesPokeDetails = pokeBaseUrls.data.results.map(
        async (item: any) => {
          const tokens = item.url.split("/");
          return await getPokeById(+tokens[tokens.length - 2]);
        }
      );

      const pokeDetails: any = await Promise.all(promisesPokeDetails);

      const data: PokeCardProps[] = pokeDetails.map((poke: any) => {
        return {
          id: poke.data.id,
          name: poke.data.name,
          avatar: poke.data.sprites.front_default,
          elements: poke.data.types,
        };
      });

      setPokes(data);
      setIsLoadMore(false);
    };

    fetchData();
  }, [limit]);

  const renderPokeCards = (col: number) => {
    const cards = [];
    for (let i = col; i < pokes.length; i = i + 4) {
      const poke = pokes[i];
      cards.push(
        <PokeCard
          key={poke.id}
          id={poke.id}
          name={poke.name}
          avatar={poke.avatar}
          elements={poke.elements}
        />
      );
    }

    return cards;
  };

  const renderColumn = () => {
    return [0, 1, 2, 3].map((col) => {
      return (
        <div key={col} className="col-span-1 w-full flex flex-col gap-6">
          {renderPokeCards(col)}
        </div>
      );
    });
  };

  const onLoadMore = () => {
    setLimit(limit + 20);
    setIsLoadMore(true);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white w-[70%] shadow-lg rounded-md overflow-auto">
        <div className="bg-gray-500 h-12 w-full"></div>
        <div className="w-full p-2 flex justify-between items-center">
          <div className="basis-1/3 p-2 text-center bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-700">
            Surprise Me!
          </div>
          <div className="basis-1/3 p-2 text-center bg-gray-600 rounded md text-white cursor-pointer hover:bg-gray-800">
            Sort DESC
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 w-full p-2">
          {renderColumn()}
        </div>
        <div className="w-full p-2 flex items-center justify-center">
          {!isLoadMore && (
            <div
              className="basis-1/3 rounded-md text-center p-2 bg-blue-500 hover:bg-blue-700 cursor-pointer text-white"
              onClick={onLoadMore}
            >
              Load more
            </div>
          )}
          {isLoadMore && <Loading />}
        </div>
      </div>
    </div>
  );
};

export default PokeHomePage;
