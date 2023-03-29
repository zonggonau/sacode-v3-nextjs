async function getAllSacodeWeekend() {
  const res = await fetch(
    "http://adminpanel.sacode.web.id/api/sacodeweekend/list"
  );
  return res.json();
}

async function getSacodeWeekendBySlug(slug) {
  const res = await fetch(
    "http://adminpanel.sacode.web.id/api/sacodeweekend/" + slug + "/detail"
  );
  return res.json();
}

export { getAllSacodeWeekend, getSacodeWeekendBySlug };
