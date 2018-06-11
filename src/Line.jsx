import React from 'react'

class Line extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			start,
			end,
			stroke,
			strokeWidth,
			strokeDasharray,
		} = this.props;
		return (
			<line
				x1={start.x}
				y1={start.y}
				x2={end.x}
				y2={end.y}
				stroke={stroke}
				strokeWidth={strokeWidth}
      			strokeDasharray={strokeDasharray}
			/>
		);
	}
}

export default Line;
