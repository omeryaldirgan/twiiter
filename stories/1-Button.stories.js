import React from 'react';
import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'
import ThemeButton from '../components/theme-button'
import Slack from '../components/stack'
export default {
  title: 'Buttons'
};


export const Tweet = () => (
    <Slack column={false}>
      <ThemeButton>Tweet</ThemeButton>
      <ThemeButton full>Full Tweet</ThemeButton>
      <ThemeButton big full>Big Tweet</ThemeButton>
    </Slack>
);
export const Normal = () => (<Button>Save</Button>);
export const Menu = () => (<NavButton>Save</NavButton>);
export const Nav = () => (<Navigation selectedKey="home"/>);