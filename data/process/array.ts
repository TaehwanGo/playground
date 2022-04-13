interface SampleCount {
  count: number;
  id: string;
}
const sampleCountData: SampleCount[] = [
  {
    count: 20,
    id: "a2",
  },
  {
    count: 10,
    id: "a1",
  },
  {
    count: 30,
    id: "a3",
  },
];

interface Provider {
  id: string;
  sampleCount?: SampleCount;
}

const providers: Provider[] = [
  {
    id: "a1",
  },
  {
    id: "a2",
  },
  {
    id: "a3",
  },
];

// TODO : provider의 id에 맞는 sampleCount를 매칭해서 데이터를 가공하라
type ProvidersObj = { [key in string]: Provider };
const providersObj: ProvidersObj = providers.reduce(
  (a, v) => ({
    ...a,
    [v.id]: v,
  }),
  {}
);

type SampleCountDataObj = { [key in string]: SampleCount };
const sampleCountDataObj: SampleCountDataObj = sampleCountData.reduce(
  (a, v) => ({
    ...a,
    [v.id]: v,
  }),
  {}
);

const joinProviderWithSample = (
  providersObj: ProvidersObj,
  sampleCountDataObj: SampleCountDataObj
) => {
  const providersObjCopy = { ...providersObj };
  const sampleCountDataObjCopy = { ...sampleCountDataObj };
  for (const key in sampleCountDataObjCopy) {
    providersObjCopy[key].sampleCount = sampleCountDataObjCopy[key];
  }

  return providersObjCopy;
};
const result = Object.values(
  joinProviderWithSample(providersObj, sampleCountDataObj)
);

// const result = sampleCountDataObj;
// console.log(providers); // deep copy를 하지 않아서 원본 데이터에 반영이 되었다
console.log(result);
