/* eslint-disable */
import { 
    greenThemeLight, greenThemeDark, bwThemeLight, bwThemeDark, blueThemeLight, blueThemeDark, redThemeLight, redThemeDark, orangeThemeLight, orangeThemeDark, purpleThemeLight, purpleThemeDark, pinkThemeLight, pinkThemeDark, yellowThemeLight, yellowThemeDark
} from '../theme/theme'

const now = new Date();
const hour = now.getHours();
const day = now.getDay();

const isDark = (hour <= 6 || hour >= 18);

const dayThemeMap = {
  0: { light: redThemeLight, dark: redThemeDark },
  1: { light: blueThemeLight, dark: blueThemeDark },
  2: { light: yellowThemeLight, dark: yellowThemeDark },
  3: { light: greenThemeLight, dark: greenThemeDark },
  4: { light: orangeThemeLight, dark: orangeThemeDark },
  5: { light: pinkThemeLight, dark: pinkThemeDark },
  6: { light: purpleThemeLight, dark: purpleThemeDark },
};

// console.log("hour ==>",hour,"day ==>",day, isDark, dayThemeMap);

export const themeData = {
    theme: isDark ? dayThemeMap[day].dark : dayThemeMap[day].light
    
}

//green, blue, red, orange, purple, pink, yellow, bw

// Choose theme from above