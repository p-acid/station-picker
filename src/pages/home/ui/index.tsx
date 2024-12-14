import { SEOUL_SUBWAY_DATA } from "@/shared/lib/constants";

export const HomePage = () => {
  return (
    <div>
      <pre>{JSON.stringify(SEOUL_SUBWAY_DATA, null, 2)}</pre>
    </div>
  );
};
