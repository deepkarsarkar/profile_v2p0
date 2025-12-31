import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

import experienceData from '../../data/experienceData';

function parseMonthYear(value) {
    if (!value || value === "Present") return new Date();

    const [monthStr, year] = value.split(" ");
    const monthIndex = new Date(`${monthStr} 1, ${year}`).getMonth();

    return new Date(year, monthIndex, 1);
}

function calculateDuration(start, end) {
    const startDate = parseMonthYear(start);
    const endDate = parseMonthYear(end);

    const totalMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

    // const years = Math.floor(totalMonths / 12);
    // const months = totalMonths % 12;

    // if (years && months) return `${years} yr ${months} mo`;
    // if (years) return `${years} yr`;
    // return `${months} mo`;
    return totalMonths;
}

// const durationInMonths = calculateDuration(
//   experienceData.startYear,
//   experienceData.endYear
// );

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{ color: theme.primary }}>
                        {endYear?.trim() === "" ? `${startYear} - Present` : `${startYear} - ${endYear}`}
                        {/* &emsp;|&emsp;{`${calculateDuration(startYear, endYear)} months`} */}
                    </h6>
                    <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
                </div>
            </div>
        </Fade>
    )
}

export default ExperienceCard
