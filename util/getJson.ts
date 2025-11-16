export const getJson = async (url: string | URL | Request) => {
  try {
    const res = await fetch(url);

    if (!res.ok)
      throw new Error(
        `Network request failed with status: ${res.status} ${res.statusText}`
      );

    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
