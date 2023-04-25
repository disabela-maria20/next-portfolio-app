import React from "react"
import { INavProps } from "./type"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = ({ open }: INavProps): JSX.Element => {
	return (
		<nav className="transition-[all] transform ease-in-out duration-200 left-0 top-79 md:top-0 md:w-auto absolute md:relative w-full">
			<ul className={`nav origin-center ${open ? '-translate-x-full md:-translate-x-0' : '-translate-x-0'}`} >
				<li className="py-22  md:py-0">
					<AnchorLink href="#home">
						<span className="text-white hover:opacity-75 font-sans">Home</span>
					</AnchorLink>
				</li>
				<li className="pb-22  md:py-0 md:pl-31">
					<AnchorLink href="#trabalhos">
						<span className="text-white hover:opacity-75 font-sans">Trabalhos</span>
					</AnchorLink>
				</li>
				<li className="pb-22 md:py-0 md:pl-31">
					<AnchorLink href="#sobre">
						<span className="text-white hover:opacity-75 font-sans">Sobre</span>
					</AnchorLink>
				</li>
				<li className="pb-22 md:py-0 md:pl-31">
					<AnchorLink href="#habilidade">
						<span className="text-white hover:opacity-75 font-sans">Habilidades</span>
					</AnchorLink>
				</li>
				<li className="pb-22  md:py-0 md:ml-31 hidden md:block">
					<span className="text-white py-10 rounded-sm hover:opacity-75"> | </span>
				</li>
				<li className="pb-22  md:py-0 md:ml-31">
					<AnchorLink href="#contato">
						<span className="text-white hover:opacity-75 font-sans">Contato</span>
					</AnchorLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
