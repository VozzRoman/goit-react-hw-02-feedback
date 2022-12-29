import { SectionTitle } from "./SectionStyle";


export const Section = ({children, title}) => (
	<>
		<SectionTitle>
			{title}
			{children}
		</SectionTitle>
	
	</>
)