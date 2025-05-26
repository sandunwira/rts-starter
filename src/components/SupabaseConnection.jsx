import React, { useState, useEffect } from 'react';

function SupabaseConnection() {
	const [hasUrl, setHasUrl] = useState(false);
	const [hasKey, setHasKey] = useState(false);

	useEffect(() => {
		const url = import.meta.env.VITE_SUPABASE_URL;
		const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

		if (url) {
			setHasUrl(true);
		} else {
			setHasUrl(false);
		}

		if (key) {
			setHasKey(true);
		} else {
			setHasKey(false);
		}
	}, []);

	return (
		<div className="flex flex-col lg:flex-row items-center justify-center gap-5 select-none">
			<div className="flex flex-col items-center justify-center gap-2">
				<div className="flex flex-row items-center justify-center gap-2 text-xs text-zinc-700 border border-zinc-700 bg-zinc-200 rounded-full px-3 py-1.5">
					<div className={`h-1.5 w-1.5 ${hasUrl ? `bg-green-500` : `bg-red-500`} rounded-full`}></div>
					<p>Supabase URL: <span className={`font-semibold ${hasUrl ? `text-green-600` : `text-red-600`}`}>{hasUrl ? "Set" : "Not Set"}</span></p>
				</div>
				{!hasUrl && (
					<p className="text-xs text-red-600">Please set the <code className="font-mono bg-zinc-200 px-1 py-0.5 text-zinc-800 font-light">VITE_SUPABASE_URL</code> environment variable in your .env file.</p>
				)}
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				<div className="flex flex-row items-center justify-center gap-2 text-xs text-zinc-700 border border-zinc-700 bg-zinc-200 rounded-full px-3 py-1.5">
					<div className={`h-1.5 w-1.5 ${hasKey ? `bg-green-500` : `bg-red-500`} rounded-full`}></div>
					<p>Supabase Anon Key: <span className={`font-semibold ${hasKey ? `text-green-600` : `text-red-600`}`}>{hasKey ? "Set" : "Not Set"}</span></p>
				</div>
				{!hasKey && (
					<p className="text-xs text-red-600">Please set the <code className="font-mono bg-zinc-200 px-1 py-0.5 text-zinc-800 font-light">VITE_SUPABASE_ANON_KEY</code> environment variable in your .env file.</p>
				)}
			</div>
		</div>
	);
}

export default SupabaseConnection;