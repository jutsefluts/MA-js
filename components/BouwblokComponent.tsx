// components/BouwblokComponent.tsx
import dynamic from 'next/dynamic';

const MeerkeuzeBouwblok = dynamic(() => import('./bouwblokken/MeerkeuzeBouwblok'), { ssr: false });
const OpenVraagBouwblok = dynamic(() => import('./bouwblokken/OpenVraagBouwblok'), { ssr: false });
const TekstBouwblok = dynamic(() => import('./bouwblokken/TekstBouwblok'), { ssr: false });
