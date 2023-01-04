import { useContext } from 'react'
import ResponseContext from '../../../components/response/ResponseContext'

const CardData = () => {
    const { hrvResponse } = useContext(ResponseContext);

    // eslint-disable-next-line dot-notation
    const recoveryScore = hrvResponse ? hrvResponse['recovery_score'] : 67;
    // eslint-disable-next-line dot-notation
    const hrv = hrvResponse ? hrvResponse['hrv'] : 58;
    // eslint-disable-next-line dot-notation
    const weeklyTraining = hrvResponse ? hrvResponse['weekly_training_time_response'] : 17;
    // eslint-disable-next-line dot-notation
    const heartRate = hrvResponse ? hrvResponse['heartrate_response'] : 81;
    
    console.log('heartRate');
    console.log(heartRate);
    
    const cardData = [
        {
            title:'Recovery Score',
            total: recoveryScore,
            icon:'material-symbols:health-and-safety',
        },
        {
            title:'Average Heart Rate Variability (ms)',
            total: hrv,
            color: 'info',
            icon: 'uil:heart-rate',
        },
        {
            title: 'Weekly Training (Hours)',
            total: weeklyTraining,
            color: 'warning',
            icon: 'ic:outline-directions-bike',
        },
        {
            title: 'Heart Rate (BPM)',
            total: heartRate,
            color: 'error',
            icon: 'ant-design:heart-filled'
        }
    ];
    
    return cardData;
};

export default CardData;
