import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box} from '@mui/material';
import {commonStyle} from '../../Style/commonStyle';
import './CustomTabs.scss';

const TabPanel = ({children, value, index, ...other}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{p: 2}}>{children}</Box>}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

export default function CustomTabs({tabLabels, tabComponents, tabsClassname}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={tabsClassname}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        sx={{
          '.MuiTabs-indicator': {
            backgroundColor: 'var(--light-blue)',
            height: '2px',
          },
          '.MuiTabs-flexContainer': {
            gap: '8px',
          },
        }}
        aria-label="scrollable prevent tabs example">
        {tabLabels.map((label, index) => (
          <Tab
            key={label}
            label={label}
            disableRipple
            {...a11yProps(index)}
            sx={commonStyle.tabLabelStyle}
          />
        ))}
      </Tabs>
      {tabComponents.map((tabComponent, index) => (
        <TabPanel key={index} value={value} index={index}>
          {React.createElement(tabComponent.component, {...tabComponent.props})}
        </TabPanel>
      ))}
    </div>
  );
}
