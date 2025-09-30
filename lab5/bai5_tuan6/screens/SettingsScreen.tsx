import { View, Text, Switch} from 'react-native';
import {useState } from "react";


const SettingsScreen: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>⚙️ Settings Screen</Text>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
        }}
      >
        <Text style={{marginRight: 5}}>Handsome mode:</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {isEnabled && (
        <Text>Handsome mode already!😏😏😏</Text>
      )}
    </View>
  );
}

export default SettingsScreen;