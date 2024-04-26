import { StyleSheet, View } from 'react-native'
import React, { memo, useState } from 'react'
import Label from '../label'
import DatePicker1 from 'react-native-date-picker'
import { COLOR, commonStyles, TEXT_STYLE, hp, wp } from '../../../data/StyleGuides'
import { Pressable } from '..'

const DatePicker = (props) => {
    const { mode } = props
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    // Function to format the date
    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if necessary
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if necessary
        const year = date.getFullYear() % 100; // Get last two digits of year

        return `${day}/${month}/${year}`;
    };

    // Function to format the time
    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    };

    // Style for time
    const timeStyle = mode === 'time' ? styles.timeLabel : null;

    return (
        <Pressable onPress={() => setOpen(true)}>
            <Label style={[styles.labelColor, timeStyle]}>{mode === 'date' ? formatDate(date) : formatTime(date)}</Label>
            <DatePicker1
                modal
                open={open}
                date={date}
                mode={mode}
                onConfirm={(selectedDate) => {
                    setOpen(false);
                    setDate(selectedDate);
                }}
                onCancel={() => setOpen(false)}
                onDateChange={(selectedDate) => setDate(selectedDate)}
                androidVariant="native" // For Android only
                locale="en_GB" // For Android only
            />
        </Pressable>
    )
}

export default memo(DatePicker)

const styles = StyleSheet.create({
    labelColor: {
        // Adjust color as needed
    },
    timeLabel: {
        ...TEXT_STYLE.text,
        fontSize:hp(6),
        width:wp(60),
        textAlign:'center'
    }
})
