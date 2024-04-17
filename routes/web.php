<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/404', function () {
    return Inertia::render('ErrorPage');
});
require __DIR__.'/auth.php';
