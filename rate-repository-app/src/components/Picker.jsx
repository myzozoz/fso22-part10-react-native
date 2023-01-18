import { Picker } from '@react-native-picker/picker'

const SortingPicker = ({ selected, setSelected, options }) => {
  return (
    <Picker
      selectedValue={selected}
      onValueChange={(itemValue) => setSelected(itemValue)}
    >
      {options.map((o) => (
        <Picker.Item key={o.label} label={o.label} value={o.value} />
      ))}
    </Picker>
  )
}

export default SortingPicker
