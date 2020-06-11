import styled from 'styled-components';

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0 4px;
`;

export const Column = styled.div`
	flex: 50%;
	max-width: 50%;
	padding: 0 4px;

	img {
		margin-top: 8px;
		vertical-align: middle;
		width: 100%;
	}

	@media screen and (max-width: 800px){
		& {
			flex: 50%;
			max-width: 50%;
		}
	}

	@media screen and (max-width: 600px){
		& {
			flex: 100%;
			max-width: 100%;
		}
	}
`;

export const Project = styled.div``;