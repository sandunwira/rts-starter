import React from 'react';

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
						className="text-sm flex flex-row items-center justify-center rounded bg-cyan-500 text-zinc-50 hover:bg-cyan-600 px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<p className="mt-8 text-sm text-green-600 border border-green-600 rounded-xs px-4 py-2 bg-green-200">
						<span className="font-bold">Congratulations!</span> You have successfully configured Tailwind CSS in your React application
					</p>
				</div>
			</div>
		</>
	);
}

export default HomePage;