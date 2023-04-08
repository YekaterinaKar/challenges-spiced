console.clear();

const url = "https://swapi.dev/api/people";

try {
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const r2d2 = data.results.filter((result) => {
      return result.name === "R2-D2";
    });
    console.log(r2d2[0].name);
  }

  fetchData();
} catch (error) {
  console.error("error");
}

//result[1].name
