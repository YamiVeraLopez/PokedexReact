import { LeapFrog } from "@uiball/loaders";

export const Loader = () => {
  return (
    <>
      <div className="container-loader">
        <LeapFrog size={40} speed={2.5} color="#F5A524" />;
      </div>
    </>
  );
};
