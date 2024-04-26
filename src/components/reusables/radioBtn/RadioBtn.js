import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import RadioGroup from 'react-native-radio-buttons-group';

const RadioBtn = () => {
    const [selectedId, setSelectedId] = useState();
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Option 1',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Option 2',
            value: 'option2'
        }
    ]), []);

  return (
    <View>
     <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
    </View>
  )
}

export default RadioBtn

const styles = StyleSheet.create({})