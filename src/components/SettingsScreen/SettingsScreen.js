import React from 'react';
import './SettingsScreen.scss';
import ReactSlider from 'react-slider';
import SettingsContext from '../SettingsContext/SettingsContext';
import { useContext } from 'react';
import BackButton from '../BackButton/BackButton';

const SettingsScreen = () => {
    const settingsInfo = useContext(SettingsContext);
    return (
        <div className='settings-container'>
            <label>work: {settingsInfo.workMinutes}:00</label>
            <ReactSlider 
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />
            <label>break: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider 
            className={'slider--green'}
            thumbClassName={'thumb--green'}
            trackClassName={'track--green'}
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={30}
            />
            <div className="back-button">
                <BackButton onClick={()=> settingsInfo.setShowSettings(false)}/>
            </div>
        </div>
    );
};

export default SettingsScreen;