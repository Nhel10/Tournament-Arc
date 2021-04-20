import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Un from '../screens/unregisterConfirmation';
const { Navigator, Screen } = createStackNavigator();

export const competitorUnregistor = () => (
    <Navigator>
      <Screen
        name='Un registor'
        component={Un}
        options={{ 
          headerShown: false
          }}
      />
  
  
    </Navigator>
  );
  
  export default competitorUnregistor ;