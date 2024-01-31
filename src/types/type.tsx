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
    email:string;
    serviceName: Service[];
  }
  
  export interface OrganisationCardProps {
    organisationsId: number;
    photo: string;
    name: string;
    servicesCount: number;
    customStyles?: CSSProperties;
    additionalComponent?: ReactNode;
    children:ReactNode;
  }
  export interface Service {
    serviceId: number;
    image: string;
    title: string;
    name?: string;
    link: string;
    sing: string;
    pay?: string;
  }
  
  export interface CardProps extends Service {
    desc?:string;
    sign?:string;
  }
  
export interface ServicesCardProps {
    image: string;
    name?: string;
    title: string;
    desc?: string;
    sing: string;
    link:string    

  }


  
  export interface ServiceHeadingProps {
    mainLink: string;
    backButtonProps: BackButtonProps;
    breadcrumbItems: BreadcrumbItem[];
    children: React.ReactNode;
  }
  
  export interface BackButtonProps {
    customClassName?: string;
    customStyle?: React.CSSProperties;
  }
  
  export interface BreadcrumbItem {
    link: string;
    name: string;
  }
  

  
export interface AccProps  {
  title:string;
  text?:string;
  curOpen?:number | null;
  onOpen?:()=>void;
}


export interface City {
  id: number;
  name: string;
  phoneNumber?: string;
}



export interface Category {
  categoriesId:number,
  serviceId: Key | null | undefined;
  id: Key | null | undefined;
  image:string,
  title:string,
  desc:string,
  serviceName: Service[];
}[]