test("http request", async () => {
  const response = await fetch(
    "https://63c1e64a376b9b2e6485d812.mockapi.io/items"
  );

  expect(response.status).toBe(200);

  const data = await response.json();
  expect(data).toBeTruthy();
});
