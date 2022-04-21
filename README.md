# Movie-List

"Movie-List" application is a simple near project. You can add new movies, read uploaded movies, update movies, delete movies, add a comment about added movies, and read comments about the movie.

## Installation

1- Clone repository to your computer

`https://github.com/heavenswill/Movie-List.git`

2- go to file 

`cd Movie-List`

3- run this in your terminal

`yarn`

4- Login your account

`login near` 

5- Build contract

`yarn build:release`

6- deploy contract

`yarn deploy`

7- Export the development account to the $CONTRACT

`export CONTRACT=<YOUR_DEV_ACCOUNT_HERE>`

## Usage

+ Add a new movie

`near call $CONTRACT createMovie '{"name":<MOVIE NAME>,"type":<MOVIE TYPE>,"description":<DESCRIPTION ABOUT MOVIE>}' --accountId YOUR-ACCOUNT.testnet`

+ Read informaiton about movie

`near view $CONTRACT getMovieById '{"id":MOVIE-ID}' --accountId YOUR-ACCOUNT.testnet`

+ Read information about movies

`near view $CONTRACT getMovies '{"offset":<WHERE TO START>,"limit":<LIMIT OF GET MOVIE>}' --accountId YOUR-ACCOUNT.testnet`

+ Update movie

`near call $CONTRACT updateMovie '{"id":MOVIE ID,"updates":{"name":"<MOVIE NAME>","type":"<WHAT TYPE OF MOVIE>","description":"<DESCRIPTION ABOUT MOVIE>"}}' --accountId YOUR-ACCOUNT.testnet`

+ Delete movie

`near call $CONTRACT del '{"id":MOVIE ID}' --accountId YOUR-ACCOUNT.testnet`

+ Add a comment

`near call $CONTRACT addComment '{"text":<COMMENT>,"movieId":MOVIE ID}' --accountId YOUR-ACCOUNT.testnet`

+ Read comments

`near call $CONTRACT getComments --accountId YOUR-ACCOUNT.testnet`

+ Read movie's comments

`near call $CONTRACT getCommentsByMovieId '{"id":MOVIE ID,"limit":<LIMIT OF GET COMMENT>}' --accountId YOUR-ACCOUNT.testnet`

## Loom Video
