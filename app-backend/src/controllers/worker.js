const { HttpStatusCode } = require('../constants');
const { Worker, createWorker, updateWorker, getWorker, getAllWorkers, getFilteredWorkers } = require('../models/Worker');

const handleAddWorker = async (req, res) => {
	try {
		let filedata = req.file;
		const result = await createWorker({ ...req.body, avatar: filedata.filename });

		res.status(HttpStatusCode.OK).send(result);

	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleUpdateWorker = async (req, res) => {
	try {
		const result = await updateWorker(req.params.id, req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleGetWorker = async (req, res) => {
	try {
		const result = await getWorker(req.params.id);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleGetAllWorkers = async (req, res) => {
	try {
		const pageLimit = 8;
		const currentPage = Number(req.query.pageNumber) || 1;
		const positionType = req.query.positionType === "undefined" ? "all" : req.query.positionType;
		const sortingType = req.query.sortingType === "undefined" ? "nameSorting" : req.query.sortingType;
		const time = req.query.time;

		const result = await getFilteredWorkers(pageLimit, currentPage, positionType, sortingType, time);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleUploadPhoto = async (req, res) => {
	try {
		let filedata = req.file;

		const result = await updateWorker(req.query.id, { avatar: filedata.filename });

		res.status(HttpStatusCode.OK).send(result);

	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

module.exports = {
	handleAddWorker,
	handleUpdateWorker,
	handleGetWorker,
	handleGetAllWorkers,
	handleUploadPhoto
};
