import Image from "next/image";

export default function Home() {
	return (
		<section className='overflow-hidden'>
			<div className='bg-indigo-950'>
				<div className='container px-4 mx-auto'>
					<div className='flex items-center justify-between py-5'>
						<div className='w-auto'>
							<div className='flex flex-wrap items-center'>
								<div className='w-auto pr-2 font-medium'>
									<a href='#'>
										<img src='basko-assets/logos/basko-logo-light.png' alt='' />
										Company Name Here
									</a>
								</div>
							</div>
						</div>
						<div className='w-auto'>
							<div className='flex flex-wrap items-center'>
								<div className='w-auto hidden lg:block'>
									<ul className='flex items-center mr-8'>
										<li className='mr-14 font-medium text-white hover:text-gray-200 tracking-tight'>
											<a href='#'>Projects</a>
										</li>
										<li className='mr-14 font-medium text-white hover:text-gray-200 tracking-tight'>
											<a href='#'>Blog</a>
										</li>
										<li className='mr-8 font-medium text-white hover:text-gray-200 tracking-tight'>
											<a href='#'>About Us</a>
										</li>
										<li className='font-medium text-white hover:text-gray-200 tracking-tight'>
											<a href='#'>Contact Us </a>
										</li>
									</ul>
								</div>
								<div className='w-auto hidden lg:block'>
									<div className='inline-block'>
										<a
											className='inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200'
											href='#'>
											Donate
										</a>
									</div>
								</div>
								<div className='w-auto lg:hidden'>
									<a href='#'>
										<svg
											className='navbar-burger text-indigo-600'
											width='51'
											height='51'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<rect
												width='56'
												height='56'
												rx='28'
												fill='currentColor'></rect>
											<path
												d='M37 32H19M37 24H19'
												stroke='white'
												stroke-width='1.5'
												stroke-linecap='round'
												stroke-linejoin='round'></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50'>
					<div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80'></div>
					<nav className='relative z-10 px-9 pt-8 bg-black h-full overflow-y-auto'>
						<div className='flex flex-wrap justify-between h-full'>
							<div className='w-full'>
								<div className='flex items-center justify-between -m-2'>
									<div className='w-auto p-2'>
										<a className='inline-block' href='#'>
											<img
												src='basko-assets/logos/basko-logo-light.png'
												alt=''
											/>
										</a>
									</div>
									<div className='w-auto p-2'>
										<a className='navbar-burger text-white' href='#'>
											<svg
												width='24'
												height='24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M6 18L18 6M6 6L18 18'
													stroke='currentColor'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div className='flex flex-col justify-center py-16 w-full'>
								<ul>
									<li className='mb-12 font-medium text-white hover:text-gray-200 tracking-tight'>
										<a href='#'>Projects</a>
									</li>
									<li className='mb-12 font-medium text-white hover:text-gray-200 tracking-tight'>
										<a href='#'>Blog</a>
									</li>
									<li className='mb-12 font-medium text-white hover:text-gray-200 tracking-tight'>
										<a href='#'>About Us</a>
									</li>
									<li className='font-medium text-white hover:text-gray-200 tracking-tight'>
										<a href='#'>Contact</a>
									</li>
								</ul>
							</div>
							<div className='flex flex-col justify-end w-full pb-8'>
								<a
									className='inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200'
									href='#'>
									Donate
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<div className='pt-16 lg:pt-32 pb-24 lg:pb-52 bg-indigo-950 overflow-hidden'>
				<div className='container px-4 mx-auto'>
					<div className='flex flex-wrap -m-8'>
						<div className='w-full md:w-1/2 p-8'>
							<div className='md:max-w-lg'>
								<h1 className='font-heading mb-12 text-6xl md:text-7xl text-white tracking-tighter'>
									HELP TO REBUILD
								</h1>
								<p className='text-white text-lg md:text-xl mb-12'>
									We are a non-profit organization focused on helping make the
									world around us a better, happier place. With the help of our
									tireless staff, we organize fundraisers, community-building
									events, and in-depth training sessions for our volunteers.
								</p>
								<div className='flex flex-wrap -m-2 mb-14'>
									<div className='w-auto p-2'>
										<a
											className='inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200'
											href='#'>
											Donate Now
										</a>
									</div>
									<div className='w-auto p-2'>
										<a
											className='inline-flex items-center px-5 py-4 bg-transparent hover:bg-indigo-600 border border-gray-600 hover:border-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200'
											href='#'>
											<span className='text-white font-semibold tracking-tight'>
												About our Charity
											</span>
										</a>
									</div>
								</div>
								<div className='max-w-md'>
									<div className='flex flex-wrap -m-1.5'>
										<div className='w-auto p-1.5'>
											<div className='flex flex-wrap'>
												<div className='w-auto'>
													<img
														src='https://unsplash.com/photos/cVEOh_JJmEE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
														alt=''
													/>
												</div>
												<div className='w-auto -ml-5'>
													<img
														src='basko-assets/images/headers/avatar2.png'
														alt=''
													/>
												</div>
												<div className='w-auto -ml-5'>
													<img
														src='basko-assets/images/headers/avatar3.png'
														alt=''
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='w-full md:w-1/2 p-8'>
							<img
								className='transform hover:-translate-y-2 transition duration-500 rounded-lg shadow-xl'
								src='https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=731&q=80'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
