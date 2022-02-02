const Images = (props) => {
	return (
		<div className="images">
			{props.images.map((url, index) => {
				// console.log("url ===> ", url);
				return <img key={index} src={url} alt="" />;
			})}
		</div>
	);
};

export default Images;
