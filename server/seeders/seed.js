import { db } from '../config/connection';
import { Profile } from '../models/User';
import { profileSeeds } from './profileSeeds';

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    console.log('Seeded done!!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
