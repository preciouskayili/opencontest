const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.opencontest.com"
    : "http://localhost:9000/api";

export default baseUrl;
