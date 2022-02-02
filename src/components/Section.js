import Images from "./Images";

const Section = (props) => {
	return (
		<div className="item">
			<h2>{props.item.category}</h2>
			{/* La liste d'images */}
			<Images images={props.item.images} />
		</div>
	);
};

export default Section;
