import { StatusCodes } from 'http-status-codes';
import User from '../../validator/user-schema.js';
import bcrypt from 'bcrypt';

export async function signUp(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Please provide required information.' });
  }
  const hash_password = await bcrypt.hash(password, 10);

  const userData = {
    username,
    hash_password,
  };

  const user = await User.findOne({ username });
  if (user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Username already taken.' });
  } else {
    User.create(userData).then((data, err) => {
      if (err) res.status(StatusCodes.BAD_REQUEST).json({ err });
      else
        res
          .status(StatusCodes.CREATED)
          .json({ message: 'User created Successfully.' });
    });
  }
}

export async function signIn(req, res) {
  try {
    if (!req.body.username || !req.body.password) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Please enter your username and password.' });
    }
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const { _id, username } = user;
      bcrypt.compare(req.body.password, user.hash_password, (err, result) => {
        if (err) {
          res.status(500).json({ error: 'Internal server error' });
        } else if (result) {
          res
            .status(200)
            .json({ message: 'Login successful!', user: { _id, username } });
          console.log(user.travelJournal);
        } else {
          res.status(401).json({ error: 'Invalid username or password' });
        }
      });
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'User does not exist.' });
    }
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Something went wrong authenticating your details.' });
  }
}
