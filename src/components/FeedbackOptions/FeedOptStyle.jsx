import styled from "styled-components";

export const ButtonBox = styled.div`
margin: 0 auto;
padding: 10px 0;
`

export const Button = styled.button`
cursor: pointer;
	display: inline-flex;
	align-items: center;
	padding: 5px 15px;
	justify-content: center;
	border-radius: 4px;
	background-color: orange;
	color: white;
	font-size: 19px;
	font-weight: 600;
	border: none;
	transition: background-color 250ms linear, color 250ms linear;
	&:hover, :focus {
		background-color: white;
		color: gray;
	}
	&:not(:last-child){
		margin-right: 10px;
	}


`