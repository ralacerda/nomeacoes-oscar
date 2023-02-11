# Sequela Movie App (WIP)

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)

## Introduction

This is the repository for the [Sequela Movie App](https://sequelamovies.web.app/).

The goal of the app is to provide a summary of recent [Oscars](https://www.oscars.org/), including nominated movies, winner and their relevant information.

## Tools

Right now the front-end is developed using [Astro](astro.build/), with plains to implement a Database and Authentication using [Firebase](firebase.google.com/) and [Vue](https://vuejs.org/).

The data to build this website is collected using a [Node](https://nodejs.org/en/) script that crosses data from
[The Open Movie Database API](https://www.omdbapi.com/) and the [IMDb](https://www.imdb.com/) dataset hosted locally on [MongoDB](https://www.mongodb.com/). The script might be published later.

This projects uses [PicoCSS](https://picocss.com/), a minimal CSS framework. PicoCSS has really good defaults for semantic html elements, which gave a solid base for the website css. For the movie cards, grids, badges and links, I used (Sass)[https://sass-lang.com/] as a css pre-processor.

## Challenges

One of the biggests challenges of the project was dealing with the Award pages.  
There are Oscar categories that nominate cast members, the directors or a specific song. So I had to find the best way to display those names in movie cards for those categories.  
There is also a case where a movie can be appear twice in the same category, when cast members of the same movie are nominated for the same award. This was trick to deal with, but I'm happy with the final result of including both names on a single movie card.
