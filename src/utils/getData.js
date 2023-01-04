import awards from "~/data/awards.json";
import oscar2022 from "~/data/resultOscar2022";

export function getAwardName(award) {
  return awards[award];
}

export function getAwardList() {
  return Object.keys(awards);
}

export function getMovies() {
  return oscar2022;
}

export function getMovieList() {
  return Object.keys(oscar2022);
}

export function getMovieBySlug(slug) {
  return oscar2022[slug];
}
