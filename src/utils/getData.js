import awards from "~/data/awards.json";
import oscar2022 from "~/data/resultOscar2022";
import oscar2021 from "~/data/resultOscar2021";
import oscar2023 from "~/data/resultOscar2023";

const oscarByYear = {
  2022: oscar2022,
  2021: oscar2021,
  2023: oscar2023,
};

export function getAwardName(award) {
  return awards[award];
}

export function getAwardList() {
  return Object.keys(awards);
}

export function getMovies(awardYear) {
  return oscarByYear[awardYear];
}

export function getMovieList(awardYear) {
  return Object.keys(oscarByYear[awardYear]);
}

export function getMovieBySlug(slug, awardYear) {
  return oscarByYear[awardYear][slug];
}
