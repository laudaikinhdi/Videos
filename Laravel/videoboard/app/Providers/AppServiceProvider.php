<?php

namespace App\Providers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Validator::extend('youtube', function ($attribute, $value, $parameters, $validator) {
            return preg_match("/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/", $value);
        }, "Sorry, this doesn't look like a valid youtube URL");
    }
}
