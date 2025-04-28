import validator from 'validator';

const input = 'example@email.com';

if (validator.isEmail(input)) {
  console.log('Valid email');
} else {
  console.log('Invalid email');
}