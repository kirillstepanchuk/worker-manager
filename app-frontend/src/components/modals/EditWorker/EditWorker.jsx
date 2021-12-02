import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import loadWorkerData from '../../../store/actions/loadWorkerData/loadWorkerData';
import { API_URL } from '../../../store/constants';
import { CardContainer, TopInfoContainer, FileInput } from './style';
import editWorkerData from '../../../store/actions/editWorkerData/editWorkerData';
import ModalWrapper from '../../common/ModalWrapper/ModalWrapper.jsx';

const EditWorker = ({worker, loadWorkerData, editWorkerData}) => { 
    useEffect(async () => {
        loadWorkerData(id);
    }, []); 

    const [file, setFile] = useState();
    const [isAdministration, setIsAdministration] = useState();

    const {id} = useParams(); 
    const history = useHistory();

    return (
        <ModalWrapper>
            <CardContainer 
                encType="multipart/form-data"
                method='patch'
                onSubmit={async (evt) => {
                    evt.preventDefault();
                    const formData = Object.fromEntries(new FormData(evt.target));
                    console.log('formData: ', formData);
                    
                    const responseData = await axios({
                        method: 'PATCH',
                        url: `${API_URL}/workers/${worker.data._id}`,
                        data: formData,
                    });
                    history.goBack();
                }}
            >
                <TopInfoContainer>
                    {/* <FileInput
                        className="profile-editor__input profile-editor__input--type-file"
                        id="avatar"
                        name="avatar"
                        type="file"
                        onChange={(evt) => setFile(evt.target.files[0])}
                    />
                    <label htmlFor="avatar">
                        <Button 
                            variant="contained" 
                            component="span" 
                            startIcon={file ? <DownloadDoneIcon/> : <PhotoCamera/>}
                        >
                            {file ? "Загружено" : "Загрузить"}
                        </Button>
                    </label> */}
                    <FormControl 
                        component="fieldset" 
                        style={{marginLeft: "20px"}}
                    >
                        <FormLabel component="legend">Тип сотрудников:</FormLabel>
                        <RadioGroup
                            value={worker.data.positionType || "administration"}
                            name="positionType"
                            onChange={(event) => {
                                setIsAdministration(event.target.value === "administration");
                                editWorkerData({positionType : event.target.value})
                            }}
                        >
                            <FormControlLabel                             
                                value="administration" 
                                control={<Radio />} 
                                label="Руководство" 
                            />
                            <FormControlLabel                            
                                value="worker" 
                                control={<Radio />} 
                                label="Сотрудники" 
                            />
                        </RadioGroup>
                    </FormControl>
                </TopInfoContainer>

                <TextField
                    value={worker.data.name || ""}
                    style={{marginTop: "5px"}}
                    fullWidth
                    id="standard-basic"
                    label="ФИО"
                    variant="standard"
                    name="name"
                    onChange={(event) => editWorkerData({name : event.target.value})}
                />
                <TextField
                    value={worker.data.salary || ""}
                    style={{marginTop: "5px"}}
                    type="number"
                    fullWidth
                    id="standard-basic"
                    label="Зарплата"
                    variant="standard"
                    name="salary"
                    onChange={(event) => editWorkerData({salary : event.target.value})}
                />

                {isAdministration
                ? 
                <>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Часы приема:</FormLabel>
                        <RadioGroup
                            defaultValue={worker.data.time || ""}
                            name="time"
                            onChange={(event) => editWorkerData({time : event.target.value})}
                        >
                            <FormControlLabel 
                                value="08:00 - 14:00" 
                                control={<Radio />} 
                                label="с 8:00 до 14:00" 
                            />
                            <FormControlLabel
                                value="12:00 - 20:00" 
                                control={<Radio />} 
                                label="с 12:00 до 20:00" 
                            />
                        </RadioGroup>
                    </FormControl>
                </>
                :
                <>
                    <TextField 
                        value={worker.data.placeNumber || ""} 
                        style={{marginTop: "5px"}}
                        fullWidth 
                        type="number"
                        id="standard-basic" 
                        label="Номер рабочего места" 
                        variant="standard" 
                        name="placeNumber" 
                        onChange={(event) => editWorkerData({placeNumber : event.target.value})}
                    />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Обеденное время:</FormLabel>
                        <RadioGroup
                            value={worker.data.time || ""}
                            name="time"
                            onChange={(event) => editWorkerData({time : event.target.value})}
                        >
                            <FormControlLabel 
                                value="12:00 - 12:45" 
                                control={<Radio />} 
                                label="с 12:00 до 12:45" 
                            />
                            <FormControlLabel 
                                value="15:00 - 15:45" 
                                control={<Radio />} 
                                label="с 15:00 до 15:45" 
                            />
                        </RadioGroup>
                    </FormControl>
                </>
                }

                <Button variant="outlined" type="submit">
                    Изменить
                </Button>
                
            </CardContainer>
        </ModalWrapper>
    )
}

const mapStateToProps = (state) => ({
    worker: state.worker,
});

const mapDispatchToProps = (dispatch) => ({
    loadWorkerData: (id) => dispatch(loadWorkerData(id)),
    editWorkerData: (name) => dispatch(editWorkerData(name)),
});

EditWorker.propTypes = {
    worker: PropTypes.object,
    loadWorkerData: PropTypes.func,
    editWorkerData: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWorker);

