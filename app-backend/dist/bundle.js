(() => {
	const e = {
		962: (e) => { e.exports = { APP_PORT: 3e3, SEKRET_KEY: 'KIRILL' }; },
		61: (e) => {
			e.exports = {
				HttpStatusCode: {
					OK: 200, CREATED: 201, BAD_REQUEST: 400, UNAUTHORIZED: 401, INTERNAL_SERVER_ERROR: 500,
				},
			};
		},
		308: (e, t, r) => {
			const { HttpStatusCode: s } = r(61); const {
				createWorker: o, updateWorker: a, getWorker: n, getFilteredWorkers: i,
			} = r(360); e.exports = {
				handleAddWorker: async (e, t) => { try { const r = e.file; const a = await o({ ...e.body, avatar: r.filename }); t.status(s.OK).send(a); } catch (e) { t.status(s.INTERNAL_SERVER_ERROR).send({ error: e }); } }, handleUpdateWorker: async (e, t) => { try { const r = await a(e.params.id, e.body); t.status(s.OK).send(r); } catch (e) { t.status(s.INTERNAL_SERVER_ERROR).send({ error: e }); } }, handleGetWorker: async (e, t) => { try { const r = await n(e.params.id); t.status(s.OK).send(r); } catch (e) { t.status(s.INTERNAL_SERVER_ERROR).send({ error: e }); } }, handleGetAllWorkers: async (e, t) => { try { const r = 8; const o = Number(e.query.pageNumber) || 1; const a = e.query.positionType === 'undefined' ? 'all' : e.query.positionType; const n = e.query.sortingType === 'undefined' ? 'nameSorting' : e.query.sortingType; const { time: d } = e.query; const l = await i(r, o, a, n, d); t.status(s.OK).send(l); } catch (e) { t.status(s.INTERNAL_SERVER_ERROR).send({ error: e }); } }, handleUploadPhoto: async (e, t) => { try { const r = e.file; const o = await a(e.query.id, { avatar: r.filename }); t.status(s.OK).send(o); } catch (e) { t.status(s.INTERNAL_SERVER_ERROR).send({ error: e }); } },
			};
		},
		360: (e, t, r) => {
			const { Schema: s, model: o } = r(185); const a = o('Worker', new s({
				name: { type: String }, positionType: { type: String }, avatar: { type: String }, salary: { type: Number }, placeNumber: { type: String }, time: { type: String },
			})); e.exports = {
				createWorker: (e) => a.create(e), getWorker: (e) => a.findOne({ _id: e }), getAllWorkes: () => a.find({}), getFilteredWorkers: (e, t, r, s, o) => { let n; return n = r === 'all' ? a.find({}) : a.find({ positionType: r, time: o }), s === 'nameSorting' ? n.sort({ name: 1 }) : n.sort({ salary: -1 }), n.limit(e).skip(e * (t - 1)); }, updateWorker: (e, t) => a.updateOne({ _id: e }, { ...t }), Worker: a,
			};
		},
		540: (e, t, r) => { const s = r(860); const o = r(145); const a = s(); a.use(o), e.exports = a; },
		145: (e, t, r) => {
			const s = r(860); const o = r(738); const {
				handleAddWorker: a, handleUpdateWorker: n, handleGetAllWorkers: i, handleGetWorker: d,
			} = r(308); const l = s(); const u = o.diskStorage({ destination: (e, t, r) => { r(null, './src/uploads/'); }, filename: (e, t, r) => { r(null, t.originalname); } }); const p = o({ storage: u, fileFilter: (e, t, r) => { ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg'].includes(t.mimetype) ? r(null, !0) : r(null, !1); } }).single('avatar'); l.post('/workers', p, a), l.patch('/workers/:id', n), l.get('/workers', i), l.get('/workers/:id', d), e.exports = l;
		},
		582: (e) => {
			e.exports = require('cors');
		},
		860: (e) => {
			e.exports = require('express');
		},
		185: (e) => {
			e.exports = require('mongoose');
		},
		738: (e) => {
			e.exports = require('multer');
		},
		17: (e) => {
			e.exports = require('path');
		},
	}; const t = {}; function r(s) { const o = t[s]; if (void 0 !== o) return o.exports; const a = t[s] = { exports: {} }; return e[s](a, a.exports, r), a.exports; } (() => {
		const e = r(860); const t = r(185); const s = r(582); const o = r(17); const { APP_PORT: a } = r(962); const n = r(540); const i = e(); i.use(s({
			origin: 'http://localhost:3001', preflightContinue: !0, optionsSuccessStatus: 200, credentials: !0, methods: 'GET,PUT,PATCH,POST,DELETE',
		})), i.use(e.urlencoded({ extended: !1 })), i.use(e.json()), i.use(e.raw()), i.use('/getImage', e.static(o.join(__dirname, 'uploads'))), i.use(n), (async () => { try { t.connect('mongodb+srv://kirill:qawsed@cluster0.zx4sa.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: !0, useUnifiedTopology: !0, useCreateIndex: !0 }, ((e) => { e && console.log('some error happened', e), console.log('mongoDB has been connected successfully'); })), i.listen(a, (() => { console.info(`server started on port ${a}!`); })); } catch (e) { console.log(`the ${e} happend with server`), console.log(`it means ${e.message}`); } })();
	})();
})();
