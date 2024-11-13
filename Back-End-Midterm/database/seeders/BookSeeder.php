<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $books = [
            [
                'title' => 'Naruto',
                'author' => 'Masashi Kishimoto',
                'published_year' => 2002,
                'genre' => 'Action, Adventure',
                'description' => 'A young ninja strives to become the strongest in his village and gain the respect of his peers.',
            ],
            [
                'title' => 'Attack on Titan',
                'author' => 'Hajime Isayama',
                'published_year' => 2013,
                'genre' => 'Action, Dark Fantasy',
                'description' => 'Humanity fights for survival against giant humanoid Titans.',
            ],
            [
                'title' => 'Death Note',
                'author' => 'Tsugumi Ohba',
                'published_year' => 2006,
                'genre' => 'Thriller, Mystery',
                'description' => 'A high school student discovers a notebook that gives him the power to kill anyone by writing their name in it.',
            ],
            [
                'title' => 'Fullmetal Alchemist: Brotherhood',
                'author' => 'Hiromu Arakawa',
                'published_year' => 2009,
                'genre' => 'Adventure, Fantasy',
                'description' => 'Two brothers search for the Philosopher’s Stone to restore their bodies after a failed alchemical ritual.',
            ],
            [
                'title' => 'Dragon Ball Z',
                'author' => 'Akira Toriyama',
                'published_year' => 1989,
                'genre' => 'Action, Adventure',
                'description' => 'The adventures of Goku as he defends Earth from powerful villains.',
            ],
            [
                'title' => 'One Piece',
                'author' => 'Eiichiro Oda',
                'published_year' => 1999,
                'genre' => 'Adventure, Fantasy',
                'description' => 'A group of pirates search for the ultimate treasure, the One Piece, to become the Pirate King.',
            ],
            [
                'title' => 'My Hero Academia',
                'author' => 'Kōhei Horikoshi',
                'published_year' => 2016,
                'genre' => 'Action, Superhero',
                'description' => 'In a world where most of the population has superpowers, a powerless boy enrolls in a prestigious hero academy.',
            ],
            [
                'title' => 'Demon Slayer',
                'author' => 'Koyoharu Gotouge',
                'published_year' => 2019,
                'genre' => 'Action, Dark Fantasy',
                'description' => 'A young boy becomes a demon slayer to avenge his family and cure his sister.',
            ],
            [
                'title' => 'Cowboy Bebop',
                'author' => 'Shinichirō Watanabe',
                'published_year' => 1998,
                'genre' => 'Sci-Fi, Space Western',
                'description' => 'A group of bounty hunters travel across the galaxy on a spaceship called the Bebop.',
            ],
            [
                'title' => 'Neon Genesis Evangelion',
                'author' => 'Hideaki Anno',
                'published_year' => 1995,
                'genre' => 'Mecha, Psychological',
                'description' => 'Teenagers pilot giant robots to protect Earth from mysterious beings known as Angels.',
            ],
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}