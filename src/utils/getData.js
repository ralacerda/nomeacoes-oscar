import awards from "~/data/awards.json";
import oscar2022 from "~/data/oscar2022";

export function getAwardName(award) {
  return awards[award];
}

export function getAwardList() {
  return Object.keys(awards);
}

export function getMovieList() {
  return Object.values(oscar2022);
}

export function getMovie(id) {
  return oscar2022[id];
}
