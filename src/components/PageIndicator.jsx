import React from 'react'
import Link from 'next/link'

const PageIndicator = ({page, links = [], title}) => {

	const linksDisplay = links.map((link, index) => {
		return (
			<span key={index}>
				<Link href={link.url}>{link.name}</Link>
				<span className='font-bold text-xl mx-2'>.</span>
			</span>
		)
	})

  return (
    <div className="w-full h-full bg-[url(/page-header-bg.svg)] bg-no-repeat bg-cover bg-center bg-color-blue-grey">

			<div className="container pt-52 pb-32">

				<div className="flex justify-center text-white">

					<div className="headTitle space-y-4">
						<h1>{title ?? page}</h1>
						<div>
							<>
								<Link href='/'>Home</Link>
								<span className='font-bold text-xl mx-2'>.</span>
							</>
							{linksDisplay}
							<span className='text-color-grey ml-2'> {page}</span>
						</div>
					</div>
					
				</div>

			</div>

    </div>
  )
}

export default PageIndicator