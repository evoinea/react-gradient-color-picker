import React, { useRef, useState, useEffect } from "react"
import PickerContextWrapper from './context'
import { useWindowWidth } from '~App/hooks'
import Picker from "./Picker"
import './styles.css'


function ColorPicker({ value, onChange }) {
  const contRef = useRef(null)
  const width = useWindowWidth()
  const [bounds, setBounds] = useState({})

  useEffect(() => {
    setBounds(contRef?.current?.getBoundingClientRect())
  }, [width])

  return (
    <div ref={contRef}>
      <PickerContextWrapper bounds={bounds} value={value} onChange={onChange}>
        <Picker />
      </PickerContextWrapper>
    </div>
  )
}

export default ColorPicker