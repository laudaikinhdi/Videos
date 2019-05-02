<?php

namespace App\Http\Middleware;

use Closure;

class SocialMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
    	$services = ['facebook', 'twitter', 'linkedin', 'google', 'github', 'gitlab', 'bitbucket'];
    	$enableService = [];
    	foreach($services as $service)
		{
			if(config('services.' . $service))
			{
				$enableService[] = $service;
			}
		}

    	if(!in_array(strtolower($request->service), $enableService))
		{
			if($request->expectsJson())
			{
				return response()->json([
					'success' => false,
					'message' => 'Invalid social service'
				], 403);
			}else
			{
				return redirect()->back();
			}
		}
        return $next($request);
    }
}
