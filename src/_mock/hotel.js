import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample([
    'Hotel WBF Hommachi 	',
    'Crowne Plaza Hotel',
    'EnVision Hotel Boston',
    'Castello Casole Hotel'
  ]),
  company: faker.address.city() + ', ' + faker.address.country(),
  isVerified:  faker.date.past().toDateString(),
  status: sample(['active', 'banned']),
  role: faker.person.fullName(),









  
}));
