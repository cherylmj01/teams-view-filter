const options = [
  'Backoffice',
  'Production',
  'Nesting'
];



export const statusFilter = () => ({
  id: 'data.attributes.agent_attribute_2',
  title: 'Stauts',
  fieldName: 'status',
  type: 'multiValue',
  options: options.sort().map(value => ({
    value,
    label: value,
    default: false
  })),
  condition: 'IN'
});
