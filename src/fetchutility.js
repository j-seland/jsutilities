export default async function fetchData(url, method, par=false, token=null) {
  let headers = new Headers();
  headers.set('Content-Type', 'application/json; charset=utf-8');
  headers.set('Accept', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  try {
    return (par)
    ? await fetch(url, {
        method: method,
        headers: headers,
        body: par
      }).then(res => res.json())
    : await fetch(url, {
        method: method,
        headers: headers
      }).then(res => res.json())
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}
