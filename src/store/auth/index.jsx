import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  currentAccount: {
    id: 1,
    username: 'arzueceay',
    fullName: 'Arzu Ece Aydemir',
    avatar:
      'https://arzueceaydemir.com/assets/ai-profile-pic-removebg-preview%20(1).png',
  },
  accounts: [
    {
      id: 1,
      username: 'arzueceay',
      fullName: 'Arzu Ece Aydemir',
      avatar:
        'https://arzueceaydemir.com/assets/ai-profile-pic-removebg-preview%20(1).png',
    },
    {
      id: 2,
      username: 'twitterclone',
      fullName: 'Twitter Clone',
      avatar:
        'https://arzueceaydemir.com/assets/ai-profile-pic-removebg-preview%20(1).png',
    },
  ],
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //state
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },

    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload == state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },

    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
