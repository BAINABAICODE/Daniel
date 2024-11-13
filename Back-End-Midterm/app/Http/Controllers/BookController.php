<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    // Get a list of all books
    public function index()
    {
        return response()->json(Book::all());
    }

    // Get details of a specific book
    public function show($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        return response()->json($book);
    }

    // Create a new book
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'published_year' => 'required|integer',
            'genre' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $book = Book::create($request->only(['title', 'author', 'published_year', 'genre', 'description']));

        return response()->json($book, 201);
    }

    // Update an existing book
    public function update(Request $request, $id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'author' => 'sometimes|string|max:255',
            'published_year' => 'sometimes|integer',
            'genre' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
        ]);

        $book->update($request->only(['title', 'author', 'published_year', 'genre', 'description']));

        return response()->json($book);
    }

    // Delete a book
    public function destroy($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $book->delete();
        return response()->json(null, 204);
    }
}

