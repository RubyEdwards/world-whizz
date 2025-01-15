import { StatusCodes } from 'http-status-codes';
import User from '../../mongoose-modal/user-schema';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import shortid from 'shortid';

export async function signUp(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Please provide required information.' });
  }
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

export async function signIn(req, res) {
  try {
    if (!req.body.username || !req.body.password) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Please enter your username and password.' });
    }
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user_id }, process.env.JWT_SECRET, {
          expiresIn: '30d',
        });
        const { _id, username } = user;
        res.status(StatusCodes.OK).json({ token, user: { _id, username } });
      } else {
        res.status(StatusCodes.UNAUTHORIZED).json({
          message: 'Something went wrong authenticating your details.',
        });
      }
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'User does not exist.' });
    }
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
}
