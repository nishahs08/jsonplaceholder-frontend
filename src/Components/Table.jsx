
function table(user) {
	const boxStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '8px 10px',

	}
	return Object.keys(user).map((key, index) => {
		console.log("**********************************")
		switch (typeof user[key]) {
			case 'string':
				return (
					<div style={boxStyle}>
						<div>{key}</div>
						<div>{user[key]}</div>
					</div>
				)
			case 'object':
				return (
					Object.keys(user[key]).map((property, index) => {
						switch (typeof user[key][property]) {
							case 'string':
								return (
									<div style={boxStyle}>
										<div>{key}-{property}</div>
										<div>{user[key][property]}</div>
									</div>
								)
							case 'object':
								return (
									Object.keys(user[key][property]).map((item, index) => {
										switch (typeof user[key][property]) {
											case 'string':
												return (
													<div style={boxStyle}>
														<div>{key}-{property}</div>
														<div>{user[key][property]}</div>
													</div>
												)
											case 'object':
												return (
													<div style={boxStyle}>
														<div>{key}-{property}-{item}</div>
														<div>{user[key][property][item]}</div>
													</div>
												)
										}
									}))
						}
					}))
		}
	})
}