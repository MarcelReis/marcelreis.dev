import React, { useEffect } from "react";
import styled from "styled-components";

import MainLayout from "../components/layout/main";

import { logPageView } from "../utils/analytics";

import Section from "../components/base/section";
import { H1 } from "../components/base/titles";
import Card from "../components/base/card";

const CardContainer = styled.div`
	display: grid;
	position: relative;
	left: -1rem;
	/* bottom: -1rem; */
	width: calc(100% + 2rem);
	grid-template-columns: repeat(2, 1fr);
	column-gap: 4px;
	row-gap: 4px;

	@media only screen and (min-width: 600px) {
		grid-template-columns: repeat(3, 1fr);
		column-gap: 8px;
		row-gap: 8px;
	}
`;

export default function index() {
	useEffect(() => {
		logPageView();
	}, []);

	return (
		<MainLayout
			title="Projetos - MarcelReis"
			description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
		>
			<Section>
				<H1>Projetos</H1>
				<CardContainer>
					{"xxxxxx".split("").map((_e: any, index: number) => {
						return <Card key={index} />;
					})}
				</CardContainer>
			</Section>
		</MainLayout>
	);
}
