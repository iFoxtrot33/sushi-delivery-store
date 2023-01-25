import axios from "axios";

test("http request", async () => {
  const response = await axios.get(
    "https://63c1e64a376b9b2e6485d812.mockapi.io/items"
  );

  expect(response.status).toBe(200);
  expect(response.data).toBeTruthy();
});
