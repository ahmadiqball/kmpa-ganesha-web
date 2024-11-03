import { defineType } from 'sanity';

export const colorPickerSchema = defineType({
  name: 'colorPicker',
  type: 'color',
  options: {
    colorList: ['#FFF', '#0A2429', '#D68B30'],
  },
});
