import React from 'react'

import Header from '../../common/Header/Header'
import Filtration from '../../common/Filtration/Filtration'
import WorkerCardList from '../../common/WorkerCardList/WorkerCardList'
import PaginationList from '../../common/PaginationList/PaginationList'

const Workers = function () {
	return (
		<>
			<Header />
			<Filtration />
			<WorkerCardList />
			<PaginationList />
		</>
	)
}

export default Workers
