import DefaultTheme from 'vitepress/theme-without-fonts';
import type { Theme } from 'vitepress';
import './style.css';
import { setupPlaybookMotion } from './motion';

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return;

    let cleanup = setupPlaybookMotion();
    router.onAfterRouteChange = () => {
      cleanup();
      cleanup = setupPlaybookMotion();
    };
  }
};

export default theme;
