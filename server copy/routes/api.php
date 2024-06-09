<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiaryController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/diaries', [DiaryController::class, 'index']);
Route::get('/diaries/{id}', [DiaryController::class, 'show']);
Route::post('/diaries', [DiaryController::class, 'store']);
Route::put('/diaries/{id}', [DiaryController::class, 'update']);
Route::delete('/diaries/{id}', [DiaryController::class, 'destroy']);
