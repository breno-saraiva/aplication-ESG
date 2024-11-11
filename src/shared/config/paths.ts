const pathBuilder = (mode: string) => {
  const production = "https://fiap-back-esg.vercel.app/";
  const development = "https://fiap-back-esg.vercel.app/";

  return mode === "production" ? production : development;
};
const baseURL = pathBuilder(import.meta.env.MODE);

export { baseURL };
