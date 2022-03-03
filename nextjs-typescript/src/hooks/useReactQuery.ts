import axiosInstance from "axios";

interface SomeDataChild {
  subData: string;
  subContents: string;
}

interface SomeData {
  id: string;
  contents: string;
  child?: SomeDataChild;
}

const useReactQuery = () => {
  const someData: SomeData[] = [
    {
      id: "a1",
      contents: "abc",
    },
    {
      id: "a2",
      contents: "bce",
    },
    {
      id: "b1",
      contents: "bbb",
    },
  ];
  const processData = async () => {
    const children = await Promise.all(
      someData.map(async (item) => {
        const res = await axiosInstance.get<SomeDataChild>("a url", {
          params: {
            id: item.id,
          },
        });
        return res.data;
      })
    );
    return someData.map((item, index) => {
      item.child = children[index];
      return item;
    });
  };

  // TODO : 리액트 쿼리 적용 필요
  return { something: "that useful" };
};

export default useReactQuery;
