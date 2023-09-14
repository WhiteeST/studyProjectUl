import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss'

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])} >
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={'/about'}>
          О сайте
        </AppLink>
      </div>

    </div >
  );
};