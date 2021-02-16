const mockedUserInputState = [
  {
    name: 'groceries',
    value: '',
    categories: [],
    isSuspicious: false,
    placeholder: 'energy drinks, chocolate, coffee, cigarettes, etc',
    validation: {
      required: true,
      range: [100, 400],
      type: 'number',
    },
    valid: false,
    touched: false,
  },
  {
    name: 'transportation',
    value: '',
    categories: [],
    isSuspicious: false,
    placeholder: 'gas for personal vehicles, public transportation, etc',
    validation: {
      required: true,
      range: [0, 100],
      type: 'number',
    },
    valid: false,
    touched: false,
  },
  {
    name: 'entertainment - hobbies',
    value: '',
    categories: [],
    isSuspicious: false,
    placeholder:
      'from going out for drinks to going kayaking, whatever you do for fun in your spare time',
    validation: {
      required: true,
      range: [0, 200],
      type: 'number',
    },
    valid: false,
    touched: false,
  },
  {
    name: 'fitness - sports',
    value: '',
    categories: [],
    isSuspicious: false,
    placeholder: 'gym - sports costs',
    validation: {
      required: true,
      range: [0, 150],
      type: 'number',
    },
    valid: false,
    touched: false,
  },
  {
    name: 'vacations - trips',
    value: '',
    categories: [],
    isSuspicious: false,
    placeholder: 'leisure or family-related trips or vacations',
    validation: {
      required: true,
      range: [0, 2000],
      type: 'number',
    },
    valid: false,
    touched: false,
  },
  {
    name: 'clothes - shoes',
    value: '',
    categories: [],
    isSuspicious: false,
    placeholder: 'clothes, shoes, jewlery, etc',
    validation: {
      required: true,
      range: [0, 100],
      type: 'number',
    },
    valid: false,
    touched: false,
  },
  {
    name: 'miscellaneous',
    value: '',
    categories: [],
    isSuspicious: false,
    placeholder: 'anything not fitting in any of the above categories',
    validation: {
      required: true,
      range: [0, 100],
      type: 'number',
    },
    valid: false,
    touched: false,
  },
  {
    name: 'hardware - software accessories',
    value: '',
    categories: [],
    isSuspicious: false,
    placeholder: 'tool kits, licensed apps, kitchen appliances, etc',
    validation: {
      required: true,
      range: [0, 200],
      type: 'number',
    },
    valid: false,
    touched: false,
  },
];

export default mockedUserInputState;
