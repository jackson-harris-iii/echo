import React, { Component } from 'react';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBCollapse,
	MDBContainer,
	MDBHamburgerToggler,
	MDBNavbarToggler,
	MDBIcon,
	MDBBtn,
	MDBRow,
	MDBCol,
} from 'mdbreact';
import Link from 'next/link';
import { withRouter } from 'next/router';

class NavbarPage extends Component {
	state = {
		// collapse1: false,
		// collapseID: '',
		isOpen: false,
	};

	toggleCollapse = (collapseID) => () => {
		this.setState((prevState) => ({ collapseID: prevState.collapseID !== collapseID ? collapseID : '' }));
	};

	toggleSingleCollapse = (collapseId) => {
		this.setState({
			...this.state,
			[collapseId]: !this.state[collapseId],
		});
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<MDBNavbar
				style={{
					marginTop: '0px',
					zIndex: `100`,
					position: 'absolute',
					width: '100vw',
					backdropFilter: 'blur(8px)',
				}}
				light
				className="sr-orange2 z-depth-0 border-bottom border-dark"
				expand="md"
			>
				<MDBContainer className="" fluid>
					<MDBNavbarBrand className="white-text py-0">
						<Link href="/">
							<a>
								<h2 className="">E</h2>
							</a>
						</Link>
					</MDBNavbarBrand>
					<MDBNavbarToggler>
						<MDBHamburgerToggler
							color="#016367"
							id="hamburger1"
							onClick={() => this.toggleSingleCollapse('collapse1')}
						/>
					</MDBNavbarToggler>
					<MDBCollapse
						className="nav-blur justify-content-end"
						isOpen={this.state.collapse3}
						isOpen={this.state.isOpen}
						navbar
					>
						<MDBNavbarNav className="dropdown-menu-right" right>
							{/* <MDBNavItem>
								<Link href="/service">
									<a className="nav-link font-oswald nav-font font-weight-bolder">Service</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href="/about">
									<a className="nav-link font-oswald nav-font font-weight-bolder">About</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
									<Link href={`${withRouter.pathname}?contact=contact`} as={withRouter.pathname}>
										<a className="nav-link font-oswald nav-font font-weight-bolder">Contact</a>
									</Link>
							</MDBNavItem> */}

							<MDBNavItem className="my-auto" right>
								<MDBContainer>
									<MDBRow className="">
										<MDBCol size='5'>
											{/* <MDBIcon size="2x" icon="home" /> */}
											<MDBBtn outline rounded onClick={this.props.toggleWalletConnect}>
												Login
											</MDBBtn>
										</MDBCol>
										<MDBCol size='5'>
											<a href="/" target="blank">
												{/* <MDBIcon size="2x" icon="wallet" /> */}
												<MDBBtn outline rounded>
													Logout
												</MDBBtn>
											</a>
										</MDBCol>
										{/* <MDBCol>
											<a href="/" target="blank">
												<MDBIcon size="2x" icon="plus" />
											</a>
										</MDBCol> */}
									</MDBRow>
								</MDBContainer>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		);
	}
}

export default withRouter(NavbarPage);
