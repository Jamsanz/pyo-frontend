import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const secondDashboard = () => {
	const router = useRouter()

	const [email, setEmail] = useState<string>("")
	useEffect(() => {

		const id = localStorage.getItem("token")
		setEmail(localStorage.getItem("useremail")!);
		if (id) {
			router.push("/dashboard")
		}
		else router.push("/login");
	}, []);
	return (
		<>
			<div id="header">

				<div className="top">

					<div id="logo">
						<span className="image avatar48">
							<img src="images/avatar.jpg" alt="" /></span>
						<h1 id="title">User Name</h1>
						<p></p>
					</div>

					<nav id="nav">
						<ul>
							<li><a href="" id="top-link"><span className="icon solid fa-home">Index</span></a></li>
							<li><a href="" id="portfolio-link"><span className="icon solid fa-th">Link</span></a></li>
							<li><a href="" id="about-link"><span className="icon solid fa-user">Link</span></a></li>
							<li><a href="" id="contact-link"><span className="icon solid fa-envelope">Link</span></a></li>
						</ul>
					</nav>

				</div>

				<div className="bottom">

					<ul className="icons">
						<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
						<li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
						<li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
					</ul>

				</div>

			</div>
			<div id="main">

				<section id="top" className="">
					<div className="container">

						<h2 className="text-[#000] ml-20">Welcome {email && email}</h2>
					</div>
				</section>
			</div>
		</>
	)
}

export default secondDashboard
