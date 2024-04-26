import { TouchableOpacity } from 'react-native'
import React, { memo } from 'react'

const Pressable = ({ children, onPress, style }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            style={style}
            onPress={() => { onPress && onPress() }}
        >
            {children}
        </TouchableOpacity>
    )
}

export default memo(Pressable)
