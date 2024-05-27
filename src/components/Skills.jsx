import { useState } from 'react';
import { DATA } from '../utils/data';
import Tabs from './Tabs';
import TabButton from './TabButton';
export default function Skills() {
  const [selectedTab, setSelectedTab] = useState();

  const handleTabSelect = (selectedButton) => {
    setSelectedTab(selectedButton);
  };

  return (
    <section>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTab === 'skills'}
              onCLick={() => {
                handleTabSelect('skills');
              }}
            >
              Skills
            </TabButton>
            <TabButton
              isSelected={selectedTab === 'education'}
              onCLick={() => {
                handleTabSelect('education');
              }}
            >
              Education
            </TabButton>
          </>
        }
      ></Tabs>
    </section>
  );
}
