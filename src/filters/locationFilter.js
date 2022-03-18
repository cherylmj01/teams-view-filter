import React from 'react';

import { MultiSelectFilter, MultiSelectFilterLabel } from '../components/MultiSelectFilter';

const location = [
  'US',
  'Canada',
  'France',
  'Germany'
];

export const locationFilter = () => ({
  id: 'data.attributes.location',
  title: 'Location',
  fieldName: 'location',
  options: location.sort().map(value => ({
    value,
    label: value
  })),
  customStructure: {
    field: <MultiSelectFilter />,
    label: <MultiSelectFilterLabel />
  },
  condition: 'IN'
});
