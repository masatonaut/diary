<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diary;

class DiaryController extends Controller
{
    public function index()
    {
        return Diary::all();
    }

    public function show($id)
    {
        return Diary::findOrFail($id);
    }

    public function store(Request $request)
    {
        dd($request->all());
        $diary = Diary::create($request->all());
        return response()->json($diary, 201);
    }


    public function update(Request $request, $id)
    {
        $diary = Diary::findOrFail($id);
        $diary->update($request->all());
        return response()->json($diary, 200);
    }

    public function destroy($id)
    {
        $diary = Diary::findOrFail($id);
        $diary->delete();
        return response()->json(null, 204);
    }
}
