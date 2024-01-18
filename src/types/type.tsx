import { CSSProperties, Key, ReactNode } from "react";

export interface Organisation {
    serviceId: Key | null | undefined;
    id: Key | null | undefined;
    link: string;
    organisationsId: number;
    name: string;
    photo: string;
    web: string;
    tel1: string;
    tel2: number;
    desc: string;
    serviceName: Service[];
  }
  
  export interface OrganisationCardProps {
    photo: string;
    name: string;
    servicesCount: number;
    customStyles?: CSSProperties;
    additionalComponent?: ReactNode;
    linkTo?: string;
  }
  export interface Service {
    serviceName: any;
    serviceId: number;
    image: string;
    title: string;
    name: string;
    link: string;
    sing: string;
    pay: string;
  }[]
  
  export interface CardProps extends Service {
    desc?:string;
    sign?:string;
  }
  
export interface ServicesCardProps {
    image: string;
    name: string;
    title: string;
    desc?: string;
    sing: string;
    link:string    

  }