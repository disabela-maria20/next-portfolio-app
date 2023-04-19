import React from "react"
import { INavProps } from "./type"
import Link from "next/link"

const Nav = ({ open }: INavProps): JSX.Element => {
	return (
		<nav className="transition-[all] transform ease-in-out duration-200 left-0 top-79 md:top-0 md:w-auto absolute md:relative w-full overflow-hidden md:over">
			<ul className={`nav origin-center ${open ? '-translate-x-full' : '-translate-x-0'}`} >
				<li className="py-22  md:py-0">
					<Link href="#home" passHref>
						<span className="text-white hover:opacity-75 font-sans">Home</span>
					</Link>
				</li>
				<li className="pb-22  md:py-0 md:pl-31">
					<Link href="#trabalhos" passHref>
						<span className="text-white hover:opacity-75 font-sans">Trabalhos</span>
					</Link>
				</li>
				<li className="pb-22 md:py-0 md:pl-31">
					<Link href="#sobre" passHref>
						<span className="text-white hover:opacity-75 font-sans">Sobre</span>
					</Link>
				</li>
				<li className="pb-22  md:py-0 md:ml-31 hidden md:block">
					<span className="text-white py-10 rounded-sm hover:opacity-75"> | </span>
				</li>
				<li className="pb-22  md:py-0 md:ml-31">
					<Link href="#contato" legacyBehavior>
						<span className="text-white hover:opacity-75 font-sans">Contato</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
