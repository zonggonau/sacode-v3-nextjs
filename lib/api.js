async function getAllSacodeWeekend() {
  const res = await fetch("http://adminpanel.sacode.web.id/api/sacodeweekend");
  return res.json();
}

async function getSacodeWeekendById(slug) {
  const res = await fetch(
    "http://adminpanel.sacode.web.id/api/sacodeweekend/" + slug
  );
  return res.json();
}

export { getAllSacodeWeekend, getSacodeWeekendById };
