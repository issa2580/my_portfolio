
export const Email = {
    email: 'issadiop9408@gmail.com',
}

export const SocialMedia = [
    {
        name: 'Github',
        url: 'https://www.github.com/issa2580',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/issa-diop-94kimd08',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/issa496179892',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/issa_martinez_42/',
    },
    {
        name: 'CodePen',
        url: 'https://codepen.io/issa2580',
    }
]

export const NavLinks = [
    {
        name: '01. About',
        url: '/#about',
    },
    {
        name: '02. Experience',
        url: '/#jobs',
    },
    {
        name: '03. Work',
        url: '/#projects',
    },
    {
        name: '04. Contact',
        url: '/#contact',
    },
]

export const Colors = [
    {
        green: '#64ffda',
        navy: '#0a192f',
        darkNavy: '#020c1b'
    }
]

export class SrConfig {
    origin: string = 'bottom';
    distance: string = '20px';
    duration: number = 500;
    delay: number = 200;
    rotate: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 };
    opacity: number = 0;
    scale: number = 1;
    easing: string = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    mobile: boolean = true;
    reset: boolean = false;
    useDelay: string = 'always';
    viewFactor: number = 0.25;
    viewOffset: { top: number; right: number; bottom: number; left: number } = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
  
    constructor(delay: number = 200, viewFactor: number = 0.25) {
      this.delay = delay;
      this.viewFactor = viewFactor;
    }
  }

export const srConfig = new SrConfig(200, 0.25);
