import React from 'react';

import SupabaseConnection from '../components/SupabaseConnection';

import logo from '../assets/react.svg';

function HomePage() {
	return (
		<>
			<div className="w-full min-h-screen bg-gray-100">
				<div
					className="flex flex-col items-center justify-center container mx-auto px-4 py-24 text-center"
					style={{
						height: '100vh'
					}}
				>
					<img src={logo} className="h-24 w-24 mx-auto mb-8" alt="logo" />
					<h1 className="text-4xl md:text-7xl font-bold text-cyan-500 mb-6">
						Learn React
					</h1>
					<p className="max-w-2xl mx-auto text-md text-zinc-800 mb-8">
						Edit <code className="font-mono bg-zinc-200 px-1 py-0.5 text-zinc-800 font-light">src/pages/Home.jsx</code> and save to reload.
					</p>
					<a
						className="text-sm flex flex-row items-center justify-center gap-1 rounded bg-cyan-500 text-zinc-50 hover:bg-cyan-600 px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
						<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
					</a>
					<p className="mt-8 text-sm text-green-600 border border-green-600 rounded-xs px-4 py-2 bg-green-200">
						<span className="font-bold">Congratulations!</span> You have successfully configured Tailwind CSS in your React application
					</p>

					<div className="mt-8">
						<SupabaseConnection />
					</div>
				</div>
			</div>
		</>
	);
}

export default HomePage;