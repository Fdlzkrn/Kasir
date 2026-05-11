export function getTransaksiList() {
  const data = JSON.parse(localStorage.getItem("transaksiList")) || [];

  const now = new Date().getTime();

  const filtered = data.filter(t => {
    const time = new Date(t.date).getTime();
    return now - time < 24 * 60 * 60 * 1000;
  });

  localStorage.setItem("transaksiList", JSON.stringify(filtered));
  return filtered;
}