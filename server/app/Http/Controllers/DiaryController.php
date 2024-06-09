<?php

namespace App\Http\Controllers;

use App\Models\Diary;
use Illuminate\Http\Request;

class DiaryController extends Controller
{
    public function index()
    {
        return Diary::all();
    }

    public function store(Request $request)
    {
        return Diary::create($request->all());
    }

    public function show($id)
    {
        return Diary::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $diary = Diary::findOrFail($id);
        $diary->update($request->all());
        return $diary;
    }

    public function destroy($id)
    {
        Diary::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
