import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { CardContainer, TopInfoContainer, FileInput} from './style'
import { API_URL } from "../../../store/constants"

const AddWorker = () => {
    const [file, setFile] = useState();
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [placeNumber, setPlaceNumber] = useState('')
    const [isAdministration, setIsAdministration] = useState(true);
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const zeroingValues = () => {
        setFile();
        setName('');
        setSalary('');
        setPlaceNumber('');
        setIsAdministration(true);
    };

    return (
        <CardContainer
            encType="multipart/form-data"
            method='post'
            onSubmit={async (evt) => {
                evt.preventDefault();
                const formData = new FormData(evt.target);
                
                const responseData = await axios({
                    method: 'POST',
                    url: `${API_URL}/workers`,
                    data: formData,
                    withCredentials: true,
                });
                // history.goBack();
                setOpen(true);
                zeroingValues();
            }}
        >
            <TopInfoContainer>
                <FileInput
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
                </label>
                <FormControl component="fieldset" style={{marginLeft: "20px"}}>
                    <FormLabel component="legend">Тип сотрудников:</FormLabel>
                    <RadioGroup
                        defaultValue="administration"
                        name="positionType"
                    >
                        <FormControlLabel
                            onClick={() => setIsAdministration(true)}                             
                            value="administration" 
                            control={<Radio />} 
                            label="Руководство" 
                        />
                        <FormControlLabel  
                            onClick={() => setIsAdministration(false)}                           
                            value="worker" 
                            control={<Radio />} 
                            label="Сотрудники" 
                        />
                    </RadioGroup>
                </FormControl>
            </TopInfoContainer>

            <TextField
                style={{marginTop: "5px"}}
                fullWidth
                id="standard-basic"
                label="ФИО"
                variant="standard"
                name="name"
                value={name}
                onChange={(evt)=>{setName(evt.target.value)}}
            />
            <TextField
                style={{marginTop: "5px"}}
                fullWidth
                id="standard-basic"
                label="Зарплата"
                variant="standard"
                name="salary"
                value={salary}
                onChange={(evt)=>{setSalary(evt.target.value)}}
            />

            {isAdministration
            ? 
            <>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Часы приема:</FormLabel>
                    <RadioGroup
                        defaultValue="08:00 - 14:00"
                        name="time"
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
                    style={{marginTop: "5px"}} 
                    fullWidth id="standard-basic" 
                    label="Номер рабочего места" 
                    variant="standard" 
                    name="placeNumber"
                    value={placeNumber}
                    onChange={(evt)=>{setPlaceNumber(evt.target.value)}}
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Обеденное время:</FormLabel>
                    <RadioGroup
                        defaultValue="08:00 - 14:00"
                        name="time"
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
            }

            <Button variant="outlined" type="submit">Добавить</Button>
            
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Сотрудник успешно добавлен =)
                </Alert>
            </Snackbar>
        </CardContainer>
    )
}

export default AddWorker;

