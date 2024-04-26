import React, { memo } from 'react'
import If from '../if'
import Pressable from '../pressable'
import { hp } from '../../../data/StyleGuides'

const SvgItem = (props) => {
    const { name, size = hp(3), style, onPress, buttonStyle } = props
    const Tag = name
    return (
        <If condition={name}>
            <If condition={onPress}
                elseComp={
                    <Tag height={size && size} width={size && size} style={style} />
                }
            >
                <Pressable style={buttonStyle} onPress={() => { onPress && onPress() }}>
                    <Tag height={size && size} width={size && size} style={style} />
                </Pressable>
            </If>
        </If >
    )
}

export default memo(SvgItem)